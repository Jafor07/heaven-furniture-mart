import { WHATSAPP_URL } from "@/lib/constants";
import MagneticButton from "@/components/motion/MagneticButton";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BespokeSection() {
  return (
    <section id="bespoke" className="bg-ivory" aria-label="Bespoke furniture">
      <Container className="grid gap-10 py-24 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-16">
        <Reveal>
          <div>
            <SectionHeading
              label="BESPOKE DESIGN"
              title="Built for Your Space. Made for Your Taste."
              className="max-w-xl"
            />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-brown/85 md:text-lg">
              Every furniture piece is customized around your space, size, style,
              taste, and way of living. We design thoughtfully for the way you
              host, rest, work, and move through home every day.
            </p>
            <MagneticButton href={WHATSAPP_URL} external className="mt-8">
              Request a Bespoke Consultation
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal className="relative h-[420px] overflow-hidden rounded-[2rem] border border-brown/10 bg-charcoal-teal md:h-[560px]">
          <ImageReveal
            src="/images/bespoke/bespoke.jpeg"
            alt="Custom furniture designed for a home by Heaven Furniture Mart"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
