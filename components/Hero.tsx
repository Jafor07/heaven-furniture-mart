"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

import MagneticButton from "@/components/motion/MagneticButton";
import Parallax from "@/components/motion/Parallax";
import { HERO_IMAGE, WHATSAPP_URL } from "@/lib/constants";
import Container from "@/components/ui/Container";

// Phrases never break internally, so the headline wraps as two balanced
// lines ("Furniture, Crafted / Around You") instead of one word per line.
const heroLines = ["Furniture, Crafted", "Around You"];

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
        className="absolute inset-0 bg-gradient-to-t from-charcoal-teal/90 via-charcoal-teal/55 to-charcoal-teal/40"
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={shouldAnimate ? { opacity: 1 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <Container className="relative z-10 pb-14 pt-28 md:pb-24 md:pt-32">
        <motion.p
          className="mb-5 text-xs font-medium tracking-[0.28em] text-wood-tan"
          initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          LUXURY BESPOKE FURNITURE
        </motion.p>

        <h1 className="max-w-4xl font-display text-[clamp(2rem,9.6vw,4.75rem)] leading-[1.04] text-ivory">
          {heroLines.map((line, index) => (
            <Fragment key={line}>
              {index > 0 ? " " : null}
              <motion.span
                className="inline-block whitespace-nowrap"
                initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.2 + index * 0.12,
                }}
              >
                {line}
              </motion.span>
            </Fragment>
          ))}
        </h1>

        <motion.p
          className="mt-5 max-w-xl text-sm leading-relaxed text-ivory/90 sm:text-base md:text-lg"
          initial={shouldAnimate ? { opacity: 0, y: 18 } : false}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.65 }}
        >
          Bespoke furniture and interior styling designed around your space,
          taste, and way of living, from our studio in Agrabad, Chattogram.
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
