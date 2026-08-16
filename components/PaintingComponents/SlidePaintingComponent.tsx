'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { leotaroFree, satoshiLight } from '@/app/layout'

import ArtSearchModal from './ModalSearchComponent';
import styles from "@/public/css/painting.module.css";


const ASSETS = [
  {
    id: 1,
    title: 'Tramway Station',
    category: 'Architecture',
    src: "/images/artvault-bg2.jpg",
    nameAutor: "Leonardo da Vinci"
  },
  {
    id: 2,
    title: 'Minimalist House',
    category: 'Design',
    src: "/images/artvault-bg3.jpg",
    nameAutor: "Michelangelo Guima"
  },
  {
    id: 3,
    title: 'Cherry Blossoms in Bloom',
    category: 'Nature',
    src: "/images/artvault-bg4.jpg",
    nameAutor: "Vincent van Gogh"
  },
  {
    id: 4,
    title: 'Tree Lined Road',
    category: 'Travel',
    src: "/images/artvault-bg5.jpg",
    nameAutor: "Claude Monet"
  },
  {
    id: 5,
    title: 'View from the Train',
    category: 'Photography',
    src: "/images/artvault-bg6.jpg",
    nameAutor: "Ansel Adams"
  },
  {
    id: 6,
    title: 'Flowers of Spring',
    category: 'Botany',
    src: "/images/artvault-bg7.jpg",
    nameAutor: "Georgia O'Keeffe"
  },
];

const formatarTituloObra = (tituloString: string) => {
    const conectivos = [
        "of", "in", "on", "at", "by", "with", "from", "to", "for", 
        "about", "under", "over", "between", "the", "a", "an", "and", "or",
        "de", "do", "da", "dos", "das", "em", "no", "na", "nos", "nas", "com", "por", "para"
    ];
    
    const palavras = tituloString ? tituloString.trim().split(/\s+/) : [];
    
    // 1 palavra ou títulos com quantidade par (2, 4, 6 palavras...) são divididos perfeitamente ao meio
    if (palavras.length <= 2 || palavras.length % 2 === 0) {
        const meio = Math.ceil(palavras.length / 2);
        return {
            leftTittle: palavras.slice(0, meio).join(" "),
            topTittle: null,
            rightTittle: palavras.slice(meio).join(" ")
        };
    }

    // Para quantidade ímpar de palavras (3, 5...), mantemos a lógica do conectivo no topo
    let indiceConectivo = -1;
    for (let i = 1; i < palavras.length - 1; i++) {
        if (conectivos.includes(palavras[i].toLowerCase())) {
            indiceConectivo = i;
            break;
        }
    }

    if (indiceConectivo !== -1) {
        return {
            leftTittle: palavras.slice(0, indiceConectivo).join(" "),
            topTittle: palavras[indiceConectivo],
            rightTittle: palavras.slice(indiceConectivo + 1).join(" ")
        };
    }

    // Caso ímpar sem conectivo encontrado, divide o meio de forma padrão
    const meio = Math.ceil(palavras.length / 2);
    return {
        leftTittle: palavras.slice(0, meio).join(" "),
        topTittle: null,
        rightTittle: palavras.slice(meio).join(" ")
    };
};

export default function SlidePaintingComponent() {
  const [activeIndex, setActiveIndex] = useState(2)
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : ASSETS.length - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev < ASSETS.length - 1 ? prev + 1 : 0))
  }

  const obraAtual = ASSETS[activeIndex] || ASSETS[0];
  const splitTitleAuthor = obraAtual.title ? obraAtual.title.split(" ") : [];

  const nomeCompleto = splitTitleAuthor.join(" ");
  const { leftTittle, topTittle, rightTittle } = formatarTituloObra(nomeCompleto);

  return (
    <section className={`${styles.slideComponent} light-section`}>
        <div className={`${styles.container} container`}>
                <div className={styles.infoAutorTop}>
                    <Image src={"/images/profile1.jpg"} width={100} height={100} alt='Picture Profile' className={styles.autorPicture}></Image>
                    <p className={`${styles.autorName} ${satoshiLight.className}`}>{ASSETS[activeIndex].nameAutor}</p>
                </div>

            <div className={`${styles.slidePaintingWp} relative w-full min-h-[750px] flex flex-col items-center justify-center py-12  text-white select-none`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col items-center ${styles.nameTittle1}`}
                    >
                        <h3 className={`${styles.titleArtWork} tracking-tight txtGold ${leotaroFree.className}`}>
                        {leftTittle}
                        </h3>
                    </motion.div>
                </AnimatePresence>

                {topTittle && (
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col items-center ${styles.nameTittle2}`}
                    >
                        <h3 className={`${styles.titleArtWork} text-xs uppercase tracking-widest opacity-75 font-normal txtGold ${leotaroFree.className}`}>
                        {topTittle}
                        </h3>
                    </motion.div>
                </AnimatePresence>
                )}    

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                        transition={{ duration: 0.3 }}
                        className={`flex flex-col items-center ${styles.nameTittle3}`}
                    >
                        <h3 className={`${styles.titleArtWork} font-bold tracking-tight txtGold ${leotaroFree.className}`}>
                        {rightTittle}
                        </h3>
                    </motion.div>
                </AnimatePresence>

                <div className="text-center mb-8 z-10 h-16 flex flex-col items-center justify-center">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center"
                    >
                        <span className={`${styles.category} text-xs uppercase tracking-widest text-indigo-400 font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-2`}>
                        {ASSETS[activeIndex].category}
                        </span>
                    </motion.div>
                    </AnimatePresence>
                </div>

                <div className={styles.changeArtWorker}>
                    <button
                    onClick={() => setIsModalOpen(true)}
                    className={`cursor-pointer py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group ${styles.btnChangeArtworker}`}>
                    <div className={`relative overflow-hidden ${styles.elementsButton}`}>
                        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round" 
                        className="lucide lucide-palette-icon lucide-palette">
                            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0
                            1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg> Switch ArtWorker 
                        </p>

                        <p
                        className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] flex items-center gap-2"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg> Switch ArtWorker 
                        </p>
                    </div>
                    </button>

                </div>

                <div className={`${styles.slideBox} relative w-full max-w-4xl h-[360px] flex items-center justify-center [perspective:1000px]`}>
                    {ASSETS.map((item, index) => {
                    const offset = index - activeIndex
                    const isActive = index === activeIndex

                    const rotateY = offset * -25 
                    const translateX = offset * 140 
                    const translateZ = Math.abs(offset) * -180
                    const scale = isActive ? 1 : 0.82
                    const blur = Math.abs(offset) * 2.5 
                    const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25

                    return (
                        <motion.div
                        key={item.id}
                        onClick={() => setActiveIndex(index)}
                        className="absolute cursor-pointer rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        style={{
                            width: '350px',
                            height: '450px',
                            transformStyle: 'preserve-3d',
                        }}
                        animate={{
                            x: translateX,
                            z: translateZ,
                            rotateY: rotateY,
                            scale: scale,
                            opacity: opacity,
                            filter: `blur(${blur}px)`,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 240,
                            damping: 24,
                        }}
                        whileHover={isActive ? { scale: 1.03 } : { scale: scale + 0.04 }}
                        >
                        <Image
                            src={item.src}
                            width={300}
                            height={300}
                            alt={item.title}
                            className="w-full h-full object-cover pointer-events-none"
                        />
                        <div
                            className={`absolute inset-0 transition-opacity duration-300 ${
                            isActive
                                ? 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                                : 'bg-black/40'
                            }`}
                        />
                        </motion.div>
                    )
                    })}
                </div>

                <div className={`${styles.btnSlide} flex items-center gap-6 mt-10 z-10`}>
                    <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bgGold border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-all shadow-lg active:scale-95 cursor-pointer"
                    aria-label="Slide anterior"
                    >
                    <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full shadow-lg">
                    {ASSETS.map((_, idx) => (
                        <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 border-none p-0 cursor-pointer ${
                            activeIndex === idx
                            ? 'w-6 bg-indigo-500'
                            : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                        }`}
                        aria-label={`Ir para o slide ${idx + 1}`}
                        />
                    ))}
                    </div>

                    <button
                    onClick={handleNext}
                    className="p-3 rounded-full bgGold border border-neutral-800 text-neutral-300 hover:text-white 
                    hover:border-neutral-700 hover:bg-neutral-800 transition-all shadow-lg active:scale-95 cursor-pointer"
                    aria-label="Próximo slide"
                    >
                    <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
        <ArtSearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}