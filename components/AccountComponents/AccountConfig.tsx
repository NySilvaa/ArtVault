"use client";

// CSS E FONTS E LINKS
import styles from "@/public/css/account.module.css";
import { satoshiLight } from "@/app/layout";
import Link from "next/link";

import ModalChatComponent from "./ModalChatComponent";

import { useState } from "react";

interface User{
  username: string
  email: string
}

export default function AccountConfig({ user }: {user: User}){
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (<>
        <section className={styles.dashboard_content}>
          <div className={`container ${styles.container_dash}`}>
            <div className={styles.dash_description}>
            <h2>Welcome, {user.username}</h2>

            <p className={`${styles.desc} ${satoshiLight.className}`}>We would love to hear your thoughts! Click the button below to share your review based on your experience so far. Let us know what you enjoyed and if there is anything you would like to see added or improved on the site.</p>
                <br />
            <Link href={""} className={`${styles.btnChat}`} onClick={() => setIsModalOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                  className="lucide lucide-message-circle-icon lucide-message-circle">
              <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
              </svg>  Let&apos;s Chat</Link>
          </div>{/* dash_description */}

          <div className={styles.dash_video}>
            <div className={styles.video}><video src="/images/video-account.mp4" loop autoPlay muted></video></div>

          <div className={styles.desc_videoWp}>
            <p className={`${styles.desc_video} ${satoshiLight.className}`}>Like nature blooming in vibrant colors, creativity flourishes at ArtVault. <span className={styles.content_color_desc}></span> Every stroke brings inspiration to life, transforming ideas into energetic visual universes.</p>

              <p className={`${styles.desc_video} ${satoshiLight.className}`}>Inspired by nature&apos;s fluidity, ArtVault is a space where digital art breathes. Experience a gallery where technology and organic artistic <span className={styles.content_color_desc}></span> expression seamlessly meet.</p>
          </div>
          </div>
          </div>
        </section>

        <ModalChatComponent isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>);
};