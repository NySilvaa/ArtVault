import { useLayoutEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export const ScrollImgConfig = (containerRef: RefObject<HTMLDivElement | null>) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // 1. Lenis para scroll suave
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reverseTriggers = gsap.utils.toArray<HTMLElement>(
        ".col-scroll__box:nth-child(odd) .col-scroll__list"
      );

      reverseTriggers.forEach((element) => {
        const elementHeight = element.offsetHeight;
        const viewportHeight = window.innerHeight;
        const extraSpace = viewportHeight * 0.2;
        const scrollDistance = elementHeight + viewportHeight + extraSpace;

        gsap.to(element, {
          yPercent: 100,
          ease: "none",
          scrollTrigger: {
            // O gatilho é o container principal da galeria
            trigger: containerRef.current, 
            
            // "top bottom" significa: quando o TOPO do elemento tocar o FUNDO da tela
            start: "top bottom", 
            
            // "bottom top" significa: termina quando o FUNDO do elemento sair pelo TOPO da tela
            end: "bottom top", 
            
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    }, containerRef);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      ctx.revert();
    };
  }, [containerRef]);
};