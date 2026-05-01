"use client";

// COMPONENTS DA PG
import Verticalnav from "./VerticalNav"
import LettersInitial from "./LettersInitial";

// NEXT.JS E REACT
import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

// CSS E FONTS
import styles from "@/public/css/dashboard.module.css";
import { satoshiLight, leotaroFree } from "@/app/layout";


export default function DashboardConfig() {
 const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  // Controle para o texto (hidden, visible, exit)
  const textControls = useAnimation();
  
  // Controle exclusivo para as imagens
  const imageControls = useAnimation();
  
  let isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const runSequence = async () => {
      try {
        if (!isMounted.current) return;

        // --- FASE 1: ENTRADA DO TEXTO ---
        // O texto sobe (duração aprox. 0.8s + stagger)
        await textControls.start("visible");
        
        if (!isMounted.current) return;

        // Pequena pausa com o texto parado antes das imagens
        await new Promise(resolve => setTimeout(resolve, 200));

        // --- FASE 2: ENTRADA DAS IMAGENS ---
        // As imagens aparecem deslizando da direita (duração aprox. 0.6s)
        await imageControls.start("visible");

        if (!isMounted.current) return;

        // --- FASE 3: PAUSA PARA LEITURA ---
        // Tempo que tudo fica parado na tela
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!isMounted.current) return;

        // --- FASE 4: SAÍDA TOTAL ---
        // Ambas as animações vão para o estado "exit" (sobem)
        // Usamos Promise.all para garantir que ambas comecem juntas
        await Promise.all([
          textControls.start("exit"),
          imageControls.start("exit")
        ]);

        if (isMounted.current) {
          setIsAnimationComplete(true);
        }
      } catch (error) {
        console.error("Erro na sequência:", error);
      }
    };

    runSequence();
    return () => { 
    isMounted.current = false; 
  };
  }, [textControls, imageControls]);


  return (
    <main>
      <AnimatePresence mode="wait">
          {!isAnimationComplete ? (
            <motion.section key="intro" exit={{ opacity: 0 }}>
              <LettersInitial 
              textControls={textControls} 
              imageControls={imageControls} /> 
            </motion.section>
          ) : (
          <motion.div 
          key="content"
          initial={{ opacity: 0 }}   
          animate={{ opacity: 1 }}        
          transition={{ 
            duration: 1,                   
            ease: "easeOut"                 
          }}
          >
              <main className={styles.dashboardMain}>
            <section className={styles.dashboard_wp}>
              <div className={`${styles.dashboard_top} ${leotaroFree.className}`}><h1>Premium</h1></div>

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
                    <div className={styles.video}></div>

                  <div className={styles.desc_videoWp}>
                    <p className={`${styles.desc_video} ${satoshiLight.className}`}><b>LOREM IPSUM:</b> Lorem ipsum dolor sit amet  consectetur<span className={styles.content_color_desc}></span> adipisicing elit. consequuntur qui nulla.</p>

                      <p className={`${styles.desc_video} ${satoshiLight.className}`}><b>LOREM IPSUM:</b> Lorem ipsum nesciunt <span className={styles.content_color_desc}></span> cum  praesentium consequuntur qui nulla.</p>
                  </div>
                  </div>
                  </div>
                </section>
            </section>

          <Verticalnav />
              </main>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};