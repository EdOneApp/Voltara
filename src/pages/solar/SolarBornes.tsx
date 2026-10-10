import { Home, Building2, Zap, ClipboardCheck, FileCheck, Wrench, PackageCheck } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { Photo } from "../../components/ui/Photo";
import { CTASection } from "../../components/ui/CTASection";
import { formatXOF } from "../../lib/utils";
import { solarPhotos, chargingPhotos } from "../../data/images";

const realisationPhotos = [chargingPhotos.homeCharger, solarPhotos.rooftopWork, chargingPhotos.stationUrban, solarPhotos.technicianTwo];

const gammes = [
  {
    icon: Home,
    badge: "Domicile",
    title: "Bornes AC résidentielles",
    power: "7 à 22 kW",
    description:
      "Installée sur votre mur ou votre carport, la borne domicile recharge votre véhicule VOLTARA pendant la nuit et coûte moins cher au kWh qu'une prise domestique classique.",
    specs: ["Recharge complète en 3 à 8 h selon le véhicule", "Protection différentielle et disjoncteur dédiés inclus", "Pilotage à distance via l'appli VOLTARA"],
    priceFrom: 850_000,
  },
  {
    icon: Building2,
    badge: "Entreprise & copropriété",
    title: "Bornes AC collectives",
    power: "11 à 22 kW triphasé",
    description:
      "Pensées pour les parkings d'entreprise, résidences et copropriétés : plusieurs points de charge supervisés, répartition de puissance intelligente et facturation par utilisateur.",
    specs: ["Jusqu'à 12 points de charge par armoire de répartition", "Facturation individuelle par badge RFID", "Supervision à distance et reporting mensuel"],
    priceFrom: 1_450_000,
  },
  {
    icon: Zap,
    badge: "Recharge rapide",
    title: "Bornes DC rapides",
    power: "50 à 180 kW",
    description:
      "Pour les stations-service, concessions, dépôts de flotte et aires de repos : une recharge de 10 à 80 % en moins de 30 minutes, intégrée au réseau VOLTARA Charge.",
    specs: ["Jusqu'à 2 véhicules rechargés simultanément", "Double connecteur CCS compatible toute la gamme VOLTARA", "Génie civil et raccordement électrique inclus dans l'étude"],
    priceFrom: 9_500_000,
  },
];

const etapes = [
  { icon: ClipboardCheck, title: "Étude gratuite", description: "Un technicien VOLTARA Solar visite le site, mesure la puissance disponible et recommande la solution adaptée." },
  { icon: FileCheck, title: "Devis détaillé", description: "Devis chiffré sous 5 jours ouvrés : matériel, génie civil, raccordement et options de financement." },
  { icon: Wrench, title: "Installation", description: "Pose par un installateur certifié VOLTARA, dans le respect des normes électriques en vigueur dans votre pays." },
  { icon: Zap, title: "Mise en service", description: "Tests de charge, paramétrage de la supervision et remise des accès à l'appli VOLTARA." },
  { icon: PackageCheck, title: "Maintenance", description: "Contrat d'entretien préventif et assistance en cas de panne, avec intervention sous 48 h en zone couverte." },
];

const faqItems = [
  { question: "Quel est le délai d'installation d'une borne ?", answer: "Comptez 2 à 3 semaines entre la signature du devis et la mise en service pour une borne domicile, et 4 à 8 semaines pour une installation entreprise ou une borne rapide DC nécessitant un renforcement du raccordement électrique." },
  { question: "Quelle garantie couvre les bornes VOLTARA Solar ?", answer: "Chaque borne est garantie 3 ans pièces et main d'œuvre, extensible à 5 ans sur les gammes entreprise. La maintenance préventive annuelle est incluse pendant toute la durée du contrat d'entretien." },
  { question: "La borne est-elle compatible avec tous les véhicules électriques ?", answer: "Oui, nos bornes AC et DC utilisent les connecteurs standards (Type 2 et CCS Combo) compatibles avec l'ensemble de la gamme VOLTARA ainsi qu'avec la plupart des véhicules électriques du marché." },
  { question: "Puis-je financer l'installation de ma borne ?", answer: "Oui, VOLTARA Pay propose un paiement échelonné sur 6 à 36 mois pour les particuliers, et un leasing opérationnel avec option de maintenance incluse pour les entreprises et copropriétés." },
  { question: "Qui prend en charge les démarches auprès du fournisseur d'électricité ?", answer: "VOLTARA Solar s'occupe de la demande de raccordement ou de renforcement de puissance auprès du fournisseur local lorsque c'est nécessaire, et vous informe des délais réels avant la signature du devis." },
];

export function SolarBornes() {
  return (
    <>
      <PageHero
        tone="solar"
        image={solarPhotos.technicianSunny}
        eyebrow="VOLTARA Solar — Bornes de recharge"
        title="Une borne de recharge pour chaque usage, de la maison au dépôt de flotte."
        description="Domicile, entreprise, copropriété ou station rapide : VOLTARA Solar conçoit, installe et entretient votre infrastructure de recharge, avec une étude gratuite et un devis sous 5 jours."
        actions={<Button href="/demande-de-devis">Demander un devis</Button>}
      />

      <Section tone="dark">
        <SectionHeading
          eyebrow="Nos gammes"
          title="Trois gammes de bornes, une seule exigence de qualité"
          description="Chaque borne est dimensionnée selon votre puissance disponible, votre usage et votre budget, avec un prix d'installation indicatif annoncé dès l'étude."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {gammes.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="flex flex-col rounded-2xl border border-white/10 bg-graphite p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
                  <Icon size={20} />
                </span>
                <Badge tone="solar" className="mt-5 w-fit">{g.badge}</Badge>
                <h3 className="mt-3 font-display text-xl font-semibold text-white">{g.title}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-steel">{g.power}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-steel">{g.description}</p>
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-white/80">
                  {g.specs.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-solar" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs text-steel">À partir de</p>
                  <p className="font-mono text-2xl font-semibold text-solar">{formatXOF(g.priceFrom)}</p>
                </div>
                <Button href="/demande-de-devis" variant="secondary" className="mt-5 w-full justify-center">
                  Demander un devis
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Processus" title="De l'étude à la maintenance, en 5 étapes" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {etapes.map((e, i) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="relative rounded-2xl border border-white/10 bg-night p-6">
                <span className="font-mono text-xs text-steel">0{i + 1}</span>
                <span className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-white">{e.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{e.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des installations livrées partout où VOLTARA opère"
          description="En attendant la mise en ligne de notre galerie photo, voici un aperçu du type de réalisations menées par nos équipes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {realisationPhotos.map((src, i) => (
            <Photo key={src + i} src={src} alt="Réalisation VOLTARA Solar" ratio="aspect-square" />
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur les bornes VOLTARA Solar" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Solar"
        title="Prêt à équiper votre domicile, votre résidence ou votre dépôt ?"
        description="Notre équipe réalise une étude gratuite sous 48 h et vous propose un devis détaillé, sans engagement."
        primaryLabel="Demander un devis"
        primaryHref="/demande-de-devis"
        secondaryLabel="Découvrir le solaire"
        secondaryHref="/voltara-solar/panneaux"
      />
    </>
  );
}
