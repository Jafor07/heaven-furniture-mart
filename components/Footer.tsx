import {
  ADDRESS,
  EMAIL_ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  YOUTUBE_URL,
} from "@/lib/constants";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Showroom", href: "#showroom" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-teal text-ivory">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_0.8fr_1fr] md:gap-10 md:py-16">
        <Reveal>
          <div>
            <p className="font-display text-2xl text-ivory md:text-3xl">Heaven Furniture Mart</p>
            <p className="mt-3 text-[0.64rem] uppercase tracking-[0.2em] text-wood-tan/85 sm:text-sm">
              Luxury Bespoke Furniture & Interior Styling
            </p>
            <div className="mt-6 space-y-2 text-sm text-ivory/75 md:mt-8">
              <p>{ADDRESS}</p>
              <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`} className="block">
                {PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL_ADDRESS}`} className="block">
                {EMAIL_ADDRESS}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="text-[0.64rem] font-medium uppercase tracking-[0.24em] text-wood-tan/90 md:text-xs">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80 md:mt-6">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-opacity hover:opacity-80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div>
            <p className="text-[0.64rem] font-medium uppercase tracking-[0.24em] text-wood-tan/90 md:text-xs">
              Social
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/80 md:mt-6">
              <li>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-[0.62rem] uppercase tracking-[0.18em] text-ivory/60 md:flex-row md:items-center md:justify-between md:text-xs">
          <span>© 2026 Heaven Furniture Mart</span>
          <span>Designed. Crafted. Customized.</span>
        </Container>
      </div>
    </footer>
  );
}
