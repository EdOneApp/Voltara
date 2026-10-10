import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Badge({
  children,
  tone = "volt",
  className,
}: {
  children: ReactNode;
  tone?: "volt" | "cyan" | "solar" | "go" | "available" | "busy" | "offline" | "neutral";
  className?: string;
}) {
  const tones: Record<string, string> = {
    volt: "bg-volt/15 text-volt border-volt/30",
    cyan: "bg-cyan/15 text-cyan border-cyan/30",
    solar: "bg-solar/15 text-solar border-solar/30",
    go: "bg-go/15 text-go border-go/30",
    available: "bg-status-available/15 text-status-available border-status-available/30",
    busy: "bg-status-busy/15 text-status-busy border-status-busy/30",
    offline: "bg-status-offline/15 text-status-offline border-status-offline/30",
    neutral: "bg-white/10 text-steel border-white/15",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-mono uppercase tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
