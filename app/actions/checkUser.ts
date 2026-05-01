"use server" // Garante que a função rode no servidor

import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkUser(prevState: unknown, formData: FormData) {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        console.error("JWT_SECRET não encontrada!");
        return { error: "Erro de configuração no servidor" };
    }

    const secret = new TextEncoder().encode(secretKey);

    try {
        const token = await new SignJWT({ 
            id: "id_vinda_do_seu_banco", 
            email: "usuario@teste.com" 
        })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('2h')
        .sign(secret);

        const cookieStore = await cookies();
        cookieStore.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 2, 
            sameSite: "strict"
        });

    } catch (error) {
        console.error("Erro ao gerar token:", error);
        return { error: "Falha na autenticação" };
    }

    redirect("/Dashboard");
}