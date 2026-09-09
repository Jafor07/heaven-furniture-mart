import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function BrandQuote() {
  return (
    <section className="bg-[#efe6dc]" aria-label="Brand quote">
      <Container className="py-20 md:py-32">
        <Reveal className="mx-auto max-w-5xl">
          <p className="mb-5 text-[0.62rem] font-medium tracking-[0.28em] text-brass sm:text-xs">
            OUR PHILOSOPHY
          </p>
          <blockquote className="font-display text-2.5xl leading-[1.2] text-brown sm:text-4xl md:text-5xl lg:text-6xl">
            “At Heaven Furniture Mart, we believe furniture is more than just
            function; it is a reflection of lifestyle, taste, and comfort. Every
            piece we create is designed to bring lasting elegance into the homes
            of our clients.”
          </blockquote>
          <p className="mt-7 text-right text-[0.68rem] font-medium tracking-[0.14em] text-brown/80 uppercase sm:text-xs md:text-base">
            — Abul Kalam Bhuiyan, Managing Director
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
