import Image from "next/image";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
  href?: string;
  onClick?: () => void;
  preload?: boolean;
};

// Official logo with its background removed. "light" has white lettering for
// dark surfaces; "dark" has charcoal lettering for ivory surfaces.
const LOGO_SRC = {
  light: "/images/brand/logo-light.png",
  dark: "/images/brand/logo-dark.png",
};

export default function Logo({
  tone = "light",
  className = "h-10 md:h-12",
  href = "#top",
  onClick,
  preload = false,
}: LogoProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-label="Heaven Furniture Mart, back to top"
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src={LOGO_SRC[tone]}
        alt="Heaven Furniture Mart"
        width={1000}
        height={265}
        preload={preload}
        className={`w-auto ${className}`}
      />
    </a>
  );
}
