import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED_PREFIX = "/Account";
const LOGIN_PATH = "/LogIn";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token")?.value;
    const secretKey = process.env.JWT_SECRET;

    const isProtectedRoute = pathname.startsWith(PROTECTED_PREFIX);
    const isLoginRoute = pathname.startsWith(LOGIN_PATH);

    if (!secretKey) {
        console.error("JWT_SECRET não configurada no ambiente do middleware!");
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
        }
        return NextResponse.next();
    }

    const secret = new TextEncoder().encode(secretKey);
    let isAuthenticated = false;

    if (token) {
        try {
            await jwtVerify(token, secret);
            isAuthenticated = true;
        } catch (error) {
            console.error("Falha na verificação do JWT no middleware:", error);
        }
    }

    if (isProtectedRoute && !isAuthenticated) {
        return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }

    if (isLoginRoute && isAuthenticated) {
        return NextResponse.redirect(new URL(PROTECTED_PREFIX, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/Account/:path*", "/LogIn/:path*"],
};