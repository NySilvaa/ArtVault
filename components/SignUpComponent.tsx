"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useActionState } from "react";

// FONTS E ESTILOS
import { leotaroFree } from '@/app/layout';
import styles from "@/public/css/signUp.module.css";

//ACTIONS
import { CreateUser }  from "@/app/actions/CreateUser"


const SingUpComponent: React.FC = () => {
  const [status, formStatus] = useActionState(CreateUser, null)
  
  return (
    <>
      <header className={styles.headerSignUp}>
        <div className={styles.registerWrapperSignUp}>
          <div className={styles.newUserSignUp}>Have Already Account?  </div>
          <Link className={styles.register} href={"/LogIn"} prefetch={false}> Log In</Link>
        </div>
      </header>

      <main className={styles.signUpMain}>
        <Link href={"/ArtVault_Branding"} className={styles.btnBackPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
          strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>

        <div className={styles.heroWrapperSignUp}>
          <Image
            width={700}
            height={700}
            className={styles.hero}
            src="/images/svgSignUp.svg" 
            alt="New ideas" 
            loading='eager'
          />
        </div>

        <form className={styles.contentWrapperSignUp} action={formStatus}>
          <div className={styles.welcome}>
            <h1 className={leotaroFree.className}>Register Now!</h1>
            <div className={styles.subtitle}>Enter your details below</div>
          </div>

          <div className={styles.signUp_wrapper}>
            <div className={`${styles.signUp} ${styles.user}`}>
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

            
          {status?.errors?.user && (
                <p style={{ color: 'red' }}>{status.errors.user[0]}</p>
            )}

            <div className={`${styles.signUp} ${styles.email}`}>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name='email'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" strokeLinecap="round" 
              strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <label htmlFor="email"></label>
            </div>

            
          {status?.errors?.email && (
                <p style={{ color: 'red' }}>{status.errors.email[0]}</p>
            )}

            <div className={`${styles.signUp} ${styles.password}`}>
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

          
          {status?.error?.password && (
                <p style={{ color: 'red' }}>{status?.errors?.password[0]}</p>
            )}

          <div className={styles.action}>
            <button type="submit" className={`${styles.signUp} signUp`}>Log-in</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default SingUpComponent