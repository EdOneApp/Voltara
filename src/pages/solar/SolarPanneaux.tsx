import { useMemo, useState } from "react";
import { Home, Factory, Car, BatteryCharging, Wallet } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { Photo } from "../../components/ui/Photo";
import { ElectricLines } from "../../components/ui/ElectricLines";
import { CTASection } from "../../components/ui/CTASection";
import { formatXOF } from "../../lib/utils";
import { solarPhotos } from "../../data/images";

const realisationPhotos = [solarPhotos.installationRoof, solarPhotos.manInstalling, solarPhotos.technicianInstalling, solarPhotos.rooftopWork];

const segments = [
  {
    icon: Home,
    badge: "Résidentiel",
    title: "Kits résidentiels",
    description: "Des kits clé en main de 2 à 9 kWc pour couvrir tout ou partie de la consommation d'un foyer, avec ou sans batterie de stockage.",
  },
  {
    icon: Factory,
    badge: "Commercial & industriel",
    title: "Solaire commercial et industriel",
    description: "Toitures d'entrepôts, ateliers et sites de production : des centrales de 20 kWc à plusieurs centaines de kWc pour réduire durablement votre facture industrielle.",
  },
  {
    icon: Car,
    badge: "Carports",
    title: "Carports solaires avec bornes intégrées",
    description: "Une ombrière photovoltaïque qui protège vos véhicules et alimente directement vos bornes de recharge VOLTARA, en autoconsommation.",
  },
  {
    icon: BatteryCharging,
    badge: "Stockage",
    title: "Batteries de stockage",
    description: "Stockez votre production solaire pour l'utiliser le soir ou lors d'une coupure réseau, avec un système de bascule automatique.",
  },
];

// --- Simulateur d'économies solaires ---
// Hypothèses volontairement simples et explicitées à l'écran :
// 1) Tarif moyen de l'électricité réseau estimé à 120 FCFA/kWh.
// 2) Un panneau installé produit en moyenne ~120 kWh par mois sous l'ensoleillement
//    ouest-africain (≈ 4 h d'équivalent plein soleil/jour, pertes incluses).
//    => la puissance crête recommandée (kWc) = (facture / 120 FCFA) / 120 kWh.
// 3) Coût d'installation moyen constaté : 650 000 FCFA par kWc installé (hors stockage).
// 4) Taux d'économie moyen après installation : 65 % de la facture actuelle
//    (le solde restant correspond à la consommation nocturne et aux pics non couverts).
const GRID_TARIFF_FCFA_PER_KWH = 120;
const MONTHLY_YIELD_KWH_PER_KWC = 120;
const INSTALL_COST_PER_KWC = 650_000;
const SAVINGS_RATE = 0.65;

function computeSolarSimulation(monthlyBill: number) {
  const monthlyConsumptionKwh = monthlyBill / GRID_TARIFF_FCFA_PER_KWH;
  const recommendedKwc = monthlyConsumptionKwh / MONTHLY_YIELD_KWH_PER_KWC;
  const installCost = Math.round(recommendedKwc * INSTALL_COST_PER_KWC);
  const monthlySavings = Math.round(monthlyBill * SAVINGS_RATE);
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? installCost / annualSavings : 0;

  return { recommendedKwc, installCost, monthlySavings, annualSavings, paybackYears };
}

const faqItems = [
  { question: "Combien de temps dure l'installation d'un kit solaire ?", answer: "De 1 à 3 jours pour un kit résidentiel, 2 à 4 semaines pour une centrale commerciale ou industrielle, selon la surface de toiture et la complexité du raccordement." },
  { question: "Mes panneaux fonctionnent-ils en cas de coupure réseau ?", answer: "Seule une installation couplée à une batterie de stockage ou à un onduleur hybride avec bascule automatique continue d'alimenter votre site pendant une coupure. Sans stockage, l'onduleur se coupe par sécurité." },
  { question: "Quelle est la durée de vie des panneaux et de l'onduleur ?", answer: "Les panneaux sont garantis 25 ans sur la production (80 % de puissance garantie à 25 ans), l'onduleur est garanti 10 ans et la batterie de stockage 8 à 10 ans selon la technologie." },
  { question: "Puis-je financer mon installation solaire ?", answer: "Oui, VOLTARA Pay propose un paiement échelonné sur 12 à 60 mois, avec des mensualités souvent inférieures à l'économie générée sur la facture d'électricité." },
  { question: "Le simulateur d'économies est-il contractuel ?", answer: "Non, il s'agit d'une estimation indicative basée sur des hypothèses moyennes de tarif, d'ensoleillement et de coût d'installation. Le chiffrage définitif est établi après une étude technique gratuite sur site." },
];

export function SolarPanneaux() {
  const [monthlyBill, setMonthlyBill] = useState(45_000);
  const sim = useMemo(() => computeSolarSimulation(monthlyBill), [monthlyBill]);

  return (
    <>
      <PageHero
        tone="solar"
        image={solarPhotos.installationRoof}
        eyebrow="VOLTARA Solar — Panneaux photovoltaïques"
        title="Produisez votre propre énergie, réduisez durablement votre facture."
        description="Kits résidentiels, solaire commercial et industriel, carports avec bornes intégrées et stockage par batteries : VOLTARA Solar couvre tous les usages, du foyer à l'usine."
        actions={<Button href="/demande-de-devis">Demander une étude gratuite</Button>}
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Nos solutions" title="Quatre familles de solutions solaires" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
                  <Icon size={20} />
                </span>
                <Badge tone="solar" className="mt-4 w-fit">{s.badge}</Badge>
                <p className="mt-3 font-display text-base font-semibold text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading
          eyebrow="Simulateur"
          title="Combien pourriez-vous économiser ?"
          description="Indiquez votre facture d'électricité mensuelle actuelle pour estimer votre économie et le temps nécessaire pour amortir une installation solaire type."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-night p-8">
            <label className="text-sm text-steel">Facture d'électricité mensuelle actuelle</label>
            <input
              type="number"
              min={10_000}
              max={2_000_000}
              step={5_000}
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Math.max(0, Number(e.target.value)))}
              className="mt-2 w-full rounded-xl border border-white/15 bg-graphite px-4 py-3 font-mono text-white focus:border-solar focus:outline-none"
            />
            <input
              type="range"
              min={10_000}
              max={300_000}
              step={5_000}
              value={Math.min(monthlyBill, 300_000)}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="mt-4 w-full accent-[#F5B83D]"
            />
            <p className="mt-2 font-mono text-xs text-steel">{formatXOF(monthlyBill)} / mois</p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-steel">
              <p>Hypothèses du simulateur :</p>
              <ul className="space-y-1.5">
                <li>• Tarif réseau moyen estimé à {GRID_TARIFF_FCFA_PER_KWH} FCFA/kWh</li>
                <li>• Rendement moyen de {MONTHLY_YIELD_KWH_PER_KWC} kWh par kWc installé et par mois</li>
                <li>• Coût d'installation moyen de {formatXOF(INSTALL_COST_PER_KWC)} par kWc</li>
                <li>• {Math.round(SAVINGS_RATE * 100)} % d'économie moyenne sur la facture après installation</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-solar/30 bg-gradient-to-br from-solar/10 via-graphite to-graphite p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-steel">Économie mensuelle estimée</p>
              <p className="mt-3 font-mono text-5xl font-semibold text-solar">{formatXOF(sim.monthlySavings)}</p>
              <p className="mt-1 text-steel">soit {Math.round(SAVINGS_RATE * 100)} % de votre facture actuelle</p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-steel">Puissance recommandée</dt>
                <dd className="font-mono text-white">{sim.recommendedKwc.toFixed(1)} kWc</dd>
              </div>
              <div>
                <dt className="text-steel">Installation estimée</dt>
                <dd className="font-mono text-white">{formatXOF(sim.installCost)}</dd>
              </div>
              <div>
                <dt className="text-steel">Économie annuelle</dt>
                <dd className="font-mono text-white">{formatXOF(sim.annualSavings)}</dd>
              </div>
              <div>
                <dt className="text-steel">Amortissement estimé</dt>
                <dd className="font-mono text-white">{sim.paybackYears > 0 ? `${sim.paybackYears.toFixed(1)} ans` : "—"}</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-steel">
              Estimation indicative. Le dimensionnement et le prix définitifs sont établis après une étude technique gratuite sur site.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des toitures et parkings déjà transformés"
          description="En attendant la mise en ligne de notre galerie photo, voici un aperçu du type de réalisations menées par nos équipes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {realisationPhotos.map((src, i) => (
            <Photo key={src + i} src={src} alt="Réalisation VOLTARA Solar" ratio="aspect-square" />
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Financement"
              title="Payez votre installation à votre rythme."
              description="VOLTARA Pay propose un paiement échelonné sur 12 à 60 mois pour les kits résidentiels comme pour les centrales commerciales, avec des mensualités pensées pour rester sous votre économie mensuelle générée."
            />
            <Button href="/voltara-pay" variant="secondary" className="mt-8">
              Découvrir VOLTARA Pay
            </Button>
          </div>
          <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-solar/25 bg-gradient-to-br from-solar/15 via-graphite to-graphite">
            <ElectricLines className="inset-0 h-full w-full" opacity={0.4} />
            <div className="relative flex flex-col items-center gap-3 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-solar/20 text-solar">
                <Wallet size={30} />
              </span>
              <p className="font-display text-sm font-semibold text-white">VOLTARA Pay</p>
              <p className="max-w-[220px] text-xs text-steel">Financement solaire échelonné, 12 à 60 mois</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur le solaire VOLTARA" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Solar"
        title="Découvrez votre potentiel d'économie en une étude gratuite."
        description="Un technicien VOLTARA Solar se déplace sur site, mesure votre toiture et vous remet un chiffrage précis sous 5 jours ouvrés."
        primaryLabel="Demander une étude gratuite"
        primaryHref="/demande-de-devis"
        secondaryLabel="Voir les bornes de recharge"
        secondaryHref="/voltara-solar/bornes"
      />
    </>
  );
}
