"use server"

import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkUser(prevState: unknown, formData: FormData) {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        console.error("JWT_SECRET não encontrada!");
        return { error: "Erro de configuração no servidor" };
    }

    const email = formData.get('user') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: "Por favor, preencha todos os campos." };
    }

    const GRAPHQL_QUERY = `
        query LoginUsuario($email: String!, $password: String!) {
        CheckUserLogin(email: $email, password: $password) {
            id
            email
            username
        }
        }
    `;

    const secret = new TextEncoder().encode(secretKey);

    try {
        const response = await fetch('http://localhost:3000/api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: GRAPHQL_QUERY,
            variables: {
            email: email,
            password: password,
            },
        }),
        cache: 'no-store',
        });

        const result = await response.json();

        if (result.errors && result.errors.length > 0) {
        return { error: result.errors[0].message };
        }

        const userData = result.data?.CheckUserLogin;
        
        if (!userData) {
        return { error: "Falha na autenticação dos dados." };
        }

        console.log("Usuário autenticado com sucesso no servidor:", userData.username);

        const token = await new SignJWT({ 
            id: userData.id, 
            email: userData.email 
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

    redirect("/Account");
}