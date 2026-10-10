import { useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Share2 } from "lucide-react";
import { Section } from "../../components/ui/Section";
import { Container } from "../../components/ui/Container";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { VisualPlaceholder } from "../../components/ui/VisualPlaceholder";
import { VehicleCard } from "../../components/ui/VehicleCard";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { getVehicleBySlug, vehicles } from "../../data/vehicles";
import { formatXOF } from "../../lib/utils";
import { computeSimulation } from "../../lib/simulator";

const colors = [
  { name: "Nuit électrique", hex: "#07090D" },
  { name: "Blanc ivoire", hex: "#F6F4EE" },
  { name: "Lime signature", hex: "#C6FF3D" },
  { name: "Gris graphite", hex: "#3A4049" },
];

const PETROL_COST_PER_KM = 95; // FCFA/km, moyenne indicative véhicule thermique équivalent

export function Fiche() {
  const { slug } = useParams();
  const vehicle = getVehicleBySlug(slug ?? "");
  const [colorIdx, setColorIdx] = useState(0);
  const [accessories, setAccessories] = useState<string[]>([]);

  const accessoryOptions = useMemo(
    () =>
      vehicle?.type === "moto"
        ? [
            { label: "Top-case 45 L", price: 65_000 },
            { label: "Pare-brise", price: 35_000 },
            { label: "Batterie supplémentaire", price: 420_000 },
          ]
        : [
            { label: "Jantes premium", price: 280_000 },
            { label: "Toit ouvrant", price: 450_000 },
            { label: "Pack caméras 360°", price: 320_000 },
          ],
    [vehicle],
  );

  if (!vehicle) return <Navigate to="/vehicules" replace />;

  const accessoriesTotal = accessories.reduce((sum, a) => sum + (accessoryOptions.find((o) => o.label === a)?.price ?? 0), 0);
  const configuredPrice = vehicle.priceFrom + accessoriesTotal;
  const sim = computeSimulation({ price: configuredPrice, apportPct: 20, durationMonths: 18, frequency: "jour" });

  const similar = vehicles.filter((v) => v.range === vehicle.range && v.slug !== vehicle.slug).slice(0, 3);

  const costPerKmElectric = Math.round((vehicle.batteryKwh * 180) / vehicle.autonomyKm); // ~180 FCFA/kWh indicatif

  const faqItems = [
    { question: "Quels documents sont nécessaires pour commander ?", answer: "Une pièce d'identité valide et un justificatif de domicile suffisent pour un achat comptant. Pour un dossier VOLTARA Pay, un justificatif de revenus ou d'activité est également demandé." },
    { question: "Puis-je faire un essai avant de commander ?", answer: "Oui, réservez un essai dans l'agence VOLTARA la plus proche directement depuis cette fiche." },
    { question: "La garantie batterie est-elle transférable en cas de revente ?", answer: "Oui, la garantie suit le véhicule et reste valable pour le nouvel propriétaire jusqu'à son terme." },
    { question: "Puis-je recharger ce véhicule à domicile ?", answer: "Oui, avec une prise domestique renforcée ou une borne VOLTARA Solar installée à domicile (7 à 22 kW)." },
  ];

  return (
    <>
      <div className="bg-night pt-28">
        <Container>
          <nav className="mb-6 text-xs text-steel">
            <Link to="/" className="hover:text-volt">Accueil</Link> / <Link to="/vehicules" className="hover:text-volt">Véhicules</Link> /{" "}
            <span className="text-white/70">{vehicle.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <VisualPlaceholder
                    key={i}
                    icon={vehicle.type === "moto" ? "🏍️" : "🚗"}
                    tone={vehicle.type === "moto" ? "cyan" : "volt"}
                    className={i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}
                    label={`Photo ${i + 1} / ${vehicle.photoCount} — shooting VOLTARA`}
                  />
                ))}
              </div>
            </div>

            <div>
              {vehicle.badge && <Badge tone="volt" className="mb-3">{vehicle.badge}</Badge>}
              <h1 className="font-display text-[clamp(2rem,1.6rem+1.6vw,3rem)] font-semibold">{vehicle.name}</h1>
              <p className="mt-2 text-lg text-steel">{vehicle.tagline}</p>
              <p className="mt-5 leading-relaxed text-white/80">{vehicle.description}</p>

              <div className="mt-8">
                <p className="font-mono text-xs uppercase tracking-wide text-steel">Couleur — {colors[colorIdx].name}</p>
                <div className="mt-3 flex gap-3">
                  {colors.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setColorIdx(i)}
                      className={`h-9 w-9 rounded-full border-2 ${colorIdx === i ? "border-volt" : "border-white/20"}`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={c.name}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-wide text-steel">Accessoires</p>
                <div className="mt-3 space-y-2">
                  {accessoryOptions.map((opt) => (
                    <label key={opt.label} className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-2.5 text-sm">
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={accessories.includes(opt.label)}
                          onChange={(e) =>
                            setAccessories((prev) => (e.target.checked ? [...prev, opt.label] : prev.filter((a) => a !== opt.label)))
                          }
                          className="h-4 w-4 accent-[#C6FF3D]"
                        />
                        {opt.label}
                      </span>
                      <span className="font-mono text-steel">+{formatXOF(opt.price)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-graphite p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-steel">Prix configuré</p>
                    <p className="font-mono text-3xl font-semibold text-white">{formatXOF(configuredPrice)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-steel">ou via VOLTARA Pay</p>
                    <p className="font-mono text-xl font-semibold text-volt">{formatXOF(sim.paymentForFrequency)}/jour</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button href="/demande-de-devis" size="lg">
                    Réserver un essai
                  </Button>
                  <Button href="/voltara-pay" variant="secondary" size="lg">
                    Simuler mon financement
                  </Button>
                  <Button href="/demande-de-devis" variant="ghost" size="lg">
                    Commander
                  </Button>
                  <Button
                    href={`https://wa.me/2250000000000?text=${encodeURIComponent(`Bonjour, je suis intéressé par la ${vehicle.name}`)}`}
                    external
                    variant="ghost"
                    size="lg"
                    icon={<Share2 size={16} />}
                  >
                    Partager
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Section tone="dark">
        <h2 className="font-display text-2xl font-semibold">Caractéristiques techniques</h2>
        <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {vehicle.specs.map((s) => (
            <div key={s.label} className="flex justify-between border-b border-white/10 py-2.5 text-sm">
              <span className="text-steel">{s.label}</span>
              <span className="font-mono text-white">{s.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <h2 className="font-display text-2xl font-semibold">Coût réel au kilomètre</h2>
        <p className="mt-2 max-w-2xl text-steel">Comparaison indicative entre l'énergie électrique VOLTARA Charge et un modèle thermique équivalent.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-volt/30 bg-volt/5 p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-volt">VOLTARA — Électrique</p>
            <p className="mt-2 font-mono text-3xl font-semibold">{costPerKmElectric} FCFA/km</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-steel">Équivalent thermique</p>
            <p className="mt-2 font-mono text-3xl font-semibold text-white/60">{PETROL_COST_PER_KM} FCFA/km</p>
          </div>
        </div>
      </Section>

      {similar.length > 0 && (
        <Section tone="dark">
          <h2 className="font-display text-2xl font-semibold">Véhicules similaires</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {similar.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="graphite">
        <h2 className="font-display text-2xl font-semibold">Questions fréquentes</h2>
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
