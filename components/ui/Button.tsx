type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center bg-brass px-7 py-3.5 text-sm font-medium tracking-wide text-charcoal-teal ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
