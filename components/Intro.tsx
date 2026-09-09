import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Intro() {
  return (
    <section id="about" className="bg-ivory">
      <Container className="py-24 md:py-36">
        <Reveal>
          <SectionHeading
            label="ABOUT HEAVEN"
            title="Furniture should reflect the way you live."
            className="max-w-3xl"
          />
        </Reveal>
        <Reveal className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-brown/90 md:text-lg">
          <p>
            Heaven Furniture Mart creates bespoke furniture and interior
            styling from Chattogram — a luxury studio, not an online shop.
          </p>
          <p>
            Founded in 2020, we design, craft, and customize every piece around
            the customer&apos;s space, size, taste, and way of living. Visit
            our showroom on Agrabad Access Road to see the work in person.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
