"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import MagneticButton from "@/components/motion/MagneticButton";
import Parallax from "@/components/motion/Parallax";
import { HERO_IMAGE, WHATSAPP_URL } from "@/lib/constants";
import Container from "@/components/ui/Container";

const heroWords = ["Furniture,", "Crafted", "Around", "You."];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldAnimate = mounted && !reduceMotion;

  return (
    <section
      id="top"
      className="relative flex min-h-[640px] items-end overflow-hidden bg-charcoal-teal md:min-h-screen"
    >
      <Parallax className="absolute inset-0" range={[0, 28]}>
        <Image
          src={HERO_IMAGE}
          alt="Bespoke living room interior styled by Heaven Furniture Mart"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </Parallax>

      <motion.div
        className="absolute inset-0 bg-charcoal-teal/55"
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={shouldAnimate ? { opacity: 1 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <Container className="relative z-10 pb-14 pt-28 md:pb-24 md:pt-32">
        <motion.p
          className="mb-4 text-[0.62rem] font-medium tracking-[0.28em] text-brass sm:text-xs"
          initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          HEAVEN FURNITURE MART
        </motion.p>

        <h1 className="max-w-3xl font-display text-[2.7rem] leading-[0.96] text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
          {heroWords.map((word, index) => (
            <motion.span
              key={word}
              className="mb-0 block"
              initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
              animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2 + index * 0.12,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/90 sm:text-base md:text-lg"
          initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
        >
          Bespoke furniture and interior styling designed around your space,
          taste, and way of living — from our studio in Agrabad, Chattogram.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8"
          initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
        >
          <MagneticButton href={WHATSAPP_URL} external>
            Request a Quote
          </MagneticButton>
          <a
            href="#collections"
            className="text-sm tracking-wide text-ivory underline decoration-wood-tan underline-offset-8"
          >
            Explore Our Work
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
