import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  { year: "2020", text: "Founded" },
  { year: "2021", text: "Opened the Agrabad showroom" },
  {
    year: "2024–2025",
    text: "Exhibited at the International Furniture Fair, Chattogram",
  },
  { year: "2025", text: "Joined the Chamber of Commerce" },
  { year: "2026", text: "Received nationwide BFIOA recognition" },
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-ivory" aria-label="Milestones timeline">
      <Container className="section-y">
        <Reveal>
          <SectionHeading
            label="OUR STORY"
            title="Milestones built on craft, trust, and growth"
            className="max-w-3xl"
          />
        </Reveal>

        <ol className="mt-10 grid gap-4 md:mt-14 lg:grid-cols-5 lg:gap-5">
          {milestones.map((milestone, index) => (
            <li key={milestone.year}>
              <Reveal
                delay={index * 0.08}
                className="flex h-full items-start gap-5 rounded-2xl border border-brown/10 bg-white/50 p-5 md:p-6 lg:flex-col lg:gap-0"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-brass text-sm font-medium text-brass-deep lg:mb-6">
                  {index + 1}
                </span>
                <div>
                  <p className="font-display text-2xl leading-none text-brown">
                    {milestone.year}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brown/85 md:text-base">
                    {milestone.text}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
