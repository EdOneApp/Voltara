import { Truck, Wallet, BarChart3, Leaf, Car, Zap, Sun } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { StatCounter } from "../components/ui/StatCounter";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";
import { CTASection } from "../components/ui/CTASection";

const flotte = [
  {
    icon: Wallet,
    title: "Financement adapté",
    description: "Leasing opérationnel ou VOLTARA Pay entreprise : électrifiez votre flotte sans immobiliser votre trésorerie, avec des mensualités alignées sur vos économies de carburant.",
  },
  {
    icon: Truck,
    title: "Accompagnement au changement",
    description: "Audit de flotte, dimensionnement des véhicules de remplacement, formation des conducteurs et plan de déploiement progressif site par site.",
  },
  {
    icon: BarChart3,
    title: "Télématique embarquée",
    description: "Suivi en temps réel de la position, de l'autonomie restante et de l'état de charge de chaque véhicule depuis un tableau de bord unique.",
  },
  {
    icon: Leaf,
    title: "Reporting CO2",
    description: "Un rapport mensuel exportable des émissions évitées, utile pour vos obligations RSE et vos appels d'offres intégrant un critère environnemental.",
  },
];

const caseStudies = [
  {
    company: "PME de distribution — Abidjan",
    result: "12 utilitaires VOLTARA Fret ont remplacé une flotte diesel vieillissante sur les tournées de livraison du Plateau et de Cocody.",
    stats: [
      { value: 12, suffix: "", label: "Véhicules électrifiés" },
      { value: 40, suffix: "%", label: "Coût carburant en moins" },
      { value: 18, suffix: " t", label: "CO2 évité par an" },
    ],
  },
  {
    company: "Flotte moto-livraison — Dakar",
    result: "45 motos Eclair et Cargo déployées pour une plateforme de e-commerce, avec swap illimité mensuel sur 3 stations VOLTARA Swap.",
    stats: [
      { value: 45, suffix: "", label: "Motos électrifiées" },
      { value: 62, suffix: "%", label: "Coût d'usage en moins" },
      { value: 9, suffix: " M", label: "FCFA économisés par an" },
    ],
  },
  {
    company: "Société de transport de personnel — Accra",
    result: "8 berlines Prestige en location longue durée pour les déplacements de direction, bornes installées au siège via VOLTARA Solar.",
    stats: [
      { value: 8, suffix: "", label: "Berlines en LLD" },
      { value: 100, suffix: "%", label: "Trajets électrifiés" },
      { value: 24, suffix: "", label: "Mois de contrat" },
    ],
  },
];

const faqItems = [
  { question: "À partir de combien de véhicules peut-on électrifier une flotte ?", answer: "Nos offres entreprises s'adressent aux flottes de 3 véhicules et plus. En dessous, la location longue durée classique reste la solution la plus adaptée." },
  { question: "Qui finance les bornes installées au dépôt ou au siège ?", answer: "L'installation peut être financée comptant, en leasing via VOLTARA Pay, ou incluse dans votre contrat de location longue durée de flotte. Un devis combiné véhicules + bornes est systématiquement proposé." },
  { question: "Comment est calculé le reporting CO2 ?", answer: "Le calcul compare la consommation réelle de vos véhicules électriques à la consommation moyenne d'un véhicule thermique équivalent sur le même kilométrage, selon un facteur d'émission mis à jour chaque trimestre." },
  { question: "Peut-on combiner véhicules, bornes et solaire dans un seul contrat ?", answer: "Oui, c'est l'objet de l'offre VOLTARA Entreprises : un interlocuteur unique coordonne la flotte, l'infrastructure de recharge et, si besoin, une centrale solaire pour réduire le coût de l'énergie consommée au dépôt." },
  { question: "Quel est le délai moyen de déploiement d'une flotte électrifiée ?", answer: "Entre 6 et 12 semaines entre la signature et la mise en circulation des premiers véhicules, selon la taille de la flotte et la disponibilité des modèles choisis." },
];

export function Entreprises() {
  return (
    <>
      <PageHero
        tone="go"
        eyebrow="VOLTARA Entreprises"
        title="Électrifiez votre flotte, vos bornes et votre énergie, avec un seul interlocuteur."
        description="Location longue durée, financement, bornes au dépôt, solaire commercial : VOLTARA accompagne les PME, grands comptes et administrations dans toute leur transition énergétique."
        actions={<Button href="/demande-de-devis">Parler à un expert</Button>}
      />

      <Section tone="dark">
        <SectionHeading
          eyebrow="Électrification de flotte"
          title="Tout ce qu'il faut pour transformer votre parc automobile"
          description="De l'audit initial au reporting mensuel, nos équipes dédiées aux entreprises pilotent chaque étape de votre transition."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flotte.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-go/15 text-go">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-white">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{f.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <VisualPlaceholder icon={<Car size={32} />} tone="go" label="Flotte VOLTARA en entreprise" />
          <div>
            <SectionHeading
              eyebrow="Location longue durée"
              title="Des véhicules et motos en LLD, entretien et assurance inclus."
              description="Contrats de 12 à 48 mois sur toute la gamme VOLTARA : citadines, SUV, utilitaires, berlines et motos. Entretien, assistance recharge et remplacement en cas d'immobilisation prolongée sont inclus dans le forfait mensuel."
            />
            <Button href="/vehicules" variant="secondary" className="mt-8">
              Voir le catalogue entreprise
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-graphite p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
              <Zap size={20} />
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-white">Bornes au dépôt ou au siège</p>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              Des bornes AC collectives et des stations DC rapides dimensionnées pour recharger toute votre flotte pendant les heures creuses, avec supervision et facturation par véhicule.
            </p>
            <Button href="/voltara-solar/bornes" variant="ghost" className="mt-4 px-0">
              Découvrir les bornes VOLTARA Solar →
            </Button>
          </div>
          <div className="rounded-2xl border border-white/10 bg-graphite p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
              <Sun size={20} />
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-white">Solaire commercial</p>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              Une centrale solaire en toiture ou en ombrière réduit le coût de l'énergie consommée par votre flotte et vos bâtiments, avec un amortissement estimé en quelques années.
            </p>
            <Button href="/voltara-solar/panneaux" variant="ghost" className="mt-4 px-0">
              Découvrir le solaire VOLTARA →
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Études de cas" title="Des entreprises déjà converties à l'électrique" />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <div key={c.company} className="rounded-2xl border border-white/10 bg-night p-7">
              <Badge tone="go" className="mb-4">Étude de cas</Badge>
              <p className="font-display text-lg font-semibold text-white">{c.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{c.result}</p>
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
                {c.stats.map((s) => (
                  <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-steel">Exemples illustratifs à partir de profils de clients types, construits à des fins de démonstration.</p>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes des entreprises" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Entreprises"
        title="Un expert dédié pour chiffrer votre transition flotte, bornes et solaire."
        description="Audit gratuit de votre parc actuel et proposition chiffrée sous 10 jours ouvrés, quelle que soit la taille de votre flotte."
        primaryLabel="Parler à un expert"
        primaryHref="/demande-de-devis"
        secondaryLabel="Voir les tarifs"
        secondaryHref="/tarifs"
      />
    </>
  );
}
