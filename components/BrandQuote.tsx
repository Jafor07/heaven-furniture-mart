import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function BrandQuote() {
  return (
    <section className="bg-[#efe6dc]" aria-label="Brand quote">
      <Container className="section-y">
        <Reveal className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs font-medium tracking-[0.28em] text-brass-deep">
            OUR PHILOSOPHY
          </p>
          <blockquote className="font-display text-2xl leading-[1.3] text-brown sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.25]">
            “At Heaven Furniture Mart, we believe furniture is more than just
            function; it is a reflection of lifestyle, taste, and comfort. Every
            piece we create is designed to bring lasting elegance into the homes
            of our clients.”
          </blockquote>
          <p className="mt-8 text-right text-xs font-medium uppercase tracking-[0.14em] text-brown/80 md:text-sm">
            Abul Kalam Bhuiyan, Managing Director
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
