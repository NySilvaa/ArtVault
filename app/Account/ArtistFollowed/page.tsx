// COMPONENTES
import Verticalnav from "@/components/AccountComponents/VerticalNav";

// ESTILO
import styles from "@/public/css/dashboard.module.css";

// METADATA
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Artists Followed",
  description: "Which Artist You Follow? Whatch Out Now",
};

// FONTS E ESTILOS
import  "@/public/css/artistsFollowed.css";
import { leotaroFree, satoshiLight } from "@/app/layout";


export default function ConfigurationPage(){
    return (<>
            <main className={`${styles.dashboardMain} dashboardMain`}>
                <section className={styles.dashboard_wp}>
              <div className={`${styles.dashboard_top} ${leotaroFree.className}`}><h1>Artists</h1></div>
                        <div className="container">
                            <section className="artists_section">
                                  <div className="artist_tittle">
                                    <h1>Artist Followed</h1>

                                    <div className="artist_tittle_desc">
                                      We&apos;ve distilled complexity into three core Pillars. Experience the next generation of workspace engineering.
                                    </div>
                                  </div>{/* artist_tittle */}

                                  <section className="artists_wp">
                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist removeFollow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}

                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist removeFollow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}

                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist removeFollow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}

                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist removeFollow"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}
                                  </section>

                                  <div className="artist_tittle">
                                    <h1>Artist Sugested</h1>

                                    <div className="artist_tittle_desc">
                                      We&apos;ve distilled complexity into three core Pillars. Experience the next generation of workspace engineering.
                                    </div>
                                  </div>{/* artist_tittle */}

                                  <section className="artists_wp">
                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist">Follow</button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}

                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist">Follow</button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}

                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist">Follow</button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}

                                    <div className="artists_box">
                                      <figure>
                                            <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                                        <div className="data_artist">
                                        <h3>Lorem Ipsum</h3>
                                        <span className={`${satoshiLight.className} artist-desc`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                            <br />
                                          <span className={`${satoshiLight.className} user_followed`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                                  432
                                          </span>

                                          <span className={`${satoshiLight.className} count_pieces`}>
                                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                                  42
                                          </span>

                                          <button className="btnInteractionArtist">Follow</button>
                                        </div>
                                      </figure>
                                    </div>{/* artists_box */}
                                  </section>
                            </section>{/* artists_section */}
                        </div>
                </section>

                <Verticalnav />
            </main>
        </>)
}