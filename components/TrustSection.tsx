import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const trustPoints = [
  "Free design consultation",
  "Fully bespoke, not mass-produced",
  "Premium wood & materials, skilled in-house craftsmanship",
  "Large physical showroom in Agrabad",
  "Delivery & installation included",
  "Easy payment options",
  "Trusted by hundreds of happy homeowners",
];

export default function TrustSection() {
  return (
    <section id="trust" className="bg-ivory" aria-label="Why people trust Heaven Furniture Mart">
      <Container className="py-20 md:py-32">
        <Reveal>
          <SectionHeading
            label="WHY CLIENTS CHOOSE US"
            title="Thoughtful details. Honest craft. A home that feels like yours."
            className="max-w-3xl"
          />
        </Reveal>

        <ul className="mt-8 max-w-4xl space-y-4 border-t border-brown/15 pt-6 text-base leading-relaxed text-brown/85 sm:mt-10 sm:text-lg md:mt-12 md:space-y-5 md:pt-8 md:text-xl">
          {trustPoints.map((point, index) => (
            <Reveal key={point} delay={index * 0.06}>
              <li className="border-b border-brown/15 pb-4 md:pb-5">{point}</li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
