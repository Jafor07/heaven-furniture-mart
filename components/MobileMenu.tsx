"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";

import { WHATSAPP_URL } from "@/lib/constants";

const menuLinks = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" },
];

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-charcoal-teal/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            id="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col bg-ivory p-6"
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between pb-8">
              <p className="font-display text-2xl text-brown">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                className="rounded-md p-2 text-brown"
                onClick={onClose}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-5 pt-6" aria-label="Mobile navigation">
              {menuLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                  onClick={onClose}
                  className="text-lg text-brown"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mt-6 inline-flex items-center justify-center bg-brass px-5 py-3 text-sm font-medium tracking-wide text-charcoal-teal"
              onClick={onClose}
            >
              Request a Quote
            </motion.a>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
