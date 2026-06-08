import Script from "next/script"
import { leotaroFree } from "@/app/layout"
import styles from "@/public/css/art-vault-bd.module.css";

export default function Footer(){
    return (<>
        <footer className={styles.footer_artVault}>
            <div className={styles.btnFooter}></div>
            <div className={styles.containerFooter}>
            <div className={styles.contFooter}>
            <div className={styles.footer_center}>
                <h3 className={leotaroFree.className}>Thanks For Your Visit</h3>
            </div>
            </div>
            </div>
        </footer>

   </>)
}