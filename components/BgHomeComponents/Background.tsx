"use client";

// IMPORTAÇÕES DO NEXT
import Script from "next/script";
import Link from "next/link";
import { Suspense } from "react";

// FONTS
import { leotaroFree } from "@/app/layout";

// ESTILO CSS
import styles from "@/public/css/bg-style.module.css"

import { useMenuConfig } from "./MenuConfig";
import { useBoxInfo } from "./BoxInfo";

export default function Background() {
  const {isOpen, ref, toggle} = useMenuConfig();
  const { activeSection, showSection,} = useBoxInfo();

  return (<>
    <main className={styles.homeBg}>
      <Suspense fallback={"Carregando..."}>
        <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.81/build/spline-viewer.js"  id="jsBg"></Script>
          <spline-viewer url="https://prod.spline.design/MmMvgXlWGNhOu7RV/scene.splinecode"></spline-viewer>
      </Suspense>

        <section className="container">
          <nav className={styles.navigation}>
            <Link href={"/"} className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37"
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
          </div>

            <div className="menuContainer" ref={ref}>
               <label
                  className={`${styles.hamburger} ${
                    isOpen ? styles.open : ""
                  } hamburguer`}
                  onClick={toggle}
                >
                  <svg viewBox="0 0 32 32" >
                  <path className={`${styles.line} line ${styles.line_top_bottom} line_top_bottom`} style={{stroke: isOpen ? "#f00" : "#fff"}} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                  <path className={`${styles.line} line`} d="M7 16 27 16" style={{stroke: isOpen ? "#f00" : "#fff"}}></path>
                </svg>
              </label>

               <aside
                  className={`${styles.menu} menu`}
                  aria-hidden={!isOpen}
                  style={{
                    transform: isOpen
                      ? "translateX(200px)"
                      : "translateX(100%)",
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                  }}
                >
                  <ul className={leotaroFree.className}>
                    <li>
                      <Link href={"#"} data-index="1" onClick={(e) => {
                          e.preventDefault();
                          showSection("1");
                          toggle();
                        }}>
                      The Myth</Link>
                    </li>
                    <li>
                      <Link href={"#"} data-index="2" onClick={(e) => {
                          e.preventDefault();
                          showSection("2");
                          toggle();
                        }}>Symbolism</Link>
                    </li>
                    <li>
                      <Link href={"#"} data-index="3" onClick={toggle}>Contemplation Mode</Link>
                    </li>
                    <li>
                      <Link href={""} data-index="4" onClick={toggle}>History</Link>
                    </li>
                  </ul>
              </aside>
            </div>{/* menuContainer */}
          </nav>

          <Link href={"/ArtVault_Branding"} className={`${styles.btnVisit} ${leotaroFree.className}`}>Visit</Link>
        </section>{/* fim da seção container */}

        <section className={`${styles.descriptionImg_first} descriptionImg_first`} style={{
              width: activeSection === "1" ? "auto" : "0",
              opacity: activeSection === "1" ? 1 : 0,
              overflow: "hidden",
              transition: "opacity .4s ease",
            }}>
          <div className={styles.notification}>
              <div className={styles.notiglow}></div>
            <div className={styles.notiborderglow}></div>
            <div className={styles.notititle}>The Myth</div>
            <div className={styles.notibody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit, nemo iste dolorem explicabo fugiat officia 
                adipisci tempora delectus temporibus soluta quia obcaecati impedit odit, recusandae pariatur saepe ipsam dolorum!</div>
          </div>
        </section>{/* description-img-first */}

        <section className={`${styles.descriptionImg_second} descriptionImg_second`} style={{
              width: activeSection === "2" ? "auto" : "0",
              opacity: activeSection === "2" ? 1 : 0,
              overflow: "hidden",
              transition: "opacity .4s ease",
            }}>
          <div className={styles.notification}>
            <div className={styles.notiglow}></div>
            <div className={styles.notiborderglow}></div>
            <div className={styles.notititle}>Symbolism</div>
            <div className={styles.notibody}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit, nemo iste dolorem explicabo fugiat officia 
                adipisci tempora delectus temporibus soluta quia obcaecati impedit odit, recusandae pariatur saepe ipsam dolorum!</div>
          </div>
        </section>{/* description-img-second */}
    </main>

    <Script src="/js/interaction.home.js"></Script>
    </>
  );
};
