// METADATA
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Art Vault - Art Gallery | Artists Followed",
  description: "Which Artist You Follow? Whatch Out Now",
};

// FONTS E ESTILOS
import styles from "@/public/css/artistsFollowed.module.css";
import { satoshiLight } from "@/app/layout";
import { FollowButton } from "@/components/AccountComponents/FollowButtonComponent";

// IMPORTAMOS AS FUNÇÕES DO SERVER ACTIONS
import { getPaintersFollowed, getPaintersAll } from "@/app/actions/followingArtist";

export default async function ArtistsFollowedPage() {
  
  const painters = await getPaintersAll() || [];
  const paintersFollowed = await getPaintersFollowed() || [];

  return (
    <>
      <div className={`${styles.container} container`}>
        <section className={styles.artists_section}>
          <div className={styles.artist_tittle}>
            <h1>Artist Followed</h1>

            <div className={`${styles.artist_tittle_desc} ${satoshiLight.className}`}>
              We&apos;ve distilled complexity into three core Pillars. Experience the next generation of workspace engineering.
            </div>
          </div>

          <section className={styles.artists_wp}>
            {/* VERIFICAÇÃO: Se não tiver artistas seguidos, mostra a mensagem. Se tiver, faz o map() */}
            {paintersFollowed.length === 0 ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  You aren&apos;t following anyone yet.
                </h3>
                <p className={satoshiLight.className} style={{ fontSize: "1.1rem", opacity: 0.8 }}>
                  Looks like your feed is empty! Browse our <strong>Suggested Artists</strong> below and start building your custom gallery.
                </p>
              </div>
            ) : (
              <div className={styles.container_artists}>
                {paintersFollowed.map((paintersFol: any) => (
                  <div key={paintersFol.id} className={`${styles.cardArtists} ${styles.cardIndividual}`} style={{ backgroundImage: `url(${paintersFol.cover_photo})` }}>
                    <div className={styles.border}>
                      <h2 className={styles.nameAuthor}>{paintersFol.stage_name}</h2>

                      <ul className={styles.icons}>
                        <li className={styles.fa}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round-icon lucide-users-round">
                            <path d="M18 21a8 8 0 0 0-16 0" />
                            <circle cx="10" cy="8" r="5" />
                            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                          </svg> {paintersFol.followers}
                        </li>

                        <li className={styles.fa}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
                            <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                          </svg> {paintersFol.artworks}
                        </li>
                        <li className={styles.fa}>
                          <FollowButton idArtist={paintersFol.id} followedArtist={true} />
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <div className={styles.artist_tittle}>
            <h1>Suggested Artists</h1>

            <div className={`${styles.artist_tittle_desc} ${satoshiLight.className}`}>
              We&apos;ve distilled complexity into three core Pillars. Experience the next generation of workspace engineering.
            </div>
          </div>

          <section className={`${styles.artists_wp}`}>
            <div className={`${styles.container_artists}`}>
              {painters.map((painter: any) => (
                <div key={painter.id} className={`${styles.cardArtists} ${styles.cardIndividual}`} style={{ backgroundImage: `url(${painter.cover_photo})` }}>
                  <div className={styles.border}>
                    <h2 className={styles.nameAuthor}>{painter.stage_name}</h2>

                    <ul className={styles.icons}>
                      <li className={styles.fa}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round-icon lucide-users-round">
                          <path d="M18 21a8 8 0 0 0-16 0" />
                          <circle cx="10" cy="8" r="5" />
                          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                        </svg> {painter.followers}
                      </li>

                      <li className={styles.fa}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette">
                          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
                          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                        </svg> {painter.artworks}
                      </li>
                      <li className={styles.fa}>
                        <FollowButton idArtist={painter.id} />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>{/* artists_section */}
      </div>{/* container */}
    </>
  );
}