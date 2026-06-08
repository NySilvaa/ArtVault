"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from "@/public/css/dashboard.module.css";

interface LettersInitialProps {
  textControls: any;
  imageControls: any;
}

export default function LettersInitial({ textControls, imageControls }: LettersInitialProps) {
  
  const containerVariants = {
    visible: { transition: { staggerChildren: 0.15 } },
    exit: { transition: { staggerChildren: 0 } } 
  };

  const textItemVariants = {
    hidden: { y: "110%", opacity: 1 },
    visible: { 
      y: "0%", 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } 
    },
    exit: { 
      y: "-110%", 
      transition: { duration: 0.6, ease: [0.45, 0, 0.55, 1] } 
    }
  };

  // Variants para o efeito de "Empurrar"
  const imageVariants = {
    hidden: { 
      opacity: 0,
      width: 0,      // Começa com largura zero para o texto estar colado
      marginLeft: 0,
      marginRight: 0
    },
    visible: { 
      opacity: 1, 
      width: 170,    // Expande para a largura da imagem, empurrando o texto
      marginLeft: 15, // Adiciona o gap dinamicamente
      marginRight: 15,
      transition: { 
        width: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
        opacity: { duration: 0.4 }
      }
    },
    exit: {
      y: "-110%",
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className={`${styles.lettersInitial} lettersInital`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={textControls}
      >
        {/* Linha 1: Playful */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 variants={textItemVariants} style={{ display: 'flex', alignItems: 'center' }}>
            <span>Play</span>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
            >
              <Image width={170} height={170} alt="img" src="/images/artvault-bg2.jpg" style={{ borderRadius: '8px', minWidth: '170px' }} priority />
            </motion.div>
            <span>ful</span>
          </motion.h1>
        </div>

        {/* Linha 2: People First */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 variants={textItemVariants} style={{ display: 'flex', alignItems: 'center' }}>
            <span>People</span>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
            >
              <Image width={170} height={170} alt="img" src="/images/artvault-bg3.jpg" style={{ borderRadius: '8px', minWidth: '170px' }} priority />
            </motion.div>
            <span>first</span>
          </motion.h1>
        </div>

        {/* Linha 3: Premium */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1 variants={textItemVariants} style={{ display: 'flex', alignItems: 'center' }}>
            <span>Premium</span>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
              style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
            >
              {/* Note: Aqui o marginLeft da variante imageVariants cria o espaço após a palavra */}
              <Image width={170} height={170} alt="img" src="/images/artvault-bg4.jpg" style={{ borderRadius: '8px', minWidth: '170px' }} priority />
            </motion.div>
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}