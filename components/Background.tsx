// IMPORTAÇÕES DO NEXT
import Script from "next/script";
import Link from "next/link";
import { Suspense } from "react";

// FONTS
import { leotaroFree } from "@/app/layout";

// ESTILO CSS
import "@/public/css/bg-style.css"

// COMPONENTES
import MenuImg from "@/components/MenuImg"

export default function Background() {
  return (<>
    <main>
      <Suspense fallback={"Carregando..."}>
        <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.81/build/spline-viewer.js" defer></Script>
        <spline-viewer url="https://prod.spline.design/MmMvgXlWGNhOu7RV/scene.splinecode"></spline-viewer>
      </Suspense>

        <section className="container">
          <nav className="navigation">
            <Link href={""} className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></Link>

          <div className="btn-interactive">
                <ul  className="items-menu-btn-interactive">
                  <li><Link href={""}>Products</Link></li>
                  <li><Link href={""}>Painters</Link></li>
                  <li><Link href={""}>Paintings</Link></li>
                  <li><Link href={"/AboutUs"}>About Us</Link></li>
                </ul>
          </div>

            <MenuImg />
          </nav>

          <Link href={"ArtVault_Branding"} className={`btn-visit ${leotaroFree.className}`} prefetch={false}>Visit</Link>
        </section>{/* fim da seção container */}

        <section className="description-img-first">
          <div className="notification">
              <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle">The Myth</div>
            <div className="notibody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit, nemo iste dolorem explicabo fugiat officia 
                adipisci tempora delectus temporibus soluta quia obcaecati impedit odit, recusandae pariatur saepe ipsam dolorum!</div>
          </div>
        </section>{/* description-img-first */}

        <section className="description-img-second">
          <div className="notification">
            <div className="notiglow"></div>
            <div className="notiborderglow"></div>
            <div className="notititle">Symbolism</div>
            <div className="notibody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit, nemo iste dolorem explicabo fugiat officia 
                adipisci tempora delectus temporibus soluta quia obcaecati impedit odit, recusandae pariatur saepe ipsam dolorum!</div>
          </div>
        </section>{/* description-img-second */}

        <div className="cursor-dot"></div>
        <div className="cursor-outline"></div>
    </main>

    <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></Script>
    <Script src="/js/interactions.js" defer></Script>
    </>
  );
};
