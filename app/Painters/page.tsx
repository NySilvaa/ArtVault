// IMPORTAÇÕES DO NEXT JS
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

// IMPORTAÇÕES DE ESTILO E FONTS
import styles from "@/public/css/painters.module.css"
import { leotaroFree, satoshiLight } from "../layout";

// COMPONENTES
import Footer from "@/components/ArtBdComponents/Footer";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Painters",
  description: "Those Who Brought the Beauty of Life to the Screens",
};

export default async function PaintersPage(){
    async function getPainters() {
        const response = await fetch("http://localhost:3000/api/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-store",
            body: JSON.stringify({
                query: `
                    query {
                        getPaintersData {
                            id
                            stage_name
                            bio
                            cover_photo
                            artworks
                        }
                    }
                `
            })
        });

        const result = await response.json();
        return result.data.getPaintersData;
    }

    const painters = await getPainters()

    return (
        <>
           <main className={`${styles.painters} w100 h100 bgBlue`}>
                <Link href={"/"} className={`btnBackPage d_inlineBlock p_absolute txtCenter ${styles.btnBackPage}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </Link>

             <nav className={styles.paintersNav}>
                <div className={`${styles.container} d_flex mAuto`}>
                    <h2 className={`${styles.paintersTittle} ${leotaroFree.className} txtGold`}>Our Painters</h2>

                    <p className={`${styles.paintersDescriptionTittle} ${satoshiLight.className} txtWhite`}>
                        Our painters share a mission to simplify time management with smart, intuitive solutions.</p>
                </div>{/* container */}
            </nav>

            <section className={styles.paintersSection}>
                <div className={`${styles.container} mAuto`}>
                    <div className={`${styles.painters_wp} d_flex w100`}>
                        {painters.map((painter: any) => (
                    
                            <div key={painter.id} className={styles.painters_box} >
                                <figure>
                                    <Image
                                        src={painter.cover_photo}
                                        width={320}
                                        height={340}
                                        alt={painter.stage_name} />
                                </figure>

                                <h3 className={`${styles.paintersName} ${leotaroFree.className}`} >
                                    <Link href={`/painters/${painter.id}`} className="txtGold">
                                        {painter.stage_name}
                                    </Link>
                                </h3>

                                <span className={`${styles.paintersDescription} ${satoshiLight.className} txtWhiteSecondary`} >
                                    Painted over {painter.artworks} artworks
                                </span>
                            </div>
                        ))}
                    </div>
                </div>{/* container */}
            </section>
           </main>
           <Footer />
        </>

    );
}