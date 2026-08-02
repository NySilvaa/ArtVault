"use client"

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";

import "@/public/css/painting.css";
import { leotaroFree, satoshiBold, satoshiLight } from "@/app/layout";
import ScrollRevealText from "./ScrollRevealComponent";
import GalleryTransition from "./GalleryTransitionComponent";
import SlidePaintingComponent from "./SlidePaintingComponent";


export default function PaintingsComponent(){
    const { scrollY } = useScroll()

    const y = useTransform(scrollY, [240, 800], [40, 500]);
    const rotateY = useTransform(scrollY, [240, 800], [0, 180]);
    const grayscale = useTransform(scrollY, [240, 800], ['100%', '0%']);

    return (<>
       <main className="painting">
            <section className="bgMainPainting">
                    <div className="container">
                    <nav className="navigation">
                        <Link href={"/"} className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
                        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></Link>

                    <div className="btnInteractive">
                            <ul  className="itemsMenu_btnInteractive">
                            <li><Link href={"/Painters"}>Painters</Link></li>
                            <li><Link href={"/Paintings"}>Paintings</Link></li>
                            <li><Link href={"/AboutUs"}>About Us</Link></li>
                            </ul>
                    </div>{/* btnInteractive */}

                    <Link href={"/LogIn"} className={`loginAcessBtn bgGold txtWhite txtCenter`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></Link>
                    </nav>

                        <div className="txtPainting1">
                            <p className={`txtWhiteSecondary ${satoshiLight.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati quia, sunt, provident, expedita autem repellendus earum quaerat non dolor velit qui sit fuga commodi id eligendi tempora ducimus cum molestias!</p>
                        </div>

                        <h3 className={`titleTopPainting txtWhiteSecondary ${leotaroFree.className}`}>Art Vault</h3>
                        <h1 className={`tittleTopMain txtGold ${leotaroFree.className}`}> <span>{'{'}</span>Prism<span>{'}'}</span></h1>

                        <div className="lines">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                            <div className="line4"></div>
                            <div className="line5"></div>
                        </div>

                        <div className="wordsComplementaries">
                            <span className="word1">Lorem</span>
                            <span className="word2">Ipsum</span>
                            <span className="word3">Silo</span>
                            <span className="word4">Dolor</span>
                            <span className="word5">Amet</span>
                        </div>

                        <div className="txtPainting2">
                            <p className={`txtWhiteSecondary ${satoshiLight.className}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati quia, sunt, provident, expedita autem repellendus earum quaerat non dolor velit qui sit fuga commodi id eligendi tempora ducimus cum molestias!</p>
                        </div>
                        <div style={{"clear": "both"}}></div>
                    </div>{/* container */}
                    
                    <div className="imgsBgMainPainting">
                        <Image className="img1" src={"/images/artvault-bg2.jpg"} width={150} height={120} alt="Imagem 1"></Image>
                        <Image className="img2" src={"/images/artvault-bg3.jpg"} width={180} height={150} alt="Imagem 2"></Image>
                        <div className="sticky top-20 flex justify-center mt-20">   
                        <motion.div 
                        style={{y, rotateY, filter: grayscale}}
                        className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl relative  border-white">
                                <Image className="img3" src={"/images/artvault-bg4.jpg"} width={600} height={600} alt="Imagem 3"></Image>
                        </motion.div>
                        </div>
                        <Image className="img4" src={"/images/artvault-bg5.jpg"} width={150} height={100} alt="Imagem 4"></Image>
                    </div>
            </section>

            <section className="descriptionArt light-section">
                <div className="container d_flex">
                    <div className="descArt1">
                        <h3 className={`artworkName txtGold ${satoshiBold.className}`}>Lorem Ipsum</h3>

                        <p className="creatorName">Lorem Ipsum Silo Dolor</p>
                    </div>

                    <div className="descArt2">
                        <p className="descArtText">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, ipsa, adipisci, 
                            veritatis eveniet est eius perspiciatis quia ea  <br /><br /> expedita nemo libero. 
                            In explicabo expedita eos. Ut reiciendis aut reprehenderit tenetur!
                        </p>
                    </div>
                </div>
            </section>

            <section className="scrollTextSection light-section">
                <div className="container light-section">
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