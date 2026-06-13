// IMPORTAÇÕES DO NEXT
import { Metadata } from "next";
import Link from "next/link";

// ESTILOS E FONTES
import styles from "@/public/css/bg-style.module.css"
import "@/public/css/aboutUs.css"
import { satoshiLight } from "../layout";

// METADATA
export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | About Us",
  description: "Just Little About Our Journey",
};

export default function AboutUsPage(){
    return (<>
        <section className="aboutUsSection w100 h100">
          <nav className={styles.navigation}>
            <Link href={"/"} className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></Link>

          <div className={styles.btnInteractive}>
                <ul  className={styles.itemsMenu_btnInteractive}>
                  <li><Link href={"/Products"}>Products</Link></li>
                  <li><Link href={"/Painters"}>Painters</Link></li>
                  <li><Link href={"/Paintings"}>Paintings</Link></li>
                  <li><Link href={"/AboutUs"}>About Us</Link></li>
                </ul>
          </div>{/* btnInteractive */}

           <Link href={"/LogIn"} className={`loginBtn bgGold txtWhite txtCenter`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></Link>
          </nav>

          <div className="aboutUsWp d_flex">
            <div className="aboutUsBg"></div>{/* aboutUsBg */}

            <div className="aboutUsDesc">
                <div className="aboutUsDescBox mAuto">
                                <h3 className={`${satoshiLight.className} nameCreator txtWhite`}>I&apos;m Nycolas</h3>

              <h2 className={`presentationCreator txtWhite`}>CREATIVE DESIGNER,
                    MARKETING DIRECTOR,
                    TEACHER & AWWWARDS
                    YOUNG JURY.</h2>
                  <div style={{clear: "both"}}></div>

                  <p className={`${satoshiLight.className} descriptionCreator`}>
                  As a Creative Director & Consultant,
                  I have accumulated experience
                  crafting visually stunning and
                  engaging digital experiences. With a
                  passion for design and a keen eye
                  for detail, I specialize in translating
                  complex ideas into simple, elegant
                  solutions that capture the essence
                  of a brand.
                  </p>
                  <div style={{clear: "both"}}></div>

                  <div className="otherProjects">
                    <span className={` ${satoshiLight.className} descriptionProjects`}>Do You Wanna Check Out My Other Projects? Click Below</span>
                    <div></div><Link href={""} className={` projectsLink txtWhite bgGold d_inlineBlock txtCenter`}>Projects</Link>
                  </div>{/* otherProjects */}
                </div>{/*  aboutUsDescBox */}
            </div>{/* aboutUsDesc */}
          </div>{/* aboutUsWp */}
        </section>
   </> );
}