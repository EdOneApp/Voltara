import { useState } from "react";
import { motion } from "framer-motion";
import { stations as allStations, statusLabels, type Station } from "../../data/stations";
import { cn } from "../../lib/utils";

const statusColor: Record<Station["status"], string> = {
  disponible: "bg-status-available shadow-[0_0_14px_2px_rgba(43,214,123,0.7)]",
  occupe: "bg-status-busy shadow-[0_0_14px_2px_rgba(255,159,46,0.7)]",
  "hors-service": "bg-status-offline shadow-[0_0_10px_1px_rgba(255,77,77,0.5)]",
};

const links: [string, string][] = [
  ["dakar-plateau", "abj-plateau"],
  ["abj-plateau", "accra-osu"],
  ["accra-osu", "lagos-vi"],
  ["lagos-vi", "abuja"],
  ["abj-plateau", "yakro"],
  ["yakro", "bouake"],
  ["lagos-vi", "nairobi-cbd"],
];

export function StationsMap({ stations = allStations, compact = false }: { stations?: Station[]; compact?: boolean }) {
  const [active, setActive] = useState<string | null>(null);
  const byId = Object.fromEntries(allStations.map((s) => [s.id, s]));

  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-white/10 bg-graphite", compact ? "aspect-[16/11]" : "aspect-[16/9]")}>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="noise-bg absolute inset-0" />

      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {links.map(([a, b], i) => {
          const from = byId[a];
          const to = byId[b];
          if (!from || !to) return null;
          return (
            <motion.line
              key={i}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="url(#voltara-line)"
              strokeWidth={1.5}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
        <defs>
          <linearGradient id="voltara-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C6FF3D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22E3D6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {stations.map((s, i) => (
        <div
          key={s.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
          onMouseEnter={() => setActive(s.id)}
          onMouseLeave={() => setActive(null)}
        >
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.4, ease: "easeOut" }}
            className={cn("relative block h-2.5 w-2.5 cursor-pointer rounded-full", statusColor[s.status])}
          >
            <span className={cn("absolute inset-0 animate-ping rounded-full opacity-40", statusColor[s.status])} />
          </motion.span>
          {active === s.id && (
            <div className="absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 rounded-xl border border-white/15 bg-night/95 p-3 text-xs shadow-xl backdrop-blur">
              <p className="font-display font-semibold text-white">{s.name}</p>
              <p className="mt-0.5 text-steel">{s.city}, {s.country}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-steel">{statusLabels[s.status]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
