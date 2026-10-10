import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Store,
  Wrench,
  Truck,
  TrendingUp,
  Landmark,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Check,
  Handshake,
  Quote,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { cn } from "../lib/utils";

type PartnerType = "station" | "revendeur" | "installateur" | "flotte" | "investisseur" | "collectivite";

interface PartnerTypeDef {
  id: PartnerType;
  icon: LucideIcon;
  title: string;
  description: string;
  advantages: string[];
  numericLabel: string;
  numericPlaceholder: string;
  detailPlaceholder: string;
}

const partnerTypes: PartnerTypeDef[] = [
  {
    id: "station",
    icon: MapPin,
    title: "Hôte de station",
    description: "Station-service, centre commercial, hôtel ou parking : accueillez une borne VOLTARA Charge ou un point de swap sur votre emplacement.",
    advantages: ["Revenu complémentaire sur chaque recharge vendue", "Flux de clientèle additionnel sur votre site", "Installation et maintenance prises en charge par VOLTARA"],
    numericLabel: "Surface disponible (m²)",
    numericPlaceholder: "Ex : 40",
    detailPlaceholder: "Décrivez votre emplacement : adresse, affluence habituelle, accès électrique disponible…",
  },
  {
    id: "revendeur",
    icon: Store,
    title: "Revendeur ou concessionnaire",
    description: "Distribuez les véhicules et motos électriques VOLTARA dans votre showroom ou votre réseau de vente existant.",
    advantages: ["Marge sur chaque véhicule vendu", "Formation produit et commerciale offerte", "Supports marketing et stock en consignation"],
    numericLabel: "Nombre de points de vente envisagés",
    numericPlaceholder: "Ex : 2",
    detailPlaceholder: "Parlez-nous de votre réseau actuel : zones couvertes, volumes de vente, expérience automobile ou deux-roues…",
  },
  {
    id: "installateur",
    icon: Wrench,
    title: "Installateur agréé",
    description: "Devenez technicien certifié pour l'installation et la maintenance des bornes de recharge et des kits solaires VOLTARA.",
    advantages: ["Flux de chantiers récurrent dans votre zone", "Certification et outillage fournis par VOLTARA", "Accès prioritaire aux pièces détachées"],
    numericLabel: "Nombre de techniciens dans votre équipe",
    numericPlaceholder: "Ex : 4",
    detailPlaceholder: "Décrivez votre activité actuelle : électricité, climatisation, solaire, automobile…",
  },
  {
    id: "flotte",
    icon: Truck,
    title: "Partenaire flotte",
    description: "Électrifiez votre flotte de VTC, de livraison ou d'entreprise avec l'accompagnement VOLTARA de bout en bout.",
    advantages: ["Tarifs préférentiels sur les véhicules et motos", "Maintenance et recharge incluses", "Accompagnement au financement (VOLTARA Pay entreprise)"],
    numericLabel: "Nombre de véhicules à électrifier",
    numericPlaceholder: "Ex : 15",
    detailPlaceholder: "Parlez-nous de votre flotte actuelle : type de véhicules, usage (VTC, livraison, interne), kilométrage moyen…",
  },
  {
    id: "investisseur",
    icon: TrendingUp,
    title: "Investisseur",
    description: "Financez le déploiement de stations de recharge, de points de swap ou de flottes de véhicules et percevez un retour récurrent.",
    advantages: ["Retour sur investissement récurrent et prévisible", "Rapports de performance transparents", "Co-investissement possible avec VOLTARA"],
    numericLabel: "Montant d'investissement envisagé (FCFA)",
    numericPlaceholder: "Ex : 25 000 000",
    detailPlaceholder: "Indiquez votre horizon d'investissement, les zones qui vous intéressent et vos attentes de rendement…",
  },
  {
    id: "collectivite",
    icon: Landmark,
    title: "Collectivité ou institution",
    description: "Déployez un projet pilote de mobilité propre ou des bornes publiques dans votre commune, votre université ou votre administration.",
    advantages: ["Co-financement et montages de subvention possibles", "Image d'innovation et d'engagement environnemental", "Données d'usage partagées pour le pilotage public"],
    numericLabel: "Nombre de sites publics visés",
    numericPlaceholder: "Ex : 6",
    detailPlaceholder: "Décrivez le contexte de votre collectivité : population, budget mobilisable, calendrier souhaité…",
  },
];

const countries = ["Côte d'Ivoire", "Sénégal", "Ghana", "Nigeria", "Kenya", "Autre"];

const processSteps = [
  { title: "Candidature en ligne", description: "Vous remplissez le formulaire ci-dessous en moins de 5 minutes." },
  { title: "Échange avec un conseiller", description: "Un conseiller partenariats VOLTARA vous recontacte sous 48h ouvrées pour qualifier votre projet." },
  { title: "Signature du partenariat", description: "Les modalités sont formalisées dans un contrat adapté à votre type de partenariat." },
  { title: "Déploiement", description: "Installation, formation et mise en service, avec un accompagnement VOLTARA à chaque étape." },
];

const testimonialsList = [
  {
    name: "Kouadio Yao",
    role: "Gérant d'une station-service, Abidjan (Cocody)",
    quote:
      "Depuis que la borne VOLTARA Charge est installée sur mon site, j'ai vu une nouvelle clientèle s'arrêter chez moi, souvent pour la première fois. Le revenu de la recharge vient s'ajouter à mon activité carburant classique, sans aucune charge de maintenance de mon côté.",
  },
  {
    name: "Aïcha Fall",
    role: "Directrice d'un centre commercial, Dakar",
    quote:
      "VOLTARA a installé trois bornes sur notre parking en moins de trois semaines. Nos clients restent plus longtemps sur site le temps de recharger, et l'équipe VOLTARA assure un suivi technique très réactif.",
  },
];

const faqItems = [
  {
    question: "Combien de temps dure le processus pour devenir partenaire ?",
    answer: "Entre la candidature et le déploiement, comptez en général 3 à 6 semaines selon le type de partenariat et la complexité du site ou du projet.",
  },
  {
    question: "Quel est l'engagement financier pour devenir hôte de station ?",
    answer: "Dans la majorité des cas, VOLTARA prend en charge l'installation et le matériel. Un ticket d'entrée peut être demandé pour certains formats premium ; il vous sera communiqué lors de l'échange avec votre conseiller.",
  },
  {
    question: "VOLTARA installe-t-il et entretient-il le matériel ?",
    answer: "Oui, l'installation, la supervision à distance et la maintenance préventive et corrective sont assurées par les équipes et installateurs agréés VOLTARA.",
  },
  {
    question: "Puis-je cumuler plusieurs types de partenariat ?",
    answer: "Oui, de nombreux partenaires combinent par exemple le statut d'hôte de station et de revendeur. Indiquez-le simplement à votre conseiller lors de l'échange.",
  },
  {
    question: "Le partenariat est-il exclusif sur ma zone géographique ?",
    answer: "Selon le type de partenariat et la densité déjà couverte dans votre zone, une forme d'exclusivité locale peut être négociée avec votre conseiller.",
  },
];

interface ContactInfo {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  country: string;
}

interface ProjectDetails {
  description: string;
  numericValue: string;
}

const stepLabels = ["Partenariat", "Contact", "Votre projet", "Récapitulatif"];

export function DevenirPartenaire() {
  const [partnerType, setPartnerType] = useState<PartnerType | null>(null);
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [contact, setContact] = useState<ContactInfo>({ fullName: "", company: "", phone: "", email: "", country: countries[0] });
  const [details, setDetails] = useState<ProjectDetails>({ description: "", numericValue: "" });

  const selectedType = partnerTypes.find((p) => p.id === partnerType) ?? null;

  function selectPartnerType(id: PartnerType) {
    setPartnerType(id);
    document.getElementById("candidature")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function canProceed(current: number) {
    if (current === 1) return partnerType !== null;
    if (current === 2) return Boolean(contact.fullName && contact.company && contact.phone && contact.email && contact.country);
    if (current === 3) return Boolean(details.description && details.numericValue);
    return true;
  }

  function goNext() {
    if (!canProceed(step)) return;
    setStep((s) => Math.min(4, s + 1));
  }

  function goBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  return (
    <>
      <PageHero
        eyebrow="Partenariats"
        title="Devenir partenaire VOLTARA"
        description="Hôte de station, revendeur, installateur, flotte, investisseur ou collectivité : rejoignez l'écosystème VOLTARA et participez à la transition énergétique de l'Afrique."
      />

      <Section tone="dark">
        <SectionHeading
          eyebrow="6 façons de s'associer"
          title="Choisissez le partenariat qui vous correspond"
          description="Chaque profil de partenaire bénéficie d'un accompagnement dédié, du premier contact jusqu'au déploiement."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((p) => {
            const Icon = p.icon;
            const active = partnerType === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => selectPartnerType(p.id)}
                className={cn(
                  "flex flex-col items-start rounded-2xl border p-6 text-left transition-colors",
                  active ? "border-volt bg-volt/10" : "border-white/10 bg-graphite hover:border-white/25",
                )}
              >
                <span className={cn("flex h-11 w-11 items-center justify-center rounded-xl", active ? "bg-volt text-night" : "bg-volt/15 text-volt")}>
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-white">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.advantages.slice(0, 2).map((a) => (
                    <li key={a} className="flex items-start gap-2 text-xs text-steel">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-volt" />
                      {a}
                    </li>
                  ))}
                </ul>
                <span className={cn("mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide", active ? "text-volt" : "text-steel")}>
                  {active ? "Sélectionné" : "Choisir ce partenariat"}
                  <ArrowRight size={13} />
                </span>
              </button>
            );
          })}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Pourquoi s'associer à VOLTARA" title="Des avantages concrets pour votre activité" />
            <ul className="mt-6 space-y-3">
              {[
                "Un revenu complémentaire, récurrent et prévisible",
                "La visibilité d'une marque panafricaine de référence sur la mobilité électrique",
                "Un accompagnement VOLTARA de bout en bout : technique, commercial et marketing",
                "Un réseau de partenaires en forte croissance dans 5 pays",
              ].map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border border-white/10 bg-night p-4 text-sm text-white/90">
                  <Handshake size={18} className="mt-0.5 shrink-0 text-volt" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Ce que nous attendons" title="Conditions pour devenir partenaire" />
            <ul className="mt-6 space-y-3">
              {[
                "Respecter la charte d'accueil et l'image de marque VOLTARA",
                "Garantir la disponibilité du site, de l'équipe ou de la flotte engagée",
                "Assurer un premier niveau de maintenance ou de suivi selon le type de partenariat",
                "Transmettre mensuellement les données d'usage convenues avec votre conseiller",
              ].map((a) => (
                <li key={a} className="flex items-start gap-3 rounded-xl border border-white/10 bg-night p-4 text-sm text-white/90">
                  <ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Processus" title="4 étapes jusqu'au déploiement" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-volt/15 font-mono text-sm text-volt">{i + 1}</span>
              <p className="mt-4 font-display font-semibold">{s.title}</p>
              <p className="mt-2 text-sm text-steel">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Ils sont partenaires" title="La parole à nos partenaires" align="center" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonialsList.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-night p-7">
              <Quote className="text-volt" size={22} />
              <p className="mt-4 text-balance leading-relaxed text-white/90">« {t.quote} »</p>
              <p className="mt-5 font-display font-semibold text-white">{t.name}</p>
              <p className="text-sm text-steel">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" id="candidature">
        <SectionHeading eyebrow="Candidature" title="Déposez votre candidature de partenariat" />

        <div className="mt-10 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-graphite p-6 sm:p-10">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <CheckCircle2 className="text-volt" size={40} />
              <p className="font-display text-xl font-semibold">Candidature envoyée</p>
              <p className="max-w-md text-sm text-steel">
                Merci {contact.fullName.split(" ")[0] || ""} ! Votre candidature en tant que {selectedType?.title.toLowerCase()} a bien été reçue. Un conseiller
                VOLTARA vous recontacte sous 48h ouvrées, par e-mail et par téléphone.
              </p>
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
                  <p className="font-display text-lg font-semibold text-white">Quel type de partenariat vous intéresse ?</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {partnerTypes.map((p) => {
                      const Icon = p.icon;
                      const active = partnerType === p.id;
                      return (
                        <label
                          key={p.id}
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors",
                            active ? "border-volt bg-volt/10" : "border-white/15 bg-night hover:border-white/30",
                          )}
                        >
                          <input
                            type="radio"
                            name="partnerType"
                            value={p.id}
                            checked={active}
                            onChange={() => setPartnerType(p.id)}
                            className="sr-only"
                          />
                          <Icon size={18} className={cn("mt-0.5 shrink-0", active ? "text-volt" : "text-steel")} />
                          <span className="text-sm font-semibold text-white">{p.title}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Vos informations de contact</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="dp-fullname" className="text-sm text-steel">Nom complet</label>
                      <input
                        id="dp-fullname"
                        required
                        value={contact.fullName}
                        onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dp-company" className="text-sm text-steel">Entreprise ou structure</label>
                      <input
                        id="dp-company"
                        required
                        value={contact.company}
                        onChange={(e) => setContact({ ...contact, company: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dp-phone" className="text-sm text-steel">Téléphone</label>
                      <input
                        id="dp-phone"
                        required
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="dp-email" className="text-sm text-steel">E-mail</label>
                      <input
                        id="dp-email"
                        required
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="dp-country" className="text-sm text-steel">Pays</label>
                      <select
                        id="dp-country"
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
                  </div>
                </div>
              )}

              {step === 3 && selectedType && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Détails de votre projet</p>
                  <div>
                    <label htmlFor="dp-description" className="text-sm text-steel">Parlez-nous de votre projet</label>
                    <textarea
                      id="dp-description"
                      required
                      rows={4}
                      value={details.description}
                      placeholder={selectedType.detailPlaceholder}
                      onChange={(e) => setDetails({ ...details, description: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="dp-numeric" className="text-sm text-steel">{selectedType.numericLabel}</label>
                    <input
                      id="dp-numeric"
                      required
                      type="number"
                      min={0}
                      value={details.numericValue}
                      placeholder={selectedType.numericPlaceholder}
                      onChange={(e) => setDetails({ ...details, numericValue: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 4 && selectedType && (
                <div className="space-y-4">
                  <p className="font-display text-lg font-semibold text-white">Récapitulatif de votre candidature</p>
                  <dl className="grid gap-x-6 gap-y-3 rounded-2xl border border-white/10 bg-night p-5 text-sm sm:grid-cols-2">
                    <div><dt className="text-steel">Type de partenariat</dt><dd className="font-semibold text-white">{selectedType.title}</dd></div>
                    <div><dt className="text-steel">Nom complet</dt><dd className="font-semibold text-white">{contact.fullName}</dd></div>
                    <div><dt className="text-steel">Entreprise</dt><dd className="font-semibold text-white">{contact.company}</dd></div>
                    <div><dt className="text-steel">Téléphone</dt><dd className="font-semibold text-white">{contact.phone}</dd></div>
                    <div><dt className="text-steel">E-mail</dt><dd className="font-semibold text-white">{contact.email}</dd></div>
                    <div><dt className="text-steel">Pays</dt><dd className="font-semibold text-white">{contact.country}</dd></div>
                    <div><dt className="text-steel">{selectedType.numericLabel}</dt><dd className="font-semibold text-white">{details.numericValue}</dd></div>
                    <div className="sm:col-span-2"><dt className="text-steel">Votre projet</dt><dd className="mt-1 text-white/90">{details.description}</dd></div>
                  </dl>
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
                    Envoyer ma candidature
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur le partenariat" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
