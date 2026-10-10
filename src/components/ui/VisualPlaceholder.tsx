import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

/**
 * Le cahier des charges interdit de présenter un visuel généré comme une vraie
 * photo. Tant que le shooting VOLTARA n'est pas livré, on assume un placeholder
 * stylé plutôt que de simuler une photo.
 */
export function VisualPlaceholder({
  icon,
  label = "Visuel à venir — shooting VOLTARA",
  tone = "volt",
  className,
}: {
  icon?: ReactNode;
  label?: string;
  tone?: "volt" | "cyan" | "solar" | "go";
  className?: string;
}) {
  const tones: Record<string, string> = {
    volt: "from-volt/25 via-graphite to-graphite",
    cyan: "from-cyan/25 via-graphite to-graphite",
    solar: "from-solar/25 via-graphite to-graphite",
    go: "from-go/25 via-graphite to-graphite",
  };

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br",
        tones[tone],
        className,
      )}
    >
      <div className="noise-bg absolute inset-0" />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        {icon && <div className="text-4xl text-white/70">{icon}</div>}
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">{label}</span>
      </div>
    </div>
  );
}
