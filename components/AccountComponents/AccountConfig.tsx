"use client";

// CSS E FONTS E LINKS
import styles from "@/public/css/account.module.css";
import { satoshiLight } from "@/app/layout";
import Link from "next/link";

export default function AccountConfig() {
  return (
        <section className={styles.dashboard_content}>
          <div className={`container ${styles.container_dash}`}>
            <div className={styles.dash_description}>
            <h2>Productions Partners</h2>

            <p className={`${styles.desc} ${satoshiLight.className}`}>Full sorvicc croativc açonoy that provides a one stop sñcp fcr all social media content needs.</p>

            <span className={satoshiLight.className}>Feeding a hungry audience?</span>
                <br />
            <Link href={""} className={styles.btnChat}>Let&apos;s Chat</Link>
          </div>{/* dash_description */}

          <div className={styles.dash_video}>
            <div className={styles.video}><video src="/images/video-account.mp4" loop autoPlay muted></video></div>

          <div className={styles.desc_videoWp}>
            <p className={`${styles.desc_video} ${satoshiLight.className}`}><b>LOREM IPSUM:</b> Lorem ipsum dolor sit amet  consectetur<span className={styles.content_color_desc}></span> adipisicing elit. consequuntur qui nulla.</p>

              <p className={`${styles.desc_video} ${satoshiLight.className}`}><b>LOREM IPSUM:</b> Lorem ipsum nesciunt <span className={styles.content_color_desc}></span> cum  praesentium consequuntur qui nulla.</p>
          </div>
          </div>
          </div>
        </section>
  );
};