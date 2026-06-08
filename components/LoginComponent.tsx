"use client";

// FONTS
import { leotaroFree } from '@/app/layout';

// REACT E NEXT
import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from "@/public/css/login.module.css"

import { checkUser } from '@/app/actions/checkUser';

export default function LoginConfig(){
 const [state, formAction] = useActionState(checkUser, null)

  return (
    <>
      <header className={styles.headerLogin}>
        <div className={`registerWrapper ${styles.registerWrapper}`}>
          <div className={`newUser ${styles.newUser}`}>New user?</div>
          <Link className={`register ${styles.register}`} href={"/SignUp"} prefetch={false}>Register</Link>
        </div>
      </header>

      <main className={styles.mainLogin}>
        <Link href={"/ArtVault_Branding"} className={`btnBackPage ${styles.btnBackPage}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
          strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>

        <div className={`heroWrapper ${styles.heroWrapperLogIn}`}>
          <Image
            width={700}
            height={700}
            className={styles.hero} 
            src="/images/svgLogin.svg" 
            alt="New ideas" 
            loading='eager'
          />
        </div>

        <form  className={styles.contentWrapperLogIn} action={formAction}>
          <div className={styles.welcome}>
            <h1 className={leotaroFree.className}>Welcome back!</h1>
            <div className={styles.subtitle}>Enter your details Below</div>
          </div>

          <div className={styles.logIn_wrapper}>
            <div className={`${styles.logIn} ${styles.user}`}>
              <input
                id="user"
                type="text"
                placeholder="User"
                name='user'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <label htmlFor="user"></label>
            </div>

            <div className={`${styles.logIn} ${styles.password}`}>
              <input
                id="password"
                type="password"
                placeholder="Password"
               name='password'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <label htmlFor="password"></label>

               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-eye-icon lucide-eye  pwEye ${styles.pwEye}`}>
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
          </div>

          <div className={styles.action}>
            <a className={styles.forgotPassword} href="#">Forgot Password?</a>
            {state?.error && <p style={{color: 'red'}}>{state.error}</p>}
            <button type="submit" className={`${styles.logIn} logIn`} name='log-in'>Log-in</button>
          </div>
        </form>
      </main>
    </>
  );
};