import { EMAIL_ADDRESS, PHONE_NUMBER, WHATSAPP_URL } from "@/lib/constants";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "@/components/motion/Reveal";
import QuoteForm from "@/components/QuoteForm";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-ivory" aria-label="Final call to action">
      <Container className="py-24 md:py-32">
        <Reveal className="rounded-[2rem] bg-charcoal-teal px-6 py-14 text-ivory md:px-12 md:py-16">
          <p className="text-xs font-medium tracking-[0.28em] text-brass">
            START YOUR PROJECT
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight text-ivory md:text-5xl lg:text-6xl">
            Let&apos;s Create Something That Belongs to You.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
            Tell us about your space, your taste, and what you have in mind.
          </p>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
            <MagneticButton href={WHATSAPP_URL} external>
              Request a Quote
            </MagneticButton>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
              className="text-base font-medium text-ivory underline decoration-wood-tan underline-offset-8"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="mt-6 inline-block text-base text-ivory/80 underline decoration-wood-tan underline-offset-8"
          >
            {EMAIL_ADDRESS}
          </a>

          <div className="mt-12 border-t border-white/10 pt-8">
            <h3 className="mb-6 text-lg font-medium tracking-[0.18em] text-brass uppercase">
              Share your project details
            </h3>
            <QuoteForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
