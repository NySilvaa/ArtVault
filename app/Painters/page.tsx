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

export default function PaintersPage(){
    return (
        <>
           <main className={styles.painters}>
                <Link href={"/"} className={`btnBackPage ${styles.btnBackPage}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
                strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </Link>

             <nav className={styles.paintersNav}>
                <div className={styles.container}>
                    <h2 className={`${styles.paintersTittle} ${leotaroFree.className}`}>Our Painters</h2>

                    <p className={`${styles.paintersDescriptionTittle} ${satoshiLight.className}`}>Our painters share a mission to simplify time
                            management with smart, intuitive solutions.</p>
                </div>
            </nav>

            <section className={styles.paintersSection}>
                <div className={styles.container}>
                    <div className={styles.painters_wp}>
                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}
                    </div>{/* painters_wp */}

                     <div className={styles.painters_wp}>

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}
                    </div>{/* painters_wp */}

                     <div className={styles.painters_wp}>

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}
                    </div>{/* painters_wp */}

                     <div className={styles.painters_wp}>

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}

                        <div className={styles.painters_box}>
                            <figure><Image src={"/images/profile1.jpg"} width={320} height={370} alt="Imagem de Perfil do Pintor"></Image></figure>
                            <h3 className={`${styles.paintersName} ${leotaroFree.className}`}><Link href={""}>Nome do Artista</Link></h3>
                            <span className={`${styles.paintersDescription} ${satoshiLight.className}`}>Pintou mais de 200 obras</span>
                        </div>{/* painters_box */}
                    </div>{/* painters_wp */}
                </div>
            </section>
           </main>

           <Footer />
        </>

    );
}