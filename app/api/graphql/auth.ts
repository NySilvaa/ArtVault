// lib/graphql/auth.ts
import "server-only";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { graphqlError } from "./errors";

export async function getOptionalUserId(): Promise<string | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        console.error("JWT_SECRET não configurada!");
        return null;
    }

    try {
        const secret = new TextEncoder().encode(secretKey);
        const { payload } = await jwtVerify(token, secret);
        return payload.id as string;
    } catch {
        return null;
    }
}

export async function getRequiredUserId(): Promise<string> {
    const userId = await getOptionalUserId();
    if (!userId) {
        throw graphqlError("Usuário não autenticado.", "UNAUTHENTICATED", 401);
    }
    return userId;
}