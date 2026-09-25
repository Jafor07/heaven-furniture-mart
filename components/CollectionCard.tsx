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
      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-brown/10 bg-white/70 ${className}`}
    >
      {/* Square frame matches the square source photos, so their printed
          Heaven logo and edges are never cropped */}
      <div className="relative aspect-square w-full overflow-hidden bg-charcoal-teal">
        <Image
          src={image}
          alt={`${title} collection by Heaven Furniture Mart`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-brown/10 px-6 py-5">
        <h3 className="font-display text-2xl leading-tight text-brown">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-brown/75 sm:text-[0.95rem]">
          {tagline}
        </p>
      </div>
    </article>
  );
}
