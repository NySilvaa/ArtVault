import Script from "next/script";
import Link from "next/link";

import "@/public/css/CeilingFrescoViewer.css"
import localFont from "next/font/local";

export const leotaroFree = localFont({
  src: "../public/fonts/Leotaro-Free.otf",
  weight: "500",
  style: "normal",
  display: "swap",
  variable: "--font-leotaro"
});


export default function Background() {
  return (
    <main>
        <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.81/build/spline-viewer.js"></Script>
        <spline-viewer url="https://prod.spline.design/MmMvgXlWGNhOu7RV/scene.splinecode"></spline-viewer>

        <div className="container">
          <nav className="navigation">
          <Link href={""} className="logo"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#D4AF37"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/></svg></Link>

          <div className="btn-interactive">
                <ul>
                  <li><Link href={""}>Products</Link></li>
                  <li><Link href={""}>Painters</Link></li>
                  <li><Link href={""}>Paintings</Link></li>
                  <li><Link href={""}>About Us</Link></li>
                </ul>
          </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" 
            strokeLinejoin="round" className="lucide lucide-menu-icon lucide-menu btn-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          </nav>

          <Link href={""} className={`btn-visit ${leotaroFree.className}`}>Visit</Link>

        </div> 
    </main>
  );
}
