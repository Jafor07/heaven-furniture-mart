"use client";

import { Menu, X } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import MobileMenu from "@/components/MobileMenu";
import { WHATSAPP_URL } from "@/lib/constants";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.18,
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-[2px] origin-left bg-brass"
        style={{ scaleX: progress }}
      />

      <div className="border-b border-white/10 bg-charcoal-teal/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-10 md:py-4">
          <a
            href="#top"
            className="font-display text-lg text-ivory md:text-2xl"
            aria-label="Go to top"
          >
            Heaven Furniture Mart
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ivory/80 transition-opacity hover:text-ivory focus-visible:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brass px-5 py-2.5 text-sm font-medium tracking-wide text-charcoal-teal"
            >
              Request a Quote
            </a>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-ivory md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
