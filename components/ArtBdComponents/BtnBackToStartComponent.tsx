"use client";

import styles from "@/public/css/art-vault-bd.module.css";

export default function BtnBackToStart(){

    return (<>
        <div className={`${styles.btnBackStart} btnBackStart`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#212b46" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
            </div>{/* btnBackStart */}
    </>)
}