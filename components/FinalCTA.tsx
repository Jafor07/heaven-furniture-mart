import { EMAIL_ADDRESS, PHONE_NUMBER, WHATSAPP_URL } from "@/lib/constants";
import MagneticButton from "@/components/motion/MagneticButton";
import Reveal from "@/components/motion/Reveal";
import QuoteForm from "@/components/QuoteForm";
import Container from "@/components/ui/Container";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-ivory" aria-label="Final call to action">
      <Container className="section-y">
        <Reveal className="rounded-2xl bg-charcoal-teal px-5 py-12 text-ivory sm:px-10 md:px-14 md:py-16">
          <p className="text-xs font-medium tracking-[0.28em] text-brass">
            START YOUR PROJECT
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(1.75rem,8vw,2.25rem)] leading-[1.12] text-ivory sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Let&apos;s create something that belongs to you
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
            Tell us about your space, your taste, and what you have in mind.
          </p>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
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
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-brass">
              Share your project details
            </h3>
            <QuoteForm />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
