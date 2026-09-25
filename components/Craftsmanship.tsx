import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const detailImages = [
  "/images/bedroom/bedroom.jpeg",
  "/images/details/sofa2.jpeg",
  "/images/details/sofa3.jpeg",
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-charcoal-teal" aria-label="Craftsmanship">
      <Container className="section-y">
        <Reveal>
          <SectionHeading
            label="CRAFTSMANSHIP"
            title="Designed, crafted, and customized in-house"
            tone="light"
            className="max-w-2xl"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3 lg:gap-6">
          {detailImages.map((image, index) => (
            <Reveal key={image} delay={index * 0.08}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={image}
                  alt="Close-up of handcrafted furniture detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
