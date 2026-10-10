import type { ReactNode } from "react";
import { SignalHigh, Wifi, BatteryFull } from "lucide-react";
import { cn } from "../../lib/utils";

export function PhoneMockup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-64 select-none", className)}>
      <div className="relative aspect-[9/19.3] overflow-hidden rounded-[2.4rem] border-[6px] border-[#1c222c] bg-night shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="absolute left-1/2 top-0 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-[#1c222c]" />
        <div className="relative flex items-center justify-between px-5 pt-2.5 text-[10px] font-mono text-white">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <SignalHigh size={11} />
            <Wifi size={11} />
            <BatteryFull size={13} />
          </span>
        </div>
        <div className="relative flex h-[calc(100%-22px)] flex-col overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
