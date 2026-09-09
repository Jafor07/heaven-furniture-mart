type SectionHeadingProps = {
  label?: string;
  title: string;
  className?: string;
};

export default function SectionHeading({
  label,
  title,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {label ? (
        <p className="mb-4 text-xs font-medium tracking-[0.28em] text-brass">
          {label}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-brown md:text-5xl lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}
