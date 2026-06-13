"use client";

// FONTS E ESTILOS
import { leotaroFree } from '@/app/layout';
import styles from "@/public/css/login.module.css"

// REACT E NEXT
import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// COMPONENTS
import { checkUser } from '@/app/actions/checkUser';

export default function LoginConfig(){
 const [state, formAction] = useActionState(checkUser, null)

  return (
    <>
      <header className={`${styles.headerLogin} w100 posAbsoluteReset d_flex`}>
        <div className={`registerWrapper d_flexComplet ${styles.registerWrapper}`}>
          <div className={`newUser p_relative ${styles.newUser}`}>New user?</div>
          <Link className={`register ${styles.register}`} href={"/SignUp"} prefetch={false}>Register</Link>
        </div>
      </header>

      <main className={`${styles.mainLogin} w100 d_flexComplet p_relative`}>
        <Link href={"/ArtVault_Branding"} className={`btnBackPage ${styles.btnBackPage} d_inlineBlock`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
          strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>

        <div className={`heroWrapper p_relative d_flex ${styles.heroWrapperLogIn}`}>
          <Image
            width={700}
            height={700}
            className={`${styles.hero} p_absolute`} 
            src="/images/svgLogin.svg" 
            alt="New ideas" 
            loading='eager'
          />
        </div>

        <form  className={styles.contentWrapperLogIn} action={formAction}>
          <div className={`${styles.welcome} w100`}>
            <h1 className={leotaroFree.className}>Welcome back!</h1>
            <div className={styles.subtitle}>Enter your details Below</div>
          </div>

          <div className={`${styles.logIn_wrapper} p_relative d_flex`}>
            <div className={`${styles.logIn} ${styles.user} p_relative`}>
              <input
                id="user"
                type="text"
                placeholder="User"
                name='user'
                className='w100'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round p_absolute"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <label htmlFor="user"></label>
            </div>

            <div className={`${styles.logIn} ${styles.password} p_relative`}>
              <input
                id="password"
                type="password"
                placeholder="Password"
               name='password'
               className='w100'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock p_absolute"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <label htmlFor="password"></label>

               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-eye-icon lucide-eye  pwEye ${styles.pwEye} p_absolute`}>
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
          </div>

          <div className={`${styles.action} d_flexComplet`}>
            <a className={`${styles.forgotPassword} txtWhiteSecondary`} href="#">Forgot Password?</a>
            {state?.error && <p style={{color: 'red'}}>{state.error}</p>}

            <button type="submit" className={`${styles.logIn} logIn txtWhite bgBlue d_inlineBlock`} name='log-in'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-key-icon lucide-user-key p_relative">
              <path d="M20 11v6"/><path d="M20 13h2"/><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"/><circle cx="10" cy="7" r="4"/><circle cx="20" cy="19" r="2"/></svg>
                Log-in</button>
          </div>
        </form>
      </main>
    </>
  );
};