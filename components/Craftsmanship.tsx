import Image from "next/image";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const detailImages = [
  "/images/details/sofa1.jpeg",
  "/images/details/sofa2.jpeg",
  "/images/details/sofa3.jpeg",
];

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-charcoal-teal" aria-label="Craftsmanship">
      <Container className="py-20 md:py-32">
        <Reveal>
          <SectionHeading
            label="CRAFTSMANSHIP"
            title={"Designed. Crafted.\nCustomized."}
            className="max-w-xl text-ivory"
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:gap-5 md:mt-12 md:grid-cols-3">
          {detailImages.map((image, index) => (
            <Reveal key={image} delay={index * 0.08}>
              <div
                className={`relative h-64 overflow-hidden rounded-[1.75rem] border border-white/10 sm:h-72 md:h-90 ${
                  index === 1 ? "md:translate-y-8" : ""
                }`}
              >
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
