type SectionHeadingProps = {
  label?: string;
  title: string;
  className?: string;
  /** "dark" text for light sections, "light" text for dark sections */
  tone?: "dark" | "light";
};

export default function SectionHeading({
  label,
  title,
  className = "",
  tone = "dark",
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div className={className}>
      {label ? (
        <p
          className={`mb-4 text-xs font-medium tracking-[0.28em] ${
            isLight ? "text-brass" : "text-brass-deep"
          }`}
        >
          {label}
        </p>
      ) : null}
      <h2
        className={`font-display text-[clamp(1.75rem,8vw,2.25rem)] leading-[1.12] sm:text-4xl md:text-[2.75rem] lg:text-5xl ${
          isLight ? "text-ivory" : "text-brown"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
