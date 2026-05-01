import Script from "next/script";
import styles from "@/public/css/loading.module.css";

export default function Loading(){
     return (<>
            <main className={styles.loadingMain}>
                <div id="wrap" className={styles.wrap}></div>           
                <p className={styles.info}>* Mouse or Finger press on the page to finish loading action.</p>
            </main>
                <Script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"></Script>
                <Script type="module" src="/js/loading.interaction.js"></Script>
    </>);
}