import { useMemo, useState } from "react";
import { Download, FileCheck2, Wallet, Calculator, ClipboardList } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { vehicles } from "../data/vehicles";
import { nightCars } from "../data/images";
import { computeSimulation, type Frequency } from "../lib/simulator";
import { formatXOF } from "../lib/utils";

const steps = [
  { icon: Calculator, title: "Simulez", description: "Choisissez un véhicule, un apport et une durée pour estimer votre paiement." },
  { icon: ClipboardList, title: "Déposez un dossier", description: "Pièce d'identité, justificatif de domicile et de revenus, en ligne en 10 minutes." },
  { icon: FileCheck2, title: "Recevez une réponse", description: "Un conseiller VOLTARA Pay vous répond sous 48h ouvrées." },
  { icon: Wallet, title: "Payez petit à petit", description: "Par Mobile Money, jour, semaine ou mois, jusqu'au dernier paiement." },
];

const paymentMethods = ["Orange Money", "MTN MoMo", "Moov Money", "Wave", "Carte bancaire", "Virement"];

const faqItems = [
  { question: "Quel est le taux appliqué ?", answer: "Un taux indicatif de 15 % l'an est utilisé pour la simulation. Le taux définitif dépendra du barème fixé avec notre partenaire financier et de votre profil." },
  { question: "Que se passe-t-il en cas de retard de paiement ?", answer: "Un délai de grâce de 5 jours est accordé. Au-delà, des pénalités s'appliquent selon les conditions VOLTARA Pay, consultables dans nos mentions légales." },
  { question: "Qui est propriétaire du véhicule pendant le paiement échelonné ?", answer: "VOLTARA reste propriétaire du véhicule jusqu'au dernier paiement. Le transfert de propriété est automatique à l'issue du contrat." },
  { question: "Puis-je solder mon dossier par anticipation ?", answer: "Oui, sans pénalité, en contactant votre conseiller VOLTARA Pay ou depuis votre espace client." },
  { question: "Quelles pièces dois-je fournir ?", answer: "Une pièce d'identité en cours de validité, un justificatif de domicile de moins de 3 mois, et selon les cas un justificatif de revenus ou d'activité (reçus de livraison, relevé Mobile Money)." },
];

export function VoltaraPay() {
  const [vehicleSlug, setVehicleSlug] = useState(vehicles[0].slug);
  const [apport, setApport] = useState(20);
  const [duration, setDuration] = useState(18);
  const [frequency, setFrequency] = useState<Frequency>("jour");
  const [submitted, setSubmitted] = useState(false);

  const vehicle = vehicles.find((v) => v.slug === vehicleSlug)!;
  const sim = computeSimulation({ price: vehicle.priceFrom, apportPct: apport, durationMonths: duration, frequency });

  const schedulePreview = useMemo(() => Array.from({ length: Math.min(6, duration) }, (_, i) => i + 1), [duration]);

  return (
    <>
      <PageHero
        image={nightCars.blackSedan}
        eyebrow="VOLTARA Pay"
        title="Payez petit à petit, en toute transparence."
        description="Le paiement échelonné conçu pour l'Afrique : apport ajustable, durée de 6 à 48 mois, règlement en Mobile Money au jour, à la semaine ou au mois."
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Comment ça marche" title="4 étapes jusqu'à votre véhicule" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-volt/15 font-mono text-sm text-volt">{i + 1}</span>
              <p className="mt-4 font-display font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-steel">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite" id="simulateur">
        <SectionHeading eyebrow="Simulateur complet" title="Calculez votre échéancier" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-night p-8">
            <div>
              <label className="text-sm text-steel">Véhicule</label>
              <select
                value={vehicleSlug}
                onChange={(e) => setVehicleSlug(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/15 bg-graphite px-4 py-3 focus:border-volt focus:outline-none"
              >
                {vehicles.map((v) => (
                  <option key={v.slug} value={v.slug}>
                    {v.name} — {formatXOF(v.priceFrom)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between text-sm text-steel">
                <span>Apport</span>
                <span className="font-mono text-white">{apport}% — {formatXOF(sim.apportAmount)}</span>
              </div>
              <input type="range" min={0} max={60} step={5} value={apport} onChange={(e) => setApport(Number(e.target.value))} className="mt-2 w-full accent-[#C6FF3D]" />
            </div>

            <div>
              <div className="flex justify-between text-sm text-steel">
                <span>Durée</span>
                <span className="font-mono text-white">{duration} mois</span>
              </div>
              <input type="range" min={6} max={48} step={6} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="mt-2 w-full accent-[#C6FF3D]" />
            </div>

            <div>
              <p className="text-sm text-steel">Fréquence de paiement</p>
              <div className="mt-2 flex gap-2">
                {(["jour", "semaine", "mois"] as Frequency[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`flex-1 rounded-xl border px-3 py-2 text-sm capitalize ${frequency === f ? "border-volt text-volt" : "border-white/15 text-steel"}`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-volt/30 bg-gradient-to-br from-volt/10 via-graphite to-graphite p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-steel">Paiement estimé</p>
              <p className="mt-3 font-mono text-5xl font-semibold text-volt">{formatXOF(sim.paymentForFrequency)}</p>
              <p className="text-steel">{sim.frequencyLabel}</p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div><dt className="text-steel">Montant financé</dt><dd className="font-mono text-white">{formatXOF(sim.financedAmount)}</dd></div>
              <div><dt className="text-steel">Intérêts estimés</dt><dd className="font-mono text-white">{formatXOF(sim.totalInterest)}</dd></div>
              <div><dt className="text-steel">Coût total</dt><dd className="font-mono text-white">{formatXOF(sim.totalCost)}</dd></div>
              <div><dt className="text-steel">Mensualité</dt><dd className="font-mono text-white">{formatXOF(sim.paymentPerMonth)}</dd></div>
            </dl>

            <div className="mt-6">
              <p className="mb-2 font-mono text-xs uppercase tracking-wide text-steel">Aperçu calendrier (6 premiers mois)</p>
              <div className="flex flex-wrap gap-2">
                {schedulePreview.map((m) => (
                  <span key={m} className="rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs text-steel">
                    Mois {m} · {formatXOF(sim.paymentPerMonth)}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="secondary" className="mt-6 w-full justify-center" icon={<Download size={16} />}>
              Exporter en PDF
            </Button>
            <p className="mt-4 text-xs text-steel">
              Simulation indicative, taux annuel de 15 % à titre d'exemple. Le barème définitif sera fixé avec notre partenaire financier.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="dark" id="dossier">
        <SectionHeading eyebrow="Éligibilité" title="Déposer un dossier" />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display font-semibold">Conditions d'éligibilité</p>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>— Être âgé de 21 ans ou plus</li>
              <li>— Résider dans un pays couvert par VOLTARA</li>
              <li>— Justifier d'un revenu ou d'une activité régulière (salariat, livraison, VTC, commerce)</li>
              <li>— Fournir une pièce d'identité en cours de validité</li>
            </ul>
            <p className="mt-6 font-display font-semibold">Moyens de paiement acceptés</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {paymentMethods.map((m) => (
                <span key={m} className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-steel">{m}</span>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-white/10 bg-graphite p-6"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 py-12 text-center">
                <FileCheck2 className="text-volt" size={36} />
                <p className="font-display font-semibold">Dossier reçu</p>
                <p className="text-sm text-steel">Un conseiller VOLTARA Pay vous recontacte sous 48h ouvrées, par e-mail et WhatsApp.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-steel">Nom complet</label>
                  <input required className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm text-steel">Téléphone (WhatsApp)</label>
                  <input required className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm text-steel">E-mail</label>
                  <input required type="email" className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm text-steel">Ville</label>
                  <input required className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none" />
                </div>
                <Button type="submit" className="w-full justify-center">Déposer mon dossier</Button>
                <p className="text-center text-xs text-steel">Véhicule : {vehicle.name} — {formatXOF(sim.paymentForFrequency)} {sim.frequencyLabel}</p>
              </div>
            )}
          </form>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur VOLTARA Pay" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
