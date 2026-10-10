import { Rocket, Target, History, MapPin } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";
import { CTASection } from "../components/ui/CTASection";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Awoulath Diabaté",
    role: "Fondatrice & CEO",
    bio: "Ex-directrice régionale d'un acteur panafricain des télécoms, elle a lancé VOLTARA avec la conviction que la mobilité électrique devait être pensée pour l'Afrique, et non importée telle quelle.",
  },
  {
    name: "Kouassi N'Guessan",
    role: "Directeur des opérations",
    bio: "Quinze ans dans la logistique et la distribution en Afrique de l'Ouest. Il pilote le réseau d'agences, de stations et de partenaires de VOLTARA au quotidien.",
  },
  {
    name: "Aminata Cissé",
    role: "Directrice énergie",
    bio: "Ingénieure électricienne formée à l'INP-HB de Yamoussoukro, elle supervise les pôles Charge, Swap et Solar ainsi que les relations avec les opérateurs électriques locaux.",
  },
  {
    name: "Jean-Baptiste Kouadio",
    role: "CTO",
    bio: "Ancien architecte logiciel dans la fintech mobile, il a conçu l'infrastructure technique de VOLTARA : applications, supervision des stations et plateforme de paiement échelonné.",
  },
  {
    name: "Chiamaka Okafor",
    role: "Directrice expansion Afrique",
    bio: "Spécialiste du développement de marché sur les corridors Nigeria–Ghana–Kenya, elle coordonne l'ouverture des nouveaux pays et les alliances avec les acteurs locaux.",
  },
];

interface PresenceCountry {
  country: string;
  city: string;
  status: string;
}

const presence: PresenceCountry[] = [
  { country: "Côte d'Ivoire", city: "Abidjan (siège), Yamoussoukro", status: "Opérationnel — tous les pôles" },
  { country: "Sénégal", city: "Dakar", status: "Opérationnel — Drive, Pay, Charge" },
  { country: "Ghana", city: "Accra", status: "Opérationnel — Drive, Ride, Go" },
  { country: "Nigeria", city: "Lagos", status: "Lancement en cours" },
  { country: "Kenya", city: "Nairobi", status: "Lancement en cours" },
];

const faqItems = [
  {
    question: "VOLTARA est-elle une entreprise ivoirienne ?",
    answer:
      "VOLTARA a été fondée à Abidjan en Côte d'Ivoire, où se trouve toujours notre siège social et notre plus grand centre opérationnel. Notre ambition est panafricaine : nous étendons progressivement notre écosystème à d'autres pays d'Afrique de l'Ouest et d'Afrique de l'Est.",
  },
  {
    question: "VOLTARA fabrique-t-elle ses propres véhicules ?",
    answer:
      "Non. VOLTARA sélectionne, importe, finance et entretient des véhicules et motos électriques auprès de constructeurs partenaires adaptés aux réalités africaines (routes, climat, usages professionnels). Notre valeur ajoutée est l'écosystème complet autour du véhicule : financement, recharge, swap et services.",
  },
  {
    question: "Comment VOLTARA choisit-elle les pays où elle s'implante ?",
    answer:
      "Nous priorisons les marchés urbains denses où la demande de mobilité et d'énergie propre est forte, où un cadre réglementaire favorable existe, et où nous pouvons nouer des partenariats locaux solides (énergéticiens, opérateurs Mobile Money, collectivités).",
  },
];

export function APropos() {
  return (
    <>
      <PageHero
        eyebrow="VOLTARA"
        title="Rendre la mobilité électrique et l'énergie propre accessibles en Afrique."
        description="VOLTARA est un écosystème intégré : véhicules électriques, financement adapté, recharge, swap de batteries, VTC, livraison et solaire. Une seule promesse, depuis Abidjan : une énergie fiable, abordable et locale."
        crumbs={[{ label: "À propos" }]}
      />

      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-graphite p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt/15 text-volt">
              <Target size={20} />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold text-white">Notre mission</h2>
            <p className="mt-3 leading-relaxed text-steel">
              Rendre la mobilité électrique et l'énergie propre accessibles au plus grand nombre en Afrique, qu'il s'agisse d'un particulier qui achète sa première moto, d'un livreur qui veut réduire ses charges quotidiennes, ou d'une entreprise qui électrifie sa flotte. Nous croyons qu'une énergie propre et abordable est un levier d'émancipation économique, pas un luxe réservé à quelques marchés.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-graphite p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
              <Rocket size={20} />
            </span>
            <h2 className="mt-5 font-display text-2xl font-semibold text-white">Notre vision</h2>
            <p className="mt-3 leading-relaxed text-steel">
              Devenir l'infrastructure de référence de la mobilité et de l'énergie propre sur le continent : un réseau dense de stations de recharge et de swap, des milliers de véhicules financés de façon responsable, et des services qui s'adaptent aux usages réels africains plutôt que de reproduire des modèles conçus ailleurs.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
              <History size={20} />
            </span>
            <SectionHeading
              eyebrow="Notre histoire"
              title="Une ambition panafricaine née à Abidjan."
              className="mt-5"
            />
            <p className="mt-4 leading-relaxed text-steel">
              VOLTARA est née récemment à Abidjan, portée par un constat simple : les deux-roues et véhicules thermiques pèsent lourd dans le budget des ménages et des indépendants africains, alors que le potentiel solaire du continent reste largement sous-exploité. Les fondateurs, issus des télécoms, de la logistique et de l'énergie, ont construit un premier réseau de stations de recharge et de swap à Abidjan, avant d'y adosser une offre de véhicules et un financement en paiement échelonné pensé pour des revenus journaliers ou irréguliers.
            </p>
            <p className="mt-4 leading-relaxed text-steel">
              En quelques mois, VOLTARA est passée d'un projet local à un écosystème à sept pôles — Drive, Pay, Ride, Go, Charge, Swap et Solar — et a commencé son expansion vers le Sénégal, le Ghana, puis le Nigeria et le Kenya. L'objectif : prouver qu'un modèle conçu en Afrique, pour l'Afrique, peut se déployer à l'échelle du continent.
            </p>
          </div>
          <VisualPlaceholder icon="🏁" tone="cyan" label="Photo d'équipe fondatrice — à venir" />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Équipe dirigeante" title="Les personnes qui pilotent VOLTARA" align="center" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <VisualPlaceholder icon="👤" label="Portrait — à venir" className="aspect-square" />
              <p className="mt-5 font-display text-lg font-semibold text-white">{member.name}</p>
              <p className="text-sm font-mono uppercase tracking-wide text-volt">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading
          eyebrow="Présence"
          title="Un réseau qui s'étend à travers le continent."
          description="Siège à Abidjan, opérations actives en Afrique de l'Ouest, et premiers pas en Afrique de l'Est."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-night text-steel">
                <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide">Pays</th>
                <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide">Villes</th>
                <th className="px-5 py-3 font-mono text-xs uppercase tracking-wide">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {presence.map((p) => (
                <tr key={p.country} className="bg-graphite">
                  <td className="px-5 py-4 font-display font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-volt" /> {p.country}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-steel">{p.city}</td>
                  <td className="px-5 py-4 text-steel">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
