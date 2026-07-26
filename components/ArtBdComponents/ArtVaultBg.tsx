"use client";

// FONTS E ESTILOS
import { leotaroFree, satoshiLight } from '@/app/layout';
import styles from "@/public/css/art-vault-bd.module.css";


import { useLayoutEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== "undefined") 
  gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
  slideCount: 4,
  spacingX: 45,
  pWidth: 14,
  pHeight: 18,
  camZ: 30,
  wallAngleY: -0.25,
};

const IMAGES = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80',
  'https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=800&q=80',
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
  'https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&q=80'
];

export default function ArtVaultBg() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    window.scrollTo(0, 0);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f7f5);
    scene.fog = new THREE.Fog(0xf7f7f5, 10, 110);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, CONFIG.camZ);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    const galleryGroup = new THREE.Group();
    scene.add(galleryGroup);
    galleryGroup.rotation.y = CONFIG.wallAngleY;
    galleryGroup.position.x = 8;

    const textureLoader = new THREE.TextureLoader();
    const planeGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);

    const scrollStatus = { current: 0 };
    const totalDist = (CONFIG.slideCount - 1) * CONFIG.spacingX;

    IMAGES.forEach((url, i) => {
      const group = new THREE.Group();
      group.position.set(i * CONFIG.spacingX, 0, 0);

      // O Three.js já gerencia o download em background automaticamente
      const mat = new THREE.MeshBasicMaterial({ map: textureLoader.load(url) });
      const mesh = new THREE.Mesh(planeGeo, mat);

      const edges = new THREE.EdgesGeometry(planeGeo);
      const outline = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x222222 }));

      const shadow = new THREE.Mesh(
        planeGeo,
        new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15 })
      );
      shadow.position.set(0.8, -0.8, -0.5);

      group.add(shadow, mesh, outline);
      galleryGroup.add(group);
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalDist * 20}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const activeIndex = Math.round(self.progress * (CONFIG.slideCount - 1));
            if (containerRef.current) {
              const slides = containerRef.current.querySelectorAll(".slideContent");
              slides.forEach((el, idx) => {
                if (idx === activeIndex) el.classList.add("active");
                else el.classList.remove("active");
              });
            }
          },
        },
      });

      tl.to(scrollStatus, {
        current: totalDist,
        ease: "none",
        onUpdate: () => {
          const val = scrollStatus.current;
          camera.position.x = val * Math.cos(CONFIG.wallAngleY);
          camera.position.z = CONFIG.camZ - (val * Math.sin(CONFIG.wallAngleY));
        },
      });
    }, containerRef);

    setTimeout(() => ScrollTrigger.refresh(), 100);

    let animationFrameId = 0;
    const animate = () => {
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const onMouseMove = (e: { clientX: number; clientY: number; }) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      gsap.to(camera.rotation, { x: y * 0.05, y: -x * 0.05, duration: 0.5 });
    };
    window.addEventListener("mousemove", onMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      
      cancelAnimationFrame(animationFrameId);
      
      if (ctx) ctx.revert();

      planeGeo.dispose();
      renderer.dispose();

      galleryGroup.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });

      if (canvasRef.current && canvasRef.current.contains(renderer.domElement)) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (<>
    <section ref={containerRef} id="gallery-wrapper" style={{ height: '100vh' }}>
      <Link href={"/"} className={`${styles.logo} ${leotaroFree.className}`}>ART VAULT GALLERY</Link>
      <div ref={canvasRef} className={styles.canvasContainer} />
          <div className={styles.uiLayer}>
              <div className={` ${styles.slideContent} slideContent`} id="slide-0">
                  <span className={`${styles.catalogueNumber} catalogueNumber`}>01 / Collection</span>
                  <h1 className={leotaroFree.className}>Ethereal <div></div>Form</h1>
                  <div className={`${styles.description} description ${satoshiLight.className}`}>
                      Captured in the gentle light of early morning, this piece explores the boundaries between reality and abstraction. The soft textures invite the viewer to look closer, revealing layers of complexity hidden within the simplicity.
                  </div>
                  <div className={` ${styles.metaGrid} metaGrid`}>
                      <span className={styles.metaLabel}>Artist</span> <span className={styles.metaValue}>Elena Varas</span>
                      <span className={styles.metaLabel}>Year</span> <span className={styles.metaValue}>2023</span>
                      <span className={styles.metaLabel}>Medium</span> <span className={styles.metaValue}>Oil on Linen</span>
                  </div>
              </div>

              <div className={` ${styles.slideContent} slideContent`} id="slide-1">
                  <span className={`${styles.catalogueNumber} catalogueNumber`}>02 / Collection</span>
                  <h1 className={leotaroFree.className}>Geometric <div></div>Silence</h1>
                  <div className={`${styles.description} ${satoshiLight.className}`}>
                      A study in precision and balance. By stripping away organic chaos, the artist reveals the quiet mathematical purity that underlies nature. The composition demands a moment of stillness from its observer.
                  </div>
                  <div className={` ${styles.metaGrid} metaGrid`}>
                      <span className={styles.metaLabel}>Artist</span> <span className={styles.metaValue}>Marcus Thorne</span>
                      <span className={styles.metaLabel}>Year</span> <span className={styles.metaValue}>2024</span>
                      <span className={styles.metaLabel}>Medium</span> <span className={styles.metaValue}>Acrylic & Graphite</span>
                  </div>
              </div>

              <div className={` ${styles.slideContent} slideContent`} id="slide-2">
                  <span className={`${styles.catalogueNumber} catalogueNumber`}>03 / Collection</span>
                  <h1 className={leotaroFree.className}>Fading <div></div>Horizons</h1>
                  <div className={`${styles.description} ${satoshiLight.className}`}>
                      The horizon line serves as a metaphor for the future —always visible yet forever out of reach. The bleeding colors suggest the fluidity of memory and the inevitable passage of time.
                  </div>
                  <div className={` ${styles.metaGrid} metaGrid`}>
                      <span className={styles.metaLabel}>Artist</span> <span className={styles.metaValue}>Isabella Rossi</span>
                      <span className={styles.metaLabel}>Year</span> <span className={styles.metaValue}>2022</span>
                      <span className={styles.metaLabel}>Medium</span> <span className={styles.metaValue}>Watercolor Wash</span>
                  </div>
              </div>

              <div className={` ${styles.slideContent} slideContent`} id="slide-3">
                  <span className={`${styles.catalogueNumber} catalogueNumber`}>04 / Collection</span>
                  <h1 className={leotaroFree.className}>The <div></div>Void</h1>
                  <div className={`${styles.description} ${satoshiLight.className}`}>
                      A minimalist approach challenging the viewer to find meaning in emptiness. The texture of the canvas itself becomes the primary subject, inviting a purely tactile visual experience without distraction.
                  </div>
                  <div className={` ${styles.metaGrid} metaGrid`}>
                      <span className={styles.metaLabel}>Artist</span> <span className={styles.metaValue}>Unknown</span>
                      <span className={styles.metaLabel}>Year</span> <span className={styles.metaValue}>Late 20th C.</span>
                      <span className={styles.metaLabel}>Medium</span> <span className={styles.metaValue}>Mixed Media</span>
                  </div>
              </div>
          </div>{/* ui-layer */}
    
      <div className={styles.scrollHint}>Scroll to explore</div>
    </section>

            <div className={`${styles.cursorDot} cursorDot`}></div>
        <div className={`${styles.cursorOutline} cursorOutline`}></div>
  </>);
}