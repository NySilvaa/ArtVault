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
      <header className={`${styles.headerSignUp} posAbsoluteReset d_flex`}>
        <div className={`${styles.registerWrapperSignUp} d_flexComplet`}>
          <div className={`${styles.newUserSignUp} p_relative`}>Have Already Account?  </div>
          <Link className={styles.register} href={"/LogIn"} prefetch={false}> Log In</Link>
        </div>
      </header>

      <main className={`${styles.signUpMain} w100 h100 d_flexComplet p_relative`}>
        <Link href={"/ArtVault_Branding"} className={`${styles.btnBackPage} d_inlineBlock p_absolute`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
          strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </Link>

        <div className={`${styles.heroWrapperSignUp} p_relative`}>
          <Image
            width={700}
            height={700}
            className={`${styles.hero} p_absolute`}
            src="/images/svgSignUp.svg" 
            alt="New ideas" 
            loading='eager'
          />
        </div>

        <form className={`${styles.contentWrapperSignUp} d_flex`} action={formStatus}>
          <div className={`${styles.welcome} w100`}>
            <h1 className={leotaroFree.className}>Register Now!</h1>
            <div className={`${styles.subtitle} txtWhiteSecondary`}>Enter your details below</div>
          </div>

          <div className={`${styles.signUp_wrapper} p_relative d_flex`}>
            <div className={`${styles.signUp} ${styles.user} p_relative`}>
              <input
                id="user"
                type="text"
                placeholder="User"
                name='user'
                className='w100'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <label htmlFor="user"></label>
            </div>

            
          {status?.errors?.user && (
                <p style={{ color: 'red' }}>{status.errors.user[0]}</p>
            )}

            <div className={`${styles.signUp} ${styles.email} p_relative`}>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name='email'
                className='w100'
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" strokeLinecap="round" 
              strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
              <label htmlFor="email"></label>
            </div>

            
          {status?.errors?.email && (
                <p style={{ color: 'red' }}>{status.errors.email[0]}</p>
            )}

            <div className={`${styles.signUp} ${styles.password} p_relative`}>
              <input
                id="password"
                type="password"
                placeholder="Password"
                name='password'
                className='w100'
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

          <div className={`${styles.action} d_flexComplet`}>
            <button type="submit" className={`${styles.signUp} signUp txtWhite bgGold d_inlineBlock`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user p_relative"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Sign Up</button>
          </div>
        </form>
      </main>
    </>
  );
}

export default SingUpComponent