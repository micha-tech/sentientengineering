import Image from "next/image";

export default function ImagePanel({
  src,
  alt,
  caption,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`premium-card relative overflow-hidden rounded-xl ${className}`}>
      <div className="relative aspect-[4/3] sm:aspect-[16/9]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent" />
      </div>
      {caption ? (
        <figcaption className="absolute bottom-4 left-4 right-4 border border-white/10 bg-navy/85 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-200 backdrop-blur-md">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
