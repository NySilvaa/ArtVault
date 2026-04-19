import Script from "next/script"
import { leotaroFree } from "@/app/layout"

export default function Footer(){
    return (<>
        <footer>
            <div id="button"></div>
            <div id="container">
            <div id="cont">
            <div className="footer_center">
                <h3 className={leotaroFree.className}>Thanks For Your Visit</h3>
            </div>
            </div>
            </div>
        </footer>

            <Script src="/js/interaction.artVaultBd.js" defer></Script>

   </>)
}