'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';

const galleryItems = [
  { id: 'boxGallery1', title: 'Sanemi Shinazugawa', content: "/images/pantingbg1.jpg" },
  { id: 'boxGallery2', title: 'Naruto Uzumaki', content: "/images/pantingbg2.jpg" },
  { id: 'boxGallery3', title: 'Tanjiro Kamado', content: "/images/pantingbg3.jpg" },
  { id: 'boxGallery4', title: 'Sasuke Uchiha', content: "/images/pantingbg4.jpg" },
  { id: 'boxGallery5', title: 'Nezuko Kamado', content: "/images/pantingbg5.jpg" },
  { id: 'boxGallery6', title: 'Kakashi Hatake', content: "/images/pantingbg6.jpg" },
];

export default function RotatingDeck() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mapeia o scroll do contêiner inteiro
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full light-section" 
      // Altura total dinâmica garante que o scroll demore o tempo exato para todas as transições
      style={{ height: `${galleryItems.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {galleryItems.map((item, index) => (
          <Card 
            key={item.id} 
            index={index} 
            item={item} 
            progress={scrollYProgress} 
            total={galleryItems.length} 
          />
        ))}
      </div>
    </div>
  );
}

const Card = ({ index, item, progress, total }: any) => {
  const totalSteps = total - 1; 

  // Arrays que vão alimentar o useTransform do Framer Motion
  const inputs = [];
  const xOutputs = [];
  const yOutputs = [];
  const scaleOutputs = [];
  const rotateOutputs = [];
  const opacityOutputs = [];
  const zIndexOutputs = [];

  for (let step = 0; step <= totalSteps; step++) {
    inputs.push(step / totalSteps);
    
    let pos = index - step;
    if (pos < 0) pos += total;
    
    xOutputs.push("0%");
    yOutputs.push(`${pos * 24}px`); 
    scaleOutputs.push(1 - pos * 0.05);
    rotateOutputs.push(0);
    // As últimas cartas ficam invisíveis até começarem a avançar, para não vermos o 'teleporte'
    opacityOutputs.push(pos >= total - 1 ? 0 : 1 - pos * 0.1); 
    zIndexOutputs.push(100 - pos);

    if (pos === 0 && step < totalSteps) {
      // 1. Desliza para a direita, rotaciona e some
      inputs.push((step + 0.4) / totalSteps);
      xOutputs.push("120%");
      yOutputs.push("-5%");
      scaleOutputs.push(0.95);
      rotateOutputs.push(15);
      opacityOutputs.push(0);
      zIndexOutputs.push(100);
      inputs.push((step + 0.5) / totalSteps);
      xOutputs.push("0%");
      yOutputs.push(`${(total - 1) * 24}px`);
      scaleOutputs.push(1 - (total - 1) * 0.05);
      rotateOutputs.push(0);
      opacityOutputs.push(0);
      zIndexOutputs.push(100 - (total - 1));
    }
  }

  const x = useTransform(progress, inputs, xOutputs);
  const y = useTransform(progress, inputs, yOutputs);
  const scale = useTransform(progress, inputs, scaleOutputs);
  const rotate = useTransform(progress, inputs, rotateOutputs);
  const opacity = useTransform(progress, inputs, opacityOutputs);
  
  const zIndexRaw = useTransform(progress, inputs, zIndexOutputs);
  const zIndex = useTransform(zIndexRaw, (val) => Math.round(val));

  return (
    <motion.div
      style={{ x, y, scale, rotate, opacity, zIndex: zIndex as any }}
      className={`absolute flex h-[60vh] w-[85vw] max-w-sm flex-col items-center justify-between rounded-3xl p-6 shadow-2xl ${item.color} border border-white/10`}
    >
      <div className="w-full h-full rounded-2xl mb-4 flex items-center justify-center border border-white/5 shadow-inner boxGallery">
        <Image src={item.content} width={750} height={750} alt={item.title} />
      </div>
    </motion.div>
  );
};