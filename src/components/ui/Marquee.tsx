import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Marquee({
  items,
  className,
  duration = 32,
}: {
  items: ReactNode[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={cn("group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]", className)}>
      <div
        className="flex w-max gap-12 group-hover:[animation-play-state:paused]"
        style={{ animation: `voltara-marquee ${duration}s linear infinite` }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {item}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes voltara-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
