// IMPORTAÇÕES DO NEXT
import Image from "next/image"
import { Suspense } from "react"
import Script from "next/script"
import { Metadata } from "next"

// COMPONENTES
import ScrollLetters from "@/components/ArtBdComponents/ScrollLetters"
import ArtVaultBg from "@/components/ArtBdComponents/ArtVaultBg"
import ScrollImgs from "@/components/ArtBdComponents/ScrollImgs"
import FormSectionArtBd from "@/components/ArtBdComponents/formSectionArtBd"
import MobileAppSection from "@/components/ArtBdComponents/MobileAppSection"
import Footer from "@/components/ArtBdComponents/Footer"

// FONTS E ESTILOS
import { leotaroFree, satoshiLight } from "../layout"
import styles from "@/public/css/art-vault-bd.module.css"
import BtnBackToStart from "@/components/ArtBdComponents/BtnBackToStartComponent"

export const metadata: Metadata = {
  title: "Art Vault - Your Art Gallery",
  description: "Our Main Page | Check Out Our Better Services",
};

export default function ArtVault_BrandingPage(){

    return (<>
        <main className={styles.artBd}>

            <Suspense fallback={"Carregando..."}>
                <ArtVaultBg />
            </Suspense>

            <BtnBackToStart />
            
            <ScrollLetters
                texts={['Art That Moves The Gaze -', 'Where The Stroke Comes To Life -']} 
                velocity={100}
                className={`custom-scroll-text ${leotaroFree.className}`}
                />

            <section className={`${styles.insideGallery}`}><div className="container"><p className={satoshiLight.className}> (Inside Vault Art Gallery)</p></div></section>

            <section className={`${styles.description_artVault}`}>
                <div className="container">
                    <section className={`${styles.descText} ${satoshiLight.className}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" 
                        strokeLinejoin="round" className="lucide lucide-chevron-left-icon lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>

          <p>ArtVault is a modern digital art space dedicated to showcasing 
            vibrant illustrations and character art inspired by the energy of Japanese anime. 
            Born from a deep passion for drawing, it began as a personal collection of sketches
             and has evolved into a dynamic, interactive gallery designed to bring creative visions to life.</p>

<p>Developed as a comprehensive digital experience, this project explores a modern virtual environment built with Next.js.
     The focus spans across intuitive UI/UX design, fluid web animations, and seamless front-end architecture, 
     developing a cohesive visual language that reflects the gallery&apos;s creative identity. The project aims 
     to elevate the presentation of digital artwork, creating an integrated user experience that beautifully connects the viewer with the digital canvas.</p>
                    </section>
                </div>
            </section>

            <section className={styles.brandShowed}>
                <Image 
                    src={"/images/news.jpg"}
                    width={1100}
                    height={700}
                    alt="Art Vault on the News"
                    loading="eager"
                />
            </section>

            <section className={`${styles.scrollImgs}`}>
                <ScrollImgs />
            </section>

            <section className={`${styles.singUpPlatforms} light-section`}>
                <div className="container">
                    <h1 className={leotaroFree.className}>The Whole Gallery, Just a Tap Away.</h1>

                    <div className={styles.singUpPlatforms_wp}>
                            <div className={styles.form}>
                                <FormSectionArtBd />
                            </div>

                            <div className={styles.mobileApp}>
                                <MobileAppSection />
                            </div>
                    </div>{/* signUpPlatforms-wp */}
                </div>
            </section>
        </main>
        
        <Footer />

        <Script src="/js/interaction.artVaultBd.js" defer></Script>
    </>);
}