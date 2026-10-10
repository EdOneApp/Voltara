import { useState } from "react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { cars, motos } from "../data/vehicles";
import { formatXOF, cn } from "../lib/utils";

const durations = ["Jour", "Semaine", "Mois", "Longue durée (12-36 mois)"] as const;

const multipliers: Record<(typeof durations)[number], number> = {
  Jour: 0.9,
  Semaine: 5.5,
  Mois: 20,
  "Longue durée (12-36 mois)": 16,
};

const conditions = [
  { label: "Âge minimum", value: "21 ans (23 ans pour les SUV et utilitaires)" },
  { label: "Permis", value: "Permis B valide depuis 2 ans minimum" },
  { label: "Caution", value: "150 000 à 500 000 FCFA selon le véhicule, restituée sous 7 jours" },
  { label: "Kilométrage", value: "200 km/jour inclus, 120 FCFA/km au-delà" },
  { label: "Assurance", value: "Responsabilité civile incluse, formules tous risques en option" },
];

const agences = [
  { city: "Abidjan", address: "Boulevard Latrille, Cocody" },
  { city: "Yamoussoukro", address: "Avenue Houphouët-Boigny" },
  { city: "Dakar", address: "Avenue Léopold Sédar Senghor" },
  { city: "Accra", address: "Oxford Street, Osu" },
];

const faqItems = [
  { question: "Puis-je restituer le véhicule dans une autre agence ?", answer: "Oui, moyennant des frais de convoyage calculés selon la distance entre agences, affichés avant validation de la réservation." },
  { question: "La batterie est-elle garantie pendant la location ?", answer: "Oui, chaque véhicule loué bénéficie de la garantie batterie en vigueur et d'une assistance VOLTARA Charge incluse." },
  { question: "Que se passe-t-il en cas de retard de restitution ?", answer: "Un tarif journalier majoré de 20 % s'applique au-delà de 2 heures de retard, sauf accord préalable avec l'agence." },
  { question: "La location longue durée inclut-elle l'entretien ?", answer: "Oui, les contrats de 12 à 36 mois incluent l'entretien, l'assurance et le remplacement en cas d'immobilisation prolongée." },
];

export function Location() {
  const [duration, setDuration] = useState<(typeof durations)[number]>("Jour");
  const sample = [...cars.slice(0, 2), ...motos.slice(0, 2)];

  return (
    <>
      <PageHero
        eyebrow="VOLTARA Drive — Location"
        title="Louez un véhicule ou une moto électrique, au jour ou à l'année."
        description="Tarifs clairs, caution raisonnable, assistance recharge incluse. Réservez en ligne, retirez en agence."
        actions={<Button href="/demande-de-devis">Réserver une location</Button>}
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Tarifs" title="Un tarif par durée, pour chaque véhicule" />
        <div className="mt-8 flex flex-wrap gap-2">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setDuration(d)}
              className={cn("rounded-full border px-4 py-2 text-sm", duration === d ? "border-volt text-volt" : "border-white/15 text-steel")}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sample.map((v) => (
            <div key={v.slug} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-steel">{v.range}</p>
              <p className="mt-1 font-display font-semibold">{v.name}</p>
              <p className="mt-4 font-mono text-2xl font-semibold text-volt">
                {formatXOF(Math.round((v.dailyPayment * multipliers[duration]) / (duration === "Longue durée (12-36 mois)" ? 1 : 1)))}
              </p>
              <p className="text-xs text-steel">{duration === "Longue durée (12-36 mois)" ? "par mois" : `par ${duration.toLowerCase()}`}</p>
              <Button href="/demande-de-devis" variant="secondary" className="mt-5 w-full justify-center">
                Réserver
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Conditions" title="Ce qu'il faut savoir avant de louer" />
        <dl className="mt-8 divide-y divide-white/10">
          {conditions.map((c) => (
            <div key={c.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
              <dt className="font-medium text-white">{c.label}</dt>
              <dd className="text-steel sm:text-right">{c.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Agences" title="Retirez votre véhicule près de chez vous" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agences.map((a) => (
            <div key={a.city} className="rounded-xl border border-white/10 p-5">
              <p className="font-display font-semibold">{a.city}</p>
              <p className="mt-1 text-sm text-steel">{a.address}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur la location" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
