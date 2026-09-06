"use server";

import { redirect } from "next/navigation";
import { createUserSession } from "./session";

const FETCH_TIMEOUT_MS = 10_000;

const LOGIN_MUTATION = `
    mutation LoginUsuario($email: String!, $password: String!) {
        checkUserLogin(email: $email, password: $password) {
            id
            email
            username
        }
    }
`;

export async function checkUser(prevState: unknown, formData: FormData) {
    const email = formData.get("user") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
        return { error: "Por favor, preencha todos os campos." };
    }

    const endpoint = process.env.GRAPHQL_ENDPOINT;
    if (!endpoint) {
        console.error("GRAPHQL_ENDPOINT não configurada!");
        return { error: "Erro de configuração no servidor." };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: LOGIN_MUTATION,
                variables: { email, password },
            }),
            cache: "no-store",
            signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            console.error("GraphQL respondeu com status:", response.status);
            return { error: "Erro de comunicação com o servidor." };
        }

        const result = await response.json();

        if (result.errors && result.errors.length > 0) {
            return { error: result.errors[0].message };
        }

        const userData = result.data?.checkUserLogin;

        if (!userData) {
            return { error: "Falha na autenticação dos dados." };
        }

        await createUserSession({ id: userData.id, email: userData.email });
    } catch (error) {
        clearTimeout(timeoutId);

        if (error instanceof Error && error.name === "AbortError") {
            console.error("Timeout ao autenticar usuário");
            return { error: "Tempo de resposta excedido. Tente novamente." };
        }

        console.error("Erro ao autenticar usuário:", error);
        return { error: "Falha na autenticação." };
    }

    redirect("/Account");
}