"use server"

import { redirect } from "next/navigation";
import clientPromise from "@/libs/Database";
import bcrypt from "bcryptjs";
import z from "zod";
import { cookies } from "next/headers";

export async function CreateUser(prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData.entries());
    const createUserSchema = z.object({
        user: z.string().min(3),
        email: z.string().email(),
        password: z.string().min(6)
    });

    const result = createUserSchema.safeParse(data);
    if (!result.success) return { errors: result.error.flatten().fieldErrors };

    let success = false;

    try {
        const client = await clientPromise;
        const db = client.db("artVault");

        const hashedPassword = await bcrypt.hash(result.data.password, 10);

        await db.collection("users").insertOne({
            username: result.data.user,
            email: result.data.email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        success = true;
    } catch (e) {
        console.error(e);
        return { error: "Falha ao salvar no banco" };
    }

    if (success) {
        const cookie = await cookies()

        cookie.set("emailSignUp", result.data.email, {
            httpOnly: true,
            secure: true,
            maxAge: 30
        });

        redirect("/LogIn");
    }
}