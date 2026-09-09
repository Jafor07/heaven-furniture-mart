import Reveal from "@/components/motion/Reveal";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  "2020 Founded",
  "2021 Opened the Agrabad showroom",
  "2024–2025 Exhibited at the International Furniture Fair, Chattogram",
  "2025 Joined the Chamber of Commerce",
  "2026 Received nationwide BFIOA recognition",
];

export default function Timeline() {
  return (
    <section id="timeline" className="bg-ivory" aria-label="Milestones timeline">
      <Container className="py-20 md:py-32">
        <Reveal>
          <SectionHeading
            label="OUR STORY"
            title="Milestones built on craft, trust, and growth."
            className="max-w-3xl"
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-5 md:gap-5">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone} delay={index * 0.08}>
              <div className="relative flex gap-4 rounded-[1.5rem] border border-brown/10 bg-white/40 p-4 md:flex-col md:p-6 md:min-h-[220px]">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brass bg-ivory text-sm font-medium text-brass md:mb-4 md:h-10 md:w-10">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-brown/90 sm:text-base md:text-base">
                  {milestone}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
