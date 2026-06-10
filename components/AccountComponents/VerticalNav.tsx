"use client";

import Link from "next/link";
import styles from "@/public/css/account.module.css";
import {satoshiBold } from "@/app/layout";
import logout from "@/app/api/logout";

export default function Verticalnav(){
    async function handleLogout(){
        logout();
    }

    return (
        <aside className={styles.asideDash}>
            <nav className="menu_lateral">
                <ul className={satoshiBold.className}>
                    <li><Link href={"/Account/ArtistsFollowed"}>(01)  Artist Followed</Link></li>
                    <li><Link href={"/Account/AboutMe"}>(02)  About Me</Link></li>
                    <li><Link href={"/Account/Configuration"}>(03)  Config</Link></li>                    
                    <li><Link href={"?logout=true"} onClick={handleLogout}>(04)  Logout</Link></li>
                </ul>
            </nav>

            <Link href={"/Account/"} className={styles.btnHomeAccount}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></Link>
        </aside>
    );
}