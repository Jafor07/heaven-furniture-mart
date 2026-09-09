"use client";

import { motion, useReducedMotion } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function MagneticButton({
  href,
  children,
  className = "",
  external = false,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left - rect.width / 2) * 0.12;
    const offsetY = (event.clientY - rect.top - rect.height / 2) * 0.12;

    event.currentTarget.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  const resetTransform = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = "translate(0, 0)";
  };

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTransform}
      className={`inline-flex items-center justify-center bg-brass px-7 py-3.5 text-sm font-medium tracking-wide text-charcoal-teal transition-transform duration-200 ${className}`}
      whileHover={reduceMotion ? undefined : { scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      {children}
    </motion.a>
  );
}
