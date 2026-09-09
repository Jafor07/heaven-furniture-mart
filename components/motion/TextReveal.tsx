"use client";

import { motion, useReducedMotion } from "motion/react";

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function TextReveal({
  children,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.span>
  );
}
