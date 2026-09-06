import "server-only";
import { SignJWT } from "jose";
import { cookies } from "next/headers";

const SESSION_DURATION_SECONDS = 60 * 60 * 2; 
const SESSION_DURATION_JWT = "2h";

export async function createUserSession(user: { id: string; email: string }) {
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT_SECRET não configurada.");
    }

    const secret = new TextEncoder().encode(secretKey);

    const token = await new SignJWT({ id: user.id, email: user.email })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(SESSION_DURATION_JWT)
        .sign(secret);

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: SESSION_DURATION_SECONDS,
        sameSite: "strict",
    });
}