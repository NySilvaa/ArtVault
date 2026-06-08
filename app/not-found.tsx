"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/public/css/notFound.module.css";

export default function NotFound() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  return (
    <main className={styles.notFound}>
      <div className={`${styles.cont_principal}  ${isActive ? styles.cont_error_active : ''}`}>
        
        <div className={styles.cont_error}>
          <h1 className={styles.titleNotFound}>Oops</h1>
          <p className={styles.descNotFound}>
            The Page you&apos;re looking for isn&apos;t here.
          </p>
          
          <Link href="/" className={styles.linkBack}>Go Back Home</Link>
        </div>

        <div className={styles.cont_aura_1}></div>
        <div className={styles.cont_aura_2}></div>
      </div>
    </main>
  );
}