"use client";

import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  range?: [number, number];
};

export default function Parallax({
  children,
  className = "",
  range = [0, 50],
}: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], range);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
