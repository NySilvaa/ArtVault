"use client";

// COMPONENTS
import Verticalnav from "@/components/AccountComponents/VerticalNav"
import LettersInitial from "@/components/AccountComponents/LettersInitial";

// FONTS E ESTILOS
import { leotaroFree } from "../layout";
import styles from "@/public/css/account.module.css";

// NEXT.JS E REACT
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { usePathname } from 'next/navigation';

// FRAMER MOTION
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const pathname = usePathname();

    const getTitle = () => {
        switch (pathname) {
            case '/Account/ArtistsFollowed':
                return 'Artists';

            case '/Account/AboutMe':
                return 'About Me';

            case '/Account/Configuration':
                return 'Configuration';

            default:
                return 'Premium'; 
        }
  };

   const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    const runSequence = async () => {
      try {
        if (!isMounted.current) return;

        await textControls.start("visible");
        
        if (!isMounted.current) return;

        await new Promise(resolve => setTimeout(resolve, 200));

        await imageControls.start("visible");

        if (!isMounted.current) return;

        await new Promise(resolve => setTimeout(resolve, 1500));

        if (!isMounted.current) return;

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

  return (<>
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
          }}>

        <main className={styles.dashboardMain}>
                <section className={styles.dashboard_wp}>
              <div className={`${styles.dashboard_top} ${leotaroFree.className}`}><h1>{getTitle()}</h1></div>
                    {children}
              </section>

              <Verticalnav />
        </main>
             </motion.div>
        )}
      </AnimatePresence>
  </>)
}