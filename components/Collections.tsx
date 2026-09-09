import CollectionCard from "@/components/CollectionCard";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const collectionItems = [
  {
    title: "Living Room",
    tagline: "Spaces made for slowing down.",
    image: "/images/living/living.jpeg",
    className: "md:col-span-7",
  },
  {
    title: "Bedroom",
    tagline: "Comfort, crafted with intention.",
    image: "/images/bedroom/bedroom.jpeg",
    className: "md:col-span-5",
  },
  {
    title: "Dining",
    tagline: "Made for meals worth lingering over.",
    image: "/images/dining/dinning1.jpeg",
    className: "md:col-span-5",
  },
  {
    title: "Office & Study",
    tagline: "Workspaces with character.",
    image: "/images/office/office2.jpeg",
    className: "md:col-span-7",
  },
  {
    title: "Bespoke",
    tagline: "Not off the shelf. Made for you.",
    image: "/images/bespoke/bespoke4.jpeg",
    className: "md:col-span-12",
  },
];

export default function Collections() {
  return (
    <section id="collections" aria-label="Collections" className="bg-ivory">
      <Container className="py-24 md:py-32">
        <Reveal>
          <SectionHeading
            label="OUR COLLECTIONS"
            title="Purposeful pieces, tailored to your life."
            className="max-w-3xl"
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:gap-5 md:mt-12 md:grid-cols-12 md:gap-6">
          {collectionItems.map((item) => (
            <Reveal key={item.title} className={item.className}>
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
