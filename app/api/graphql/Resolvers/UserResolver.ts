import { ObjectType, Field, ID, Resolver, Mutation, Arg, Query } from "type-graphql";
import { GraphQLError } from "graphql";
import { getMongoClient } from "@/libs/Database";
import { ObjectId } from "mongodb";
import { jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { checkLoginRateLimit, clearLoginRateLimit, recordFailedLogin } from "../../rateLimitingLogin";
import { cookies } from "next/headers";
import { getRequiredUserId } from "../auth";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field({ nullable: true })
    biography?: string;

    @Field({ nullable: true })
    profile_photo?: string;

    @Field(() => [String], { nullable: true })
    complementary_img?: string[];
}

function graphqlError(message: string, code: string, status = 400) {
    return new GraphQLError(message, {
        extensions: { code, http: { status }, userMessage: message },
    });
}

    const MAX_BASE64_SIZE_BYTES = 2 * 1024 * 1024; // ~2MB por imagem, já comprimida no client
    const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];

    function isValidBase64Image(value: string): boolean {
        const match = value.match(/^data:(image\/(jpeg|png|webp));base64,(.+)$/);
        if (!match) return false;

        const [, mimeType, , base64Data] = match;
        if (!ALLOWED_MIME_TYPES.includes(mimeType)) return false;

        // Tamanho aproximado do binário a partir do comprimento da string base64
        const approxSizeBytes = (base64Data.length * 3) / 4;
        return approxSizeBytes <= MAX_BASE64_SIZE_BYTES;
    }

@Resolver()
export class UserResolver {
    private async getAuthenticatedUserId(): Promise<string> {
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            throw graphqlError("Usuário não autenticado.", "UNAUTHENTICATED", 401);
        }

        const secretKey = process.env.JWT_SECRET;
        if (!secretKey) {
            console.error("JWT_SECRET não configurada!");
            throw graphqlError("Erro de configuração no servidor.", "INTERNAL_SERVER_ERROR", 500);
        }

        try {
            const secret = new TextEncoder().encode(secretKey);
            const { payload } = await jwtVerify(token, secret);
            return payload.id as string;
        } catch {
            throw graphqlError("Sessão inválida ou expirada.", "UNAUTHENTICATED", 401);
        }
    }

    @Mutation(() => User)
    async createUser(
        @Arg("username") username: string,
        @Arg("email") email: string,
        @Arg("password") password: string
    )  : Promise<User> {
        try {
            const client = await getMongoClient();
            const db = client.db("artVault");

            const emailExists = await db.collection("users").findOne({ email });
            if (emailExists) {
                throw graphqlError("E-mail já cadastrado.", "BAD_USER_INPUT", 409);
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const insertResult = await db.collection("users").insertOne({
                username,
                email,
                password: hashedPassword,
                createdAt: new Date(),
                artists_following: [],
                complementary_img: [],
                profile_photo: "",
            });

            return {
                id: insertResult.insertedId.toString(),
                username,
                email,
                biography: "",
                profile_photo: "",
                complementary_img: [],
            };
        } catch (error) {
            if (error instanceof GraphQLError) throw error;

            // Defesa real contra a race condition: índice único de "email" no Mongo
            // gera esse código de erro em caso de inserção duplicada concorrente.
            if ((error as any)?.code === 11000) {
                throw graphqlError("E-mail já cadastrado.", "BAD_USER_INPUT", 409);
            }

            console.error("Erro ao criar usuário:", error);
            throw graphqlError("Falha ao salvar no banco.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Mutation(() => User)
    async checkUserLogin(
        @Arg("email") email: string,
        @Arg("password") password: string
    ): Promise<User> {
        const remaining = await checkLoginRateLimit(email);

        try {
            const client = await getMongoClient();
            const db = client.db("artVault");
            const user = await db.collection("users").findOne({ email: email.trim().toLowerCase() });

           const invalidCredentialsMsg = `E-mail ou senha incorretos. Tentativas restantes: ${remaining}`;

            if (!user) {
                await recordFailedLogin(email);
                throw graphqlError(invalidCredentialsMsg, "BAD_USER_INPUT", 401);
            }

            const passwordMatches = await bcrypt.compare(password, user.password);

            if (!passwordMatches) {
                await recordFailedLogin(email); 
                throw graphqlError(invalidCredentialsMsg, "BAD_USER_INPUT", 401);
            }

            await clearLoginRateLimit(email);

            return {
                id: user._id.toString(),
                username: user.username,
                email: user.email,
            };
        } catch (error) {
            if (error instanceof GraphQLError) throw error;

            console.error("Erro ao validar login:", error);
            throw graphqlError("Erro interno do servidor.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Query(() => User)
    async getDataUser(): Promise<User> {
        const userId = await this.getAuthenticatedUserId();

        try {
            const client = await getMongoClient();
            const db = client.db("artVault");
            const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });

            if (!user) {
                throw graphqlError("Usuário não encontrado.", "NOT_FOUND", 404);
            }

            return {
                id: user._id.toString(),
                username: user.username,
                email: user.email,
                biography: user.biography || "",
                profile_photo: user.profile_photo,
                complementary_img: user.complementary_img || [],
            };
        } catch (error) {
            if (error instanceof GraphQLError) throw error;

            console.error("Erro ao buscar dados do usuário:", error);
            throw graphqlError("Erro interno do servidor.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Mutation(() => User)
    async updateUser(
        @Arg("username", { nullable: true }) username?: string,
        @Arg("email", { nullable: true }) email?: string,
        @Arg("biography", { nullable: true }) biography?: string
    ): Promise<User> {
        const userId = await this.getAuthenticatedUserId();

        const updateData: Record<string, string> = {};
        if (username) updateData.username = username;
        if (email) updateData.email = email;
        if (biography !== undefined) updateData.biography = biography;

        if (Object.keys(updateData).length === 0) {
            throw graphqlError("Nenhum dado informado para atualização.", "BAD_USER_INPUT", 400);
        }

        try {
            const client = await getMongoClient();
            const db = client.db("artVault");

            const result = await db.collection("users").findOneAndUpdate(
                { _id: new ObjectId(userId) },
                { $set: updateData },
                { returnDocument: "after" }
            );

            if (!result) {
                throw graphqlError("Usuário não encontrado.", "NOT_FOUND", 404);
            }

            return {
                id: result._id.toString(),
                username: result.username,
                email: result.email,
                biography: result.biography || "",
            };
        } catch (error) {
            if (error instanceof GraphQLError) throw error;

            console.error("Erro ao atualizar perfil:", error);
            throw graphqlError("Erro ao atualizar dados do usuário.", "INTERNAL_SERVER_ERROR", 500);
        }
    }

    @Mutation(() => User)
    async updateUserPhotos(
        @Arg("photos", () => [String]) photos: string[]
    ): Promise<User> {
        const userId = await getRequiredUserId();

        if (!photos || photos.length === 0) {
            throw graphqlError("Nenhuma foto foi enviada.", "BAD_USER_INPUT", 400);
        }

        if (photos.length > 3) {
            throw graphqlError(
                "Máximo de 3 fotos permitido (1 principal + 2 complementares).",
                "BAD_USER_INPUT",
                400
            );
        }

        const invalidImage = photos.find((img) => !isValidBase64Image(img));
        if (invalidImage) {
            throw graphqlError(
                "Uma ou mais imagens são inválidas ou excedem o tamanho máximo permitido.",
                "BAD_USER_INPUT",
                400
            );
        }

        const profilePhoto = photos[0];
        const complementaryImgs = photos.slice(1, 3);

        try {
            const client = await getMongoClient();
            const db = client.db("artVault");
            
            const result = await db.collection("users").findOneAndUpdate(
                { _id: new ObjectId(userId) },
                {
                    $set: {
                        profile_photo: profilePhoto,
                        complementary_img: complementaryImgs,
                    },
                },
                { returnDocument: "after" }
            );

            if (!result) {
                throw graphqlError("Usuário não encontrado.", "NOT_FOUND", 404);
            }

            return {
                id: result._id.toString(),
                username: result.username,
                email: result.email,
                biography: result.biography || "",
                profile_photo: result.profile_photo,
                complementary_img: result.complementary_img || [],
            };
        } catch (error) {
            if (error instanceof GraphQLError) throw error;

            console.error("Erro ao atualizar fotos:", error);
            throw graphqlError("Erro ao atualizar as fotos do usuário.", "INTERNAL_SERVER_ERROR", 500);
        }
    }
}