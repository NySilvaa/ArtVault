"use client";

import { leotaroFree } from "@/app/layout"
import styles from "@/public/css/art-vault-bd.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer(){
    const {scrollYProgress } = useScroll()

    const opacityAnimate = useTransform(scrollYProgress, [0.95, 1], [0, 1]);
    const displayAnimate = useTransform(scrollYProgress, [0.95, 1], ["none", "flex"]);

    return (<>
            <footer className={styles.footer_artVault}>
        <motion.div style={{opacity: opacityAnimate, display: displayAnimate}}>
            <div className={styles.btnFooter}></div>
        </motion.div>

        <motion.div style={{display: displayAnimate}}>
            <div className={styles.containerFooter}>
            <div className={styles.contFooter}>
            <div className={styles.footer_center}>
                <h3 className={leotaroFree.className}>Thanks For Your Visit</h3>
            </div>
            </div>
            </div>
        </motion.div>
        </footer>
   </>)
}