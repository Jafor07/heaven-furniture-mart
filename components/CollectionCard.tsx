import Image from "next/image";

type CollectionCardProps = {
  title: string;
  tagline: string;
  image: string;
  className?: string;
};

export default function CollectionCard({
  title,
  tagline,
  image,
  className = "",
}: CollectionCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-brown/10 bg-charcoal-teal ${className}`}
    >
      <div className="relative h-80 w-full overflow-hidden sm:h-[420px] md:h-[530px]">
        <Image
          src={image}
          alt={`${title} collection by Heaven Furniture Mart`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-teal/75 via-charcoal-teal/10 to-charcoal-teal/40" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 text-ivory sm:p-6 md:p-8">
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-wood-tan/90 sm:text-xs">
          {title}
        </p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-ivory/90 sm:text-base md:text-lg">
          {tagline}
        </p>
      </div>
    </article>
  );
}
