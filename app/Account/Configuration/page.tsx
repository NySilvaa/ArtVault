// ESTILOS
import styles from "@/public/css/configuration.module.css";

// METADATA
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Configuration",
  description: "Config Your Account Now",
};


export default function ConfigurationPage(){
    return (<>
                <div className={`${styles.container} container`}>
                    
                    <div className={styles.panel_content}>
                        <div className={`${`${styles.content_card} p_relative`} w100`}>
                            <div className={`${styles.card_header} d_flex`}>
                                <div className={`${styles.card_icon} d_flex`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                </div>
                                <h3 className={`${styles.card_title} txtWhite`}>User Config</h3>
                            </div>
                            <div className={`${styles.toggle_group} d_flex`}>
                                <div className={`${styles.toggle_item} d_flexComplet`}>
                                <div className={styles.toggle_info}>
                                    <h4 className="txtWhite">Change UserName</h4>
                                    <p>Change Your Username</p>
                                </div>
                                    <div className={styles.form}>
                                        <input className={`${styles.input} txtWhite w100`} placeholder="Type Your New Name" type="text" />
                                        <span className={`${styles.input_border} p_absolute`}></span>
                                        </div>
                                </div>

                                <div className={`${styles.toggle_item} d_flexComplet`}>
                                <div className={styles.toggle_info}>
                                    <h4 className="txtWhite">Change E-mail</h4>
                                    <p>Change Your E-mail</p>
                                </div>
                                <div className={styles.form}>
                                        <input className={`${styles.input} txtWhite w100`} placeholder="Type Your New E-mail" type="text" />
                                        <span className={`${styles.input_border} p_absolute`}></span>
                                </div>
                                </div>

                            <div className={`${styles.toggle_item} d_flexComplet`}>
                                <div className={styles.toggle_info}>
                                    <h4 className="txtWhite">Change Your Bio</h4>
                                    <p>What&apos;s on Your Mind?</p>
                                </div>
                                    <div className={`${styles.form} p_relative`}>
                                        <input className={`${styles.input} txtWhite w100`} placeholder="Type Your New Biography" type="text" />
                                        <span className={`${styles.input_border} p_absolute`}></span>
                                        </div>
                                </div>
                            </div>
                                <span className={`${styles.warning} d_inlineBlock`}>* If any field is empty, the old value will be kept.</span>

                            <button id={`${styles.changements}`} className="p_absolute txtWhite bgGold"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> Confirm Chagements</button>
                        </div>{/* content-card */}

                            <div className={`${styles.content_card} p_relative`}>
                            <div className={`${styles.card_header} d_flex`}>
                                <div className={`${styles.card_icon} d_flex`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                </div>
                                <h3 className={`${styles.card_title} txtWhite`}>User Photos</h3>
                            </div>
                            <div className={`${styles.toggle_group} d_flex`}>
                                <div className={`${styles.toggle_item} d_flexComplet`}>
                                <div className={styles.toggle_info}>
                                    <h4 className="txtWhite">Change Main Photo</h4>
                                    <p>Select Your Best Photo</p>
                                </div>
                                
                                        <button className={`${styles.file} d_flex txtWhite txtCenter bgGold`}>
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
                                                <input type="file" id={styles.mainImg} />
                                    </button>
                                </div>

                                <div className={`${styles.profile_wp} d_flex`}>
                                    <div className={`${`${styles.toggle_item} d_flexComplet`} w50`}>
                                        <div className={styles.toggle_info}>
                                            <h4 className="txtWhite">Secondary Photo</h4>
                                            <p>Select the Second One</p>
                                        </div>

                                            <button className={`${styles.file} d_flex txtWhite txtCenter bgGold`}>
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
                                                <input type="file" id={styles.secondImg} />
                                            </button>
                                    </div>

                                    <div className={`${styles.toggle_item} d_flexComplet`}>
                                        <div className={styles.toggle_info}>
                                            <h4 className="txtWhite">Select Third Photo</h4>
                                            <p>Photos Complimentaries</p>
                                        </div>

                                            <button className={`${styles.file} d_flex txtWhite txtCenter bgGold`}>
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
                                                <input type="file" id={styles.thirdImg} />
                                            </button>
                                    </div>
                                </div>{/* profile-wp */}
                            </div>
                                <span className={`${styles.warning} d_inlineBlock`}>* If any field is empty, the old value will be kept.</span>

                            <button id={`${styles.changements}`} className="p_absolute txtWhite bgGold"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil-icon lucide-pencil p_relative"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg> Confirm Chagements</button>
                        </div>{/* content-card */}
                    </div>{/* panel-content */}
                </div>{/* containers */}
    </>)
}