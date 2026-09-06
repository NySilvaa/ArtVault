"use client";

// IMPORTAÇÕES DO NEXT
import Link from "next/link";

// ESTILIZAÇÕES
import styles from "@/public/css/forgotPassword.module.css";

import { useActionState } from "react";
import { requestPasswordResetAction } from "@/app/actions/passwordReset";

export default function ForgotPasswordComponent(){
     const [state, formAction, isPending] = useActionState(requestPasswordResetAction, null);

    return (<>
        <section className={styles.forgotPw}>
            <div className={styles.container}>
                <div className={styles.form_container}>
                    <h2 className={styles.logo_container}>Forgot Password</h2>

                    {state?.message && <p>{state.message}</p>}
                    {state?.error && <p role="alert">{state.error}</p>}

                    <form className={styles.form} action={formAction}>
                        <div className={styles.form_group}>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter your email" />
                        </div>

                        <button className={styles.form_submit_btn} type="submit" disabled={isPending}>{isPending ? "Sending..." : "Send Email"}</button>
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