"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logout(){
    const cookie = await cookies();

    cookie.delete("user");
    redirect("/LogIn");
}