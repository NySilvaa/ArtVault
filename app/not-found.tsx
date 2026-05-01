"use client";

import Link from "next/link";

export default function NotFound(){
    return (<>
        <p>Essa página não existe</p>
        <Link href={"/"}>Home</Link>
    </>);
}