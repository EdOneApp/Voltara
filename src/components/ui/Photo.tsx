import { cn } from "../../lib/utils";

/**
 * Affiche une vraie photo (voir src/data/images.ts) au lieu d'un placeholder.
 * `illustration` ajoute un petit badge honnête quand l'image est une photo de
 * stock générique plutôt qu'une vraie photo d'un véhicule ou d'un lieu VOLTARA.
 */
export function Photo({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  illustration = true,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  illustration?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-2xl border border-white/10 bg-graphite", ratio, className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
      {illustration && (
        <span className="absolute left-3 top-3 rounded-full bg-night/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-white/70 backdrop-blur">
          Photo d'illustration
        </span>
      )}
    </div>
  );
}
