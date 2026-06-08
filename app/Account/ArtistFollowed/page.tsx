import Verticalnav from "@/components/AccountComponents/VerticalNav";
import styles from "@/public/css/dashboard.module.css";

export default function ArtistFollowedPage(){
    return (<>
            <main className={styles.dashboardMain}>
                <section className={styles.dashboard_wp}></section>

                <Verticalnav />
            </main>
    </>)
}