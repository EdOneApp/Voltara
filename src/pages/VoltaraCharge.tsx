import { useMemo, useState } from "react";
import { Search, Zap, Clock, MapPin, Navigation, QrCode, Gauge } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { StatCounter } from "../components/ui/StatCounter";
import { StationsMap } from "../components/ui/StationsMap";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";
import { stations, statusLabels, countries, type Station } from "../data/stations";
import { cn } from "../lib/utils";

const statusTone: Record<Station["status"], "available" | "busy" | "offline"> = {
  disponible: "available",
  occupe: "busy",
  "hors-service": "offline",
};

const typeLabels: Record<Station["type"], string> = {
  recharge: "Recharge",
  swap: "Swap",
  mixte: "Recharge + Swap",
};

const statusFilters = ["Tous", "disponible", "occupe", "hors-service"] as const;
const typeFilters = ["Tous", "recharge", "swap", "mixte"] as const;

const plans = [
  {
    name: "Paiement au kWh",
    tone: "cyan" as const,
    price: "180 FCFA / kWh",
    description: "Sans engagement, idéal pour un usage occasionnel ou en visite dans une ville non habituelle.",
    features: ["Aucun abonnement", "Paiement Mobile Money à chaque charge", "Tarif identique jour et nuit"],
  },
  {
    name: "Abonnement mensuel",
    tone: "cyan" as const,
    price: "15 000 FCFA / mois",
    description: "Pour les particuliers qui rechargent régulièrement sur le réseau VOLTARA Charge.",
    features: ["Tarif préférentiel à 140 FCFA / kWh", "Accès prioritaire aux bornes en heure de pointe", "Facture mensuelle unique"],
  },
  {
    name: "Abonnement flotte",
    tone: "cyan" as const,
    price: "Sur devis",
    description: "Pour les entreprises qui gèrent plusieurs véhicules électriques sur un ou plusieurs sites.",
    features: ["Tarif dégressif au volume", "Un badge par véhicule, une facture par flotte", "Tableau de bord de consommation en temps réel"],
  },
];

const faqItems = [
  {
    question: "Quels connecteurs sont compatibles avec les bornes VOLTARA Charge ?",
    answer:
      "La majorité de nos bornes rapides proposent CCS2 et Type 2, et les stations mixtes ajoutent une prise moto dédiée au réseau VOLTARA Swap. Le connecteur disponible sur chaque station est indiqué dans la liste ci-dessous et dans l'application.",
  },
  {
    question: "Comment payer une recharge ?",
    answer:
      "Scannez le QR code de la borne dans l'application VOLTARA, choisissez votre moyen de paiement (Orange Money, MTN MoMo, Moov Money, Wave ou abonnement actif) et la charge démarre automatiquement.",
  },
  {
    question: "Que faire si une borne est en panne ?",
    answer:
      "Signalez la panne directement depuis la fiche de la station dans l'application : le statut passe en « hors service » pour les autres utilisateurs et une équipe technique est automatiquement notifiée.",
  },
  {
    question: "Puis-je recharger mon véhicule à domicile ?",
    answer:
      "Oui, avec une prise domestique renforcée pour une charge lente, ou une borne VOLTARA Solar installée à domicile (7 à 22 kW) pour une charge complète en quelques heures.",
  },
];

export function VoltaraCharge() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState<string>("Tous");
  const [status, setStatus] = useState<(typeof statusFilters)[number]>("Tous");
  const [type, setType] = useState<(typeof typeFilters)[number]>("Tous");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return stations.filter((s) => {
      if (country !== "Tous" && s.country !== country) return false;
      if (status !== "Tous" && s.status !== status) return false;
      if (type !== "Tous" && s.type !== type) return false;
      if (q && !s.name.toLowerCase().includes(q) && !s.city.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, country, status, type]);

  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="VOLTARA Charge"
        title="Le réseau de recharge panafricain, disponible en temps réel."
        description="Des bornes rapides dans les grandes villes d'Afrique de l'Ouest et de l'Est, visibles et réservables depuis l'application, avec un statut mis à jour en direct."
      />

      {/* Carte + stats */}
      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-[1fr_260px]">
          <StationsMap />
          <div className="flex flex-col justify-center gap-10 lg:border-l lg:border-white/10 lg:pl-10">
            <StatCounter value={stations.length} label="Stations recharge & swap" />
            <StatCounter value={countries.length} label="Pays couverts" />
          </div>
        </div>
      </Section>

      {/* Liste filtrable */}
      <Section tone="graphite">
        <SectionHeading eyebrow="Trouver une station" title="Toutes les stations du réseau VOLTARA" />

        <div className="mt-8 flex flex-col gap-4">
          <div className="relative max-w-md">
            <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une station ou une ville"
              className="w-full rounded-xl border border-white/15 bg-night py-2.5 pl-11 pr-4 text-sm text-white focus:border-cyan focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCountry("Tous")}
              className={cn("rounded-full border px-3 py-1.5 text-xs", country === "Tous" ? "border-cyan text-cyan" : "border-white/15 text-steel hover:text-white")}
            >
              Tous les pays
            </button>
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={cn("rounded-full border px-3 py-1.5 text-xs", country === c ? "border-cyan text-cyan" : "border-white/15 text-steel hover:text-white")}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {statusFilters.map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={cn("rounded-full border px-3 py-1.5 text-xs", status === s ? "border-cyan text-cyan" : "border-white/15 text-steel hover:text-white")}
              >
                {s === "Tous" ? "Tous les statuts" : statusLabels[s]}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {typeFilters.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={cn("rounded-full border px-3 py-1.5 text-xs", type === t ? "border-cyan text-cyan" : "border-white/15 text-steel hover:text-white")}
              >
                {t === "Tous" ? "Tous les types" : typeLabels[t]}
              </button>
            ))}
          </div>

          <p className="text-xs text-steel">
            {filtered.length} station{filtered.length > 1 ? "s" : ""} correspondant{filtered.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((s) => (
            <div key={s.id} className="flex flex-col rounded-2xl border border-white/10 bg-night p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display font-semibold text-white">{s.name}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-steel">
                    <MapPin size={13} /> {s.city}, {s.country}
                  </p>
                </div>
                <Badge tone={statusTone[s.status]}>{statusLabels[s.status]}</Badge>
              </div>

              <div className="mt-4 space-y-1.5 text-sm text-steel">
                <p className="flex items-center gap-2">
                  <Zap size={14} className="text-cyan" /> {typeLabels[s.type]}
                  {s.power ? ` — ${s.power}` : ""}
                </p>
                {s.connectors && <p className="pl-5 text-xs">{s.connectors.join(", ")}</p>}
                <p className="flex items-center gap-2">
                  <Clock size={14} className="text-cyan" /> {s.hours}
                </p>
              </div>

              <p className="mt-3 text-xs text-steel">{s.address}</p>

              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.address)}`}
                external
                variant="secondary"
                className="mt-5 w-full justify-center"
                icon={<Navigation size={15} />}
              >
                Itinéraire
              </Button>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-16 text-center text-steel">Aucune station ne correspond à ces filtres pour le moment.</p>
          )}
        </div>
      </Section>

      {/* Abonnements */}
      <Section tone="dark">
        <SectionHeading eyebrow="Abonnements" title="Trois formules VOLTARA Charge" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-graphite p-7">
              <Badge tone={p.tone}>{p.name}</Badge>
              <p className="mt-4 font-mono text-2xl font-semibold text-white">{p.price}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{p.description}</p>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-steel">
                {p.features.map((f) => (
                  <li key={f}>— {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Application */}
      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <VisualPlaceholder icon="📱" tone="cyan" label="Écran charge en cours — à venir" className="mx-auto aspect-[9/16] max-w-64 lg:order-2" />
          <div className="lg:order-1">
            <SectionHeading
              eyebrow="Application"
              title="Démarrez une charge au scan d'un QR code"
              description="Scannez le QR code affiché sur la borne pour démarrer votre charge, puis suivez en direct les kWh injectés, le pourcentage de batterie, le temps restant estimé et le coût exact de votre recharge."
            />
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-steel">
              <span className="flex items-center gap-2">
                <QrCode size={16} className="text-cyan" /> Démarrage par QR code
              </span>
              <span className="flex items-center gap-2">
                <Gauge size={16} className="text-cyan" /> Suivi kWh, %, coût en direct
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur VOLTARA Charge" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Charge"
        title="Rechargez partout, sans jamais perdre de temps."
        description="Souscrivez un abonnement VOLTARA Charge ou équipez votre entreprise d'une borne à domicile ou au dépôt."
        primaryLabel="Souscrire un abonnement"
        primaryHref="/demande-de-devis"
        secondaryLabel="Installer une borne"
        secondaryHref="/voltara-solar"
      />
    </>
  );
}
