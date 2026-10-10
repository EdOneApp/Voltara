import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Zap, Sun, Truck, Package, Check, ArrowRight, ArrowLeft, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { cn, formatXOF } from "../lib/utils";
import { businessPhotos } from "../data/images";

type NeedType = "bornes" | "solaire" | "flotte" | "volume";

interface NeedDef {
  id: NeedType;
  icon: LucideIcon;
  title: string;
  description: string;
}

const needs: NeedDef[] = [
  { id: "bornes", icon: Zap, title: "Bornes de recharge", description: "Installer une ou plusieurs bornes à domicile, en entreprise ou sur un site public." },
  { id: "solaire", icon: Sun, title: "Installation solaire", description: "Produire votre propre électricité et réduire durablement votre facture." },
  { id: "flotte", icon: Truck, title: "Électrification de flotte", description: "Faire passer vos véhicules ou motos professionnels à l'électrique." },
  { id: "volume", icon: Package, title: "Véhicules en volume", description: "Acheter plusieurs véhicules ou motos en une seule commande groupée." },
];

const countries = ["Côte d'Ivoire", "Sénégal", "Ghana", "Nigeria", "Kenya", "Autre"];

const faqItems = [
  { question: "Cette estimation est-elle contractuelle ?", answer: "Non, il s'agit d'une estimation indicative calculée à partir des informations que vous saisissez. Le devis définitif est établi par un conseiller après étude de votre demande." },
  { question: "Sous quel délai suis-je recontacté ?", answer: "Un conseiller VOLTARA vous répond sous 24h ouvrées, avec un accusé de réception immédiat par e-mail et par WhatsApp." },
  { question: "Puis-je demander un devis pour plusieurs besoins à la fois ?", answer: "Ce formulaire traite une demande à la fois pour une estimation précise. Pour un besoin combiné (flotte et bornes par exemple), précisez-le dans le champ libre : votre conseiller regroupera votre dossier." },
];

interface Answers {
  bornesCount: string;
  siteType: "domicile" | "entreprise" | "public";
  monthlyBill: string;
  buildingType: "maison" | "appartement" | "commerce" | "industrie";
  vehicleCount: string;
  vehicleType: "voitures" | "motos";
  unitCount: string;
  model: string;
}

interface ContactInfo {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  city: string;
}

const initialAnswers: Answers = {
  bornesCount: "",
  siteType: "entreprise",
  monthlyBill: "",
  buildingType: "maison",
  vehicleCount: "",
  vehicleType: "voitures",
  unitCount: "",
  model: "",
};

const BORNE_PRICE: Record<Answers["siteType"], number> = {
  domicile: 650_000,
  entreprise: 1_450_000,
  public: 8_500_000,
};

const VEHICLE_PRICE: Record<Answers["vehicleType"], number> = {
  voitures: 10_500_000,
  motos: 1_300_000,
};

const VOLUME_BASE_PRICE = 9_000_000;

const stepLabels = ["Votre besoin", "Précisions", "Coordonnées", "Estimation"];

export function DemandeDevis() {
  const [need, setNeed] = useState<NeedType | null>(null);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [contact, setContact] = useState<ContactInfo>({ fullName: "", company: "", phone: "", email: "", country: countries[0], city: "" });

  const selectedNeed = needs.find((n) => n.id === need) ?? null;

  function canProceed(current: number) {
    if (current === 1) return need !== null;
    if (current === 2) {
      if (need === "bornes") return Boolean(answers.bornesCount);
      if (need === "solaire") return Boolean(answers.monthlyBill);
      if (need === "flotte") return Boolean(answers.vehicleCount);
      if (need === "volume") return Boolean(answers.unitCount && answers.model);
      return false;
    }
    if (current === 3) return Boolean(contact.fullName && contact.phone && contact.email && contact.country && contact.city);
    return true;
  }

  function goNext() {
    if (!canProceed(step)) return;
    setStep((s) => Math.min(4, s + 1));
  }

  function goBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  const estimate = useMemo(() => {
    if (need === "bornes") {
      const count = Number(answers.bornesCount) || 0;
      const unitPrice = BORNE_PRICE[answers.siteType];
      const total = count * unitPrice;
      return {
        headline: `À partir de ${formatXOF(total)}`,
        detail: `${count || 0} borne(s) × ${formatXOF(unitPrice)} (site ${answers.siteType}), pose et mise en service comprises.`,
      };
    }
    if (need === "solaire") {
      const bill = Number(answers.monthlyBill) || 0;
      const monthlySaving = Math.round(bill * 0.65);
      const investment = Math.round(bill * 30);
      const paybackYears = monthlySaving > 0 ? Math.max(1, Math.round(investment / (monthlySaving * 12))) : 0;
      return {
        headline: `Jusqu'à ${formatXOF(monthlySaving)} d'économie par mois`,
        detail: `Investissement indicatif de ${formatXOF(investment)}, amorti en environ ${paybackYears} an(s) selon votre consommation.`,
      };
    }
    if (need === "flotte") {
      const count = Number(answers.vehicleCount) || 0;
      const unitPrice = VEHICLE_PRICE[answers.vehicleType];
      const total = count * unitPrice;
      const low = Math.round(total * 0.85);
      const high = Math.round(total * 1.15);
      return {
        headline: `Entre ${formatXOF(low)} et ${formatXOF(high)}`,
        detail: `Pour ${count || 0} ${answers.vehicleType}, financement possible via VOLTARA Pay entreprise.`,
      };
    }
    if (need === "volume") {
      const count = Number(answers.unitCount) || 0;
      const discount = count >= 20 ? 0.12 : count >= 10 ? 0.08 : 0.04;
      const total = Math.round(count * VOLUME_BASE_PRICE * (1 - discount));
      return {
        headline: `À partir de ${formatXOF(total)}`,
        detail: `${count || 0} unité(s) « ${answers.model || "modèle à préciser"} », remise volume de ${Math.round(discount * 100)}% déjà appliquée.`,
      };
    }
    return { headline: "", detail: "" };
  }, [need, answers]);

  return (
    <>
      <PageHero
        image={businessPhotos.meeting}
        eyebrow="Devis"
        title="Demander un devis"
        description="Bornes de recharge, solaire, électrification de flotte ou achat groupé de véhicules : obtenez une estimation indicative immédiate et une réponse de nos conseillers sous 24h ouvrées."
      />

      <Section tone="dark">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-graphite p-6 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <CheckCircle2 className="text-volt" size={40} />
              <p className="font-display text-xl font-semibold">Demande reçue</p>
              <p className="max-w-md text-sm text-steel">
                Merci {contact.fullName.split(" ")[0] || ""} ! Un conseiller VOLTARA vous répond sous 24h ouvrées.
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-steel">
                <span className="flex items-center gap-1.5"><Mail size={14} className="text-volt" /> Accusé de réception par e-mail</span>
                <span className="flex items-center gap-1.5"><MessageCircle size={14} className="text-volt" /> Accusé de réception par WhatsApp</span>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-10 flex items-center">
                {stepLabels.map((label, i) => {
                  const n = i + 1;
                  const active = step === n;
                  const done = step > n;
                  return (
                    <div key={label} className="flex flex-1 items-center last:flex-none">
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={cn(
                            "flex h-9 w-9 items-center justify-center rounded-full border font-mono text-sm",
                            active || done ? "border-volt bg-volt text-night" : "border-white/20 text-steel",
                          )}
                        >
                          {done ? <Check size={16} /> : n}
                        </span>
                        <span className={cn("hidden text-center text-xs sm:block", active ? "text-white" : "text-steel")}>{label}</span>
                      </div>
                      {n < stepLabels.length && <span className={cn("mx-2 h-px flex-1", done ? "bg-volt" : "bg-white/15")} />}
                    </div>
                  );
                })}
              </div>

              {step === 1 && (
                <div>
                  <p className="font-display text-lg font-semibold text-white">Quel est votre besoin ?</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {needs.map((n) => {
                      const Icon = n.icon;
                      const active = need === n.id;
                      return (
                        <label
                          key={n.id}
                          className={cn(
                            "flex cursor-pointer flex-col items-start gap-2 rounded-xl border p-5 transition-colors",
                            active ? "border-volt bg-volt/10" : "border-white/15 bg-night hover:border-white/30",
                          )}
                        >
                          <input type="radio" name="need" value={n.id} checked={active} onChange={() => setNeed(n.id)} className="sr-only" />
                          <Icon size={20} className={active ? "text-volt" : "text-steel"} />
                          <span className="font-display font-semibold text-white">{n.title}</span>
                          <span className="text-sm text-steel">{n.description}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && need === "bornes" && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Précisez votre projet de recharge</p>
                  <div>
                    <label htmlFor="dd-bornes-count" className="text-sm text-steel">Nombre de bornes souhaité</label>
                    <input
                      id="dd-bornes-count"
                      required
                      type="number"
                      min={1}
                      value={answers.bornesCount}
                      onChange={(e) => setAnswers({ ...answers, bornesCount: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd-site-type" className="text-sm text-steel">Type de site</label>
                    <select
                      id="dd-site-type"
                      value={answers.siteType}
                      onChange={(e) => setAnswers({ ...answers, siteType: e.target.value as Answers["siteType"] })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    >
                      <option value="domicile">Domicile</option>
                      <option value="entreprise">Entreprise</option>
                      <option value="public">Site public</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && need === "solaire" && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Précisez votre projet solaire</p>
                  <div>
                    <label htmlFor="dd-bill" className="text-sm text-steel">Facture électrique mensuelle actuelle (FCFA)</label>
                    <input
                      id="dd-bill"
                      required
                      type="number"
                      min={0}
                      value={answers.monthlyBill}
                      onChange={(e) => setAnswers({ ...answers, monthlyBill: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd-building" className="text-sm text-steel">Type de bâtiment</label>
                    <select
                      id="dd-building"
                      value={answers.buildingType}
                      onChange={(e) => setAnswers({ ...answers, buildingType: e.target.value as Answers["buildingType"] })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    >
                      <option value="maison">Maison individuelle</option>
                      <option value="appartement">Appartement</option>
                      <option value="commerce">Commerce</option>
                      <option value="industrie">Site industriel</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && need === "flotte" && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Précisez votre flotte</p>
                  <div>
                    <label htmlFor="dd-vehicle-count" className="text-sm text-steel">Nombre de véhicules</label>
                    <input
                      id="dd-vehicle-count"
                      required
                      type="number"
                      min={1}
                      value={answers.vehicleCount}
                      onChange={(e) => setAnswers({ ...answers, vehicleCount: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd-vehicle-type" className="text-sm text-steel">Type de véhicules</label>
                    <select
                      id="dd-vehicle-type"
                      value={answers.vehicleType}
                      onChange={(e) => setAnswers({ ...answers, vehicleType: e.target.value as Answers["vehicleType"] })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    >
                      <option value="voitures">Voitures</option>
                      <option value="motos">Motos</option>
                    </select>
                  </div>
                </div>
              )}

              {step === 2 && need === "volume" && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Précisez votre commande groupée</p>
                  <div>
                    <label htmlFor="dd-unit-count" className="text-sm text-steel">Nombre d'unités</label>
                    <input
                      id="dd-unit-count"
                      required
                      type="number"
                      min={1}
                      value={answers.unitCount}
                      onChange={(e) => setAnswers({ ...answers, unitCount: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="dd-model" className="text-sm text-steel">Modèle souhaité</label>
                    <input
                      id="dd-model"
                      required
                      placeholder="Ex : VOLTARA Citadine One, VOLTARA Moto Eclair…"
                      value={answers.model}
                      onChange={(e) => setAnswers({ ...answers, model: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Vos coordonnées</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="dd-fullname" className="text-sm text-steel">Nom complet</label>
                      <input
                        id="dd-fullname"
                        required
                        value={contact.fullName}
                        onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dd-company" className="text-sm text-steel">Entreprise (optionnel)</label>
                      <input
                        id="dd-company"
                        value={contact.company}
                        onChange={(e) => setContact({ ...contact, company: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dd-phone" className="text-sm text-steel">Téléphone</label>
                      <input
                        id="dd-phone"
                        required
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dd-email" className="text-sm text-steel">E-mail</label>
                      <input
                        id="dd-email"
                        required
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dd-country" className="text-sm text-steel">Pays</label>
                      <select
                        id="dd-country"
                        required
                        value={contact.country}
                        onChange={(e) => setContact({ ...contact, country: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      >
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dd-city" className="text-sm text-steel">Ville</label>
                      <input
                        id="dd-city"
                        required
                        value={contact.city}
                        onChange={(e) => setContact({ ...contact, city: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && selectedNeed && (
                <div className="space-y-6">
                  <div className="rounded-2xl border border-volt/30 bg-gradient-to-br from-volt/10 via-night to-night p-6">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-steel">Estimation indicative</p>
                    <p className="mt-2 font-mono text-3xl font-semibold text-volt">{estimate.headline}</p>
                    <p className="mt-2 text-sm text-steel">{estimate.detail}</p>
                    <p className="mt-4 text-xs text-steel">
                      Cette estimation est donnée à titre indicatif à partir des informations saisies. Le devis définitif sera établi par un conseiller VOLTARA.
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-lg font-semibold text-white">Récapitulatif</p>
                    <dl className="mt-3 grid gap-x-6 gap-y-3 rounded-2xl border border-white/10 bg-night p-5 text-sm sm:grid-cols-2">
                      <div><dt className="text-steel">Besoin</dt><dd className="font-semibold text-white">{selectedNeed.title}</dd></div>
                      <div><dt className="text-steel">Nom complet</dt><dd className="font-semibold text-white">{contact.fullName}</dd></div>
                      <div><dt className="text-steel">Entreprise</dt><dd className="font-semibold text-white">{contact.company || "—"}</dd></div>
                      <div><dt className="text-steel">Téléphone</dt><dd className="font-semibold text-white">{contact.phone}</dd></div>
                      <div><dt className="text-steel">E-mail</dt><dd className="font-semibold text-white">{contact.email}</dd></div>
                      <div><dt className="text-steel">Localisation</dt><dd className="font-semibold text-white">{contact.city}, {contact.country}</dd></div>
                    </dl>
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <Button type="button" variant="secondary" onClick={goBack} icon={<ArrowLeft size={16} />}>
                    Précédent
                  </Button>
                ) : (
                  <span />
                )}
                {step < 4 ? (
                  <Button type="button" onClick={goNext} className={cn(!canProceed(step) && "pointer-events-none opacity-40")} icon={<ArrowRight size={16} />}>
                    Suivant
                  </Button>
                ) : (
                  <Button type="button" onClick={() => setSubmitted(true)}>
                    Envoyer ma demande
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Questions" title="Avant d'envoyer votre demande" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
