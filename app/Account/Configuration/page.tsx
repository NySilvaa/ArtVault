// COMPONENTS
import Verticalnav from "@/components/AccountComponents/VerticalNav";

// ESTILOS
import styles from "@/public/css/dashboard.module.css";
import "@/public/css/configuration.css";

// METADATA
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Configuration",
  description: "Config Your Account Now",
};

// FONTS E ESTILOS
import  "@/public/css/aboutMe.css";
import { leotaroFree, satoshiLight } from "@/app/layout";


export default function ConfigurationPage(){
    return (<>
            <main className={`${styles.dashboardMain} dashboardMain`}>
                <section className={styles.dashboard_wp}>
              <div className={`${styles.dashboard_top} ${leotaroFree.className}`}><h1>Configuration</h1></div>
                        <div className="container">
                            
                            <div className="panel-content">
                                <div className="content-card">
                                    <div className="card-header">
                                        <div className="card-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                        </div>
                                        <h3 className="card-title">User Config</h3>
                                    </div>
                                    <div className="toggle-group">
                                        <div className="toggle-item">
                                        <div className="toggle-info">
                                            <h4>Change UserName</h4>
                                            <p>Change Your Username</p>
                                        </div>
                                            <div className="form">
                                                <input className="input" placeholder="Type Your New Name" type="text" />
                                                <span className="input-border"></span>
                                                </div>
                                        </div>

                                        <div className="toggle-item">
                                        <div className="toggle-info">
                                            <h4>Change E-mail</h4>
                                            <p>Change Your E-mail</p>
                                        </div>
                                        <div className="form">
                                                <input className="input" placeholder="Type Your New E-mail" type="text" />
                                                <span className="input-border"></span>
                                        </div>
                                        </div>

                                    <div className="toggle-item">
                                        <div className="toggle-info">
                                            <h4>Change Your Bio</h4>
                                            <p>What&apos;s on Your Mind?</p>
                                        </div>
                                            <div className="form">
                                                <input className="input" placeholder="Type Your New Biography" type="text" />
                                                <span className="input-border"></span>
                                                </div>
                                        </div>
                                    </div>
                                        <span className="warning">* If any field is empty, the old value will be kept.</span>

                                    <button id="changements">Confirm Chagements</button>
                                </div>{/* content-card */}

                                 <div className="content-card">
                                    <div className="card-header">
                                        <div className="card-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                        </div>
                                        <h3 className="card-title">User Photos</h3>
                                    </div>
                                    <div className="toggle-group">
                                        <div className="toggle-item">
                                        <div className="toggle-info">
                                            <h4>Change Main Photo</h4>
                                            <p>Select Your Best Photo</p>
                                        </div>
                                        
                                             <button className="file">
                                                        <svg
                                                            aria-hidden="true"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                            strokeWidth="2"
                                                            stroke="#fffffff"
                                                            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                            ></path>
                                                            <path
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                            strokeWidth="2"
                                                            stroke="#fffffff"
                                                            d="M17 15V18M17 21V18M17 18H14M17 18H20"
                                                            ></path>
                                                        </svg>
                                                        <label htmlFor="mainImg">ADD FILE</label>
                                                       <input type="file" id="mainImg" />
                                            </button>
                                        </div>

                                        <div className="profile-wp">
                                            <div className="toggle-item">
                                                <div className="toggle-info">
                                                    <h4>Secondary Photo</h4>
                                                    <p>Select the Second One</p>
                                                </div>

                                                    <button className="file">
                                                        <svg
                                                            aria-hidden="true"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                            strokeWidth="2"
                                                            stroke="#fffffff"
                                                            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                            ></path>
                                                            <path
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                            strokeWidth="2"
                                                            stroke="#fffffff"
                                                            d="M17 15V18M17 21V18M17 18H14M17 18H20"
                                                            ></path>
                                                        </svg>
                                                       <label htmlFor="secondImg">ADD FILE</label>
                                                       <input type="file" id="secondImg" />
                                                    </button>
                                            </div>

                                            <div className="toggle-item">
                                                <div className="toggle-info">
                                                    <h4>Select Third Photo</h4>
                                                    <p>Photos Complimentaries</p>
                                                </div>

                                                    <button className="file">
                                                        <svg
                                                            aria-hidden="true"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                            strokeWidth="2"
                                                            stroke="#fffffff"
                                                            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                            ></path>
                                                            <path
                                                            strokeLinejoin="round"
                                                            strokeLinecap="round"
                                                            strokeWidth="2"
                                                            stroke="#fffffff"
                                                            d="M17 15V18M17 21V18M17 18H14M17 18H20"
                                                            ></path>
                                                        </svg>
                                                       <label htmlFor="thirdImg">ADD FILE</label>
                                                       <input type="file" id="thirdImg" />
                                                    </button>
                                            </div>
                                        </div>{/* profile-wp */}
                                    </div>
                                        <span className="warning">* If any field is empty, the old value will be kept.</span>

                                    <button id="changements">Confirm Chagements</button>
                                </div>{/* content-card */}
                            </div>{/* panel-content */}
                        </div>{/* containers */}
                </section>
                <Verticalnav />
                </main>
            </>)
}