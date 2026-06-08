"use client";

import { leotaroFree, satoshiLight } from "@/app/layout";
import styles from "@/public/css/art-vault-bd.module.css";

import Link from "next/link";

export default function FormSectionArtBd(){
    return (
        <div className={styles.card_signUp_section}>
            <div className={styles.contentSection}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>

                <h3 className={leotaroFree.className}>Unlock the Inner Circle of Fine Art</h3>
                <p className={`${styles.para} ${satoshiLight.className}`}>
                Art is better when you&apos;re on the inside. By creating an account with us, 
                you aren&apos;t just logging in—you&apos;re stepping into a curated world of inspiration and privilege.
                </p>

                <Link href={"/LogIn"} className={styles.buttonForm_section}>
                    <span className={styles.button__iconWrapper}>
                        <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.button__iconSvg}
                        width="10"
                        >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                        </svg>

                        <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="10"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${styles.button__iconSvg} ${styles.button__iconSvgCopy}`}
                        >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </span> Sign Up
                </Link>
            </div>
        </div>
    );
}