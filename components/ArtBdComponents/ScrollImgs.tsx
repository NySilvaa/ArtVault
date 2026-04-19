"use client";

import { useRef } from "react";
import { ScrollImgConfig } from "./ScrollImgConfig";
import Image from "next/image";

import { leotaroFree } from "@/app/layout";

export default function ScrollImgs() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ativa a animação apenas quando visível
  ScrollImgConfig(containerRef);

  return (
    <section 
      className={`col-scroll ${leotaroFree.className}`} 
      ref={containerRef} 
      style={{ overflow: 'hidden' }} // Evita que imagens vazem antes da animação
    >
     
     <div className="col-scroll__box">
      <div className="col-scroll__list">
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Het-glas-wijn_edited_Vermeer-1-1230x1066.jpg" alt="The Glass of Wine" />
          <figcaption className="col-scroll__title">The Glass of Wine</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Vermeer_Girl_Interrupted_at_Her_Music.jpg" alt="Girl Interrupted in her Music" />
          <figcaption className="col-scroll__title">Girl Interrupted in her Music</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Vermeer_Lady_Maidservant_Holding_Letter.jpg" alt="Mistress and Maid" />
          <figcaption className="col-scroll__title">Mistress and Maid</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Jan_Vermeer_van_Delft_013.jpg" alt="The Guitar Player" />
          <figcaption className="col-scroll__title">The Guitar Player</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/960px-Vermeer_-_Diana_and_Her_Companions.jpg" alt="Diana and her Companions" />
          <figcaption className="col-scroll__title">Diana and her Companions</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_The_Geographer_-_Google_Art_Project.jpg" alt="The Geographer" />
          <figcaption className="col-scroll__title">The Geographer</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_A_Lady_and_Two_Gentlemen_-_WGA24639.jpg" alt="The Girl with a Wine Glass" />
          <figcaption className="col-scroll__title">The Girl with a Wine Glass</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_De_Soldaat_en_het_Lachende_Meisje_-_Google_Art_Project.jpg" alt="Officer and Laughing Girl" />
          <figcaption className="col-scroll__title">Officer and Laughing Girl</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg" alt="The Lacemaker" />
          <figcaption className="col-scroll__title">The Lacemaker</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/960px-Vermeer-view-of-delft.jpg" alt="View of Delft" />
          <figcaption className="col-scroll__title">View of Delft</figcaption>
        </figure>
      </div>
    </div>
    <div className="col-scroll__box">
      <div className="col-scroll__list">
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Meisje_met_de_parel.jpg" alt="Girl with a Pearl Earring" />
          <figcaption className="col-scroll__title">Girl with a Pearl Earring</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.png" alt="The Milkmaid" />
          <figcaption className="col-scroll__title">The Milkmaid</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg" alt="The Astronomer" />
          <figcaption className="col-scroll__title">The Astronomer</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_Lady_at_the_Virginal_with_a_Gentleman%2C_-The_Music_Lesson-_-_Google_Art_Project.jpg" alt="The Music Lesson" />
          <figcaption className="col-scroll__title">The Music Lesson</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg" alt="The Art of Painting" />
          <figcaption className="col-scroll__title">The Art of Painting</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Het-glas-wijn_edited_Vermeer-1-1230x1066.jpg" alt="The Glass of Wine" />
          <figcaption className="col-scroll__title">The Glass of Wine</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Vermeer_Girl_Interrupted_at_Her_Music.jpg" alt="Girl Interrupted in her Music" />
          <figcaption className="col-scroll__title">Girl Interrupted in her Music</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Vermeer_Lady_Maidservant_Holding_Letter.jpg" alt="Mistress and Maid" />
          <figcaption className="col-scroll__title">Mistress and Maid</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Jan_Vermeer_van_Delft_013.jpg" alt="The Guitar Player" />
          <figcaption className="col-scroll__title">The Guitar Player</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/960px-Vermeer_-_Diana_and_Her_Companions.jpg" alt="Diana and her Companions" />
          <figcaption className="col-scroll__title">Diana and her Companions</figcaption>
        </figure>
      </div>
    </div>
    <div className="col-scroll__box">
      <div className="col-scroll__list">
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/960px-Vermeer_-_Diana_and_Her_Companions.jpg" alt="Diana and her Companions" />
          <figcaption className="col-scroll__title">Diana and her Companions</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_The_Geographer_-_Google_Art_Project.jpg" alt="The Geographer" />
          <figcaption className="col-scroll__title">The Geographer</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_A_Lady_and_Two_Gentlemen_-_WGA24639.jpg" alt="The Girl with a Wine Glass" />
          <figcaption className="col-scroll__title">The Girl with a Wine Glass</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_De_Soldaat_en_het_Lachende_Meisje_-_Google_Art_Project.jpg" alt="Officer and Laughing Girl" />
          <figcaption className="col-scroll__title">Officer and Laughing Girl</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg" alt="The Lacemaker" />
          <figcaption className="col-scroll__title">The Lacemaker</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.png" alt="The Milkmaid" />
          <figcaption className="col-scroll__title">The Milkmaid</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg" alt="The Astronomer" />
          <figcaption className="col-scroll__title">The Astronomer</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Johannes_Vermeer_-_Lady_at_the_Virginal_with_a_Gentleman%2C_-The_Music_Lesson-_-_Google_Art_Project.jpg" alt="The Music Lesson" />
          <figcaption className="col-scroll__title">The Music Lesson</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg" alt="The Art of Painting" />
          <figcaption className="col-scroll__title">The Art of Painting</figcaption>
        </figure>
        <figure className="col-scroll__item">
          <Image width={200} height={200} className="col-scroll__img" src="https://assets.codepen.io/204808/Het-glas-wijn_edited_Vermeer-1-1230x1066.jpg" alt="The Glass of Wine" />
          <figcaption className="col-scroll__title">The Glass of Wine</figcaption>
        </figure>
      </div>
    </div>
    </section>
  );
}