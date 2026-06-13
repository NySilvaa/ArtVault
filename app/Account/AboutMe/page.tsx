// FONTS E ESTILOS
import  styles from "@/public/css/aboutMe.module.css";

// NEXT JS
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | About You",
  description: "See Your Contributions With Us",
};

export default function AboutMePage(){
    return (<>
            <div className={styles.row}>
                <div className={styles.containers}>
                    <div className={styles.pic}></div>{/* pic */}
                    
                    <div className={styles.box1}></div>{/* box1 */}
                    <div className={styles.box2}></div>{/* box2 */}
                    
                    <div className={styles.social1}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-drum-icon lucide-drum"><path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9"/><path d="M12 14v8"/><path d="M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/></svg>
                    </div>{/* social1 */}

                    <div className={styles.social2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-flame-kindling-icon lucide-flame-kindling"><path d="M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"/><path d="m5 22 14-4"/><path d="m5 18 14 4"/></svg>
                    </div>{/* social2 */}

                    <div className={styles.social3}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                    </div>{/* social3 */}
                </div>{/* containers */}

                <div className={styles.content}>
                    <p className={styles.satoshiLight}>HiFolks, <br/><br/>
                        This is Shaik Maqsood. I&apos;m a Freakin frontend developer, 
                        jus came up with this concept of having a 45º trasformed DIV with a -45º background.<br/><br/>
                        Can&apos;t belive that it worked.
                        <br/><br/>
                        Show your L<span>&hearts;</span>VE if you like my pen.
                        <br/><br/>
                    </p>

                    <Link href={"/Account/Configuration/"} className={` ${styles.btnUpdateSelfDescription}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> Update Self Description</Link>
                </div>{/* content */}
            </div>{/* row */}
    </>);
}