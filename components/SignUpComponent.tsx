"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useActionState, useState } from "react";

// FONTS E ESTILOS
import { leotaroFree } from '@/app/layout';
import styles from "@/public/css/signUp.module.css";

//ACTIONS
import { CreateUser } from "@/app/actions/CreateUser"

const SingUpComponent: React.FC = () => {
  const [status, formStatus] = useActionState(CreateUser, null)
  const [showModal, setShowModal] = useState(false);
  
  // Estado para rastrear o valor da senha em tempo real
  const [password, setPassword] = useState("");

  // Validação geral de todos os requisitos
  const isPasswordValid = 
    password.length >= 8 && 
    /[A-Z]/.test(password) && 
    /[a-z]/.test(password) && 
    /[^A-Za-z0-9]/.test(password);
  
  return (
    <>
      <header className={`${styles.headerSignUp} posAbsoluteReset d_flex`}>
        <div className={`${styles.registerWrapperSignUp} d_flexComplet`}>
          <div className={`${styles.newUserSignUp} p_relative`}>Have Already Account?  </div>
          <Link className={styles.register} href={"/LogIn"} prefetch={false}> Log In</Link>
        </div>
      </header>

      {status?.password && (
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
          {status?.password.errors[0] && <p className={styles.sub_text}>{status.password.errors[0]}</p>}
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

      {status?.email && (
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
          {status?.email.errors[0] && <p className={styles.sub_text}>{status.email.errors[0]}</p>}
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

       {status?.user&& (
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
          {status?.user.errors[0] && <p className={styles.sub_text}>{status?.user.errors[0]}</p>}
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

            <div className={`${styles.signUp} ${styles.password} p_relative`}>
            {showModal && (
              <div className={styles.modalPw} id='modalPw' style={{ opacity: 1, transition: "1s" }}>
                {/* O container principal (error_alert) muda a cor de borda/fundo sutilmente se válido */}
                <div 
                  className={styles.error_alert} 
                  style={{ borderColor: isPasswordValid ? "#10B981" : undefined }}
                >
                  <div className={styles.flex}>
                    <div className={styles.flex_shrink_0}>
                      <svg 
                        aria-hidden="true" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={styles.error_svg}
                        style={{ color: isPasswordValid ? "#10B981" : undefined }}
                      >
                        <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fillRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className={styles.error_prompt_container}>
                      {/* Título com cor dinâmica */}
                      <p 
                        className={styles.error_prompt_heading} 
                        style={{ color: isPasswordValid ? "#10B981" : undefined }}
                      >
                        {isPasswordValid
                          ? "Your password is strong enough!"
                          : "Your password isn't strong enough"}
                      </p>
                      <div className={styles.error_prompt_wrap}>
                        <ul className={styles.error_prompt_list} role="list">
                          
                          <li style={{ color: password.length >= 8 ? "#10B981" : "#EF4444" }}>
                            {password.length >= 8 ? "✓" : "✕"} At least 8 characters
                          </li>

                          <li style={{ color: /[^A-Za-z0-9]/.test(password) ? "#10B981" : "#EF4444" }}>
                            {/[^A-Za-z0-9]/.test(password) ? "✓" : "✕"} At Least One Special Character (Ex.: @#$)
                          </li>

                          <li style={{ color: /[A-Z]/.test(password) ? "#10B981" : "#EF4444" }}>
                            {/[A-Z]/.test(password) ? "✓" : "✕"} At Least One Capital Letter
                          </li>

                          <li style={{ color: /[a-z]/.test(password) ? "#10B981" : "#EF4444" }}>
                            {/[a-z]/.test(password) ? "✓" : "✕"} At Least One Lowercase Letter
                          </li>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

              <input
                id="password"
                type="password"
                placeholder="Password"
                name='password'
                className='w100'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setShowModal(true)}
                onBlur={() => setTimeout(() => setShowModal(false), 200)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
              stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <label htmlFor="password"></label>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-eye-icon lucide-eye  pwEye ${styles.pwEye}`}>
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
                 
          </div>

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

export default SingUpComponent;