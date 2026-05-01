import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest){
    const token = request.cookies.get("token")?.value;
    const secretKey = process.env.JWT_SECRET;

    if (!secretKey)
        return NextResponse.json({ error: "Configuração do servidor incompleta" }, { status: 500 });

    const secret = new TextEncoder().encode(secretKey);

    if (request.nextUrl.pathname.startsWith("/Dashboard")) {
        if (!token)
            return NextResponse.redirect(new URL("/LogIn", request.url));

        try {
            await jwtVerify(token, secret);
            return NextResponse.next();
        } catch (error) {
            console.log(`O erro foi o seguinte: ${error}`);
            return NextResponse.redirect(new URL("/LogIn", request.url));
        }
    }
}

export const config = {
    matcher: ["/Dashboard/:path*", "/LogIn/:path*"]
};