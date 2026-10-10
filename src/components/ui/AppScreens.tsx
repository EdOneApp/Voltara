import { Battery, ChevronRight, Home, MapPin, Navigation, Star, User, Wallet, Zap } from "lucide-react";

function MockMap({ tone = "volt" }: { tone?: "volt" | "cyan" | "go" }) {
  const routeColor = tone === "go" ? "#FF6B2C" : tone === "cyan" ? "#22E3D6" : "#C6FF3D";
  return (
    <div className="absolute inset-0 bg-[#10151c]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.08) 2px, transparent 2px)",
          backgroundSize: "90px 90px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 240 300" preserveAspectRatio="none">
        <path d="M 30 260 C 60 200, 50 160, 100 140 S 170 90, 160 40" fill="none" stroke={routeColor} strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        <path d="M 30 260 C 60 200, 50 160, 100 140 S 170 90, 160 40" fill="none" stroke={routeColor} strokeWidth="10" strokeLinecap="round" opacity="0.15" />
      </svg>
      <span className="absolute h-2.5 w-2.5 rounded-full border-2 border-night bg-white" style={{ left: "30px", top: "260px" }} />
      <MapPin size={20} className="absolute -translate-x-1/2 -translate-y-full text-volt drop-shadow" style={{ left: "160px", top: "40px" }} />
    </div>
  );
}

export function ChargeAppScreen() {
  return (
    <div className="relative flex-1">
      <MockMap tone="cyan" />
      <div className="absolute inset-x-3 top-3 flex items-center gap-2 rounded-full bg-night/80 px-3 py-2 backdrop-blur">
        <MapPin size={13} className="text-cyan" />
        <span className="text-[11px] text-white/80">VOLTARA Charge — Plateau</span>
      </div>
      <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-night/90 p-3 backdrop-blur">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
            <Zap size={13} className="text-cyan" /> Charge en cours
          </span>
          <span className="font-mono text-[11px] text-cyan">72%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan to-volt" />
        </div>
        <div className="mt-2 flex justify-between font-mono text-[10px] text-steel">
          <span>18 min restantes</span>
          <span>2 450 FCFA</span>
        </div>
      </div>
    </div>
  );
}

export function RideAppScreen() {
  return (
    <div className="relative flex-1">
      <MockMap tone="volt" />
      <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-night/90 p-3 backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-volt/15 text-volt">
            <Navigation size={16} />
          </span>
          <div className="flex-1">
            <p className="text-[11px] font-semibold text-white">Chauffeur à 3 min</p>
            <p className="text-[10px] text-steel">VOLTARA Berline Prestige · AB 2451</p>
          </div>
          <span className="flex items-center gap-0.5 font-mono text-[10px] text-solar">
            <Star size={11} fill="currentColor" /> 4.9
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] text-steel">
          <span>Course Confort</span>
          <span className="text-white">2 300 FCFA</span>
        </div>
      </div>
    </div>
  );
}

export function GoAppScreen() {
  const steps = [
    { label: "Colis récupéré", done: true },
    { label: "En livraison", done: true },
    { label: "Arrivée estimée 14:32", done: false },
  ];
  return (
    <div className="relative flex-1">
      <MockMap tone="go" />
      <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-night/90 p-3 backdrop-blur">
        <p className="text-[11px] font-semibold text-white">Livraison #VG-8841</p>
        <div className="mt-2.5 flex flex-col gap-2">
          {steps.map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-[10px]">
              <span className={`h-1.5 w-1.5 rounded-full ${s.done ? "bg-go" : "border border-white/30"}`} />
              <span className={s.done ? "text-white" : "text-steel"}>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-2.5 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] text-steel">
          <span>Livreur · Moto Eclair</span>
          <span className="text-white">1 500 FCFA</span>
        </div>
      </div>
    </div>
  );
}

export function PhoneTabBar({ active }: { active: "home" | "map" | "wallet" | "user" }) {
  const items = [
    { key: "home", icon: Home },
    { key: "map", icon: MapPin },
    { key: "wallet", icon: Wallet },
    { key: "user", icon: User },
  ] as const;
  return (
    <div className="flex items-center justify-around border-t border-white/10 bg-night py-2.5">
      {items.map((it) => (
        <it.icon key={it.key} size={16} className={it.key === active ? "text-volt" : "text-steel"} />
      ))}
    </div>
  );
}

export function AppHeaderRow({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-3">
      <div>
        <p className="font-display text-[13px] font-semibold text-white">{title}</p>
        <p className="text-[10px] text-steel">{subtitle}</p>
      </div>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-volt/15 text-volt">
        <Battery size={13} />
      </span>
    </div>
  );
}

export function ChevronRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 text-[11px]">
      <span className="text-steel">{label}</span>
      <span className="flex items-center gap-1 text-white">
        {value} <ChevronRight size={12} className="text-steel" />
      </span>
    </div>
  );
}
