"use client";

import { leotaroFree, satoshiLight } from '@/app/layout';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Registramos o plugin do GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // --- SETUP THREE.JS ---
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

    const textureLoader = new THREE.TextureLoader();
    const planeGeo = new THREE.PlaneGeometry(CONFIG.pWidth, CONFIG.pHeight);
    const paintingGroups: THREE.Group[] = [];

    // Criar as pinturas
    IMAGES.forEach((url, i) => {
      const group = new THREE.Group();
      group.position.set(i * CONFIG.spacingX, 0, 0);
      
      const mat = new THREE.MeshBasicMaterial({ map: textureLoader.load(url) });
      const mesh = new THREE.Mesh(planeGeo, mat);
      
      const edges = new THREE.EdgesGeometry(planeGeo);
      const outline = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x222222 }));

      const shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15 });
      const shadow = new THREE.Mesh(planeGeo, shadowMat);
      shadow.position.set(0.8, -0.8, -0.5);

      group.add(shadow, mesh, outline);
      galleryGroup.add(group);
      paintingGroups.push(group);
    });

    galleryGroup.rotation.y = CONFIG.wallAngleY;
    galleryGroup.position.x = 8;

    // --- LÓGICA DE SCROLL COM GSAP ---
    // Este objeto servirá para o GSAP animar o valor numérico do scroll
    const scrollStatus = { current: 0 };
    const totalDist = (CONFIG.slideCount - 1) * CONFIG.spacingX;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalDist * 20}`, // Define a "duração" do scroll preso
        pin: true,                  // TRAVA a tela aqui
        scrub: 1,                   // Suaviza o movimento
        onUpdate: (self) => {
          // Atualiza a UI baseada no progresso (0 a 1)
          const activeIndex = Math.round(self.progress * (CONFIG.slideCount - 1));
          document.querySelectorAll('.slide-content').forEach((el, idx) => {
            if (idx === activeIndex) el.classList.add('active');
            else el.classList.remove('active');
          });
        }
      }
    });

    tl.to(scrollStatus, {
      current: totalDist,
      ease: "none",
      onUpdate: () => {
        const val = scrollStatus.current;
        const xMove = val * Math.cos(CONFIG.wallAngleY);
        const zMove = val * Math.sin(CONFIG.wallAngleY);
        camera.position.x = xMove;
        camera.position.z = CONFIG.camZ - zMove;
      }
    });

    // Interatividade do mouse (Look around)
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      gsap.to(camera.rotation, {
        x: y * 0.05,
        y: -x * 0.05,
        duration: 0.5
      });
    };
    window.addEventListener('mousemove', onMouseMove);

    // Loop de renderização
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // CLEANUP (Importante para React!)
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={containerRef} id="gallery-wrapper" style={{ height: '100vh' }}>
      <div className={`logo ${leotaroFree.className}`}>ART VAULT GALLERY</div>
      <div ref={canvasRef} id="canvas-container" />
          <div id="ui-layer">
        
        <div className="slide-content" id="slide-0">
            <span className="catalogue-number">01 / Collection</span>
            <h1 className={leotaroFree.className}>Ethereal <div></div>Form</h1>
            <div className={`description ${satoshiLight.className}`}>
                Captured in the gentle light of early morning, this piece explores the boundaries between reality and abstraction. The soft textures invite the viewer to look closer, revealing layers of complexity hidden within the simplicity.
            </div>
            <div className="meta-grid">
                <span className="meta-label">Artist</span> <span className="meta-value">Elena Varas</span>
                <span className="meta-label">Year</span> <span className="meta-value">2023</span>
                <span className="meta-label">Medium</span> <span className="meta-value">Oil on Linen</span>
            </div>
        </div>

        <div className="slide-content" id="slide-1">
            <span className="catalogue-number">02 / Collection</span>
            <h1 className={leotaroFree.className}>Geometric <div></div>Silence</h1>
            <div className={`description ${satoshiLight.className}`}>
                A study in precision and balance. By stripping away organic chaos, the artist reveals the quiet mathematical purity that underlies nature. The composition demands a moment of stillness from its observer.
            </div>
            <div className="meta-grid">
                <span className="meta-label">Artist</span> <span className="meta-value">Marcus Thorne</span>
                <span className="meta-label">Year</span> <span className="meta-value">2024</span>
                <span className="meta-label">Medium</span> <span className="meta-value">Acrylic & Graphite</span>
            </div>
        </div>

        <div className="slide-content" id="slide-2">
            <span className="catalogue-number">03 / Collection</span>
            <h1 className={leotaroFree.className}>Fading <div></div>Horizons</h1>
            <div className={`description ${satoshiLight.className}`}>
                The horizon line serves as a metaphor for the future—always visible yet forever out of reach. The bleeding colors suggest the fluidity of memory and the inevitable passage of time.
            </div>
            <div className="meta-grid">
                <span className="meta-label">Artist</span> <span className="meta-value">Isabella Rossi</span>
                <span className="meta-label">Year</span> <span className="meta-value">2022</span>
                <span className="meta-label">Medium</span> <span className="meta-value">Watercolor Wash</span>
            </div>
        </div>

        <div className="slide-content" id="slide-3">
            <span className="catalogue-number">04 / Collection</span>
            <h1 className={leotaroFree.className}>The <div></div>Void</h1>
            <div className={`description ${satoshiLight.className}`}>
                A minimalist approach challenging the viewer to find meaning in emptiness. The texture of the canvas itself becomes the primary subject, inviting a purely tactile visual experience without distraction.
            </div>
            <div className="meta-grid">
                <span className="meta-label">Artist</span> <span className="meta-value">Unknown</span>
                <span className="meta-label">Year</span> <span className="meta-value">Late 20th C.</span>
                <span className="meta-label">Medium</span> <span className="meta-value">Mixed Media</span>
            </div>
        </div>
    </div>
    
    <div className="scroll-hint">Scroll to explore</div>
    </section>
  );
}