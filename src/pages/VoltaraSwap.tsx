import { QrCode, LogIn, Battery, ArrowRight, Fuel, Zap } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { VehicleCard } from "../components/ui/VehicleCard";
import { StationsMap } from "../components/ui/StationsMap";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";
import { vehicles } from "../data/vehicles";
import { stations } from "../data/stations";
import { formatXOF } from "../lib/utils";

const steps = [
  { icon: LogIn, title: "Arriver en station", description: "Repérez la station VOLTARA Swap disponible la plus proche directement dans l'application." },
  { icon: QrCode, title: "Scanner le QR code", description: "Scannez le QR code de la borne pour ouvrir le casier et identifier votre moto et votre abonnement." },
  { icon: Battery, title: "Échanger la batterie", description: "Retirez votre batterie déchargée, déposez-la dans le casier, retirez une batterie chargée à 100 %." },
  { icon: ArrowRight, title: "Repartir", description: "Rangez la batterie dans votre moto et repartez : l'opération complète prend moins de 2 minutes." },
];

const compatibleMotos = vehicles.filter((v) => v.type === "moto" && v.swapCompatible);

const plans = [
  {
    name: "Par swap",
    tone: "cyan" as const,
    price: formatXOF(450),
    unit: "/ swap",
    description: "L'échange à l'unité, sans engagement, pour un usage occasionnel ou en complément d'un abonnement.",
    features: ["Sans engagement", "Paiement Mobile Money à chaque échange", "Disponible dans toutes les stations swap"],
  },
  {
    name: "Illimité hebdomadaire",
    tone: "cyan" as const,
    price: formatXOF(5_500),
    unit: "/ semaine",
    description: "Pour les livreurs qui enchaînent plus de 12 échanges par semaine : rentable dès le 13ᵉ swap.",
    features: ["Swaps illimités toute la semaine", "Renouvellement automatique par Mobile Money", "Idéal pour tester l'usage intensif"],
  },
  {
    name: "Illimité mensuel",
    tone: "cyan" as const,
    price: formatXOF(21_000),
    unit: "/ mois",
    description: "La formule la plus économique au-delà de 45 échanges par mois, pour les livreurs à plein temps.",
    features: ["Swaps illimités toute la durée du mois", "Priorité d'accès aux heures de forte affluence", "Facture mensuelle unique"],
  },
];

const faqItems = [
  {
    question: "Quelles batteries sont compatibles avec le réseau VOLTARA Swap ?",
    answer:
      "Toutes les motos et scooters électriques VOLTARA — Eclair, Eclair Pro, Cargo, Ride, Zéphyr et Mini — utilisent le même format de batterie amovible, interchangeable dans n'importe quelle station du réseau.",
  },
  {
    question: "Dois-je verser une caution sur la batterie ?",
    answer:
      "Une caution unique est demandée à l'activation de votre premier abonnement VOLTARA Swap. Elle est restituée intégralement si vous quittez le réseau avec une batterie en bon état.",
  },
  {
    question: "Les batteries échangées sont-elles toutes en bon état ?",
    answer:
      "Chaque batterie est contrôlée automatiquement à chaque dépôt : état de santé, cycles de charge et température sont vérifiés avant d'être remise en circulation. Une batterie sous le seuil de performance est retirée du réseau.",
  },
  {
    question: "Que se passe-t-il si la station la plus proche est à sec ?",
    answer:
      "L'application affiche le nombre de batteries chargées disponibles en temps réel dans chaque station, pour vous orienter vers la station voisine la plus sûre avant de tomber à court d'autonomie.",
  },
  {
    question: "Puis-je changer de formule d'abonnement en cours de mois ?",
    answer:
      "Oui, vous pouvez passer du paiement au swap à un abonnement illimité à tout moment depuis l'application ; le changement prend effet à votre prochain passage en station.",
  },
];

export function VoltaraSwap() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="VOLTARA Swap"
        title="Échangez votre batterie en moins de 2 minutes."
        description="Plus jamais d'attente à la recharge : dans chaque station VOLTARA Swap, déposez votre batterie déchargée et repartez avec une batterie chargée à 100 %, pour quelques centaines de FCFA."
      />

      {/* Comment ça marche */}
      <Section tone="dark">
        <SectionHeading eyebrow="Comment ça marche" title="Un plein d'énergie en 4 étapes" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-steel">Étape {i + 1}</p>
                <p className="mt-1 font-display font-semibold text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Motos compatibles */}
      <Section tone="graphite">
        <SectionHeading
          eyebrow="Véhicules"
          title="Motos et scooters compatibles VOLTARA Swap"
          description="Toute la gamme deux-roues VOLTARA embarque une batterie amovible échangeable dans le réseau VOLTARA Swap."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {compatibleMotos.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </Section>

      {/* Abonnements */}
      <Section tone="dark">
        <SectionHeading eyebrow="Abonnements" title="Trois formules VOLTARA Swap" />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-graphite p-7">
              <Badge tone={p.tone}>{p.name}</Badge>
              <p className="mt-4">
                <span className="font-mono text-2xl font-semibold text-white">{p.price}</span>
                <span className="ml-1 text-sm text-steel">{p.unit}</span>
              </p>
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

      {/* Carte des stations swap */}
      <Section tone="graphite">
        <SectionHeading eyebrow="Réseau" title="Les stations VOLTARA Swap et mixtes" />
        <div className="mt-10">
          <StationsMap stations={stations.filter((s) => s.type !== "recharge")} />
        </div>
      </Section>

      {/* Économie pour un livreur */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Économie"
          title="L'économie réelle d'un livreur sur un mois"
          description="Awa Koné, livreuse VOLTARA Go à Abidjan, dépensait près de 3 000 FCFA d'essence par jour avant de passer à la VOLTARA Moto Eclair et au swap."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-7">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-steel">
              <Fuel size={14} /> Moto thermique
            </p>
            <p className="mt-3 font-mono text-3xl font-semibold text-white/70">{formatXOF(3_000)} / jour</p>
            <p className="mt-2 text-sm text-steel">Soit environ {formatXOF(90_000)} par mois en essence, hors entretien moteur et vidanges.</p>
          </div>
          <div className="rounded-2xl border border-cyan/30 bg-cyan/5 p-7">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-cyan">
              <Zap size={14} /> VOLTARA Swap
            </p>
            <p className="mt-3 font-mono text-3xl font-semibold text-white">{formatXOF(900)} / jour</p>
            <p className="mt-2 text-sm text-steel">
              Pour 2 échanges de batterie par jour à {formatXOF(450)} le swap, soit environ {formatXOF(27_000)} par mois.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-graphite p-6 text-center">
          <p className="font-display text-lg font-semibold text-white">
            Jusqu'à {formatXOF(63_000)} d'économie par mois, soit environ 70 % du budget énergie d'un livreur.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur VOLTARA Swap" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/vehicules?type=moto" variant="secondary">
            Voir les motos et scooters
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Swap"
        title="Ne perdez plus jamais de temps à la recharge."
        description="Choisissez votre formule d'abonnement ou équipez-vous d'une moto compatible VOLTARA Swap dès aujourd'hui."
        primaryLabel="Choisir un abonnement"
        primaryHref="/demande-de-devis"
        secondaryLabel="Voir les motos"
        secondaryHref="/vehicules?type=moto"
      />
    </>
  );
}
