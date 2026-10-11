import { lazy, Suspense } from "react";
import type { Station } from "../../data/stations";
import { cn } from "../../lib/utils";

const StationsMapInner = lazy(() => import("./StationsMap").then((m) => ({ default: m.StationsMap })));

function MapFallback({ compact }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-3xl border border-white/10 bg-graphite",
        compact ? "aspect-[16/12]" : "aspect-[16/10]",
      )}
    >
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-volt" />
    </div>
  );
}

export function LazyStationsMap(props: { stations?: Station[]; compact?: boolean }) {
  return (
    <Suspense fallback={<MapFallback compact={props.compact} />}>
      <StationsMapInner {...props} />
    </Suspense>
  );
}
