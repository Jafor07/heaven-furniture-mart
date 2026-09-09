"use client";

import Image from "next/image";
import { motion } from "motion/react";

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

export default function ImageReveal({
  src,
  alt,
  className = "",
  sizes = "100vw",
}: ImageRevealProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10 bg-charcoal-teal"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <Image src={src} alt={alt} fill className={className} sizes={sizes} />
      </motion.div>
    </div>
  );
}
