import { ObjectType, Field, ID, Resolver, Query, Mutation, Arg } from "type-graphql";
import {getMongoClient} from "@/libs/Database";
import { ObjectId } from "mongodb";
import { jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { checkLoginRateLimit, clearLoginRateLimit } from "../../rateLimitingLogin";
import { cookies } from "next/headers";

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

    private async getCookie(): Promise<string> {
            const cookie = await cookies();
            const idUser = cookie.get("token")?.value;
    
            if (!idUser) return "";
    
            const secretKey = process.env.JWT_SECRET;
            if (!secretKey) return "";
    
            try {
                const secret = new TextEncoder().encode(secretKey);
                const { payload } = await jwtVerify(idUser, secret);
                return payload.id as string;
            } catch {
                return "";
            }
    }

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
            // 1. Chama a nossa função externa. 
            // Se o usuário estiver bloqueado, a função lança o erro e o código cai direto no "catch" abaixo.
            const remaining = await checkLoginRateLimit(email);

            // 2. Se o código chegou aqui, o usuário está liberado para tentar logar
            const client = await getMongoClient();
            const db = client.db("artVault");
            
            const user = await db.collection("users").findOne({ email: email });

            if (!user) { 
                throw new Error(`E-mail ou Senha Incorretos. Tentativas restantes: ${remaining}`); 
            }

            const pwUser = await bcrypt.compare(password, user.password);

            if (!pwUser) { 
                throw new Error(`E-mail ou Senha Incorretos. Tentativas restantes: ${remaining}`); 
            }

            await clearLoginRateLimit(email);

            console.log("✅ Tudo certo, usuário autenticado!");

            return {
                id: user._id.toString(),
                username: user.username,
                email: user.email
            };
            
        } catch (error) {
            console.error("Erro ao validar login:", error);
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
            const client = await getMongoClient();
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

    @Query(() => User)
    async updateUser( formData: FormData,){
        try {
            const id = await this.getCookie();
    
            // Se o usuário não estiver autenticado
            if (!id) return false;

            const client = await getMongoClient();
            const db = client.db("artVault");
            
            const data = Object.fromEntries(formData.entries());

            console.log(data)
            
        } catch (error) {
            
        }


    }
}