import { ObjectType, Field, ID, Resolver, Query, Mutation, Arg } from "type-graphql";
import clientPromise from "@/libs/Database";
import { ObjectId } from "mongodb";
import { jwtVerify } from "jose";
import bcrypt from "bcryptjs";

@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string
}

@Resolver()
export class UserResolver {
    private data: User[] = [];

    @Query(() => [User])
    async users(): Promise<User[]> {
        return this.data;
    }

    @Mutation(() => User)
    async CreateUser(
        @Arg("name") username: string,
        @Arg("email") email: string,
        @Arg("password") password: string 
    ): Promise<User> {
        const newUser: User = {
            id: Math.floor(Math.random() * 1000).toString(),
            username,
            email,
            password
        };

        this.data.push(newUser);
        return newUser;
    }

    @Query(() => User)
    async CheckUserLogin(@Arg("email") email: string, @Arg("password") password: string) {
    try {
        const client = await clientPromise;
        const db = client.db("artVault");
        
        const user = await db.collection("users").findOne({ email: email });

        if (!user) {throw new Error("E-mail ou Senha Incorretos"); }

        const pwUser = await bcrypt.compare(password, user.password);

        if (!pwUser){throw new Error("E-mail ou Senha Incorretos");}

        console.log("✅ Tudo certo, usuário autenticado!");

        return {
            id: user._id.toString(),
            username: user.username,
            email: user.email
        };
        
    } catch (error) {
        console.error("❌ Erro ao validar login:", error);
        throw new Error(error.message || "Erro interno do servidor"); 
    }
    }

    @Query(() => User)
    async getDataUser(@Arg("Id") id: string){
        try {
            // JWT E VERIFICAÇÃO DO ID SALVO 
            const secretKey = process.env.JWT_SECRET; // PEGA A CHAVE DO .ENV
            const secret = new TextEncoder().encode(secretKey); // CRIPTOGRAFA

            if (!secretKey) { // VERIFICA SE EXISTE
                console.error("JWT_SECRET não encontrada!");
                return { error: "Erro de configuração no servidor" };
            }

            // VERIFICA A CORRETA
            const { payload } = await jwtVerify(id, secret);

            const userId = payload.id as string

            // CONEXÃO NO BD
            const client = await clientPromise;
            const db = client.db("artVault");
            const user = await db.collection("users").findOne({ _id: new ObjectId(userId) });

            if (!user) {throw new Error("E-mail ou Senha Incorretos"); }

            return {
                username: user.username,
                email: user.email,
            };
        
        } catch (error: unknown) {
            console.error("❌ Erro ao validar login:", error);
            throw new Error(error.message || "Erro interno do servidor"); 
        }
    }
}