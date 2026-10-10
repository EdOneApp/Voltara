import { cn } from "../../lib/utils";

/**
 * Motif de circuit électrique animé (lignes de courant façon cahier des
 * charges : "circuits" réinterprétés depuis les motifs textiles africains).
 * Décoratif, aria-hidden, désactivé sous prefers-reduced-motion via CSS.
 */
export function ElectricLines({ className, opacity = 0.5 }: { className?: string; opacity?: number }) {
  const paths = [
    "M -50 120 L 120 120 L 160 60 L 340 60 L 380 140 L 620 140",
    "M -50 260 L 220 260 L 260 200 L 480 200 L 520 300 L 900 300",
    "M -50 40 L 80 40 L 110 90 L 300 90",
  ];

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{ opacity }}
      viewBox="0 0 900 360"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id="voltara-electric-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C6FF3D" stopOpacity="0" />
          <stop offset="45%" stopColor="#C6FF3D" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#22E3D6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22E3D6" stopOpacity="0" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <g key={d}>
          <path d={d} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
          <path
            d={d}
            stroke="url(#voltara-electric-line)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="140 900"
            className="voltara-electric-flow"
            style={{ animationDelay: `${i * 1.1}s`, animationDuration: `${5 + i}s` }}
          />
        </g>
      ))}
      <style>{`
        .voltara-electric-flow {
          animation-name: voltara-flow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes voltara-flow {
          from { stroke-dashoffset: 1040; }
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .voltara-electric-flow { animation: none; opacity: 0.35; }
        }
      `}</style>
    </svg>
  );
}
