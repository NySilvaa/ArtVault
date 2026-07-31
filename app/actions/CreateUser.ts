"use server"

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import z from "zod";
import { cookies } from "next/headers";
import clientPromise from "@/libs/Database";
import { NextRequest } from "next/server";

export async function CreateUser(prevState: any, formData: FormData, req: NextRequest) {
    const data = Object.fromEntries(formData.entries());
    const createUserSchema = z.object({
        user: z.string().min(3, "Usuário Inválido. Tente Novamente"),
        email: z.email("Email Incorreto. Tente Novamente"),
        password: z.string().min(8, "Senha muito curta. Mínimo 8 caracteres")
    });

    const result = createUserSchema.safeParse(data);
    if (!result.success){
        return z.treeifyError(result.error).properties
    }

    let success = false;

    try {
        const client = await clientPromise;
        const db = client.db("artVault");

        const hashedPassword = await bcrypt.hash(result.data.password, 10);

        const emailPost = result.data.email

       const emailExists = await db.collection("users").findOne({ email: emailPost});
        if (emailExists) return {error: "E-mail Já Cadastrado"};

        await db.collection("users").insertOne({
            username: result.data.user,
            email: result.data.email,
            password: hashedPassword,
            createdAt: new Date(),
            artists_following: [],
            complementary_imgs: [],
            profile_photo: ""
        });

        success = true;
    } catch (e) {
        console.error(e);
        return { error: "Falha ao salvar no banco" };
    }

    if (success) {
        const cookie = await cookies();

        cookie.set("emailSignUp", result.data.email, {
            httpOnly: true,
            secure: true,
            maxAge: 30
        });

        redirect("/LogIn");
    }
}