"use client"

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

import styles from "@/public/css/painting.module.css";
import { leotaroFree, satoshiBold, satoshiLight } from "@/app/layout";
import ScrollRevealText from "./ScrollRevealComponent";
import GalleryTransition from "./GalleryTransitionComponent";
import SlidePaintingComponent from "./SlidePaintingComponent";


export default function PaintingsComponent(){
    const { scrollY } = useScroll();

    const y = useTransform(scrollY, [240, 800], [40, 380]);
    const rotateY = useTransform(scrollY, [240, 800], [0, 180]);
    const grayscale = useTransform(scrollY, [240, 800], ['100%', '0%']);

    return (<>
       <main className={styles.painting}>
            <section className={styles.bgMainPainting}>
                    <div className={"container"}>
                    <nav className={styles.navigation}>
                        <Link href={"/"} className={styles.logo}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
                        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></Link>

                    <div className={styles.btnInteractive}>
                            <ul  className={styles.itemsMenu_btnInteractive}>
                            <li><Link href={"/Painters"}>Painters</Link></li>
                            <li><Link href={"/Paintings"}>Paintings</Link></li>
                            <li><Link href={"/AboutUs"}>About Us</Link></li>
                            </ul>
                    </div>{/* btnInteractive */}

                    <Link href={"/LogIn"} className={`loginAcessBtn bgGold txtWhite txtCenter`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></Link>
                    </nav>

                        <div className={styles.txtPainting1}>
                            <p className={`txtWhiteSecondary ${satoshiLight.className}`}>Every great piece begins with a single, deliberate line. 
                                This space honors the dedication behind the craft of drawing, elevating raw sketches and vibrant illustrations into a
                                 seamless digital exhibition for you to deeply explore.</p>
                        </div>

                        <h3 className={`${styles.titleTopPainting} txtWhiteSecondary ${leotaroFree.className}`}>Art Vault</h3>
                        <h1 className={`${styles.tittleTopMain} txtGold ${leotaroFree.className}`}> <span>{'{'}</span>Prism<span>{'}'}</span></h1>

                        <div className={styles.lines}>
                            <div className={styles.line1}></div>
                            <div className={styles.line2}></div>
                            <div className={styles.line3}></div>
                            <div className={styles.line4}></div>
                            <div className={styles.line5}></div>
                        </div>

                        <div className={styles.wordsComplementaries}>
                            <span className={styles.word1}>Pallete</span>
                            <span className={styles.word2}>Render</span>
                            <span className={styles.word3}>Illustration</span>
                            <span className={styles.word4}>Sketch</span>
                            <span className={styles.word5}>Motion</span>
                        </div>

                        <div className={styles.txtPainting2}>
                            <p className={`txtWhiteSecondary ${satoshiLight.className}`}>Immerse yourself in a fluid browsing experience designed to highlight 
                                every brushstroke and shading technique. Uncover the underlying narratives and intricate details that give
                                 each character and landscape its unique, undeniable soul.</p>
                        </div>
                        <div style={{"clear": "both"}}></div>
                    </div>{/* container */}
                    
                    <div className={styles.imgsBgMainPainting}>
                        <Image className={styles.img1} src={"/images/artvault-bg2.jpg"} width={150} height={120} alt="Imagem 1"></Image>
                        <Image className={styles.img2} src={"/images/artvault-bg3.jpg"} width={180} height={150} alt="Imagem 2"></Image>
                        <div className="sticky top-20 flex justify-center mt-20">   
                        <motion.div 
                        style={{y, rotateY, filter: grayscale}}
                        className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl relative  border-white">
                                <Image className="img3" src={"/images/artvault-bg4.jpg"} width={600} height={600} alt="Imagem 3"></Image>
                        </motion.div>
                        </div>
                        <Image className={styles.img4} src={"/images/artvault-bg5.jpg"} width={150} height={100} alt="Imagem 4"></Image>
                    </div>
            </section>

            <section className={`${styles.descriptionArt} light-section`}>
                <div className={`${styles.container} container d_flex`}>
                    <div className={styles.descArt1}>
                        <h3 className={`${styles.artworkName} txtGold ${satoshiBold.className}`}>Fluid Creativity</h3>

                        <p className={styles.creatorName}>Watch the Canvas Come Alive</p>
                    </div>

                    <div className={styles.descArt2}>
                        <p className={`${styles.descArtText} ${satoshiLight.className}`}>
                           As you navigate through the gallery, notice how every drawing breathes and flows. 
                           This space is engineered to transform static sketches into a dynamic visual journey,
                           allowing you to experience the true energy of each piece as it gently unfolds before your eyes
                        </p>
                    </div>
                </div>
            </section>

            <section className={`${styles.scrollTextSection} light-section`}>
                <div className={`container ${styles.container} light-section`}>
                    <section style={{ height: "60vh" }} />
                    <ScrollRevealText
                        className="text-7xl font-bold max-w-6xl "
                        text={`Every stroke remembers what words forget.`}
                    />
                    <section style={{ height: "75vh" }} />

                    <ScrollRevealText
                        className="text-7xl font-bold max-w-7xl"
                        text={`Art begins where certainty ends.`}
                    />
                    <section style={{ height: "75vh" }} />

                    <ScrollRevealText
                        className="text-8xl font-bold  max-w-7xl"
                        text={`Some colors speak louder   than voices, leaving                 emotions where words         could never reach.`}
                    />
                    <section style={{ height: "70vh" }} />
                </div>
            </section>

                <GalleryTransition />

                <section style={{ height: "60vh" }} />

                <SlidePaintingComponent />
       </main>
    </>);
}