"use client";

import Link from "next/link";
import styles from "@/public/css/dashboard.module.css";
import {satoshiBold } from "@/app/layout";
import logout from "@/app/api/logout";

export default function Verticalnav(){
    async function handleLogout(){
        logout();
    }

    return (
        <aside className={styles.asideDash}>
            <nav>
                <ul className={satoshiBold.className}>

                    <li><Link href={""}>(01)  Artist Followed</Link></li>
                    
                    <li><Link href={""}>(02)  About You</Link></li>

                    <li><Link href={""}>(03)  Config</Link></li>
                    
                    <li><Link href={"?logout=true"} onClick={handleLogout}>(04)  Logout</Link></li>
                </ul>
            </nav>
        </aside>

    );
}