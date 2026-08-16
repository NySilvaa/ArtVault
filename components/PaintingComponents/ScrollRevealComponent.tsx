"use client";

import styles from "@/public/css/painting.module.css";
import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
    text: string;
    className?: string;
}

export default function ScrollRevealText({
    text,
    className,
}: RevealTextProps) {

    const ref = useRef<HTMLParagraphElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 20%"],
    });

    const letters = text.split("");

    return (
        <h1
            ref={ref}
            className={`${className} ${styles.textReveal}`}
            style={{
                display: "flex",
                flexWrap: "wrap",
                lineHeight: 1.2,
            }}
        >
            {letters.map((letter, index) => {

                const start = index / letters.length;
                const end = start + 0.08;

                return (
                    <AnimatedLetter
                        key={index}
                        progress={scrollYProgress}
                        range={[start, end]}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </AnimatedLetter>
                );

            })}
        </h1>
    );
}

interface AnimatedLetterProps {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
}

function AnimatedLetter({
    children,
    progress,
    range,
}: AnimatedLetterProps) {

    const opacity = useTransform(
        progress,
        range,
        [0.03, 1]
    );

    return (
        <motion.span
            style={{
                opacity,
                display: "inline-block",
                whiteSpace: "pre"
            }}
        >
            {children}
        </motion.span>
    );
}