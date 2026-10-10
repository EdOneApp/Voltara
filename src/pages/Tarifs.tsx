import { useState } from "react";
import type { ReactNode } from "react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTASection";
import { cn, formatXOF } from "../lib/utils";
import { chargingPhotos } from "../data/images";

const countries = [
  { label: "Côte d'Ivoire", currency: "FCFA" },
  { label: "Sénégal", currency: "FCFA" },
  { label: "Ghana", currency: "Cedi ghanéen (GHS)" },
  { label: "Nigeria", currency: "Naira (NGN)" },
  { label: "Kenya", currency: "Shilling kenyan (KES)" },
];

interface RateRow {
  label: string;
  values: string[];
}

function RateTable({ columns, rows }: { columns: string[]; rows: RateRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[520px] border-collapse text-sm">
        <thead>
          <tr className="bg-graphite">
            <th className="border-b border-white/10 px-4 py-3 text-left font-display text-white">Formule</th>
            {columns.map((c) => (
              <th key={c} className="border-b border-white/10 px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-steel">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="odd:bg-night even:bg-graphite/40">
              <td className="border-b border-white/10 px-4 py-3 font-medium text-white">{r.label}</td>
              {r.values.map((v, i) => (
                <td key={i} className="border-b border-white/10 px-4 py-3 font-mono text-steel">
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TarifSection({ eyebrow, title, description, children }: { eyebrow: string; title: string; description?: string; children: ReactNode }) {
  return (
    <Section tone="dark">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="mt-8">{children}</div>
    </Section>
  );
}

export function Tarifs() {
  const [countryIdx, setCountryIdx] = useState(0);
  const country = countries[countryIdx];

  return (
    <>
      <PageHero
        tone="volt"
        image={chargingPhotos.stationOutdoor}
        eyebrow="Tarifs VOLTARA"
        title="Tous nos tarifs, pôle par pôle, en un seul endroit."
        description="Recharge, swap, location, livraison, VTC et abonnements entreprises : des tarifs clairs et sans frais cachés sur tout le réseau VOLTARA."
      />

      <Section tone="dark" className="pb-0">
        <SectionHeading eyebrow="Pays" title="Choisissez votre pays" description="Les montants ci-dessous sont affichés en FCFA à titre de référence et s'ajustent à la devise locale." />
        <div className="mt-8 flex flex-wrap gap-2">
          {countries.map((c, i) => (
            <button
              key={c.label}
              onClick={() => setCountryIdx(i)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                countryIdx === i ? "border-volt text-volt" : "border-white/15 text-steel hover:border-white/30",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-steel">
          Devise sélectionnée : <span className="text-white">{country.currency}</span>. Les tarifs affichés restent en FCFA pour référence ; la conversion réelle est appliquée dans l'application VOLTARA selon le taux en vigueur.
        </p>
      </Section>

      <TarifSection
        eyebrow="VOLTARA Charge"
        title="Recharge"
        description="Facturation à la consommation (kWh) en charge lente, et à la minute en charge rapide, avec deux formules d'abonnement."
      >
        <RateTable
          columns={["Tarif"]}
          rows={[
            { label: "Charge AC (lente/standard)", values: [`${formatXOF(95)} / kWh`] },
            { label: "Charge DC (rapide)", values: [`${formatXOF(45)} / minute`] },
            { label: "Abonnement Essentiel", values: [`${formatXOF(9_000)} / mois — 150 kWh inclus puis ${formatXOF(90)}/kWh`] },
            { label: "Abonnement Illimité", values: [`${formatXOF(25_000)} / mois — charge AC illimitée en station partenaire`] },
          ]}
        />
      </TarifSection>

      <TarifSection eyebrow="VOLTARA Swap" title="Échange de batteries" description="Pour les motos et scooters compatibles swap, un échange en moins de 2 minutes.">
        <RateTable
          columns={["Tarif"]}
          rows={[
            { label: "Swap à l'unité", values: [formatXOF(1_200)] },
            { label: "Illimité hebdomadaire", values: [`${formatXOF(14_000)} / semaine`] },
            { label: "Illimité mensuel", values: [`${formatXOF(48_000)} / mois`] },
          ]}
        />
      </TarifSection>

      <TarifSection eyebrow="VOLTARA Drive" title="Location de véhicules et motos" description="Tarifs indicatifs par durée, hors caution et assurance tous risques optionnelle.">
        <RateTable
          columns={["Jour", "Semaine", "Mois", "Longue durée (par mois)"]}
          rows={[
            { label: "Citadine", values: [formatXOF(25_000), formatXOF(140_000), formatXOF(480_000), formatXOF(380_000)] },
            { label: "SUV", values: [formatXOF(38_000), formatXOF(210_000), formatXOF(720_000), formatXOF(560_000)] },
            { label: "Utilitaire", values: [formatXOF(32_000), formatXOF(180_000), formatXOF(610_000), formatXOF(470_000)] },
            { label: "Moto", values: [formatXOF(6_000), formatXOF(32_000), formatXOF(110_000), formatXOF(85_000)] },
            { label: "Scooter", values: [formatXOF(4_000), formatXOF(22_000), formatXOF(75_000), formatXOF(58_000)] },
          ]}
        />
      </TarifSection>

      <TarifSection eyebrow="VOLTARA Go" title="Livraison" description="Tarification par zone de distance, avec supplément express en option.">
        <RateTable
          columns={["Tarif"]}
          rows={[
            { label: "0 à 3 km", values: [formatXOF(1_000)] },
            { label: "3 à 7 km", values: [formatXOF(1_800)] },
            { label: "7 à 15 km", values: [formatXOF(2_800)] },
            { label: "Au-delà de 15 km", values: [`${formatXOF(350)} / km supplémentaire`] },
            { label: "Supplément livraison express (< 30 min)", values: [`+ ${formatXOF(500)}`] },
          ]}
        />
      </TarifSection>

      <TarifSection eyebrow="VOLTARA Ride" title="VTC" description="Prise en charge fixe puis tarif au kilomètre, selon la formule choisie.">
        <RateTable
          columns={["Prise en charge", "Prix / km"]}
          rows={[
            { label: "Eco", values: [formatXOF(500), formatXOF(180)] },
            { label: "Confort", values: [formatXOF(800), formatXOF(230)] },
            { label: "Business", values: [formatXOF(1_500), formatXOF(350)] },
          ]}
        />
      </TarifSection>

      <TarifSection
        eyebrow="VOLTARA Entreprises"
        title="Abonnements entreprises"
        description="Flotte, bornes et solaire : des formules mensuelles pensées pour les PME comme pour les grands comptes."
      >
        <RateTable
          columns={["Tarif"]}
          rows={[
            { label: "Flotte Starter (jusqu'à 5 véhicules)", values: [`${formatXOF(150_000)} / mois`] },
            { label: "Flotte Croissance (6 à 20 véhicules)", values: [`${formatXOF(520_000)} / mois`] },
            { label: "Flotte Grand Compte (20+ véhicules)", values: ["Sur devis"] },
            { label: "Supervision borne entreprise", values: [`${formatXOF(45_000)} / mois / borne`] },
            { label: "Maintenance & monitoring solaire", values: [`à partir de ${formatXOF(25_000)} / mois`] },
          ]}
        />
      </TarifSection>

      <Section tone="graphite">
        <p className="text-xs leading-relaxed text-steel">
          Les tarifs ci-dessus sont indicatifs et affichés en FCFA à titre de référence. Ils varient selon le pays d'opération et sont facturés dans la devise locale en vigueur
          (FCFA en Côte d'Ivoire et au Sénégal, cedi ghanéen au Ghana, naira au Nigeria, shilling kenyan au Kenya), selon le taux de change et la fiscalité applicables au moment de la transaction.
        </p>
      </Section>

      <CTASection
        eyebrow="Un tarif sur mesure ?"
        title="Besoin d'un devis adapté à votre usage ou à votre flotte ?"
        description="Nos équipes établissent un chiffrage personnalisé sous 48 h, quel que soit le pôle VOLTARA concerné."
        primaryLabel="Demander un devis"
        primaryHref="/demande-de-devis"
        secondaryLabel="Voir les entreprises"
        secondaryHref="/entreprises"
      />
    </>
  );
}
