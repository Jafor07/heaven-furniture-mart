import CollectionCard from "@/components/CollectionCard";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const collectionItems = [
  {
    title: "Living Room",
    tagline: "Spaces made for slowing down.",
    image: "/images/living/living.jpeg",
  },
  {
    title: "Bedroom",
    tagline: "Comfort, crafted with intention.",
    image: "/images/hero/hero3.jpeg",
  },
  {
    title: "Dining",
    tagline: "Made for meals worth lingering over.",
    image: "/images/dining/dinning1.jpeg",
  },
  {
    title: "Office & Study",
    tagline: "Workspaces with character.",
    image: "/images/office/office3.jpeg",
  },
  {
    title: "Bespoke",
    tagline: "Not off the shelf. Made for you.",
    image: "/images/bespoke/bespoke2.jpeg",
  },
  {
    title: "Interior Styling",
    tagline: "Whole rooms, styled as one.",
    image: "/images/hero/hero .jpeg",
  },
];

export default function Collections() {
  return (
    <section id="collections" aria-label="Collections" className="bg-ivory">
      <Container className="section-y">
        <Reveal>
          <SectionHeading
            label="OUR COLLECTIONS"
            title="Purposeful pieces, tailored to your life"
            className="max-w-3xl"
          />
        </Reveal>

        {/* Equal-size cards; flex-wrap centres any partial last row instead of stretching it */}
        <div className="mt-10 flex flex-wrap justify-center gap-5 md:mt-14 lg:gap-6">
          {collectionItems.map((item) => (
            <Reveal
              key={item.title}
              className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <CollectionCard
                title={item.title}
                tagline={item.tagline}
                image={item.image}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
