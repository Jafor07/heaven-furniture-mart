import {
  ADDRESS,
  PHONE_NUMBER,
  SHOWROOM_MAP_URL,
} from "@/lib/constants";
import ImageReveal from "@/components/motion/ImageReveal";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Showroom() {
  return (
    <section id="showroom" className="bg-ivory" aria-label="Showroom visit">
      <Container className="grid gap-8 py-20 sm:gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-16 md:py-24">
        <Reveal className="order-2 md:order-1">
          <div>
            <SectionHeading
              label="SHOWROOM"
              title="Come See It in Person."
              className="max-w-xl"
            />
            <p className="mt-6 text-base leading-relaxed text-brown/85 sm:text-lg md:mt-8">
              {ADDRESS}
            </p>
            <div className="mt-6 flex flex-col gap-4 text-base text-brown/85 md:mt-8">
              <a
                href={SHOWROOM_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm font-medium tracking-[0.18em] text-brass underline decoration-wood-tan underline-offset-8"
              >
                Visit the Showroom
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s+/g, "")}`}
                className="w-fit text-base font-medium text-brown"
              >
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 relative h-72 overflow-hidden rounded-4xl border border-brown/10 sm:h-80 md:order-2 md:h-140">
          <ImageReveal
            src="/images/showroom/images.jpeg"
            alt="Heaven Furniture Mart showroom in Agrabad, Chattogram"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
