import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/Section";
import { Button } from "../../components/ui/Button";
import { VehicleCard } from "../../components/ui/VehicleCard";
import { vehicles } from "../../data/vehicles";
import { formatXOF, cn } from "../../lib/utils";

const categories = ["Toutes", "Citadine", "SUV", "Utilitaire", "Berline", "Moto", "Scooter"] as const;

export function Catalogue() {
  const [params, setParams] = useSearchParams();
  const typeParam = params.get("type");
  const [category, setCategory] = useState<(typeof categories)[number]>("Toutes");
  const [maxPrice, setMaxPrice] = useState(25_000_000);
  const [swapOnly, setSwapOnly] = useState(false);
  const [compare, setCompare] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return vehicles.filter((v) => {
      if (typeParam && v.type !== typeParam) return false;
      if (category !== "Toutes" && v.range !== category) return false;
      if (v.priceFrom > maxPrice) return false;
      if (swapOnly && !v.swapCompatible) return false;
      return true;
    });
  }, [typeParam, category, maxPrice, swapOnly]);

  const compareVehicles = vehicles.filter((v) => compare.includes(v.slug));

  function toggleCompare(slug: string) {
    setCompare((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 3 ? [...prev, slug] : prev));
  }

  return (
    <>
      <PageHero
        eyebrow="VOLTARA Drive"
        title="Le catalogue des véhicules et motos électriques VOLTARA"
        description="Achat comptant, location ou paiement échelonné : filtrez par type, autonomie, prix et compatibilité swap pour trouver le véhicule adapté à votre usage."
        actions={
          <>
            <Button href="/voltara-pay">Simuler un paiement échelonné</Button>
            <Button href="/location" variant="secondary">
              Voir la location
            </Button>
          </>
        }
      />

      <Section tone="dark" className="pt-12">
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setParams((p) => { p.delete("type"); return p; })}
            className={cn("rounded-full border px-4 py-2 text-sm", !typeParam ? "border-volt text-volt" : "border-white/15 text-steel")}
          >
            Tous
          </button>
          <button
            onClick={() => setParams({ type: "voiture" })}
            className={cn("rounded-full border px-4 py-2 text-sm", typeParam === "voiture" ? "border-volt text-volt" : "border-white/15 text-steel")}
          >
            Voitures
          </button>
          <button
            onClick={() => setParams({ type: "moto" })}
            className={cn("rounded-full border px-4 py-2 text-sm", typeParam === "moto" ? "border-volt text-volt" : "border-white/15 text-steel")}
          >
            Motos et scooters
          </button>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-steel">Catégorie</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-xs",
                      category === c ? "border-volt text-volt" : "border-white/15 text-steel hover:text-white",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-steel">
                <span className="font-mono uppercase tracking-wide">Prix maximum</span>
                <span className="text-white">{formatXOF(maxPrice)}</span>
              </div>
              <input
                type="range"
                min={500_000}
                max={25_000_000}
                step={500_000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-2 w-full accent-[#C6FF3D]"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-steel">
              <input type="checkbox" checked={swapOnly} onChange={(e) => setSwapOnly(e.target.checked)} className="h-4 w-4 accent-[#C6FF3D]" />
              Compatible VOLTARA Swap uniquement
            </label>

            <div className="rounded-xl border border-white/10 bg-graphite p-4 text-xs text-steel">
              {filtered.length} véhicule{filtered.length > 1 ? "s" : ""} correspondant{filtered.length > 1 ? "s" : ""}
            </div>
          </aside>

          <div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((v) => (
                <div key={v.slug} className="relative">
                  <VehicleCard vehicle={v} />
                  <label className="absolute right-5 top-5 z-10 flex items-center gap-1.5 rounded-full bg-night/80 px-2.5 py-1 text-[11px] text-steel backdrop-blur">
                    <input
                      type="checkbox"
                      checked={compare.includes(v.slug)}
                      onChange={() => toggleCompare(v.slug)}
                      className="h-3.5 w-3.5 accent-[#C6FF3D]"
                    />
                    Comparer
                  </label>
                </div>
              ))}
            </div>
            {filtered.length === 0 && <p className="py-20 text-center text-steel">Aucun véhicule ne correspond à ces filtres pour le moment.</p>}
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {compareVehicles.length > 1 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-graphite/95 backdrop-blur-xl"
          >
            <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-wide text-steel">{compareVehicles.length} véhicules à comparer</p>
                <button onClick={() => setCompare([])} className="flex items-center gap-1 text-xs text-steel hover:text-white">
                  <X size={14} /> Effacer
                </button>
              </div>
              <div className="mt-4 grid gap-4 overflow-x-auto" style={{ gridTemplateColumns: `repeat(${compareVehicles.length}, minmax(220px,1fr))` }}>
                {compareVehicles.map((v) => (
                  <div key={v.slug} className="rounded-xl border border-white/10 bg-night p-4">
                    <p className="font-display font-semibold text-white">{v.name}</p>
                    <p className="mt-1 font-mono text-sm text-volt">{formatXOF(v.priceFrom)}</p>
                    <ul className="mt-3 space-y-1.5 text-xs text-steel">
                      <li>Autonomie : {v.autonomyKm} km</li>
                      <li>Recharge : {v.chargeTime}</li>
                      <li className="flex items-center gap-1">
                        Swap : {v.swapCompatible ? <Check size={12} className="text-status-available" /> : <X size={12} className="text-status-offline" />}
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
