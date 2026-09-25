"use client";

import { Menu } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

import MobileMenu from "@/components/MobileMenu";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
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

      <div className="border-b border-white/10 bg-charcoal-teal/95 backdrop-blur-sm">
        <Container className="flex items-center justify-between gap-6 py-3.5 md:py-4">
          <Logo preload />

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ivory/85 transition-colors hover:text-ivory focus-visible:text-ivory"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
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
            className="inline-flex items-center justify-center -mr-2 rounded-md p-2 text-ivory lg:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </Container>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
