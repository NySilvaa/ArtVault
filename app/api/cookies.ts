"use server";

import { cookies } from "next/headers";

export async function GenerateCookies(cookie: string){
    const cookieUser = await cookies()

    cookieUser.set("token", cookie, {
        httpOnly: true,
        secure: true
    });

}