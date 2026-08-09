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
import BtnEyePwComponent from './BtnEyePwComponent';

interface LoginProps {
  email: string; // Espera uma string pura
}

export default function LoginConfig({email}: LoginProps){
 const [state, formAction] = useActionState(checkUser, null)

  return (
    <>
      <header className={`${styles.headerLogin} w100 posAbsoluteReset d_flex`}>
        <div className={`registerWrapper d_flexComplet ${styles.registerWrapper}`}>
          <div className={`newUser p_relative ${styles.newUser}`}>New user?</div>
          <Link className={`register ${styles.register}`} href={"/SignUp"} prefetch={false}>Register</Link>
        </div>
      </header>

      {state?.error && (
        <section className={styles.box_msgWp}>
        <div className={styles.box_msg}>
        <svg className={styles.wave} viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
            fillOpacity="1"
          ></path>
        </svg>

        <div className={styles.icon_container}>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#9b2424" strokeWidth="2" 
          strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </div>
        <div className={styles.message_text_container}>
          <p className={styles.message_text}>Error</p>
          {state?.error && <p className={styles.sub_text}>{state.error}</p>}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15 15"
          strokeWidth="0"
          fill="none"
          stroke="currentColor"
          className={styles.cross_icon}
        >
          <path
            fill="currentColor"
            d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>{/* box_msg */}
        </section>
      )}

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
                type="email"
                placeholder="E-mail"
                name='user'
                className='w100'
                defaultValue={email}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round p_absolute"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <label htmlFor="user"></label>
            </div>

            <div className={`${styles.logIn} ${styles.password} p_relative`}>
              <BtnEyePwComponent pageStyle={styles.pwEye} />
            </div>
          </div>

          <div className={`${styles.action} d_flexComplet`}>
            <Link className={`${styles.forgotPassword} txtWhiteSecondary`} href="/ForgotPassword">Forgot Password?</Link>

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