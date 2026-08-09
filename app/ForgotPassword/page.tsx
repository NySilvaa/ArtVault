// IMPORTAÇÕES DO NEXT
import Link from "next/link";
import { Metadata } from "next";

// ESTILIZAÇÕES
import styles from "@/public/css/forgotPassword.module.css";

export const metadata: Metadata = {
  title: "Forgot Password - Art Vault",
  description: "Forgot Password - Art Vault",
};

export default function ForgotPasswordPage(){
    return (<>
        <section className={styles.forgotPw}>
            <div className={styles.container}>
                <div className={styles.form_container}>
                    <h2 className={styles.logo_container}>Forgot Password</h2>

                    <form className={styles.form}>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" />
                        </div>

                        <button className={styles.form_submit_btn} type="submit">Send Email</button>
                    </form>

                    <p className={styles.signup_link}>
                        Don&apos;t have an account? 
                        <Link href="/SignUp" className={`${styles.signup_link} ${styles.link}`}> Sign up now</Link>
                    </p>
                </div>
            </div>
        </section>
    </>)
}