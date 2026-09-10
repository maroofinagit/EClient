"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import styles from "./Hero.module.css";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

export default function Hero() {
  // The hero is a normal block in the page now — no position: sticky, no
  // extra scroll height. It scrolls up and off with everything else,
  // including your existing nav. sectionRef just tells useScroll which
  // element's position in the viewport to track.
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // progress = 0 when the section's top edge enters the bottom of the
    // viewport, progress = 1 when its bottom edge exits the top of the
    // viewport — so it tracks the whole time the hero is visible,
    // during ordinary scrolling.
    offset: ["start end", "end start"],
  });

  // Background image sits in a slightly oversized wrapper (see CSS) and
  // drifts a small amount as you scroll past — that's the whole parallax
  // effect. It's subtle on purpose: it should read as depth, not as a
  // separate thing happening on its own timeline.
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-20%", "20%"]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["50%", "-50%"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0, 2, 4]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1, 0]
  );

  return (
    <section ref={sectionRef} className={`${styles.hero} h-[60vh] md:h-[80vh]`}>
      {/* <motion.div className={styles.bg} style={{ y: bgY }}>
        <Image
          src="/heroBanner.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </motion.div> */}

      <motion.div className={styles.bg} style={{ y: bgY }}>
        <video
          src="/videoBanner.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/heroBanner.png"
          className={styles.bgVideo}
        />

        <div className={styles.bgOverlay} />
      </motion.div>

      <motion.div className={` ${playfair.className} ${styles.content}`} style={{ y: textY }}>
        <span className={` top-10 left-10 absolute tracking-[-0.12em] text-2xl ${playfair.className} `}>
          CyberMart
        </span>

        <span className={`text-base tracking-[-0.12em] ${styles.badge}`}>LIMITED TIME OFFER</span>

        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ y: 0, opacity: 1 }}
          className={` ${playfair.className} tracking-[-0.12em] text-2xl md:text-[6rem] ${styles.headline}`} style={{ scale, opacity }}>
          Elevate Your <em>Style</em>
        </motion.h1>

        <p className={`${styles.subhead}`}>
          Discover premium collections curated for modern living.
        </p>

        <div className={`${styles.meta} text-sm md:text-lg`}>
          <span>@maroofalysyed</span>
          <span>www.cybermart.vercel.app</span>
        </div>
      </motion.div>
    </section>
  );
}
