// METADATA
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Artists Followed",
  description: "Which Artist You Follow? Whatch Out Now",
};

// FONTS E ESTILOS
import styles from "@/public/css/artistsFollowed.module.css";
import { satoshiLight } from "@/app/layout";

export default function ArtistsFollowedPage(){
    return (<>
            <div className={`${styles.container} container`}>
                <section className={styles.artists_section}>
                      <div className={styles.artist_tittle}>
                        <h1>Artist Followed</h1>

                        <div className={`${styles.artist_tittle_desc} ${satoshiLight.className}`}>
                          We&apos;ve distilled complexity into three core Pillars. Experience the next generation of workspace engineering.
                        </div>{/* artist_tittle_desc */}
                      </div>{/* artist_tittle */}

                      <section className={styles.artists_wp}>
                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={`${styles.btnInteractionArtist} ${styles.removeFollow}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                            </div>{/* data_artist */}
                          </figure>
                        </div>{/* artists_box */}

                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={`${styles.btnInteractionArtist} ${styles.removeFollow}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                            </div>{/* data_artists */}
                          </figure>
                        </div>{/* artists_box */}

                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={`${styles.btnInteractionArtist} ${styles.removeFollow}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                            </div>
                          </figure>
                        </div>{/* artists_box */}

                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={`${styles.btnInteractionArtist} ${styles.removeFollow}`}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> <span>UnFollow</span></button>
                            </div>
                          </figure>
                        </div>{/* artists_box */}
                      </section>

                      <div className={styles.artist_tittle}>
                        <h1>Artist Sugested</h1>

                        <div className={`${styles.artist_tittle_desc} ${satoshiLight.className}`}>
                          We&apos;ve distilled complexity into three core Pillars. Experience the next generation of workspace engineering.
                        </div>
                      </div>{/* artist_tittle */}

                      <section className={styles.artists_wp}>
                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={styles.btnInteractionArtist}>Follow</button>
                            </div>
                          </figure>
                        </div>{/* artists_box */}

                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={styles.btnInteractionArtist}>Follow</button>
                            </div>
                          </figure>
                        </div>{/* artists_box */}

                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={styles.btnInteractionArtist}>Follow</button>
                            </div>
                          </figure>
                        </div>{/* artists_box */}

                        <div className={styles.artists_box}>
                          <figure>
                                <Image src={"/images/profile1.jpg"} width={300} height={393} alt="Artitsta 1"/>

                            <div className={styles.data_artist}>
                            <h3>Lorem Ipsum</h3>
                            <span className={`${satoshiLight.className} ${styles.artist_desc}`}>Lorem Ipsum silo dolor amet, Lorem ipsum silo dolor amet</span>
                                <br />
                              <span className={`${satoshiLight.className} ${styles.user_followed}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      432
                              </span>

                              <span className={`${satoshiLight.className} ${styles.count_pieces}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wallpaper-icon lucide-wallpaper"><path d="M12 17v4"/><path d="M8 21h8"/><path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15"/><circle cx="8" cy="9" r="2"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>
                                      42
                              </span>

                              <button className={styles.btnInteractionArtist}>Follow</button>
                            </div>
                          </figure>
                        </div>{/* artists_box */}
                      </section>
                </section>{/* artists_section */}
            </div>{/* container */}
        </>)
}