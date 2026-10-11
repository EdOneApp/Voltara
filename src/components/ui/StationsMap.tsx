import { useState } from "react";
import type { FeatureCollection } from "geojson";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { motion } from "framer-motion";
import { stations as allStations, statusLabels, type Station } from "../../data/stations";
import { cn } from "../../lib/utils";
import africaGeoData from "../../data/africa.geo.json";

const africaGeo = africaGeoData as unknown as FeatureCollection;

// Noms tels qu'utilisés dans le fond de carte (src/data/africa.geo.json, source Natural
// Earth) — peuvent différer de l'orthographe affichée ailleurs sur le site (ex. "Senegal"
// sans accent).
const operatingCountryNames = new Set(["Côte d'Ivoire", "Senegal", "Ghana", "Nigeria", "Kenya"]);

const statusColor: Record<Station["status"], string> = {
  disponible: "#2BD67B",
  occupe: "#FF9F2E",
  "hors-service": "#FF4D4D",
};

const statusGlow: Record<Station["status"], string> = {
  disponible: "rgba(43,214,123,0.7)",
  occupe: "rgba(255,159,46,0.7)",
  "hors-service": "rgba(255,77,77,0.5)",
};

// Liaisons stylisées entre les principales villes du réseau (effet "lignes d'énergie").
const hubLinks: [string, string][] = [
  ["dakar-plateau", "abj-plateau"],
  ["abj-plateau", "accra-osu"],
  ["accra-osu", "lagos-vi"],
  ["lagos-vi", "abuja"],
  ["abuja", "nairobi-cbd"],
];

export function StationsMap({ stations = allStations, compact = false }: { stations?: Station[]; compact?: boolean }) {
  const [active, setActive] = useState<Station | null>(null);
  const byId = Object.fromEntries(allStations.map((s) => [s.id, s]));

  return (
    <div className={cn("relative w-full overflow-hidden rounded-3xl border border-white/10 bg-graphite", compact ? "aspect-[16/12]" : "aspect-[16/10]")}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(34,227,214,0.08), transparent)",
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [18, 4], scale: 420 }}
        className="relative h-full w-full"
      >
        <Geographies geography={africaGeo}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isOperating = operatingCountryNames.has(geo.properties?.name as string);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isOperating ? "#1a2b22" : "#161b24"}
                  stroke={isOperating ? "rgba(198,255,61,0.35)" : "rgba(255,255,255,0.08)"}
                  strokeWidth={isOperating ? 1 : 0.5}
                  style={{ outline: "none" }}
                />
              );
            })
          }
        </Geographies>

        {hubLinks.map(([a, b], i) => {
          const from = byId[a];
          const to = byId[b];
          if (!from || !to) return null;
          return (
            <Line
              key={i}
              from={[from.lng, from.lat]}
              to={[to.lng, to.lat]}
              stroke="url(#voltara-map-line)"
              strokeWidth={1.4}
              strokeLinecap="round"
              className="voltara-electric-flow"
              style={{ animationDelay: `${i * 0.9}s`, animationDuration: "6s" }}
            />
          );
        })}

        <defs>
          <linearGradient id="voltara-map-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C6FF3D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#22E3D6" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {stations.map((s, i) => (
          <Marker key={s.id} coordinates={[s.lng, s.lat]}>
            <motion.circle
              r={compact ? 4 : 5}
              fill={statusColor[s.status]}
              stroke="#07090D"
              strokeWidth={1.2}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.3 }}
              style={{ cursor: "pointer", filter: `drop-shadow(0 0 5px ${statusGlow[s.status]})` }}
              onMouseEnter={() => setActive(s)}
              onMouseLeave={() => setActive(null)}
            />
            {active?.id === s.id && (
              <foreignObject x={-90} y={-78} width={180} height={70} style={{ overflow: "visible", pointerEvents: "none" }}>
                <div className="rounded-xl border border-white/15 bg-night/95 p-2.5 text-center text-[11px] shadow-xl">
                  <p className="font-display font-semibold text-white">{s.name}</p>
                  <p className="mt-0.5 text-steel">
                    {s.city}, {s.country}
                  </p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-wide" style={{ color: statusColor[s.status] }}>
                    {statusLabels[s.status]}
                  </p>
                </div>
              </foreignObject>
            )}
          </Marker>
        ))}
      </ComposableMap>

      <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 rounded-full bg-night/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide text-steel backdrop-blur">
        {Object.entries(statusLabels).map(([key, label]) => (
          <span key={key} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: statusColor[key as Station["status"]] }} />
            {label}
          </span>
        ))}
      </div>

      <style>{`
        .voltara-electric-flow {
          stroke-dasharray: 6 10;
          animation-name: voltara-map-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes voltara-map-flow {
          from { stroke-dashoffset: 64; }
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .voltara-electric-flow { animation: none; }
        }
      `}</style>
    </div>
  );
}
