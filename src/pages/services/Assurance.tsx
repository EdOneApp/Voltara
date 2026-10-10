import { Car, Bike, BatteryCharging, ShieldCheck, ShieldAlert } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { CTASection } from "../../components/ui/CTASection";
import { formatXOF } from "../../lib/utils";
import { nightCars } from "../../data/images";

const offres = [
  {
    icon: Car,
    title: "Assurance véhicule électrique",
    description: "Couvre les citadines, SUV, utilitaires et berlines VOLTARA contre les dommages, le vol et la responsabilité civile.",
  },
  {
    icon: Bike,
    title: "Assurance moto électrique",
    description: "Pensée pour les motos et scooters VOLTARA, y compris pour un usage professionnel (livraison, moto-taxi).",
  },
  {
    icon: BatteryCharging,
    title: "Assurance batterie",
    description: "Protège la batterie amovible ou intégrée contre le vol, le dommage accidentel et la panne non couverte par la garantie constructeur.",
  },
];

const formules = [
  {
    icon: ShieldAlert,
    name: "Tiers",
    price: 45_000,
    unit: "par an — véhicule",
    detail: "Responsabilité civile obligatoire, défense et recours, assistance panne de base.",
  },
  {
    icon: ShieldCheck,
    name: "Tous risques",
    price: 120_000,
    unit: "par an — véhicule",
    detail: "Tiers + dommages tous accidents, vol, incendie, bris de glace et protection batterie incluse.",
  },
  {
    icon: ShieldAlert,
    name: "Tiers moto",
    price: 18_000,
    unit: "par an — moto/scooter",
    detail: "Responsabilité civile et assistance dépannage dans les villes couvertes par le réseau VOLTARA.",
  },
  {
    icon: ShieldCheck,
    name: "Tous risques moto",
    price: 38_000,
    unit: "par an — moto/scooter",
    detail: "Tiers moto + vol de la batterie amovible, dommages accidentels et assistance swap prioritaire.",
  },
];

const faqItems = [
  { question: "L'assurance batterie est-elle obligatoire ?", answer: "Non, elle est optionnelle mais recommandée pour les batteries amovibles utilisées en livraison ou moto-taxi, où le risque de vol est plus élevé." },
  { question: "Que se passe-t-il en cas de panne batterie hors garantie ?", answer: "La formule tous risques couvre le remplacement de la batterie en cas de panne non prise en charge par la garantie constructeur, sous réserve d'un entretien conforme au forfait souscrit." },
  { question: "Puis-je assurer un véhicule utilisé pour le VTC ou la livraison ?", answer: "Oui, une surprime professionnelle s'applique pour les véhicules et motos utilisés dans le cadre de VOLTARA Ride ou VOLTARA Go, en raison du kilométrage et de l'usage plus intensifs." },
  { question: "Le vol de la batterie amovible est-il couvert en formule tiers ?", answer: "Non, seule la formule tous risques (véhicule ou moto) inclut la protection contre le vol de la batterie amovible." },
];

export function Assurance() {
  return (
    <>
      <PageHero
        tone="cyan"
        image={nightCars.blackCarParked}
        eyebrow="Services — Assurance"
        title="Assurez votre véhicule, votre moto et votre batterie électrique."
        description="Des formules pensées pour l'électrique : protection batterie, assistance recharge en panne, et des tarifs adaptés à l'usage particulier ou professionnel."
        actions={<Button href="/demande-de-devis">Demander un devis</Button>}
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Nos offres" title="Trois types de couverture, un seul contrat" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {offres.map((o) => {
            const Icon = o.icon;
            return (
              <div key={o.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-white">{o.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{o.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Formules" title="Tiers ou tous risques, selon votre besoin" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {formules.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.name} className="flex flex-col rounded-2xl border border-white/10 bg-night p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                  <Icon size={20} />
                </span>
                <Badge tone="cyan" className="mt-4 w-fit">{f.name}</Badge>
                <p className="mt-4 font-mono text-2xl font-semibold text-white">{formatXOF(f.price)}</p>
                <p className="text-xs text-steel">{f.unit}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">{f.detail}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-8">
          <Button href="/demande-de-devis">Demander un devis</Button>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur l'assurance" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="Services VOLTARA"
        title="Assurez votre véhicule ou votre moto en quelques minutes."
        description="Recevez un devis personnalisé selon votre véhicule, votre usage et votre pays, sans engagement."
        primaryLabel="Demander un devis"
        primaryHref="/demande-de-devis"
        secondaryLabel="Voir la maintenance"
        secondaryHref="/services/maintenance"
      />
    </>
  );
}
