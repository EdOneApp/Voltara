import { Leaf, Briefcase, Recycle, Target } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatCounter } from "../components/ui/StatCounter";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";

interface Sdg {
  number: string;
  title: string;
  description: string;
}

const sdgs: Sdg[] = [
  {
    number: "ODD 7",
    title: "Énergie propre et d'un coût abordable",
    description: "Chaque station VOLTARA Charge et Swap élargit l'accès à une énergie fiable, tarifée de façon transparente.",
  },
  {
    number: "ODD 8",
    title: "Travail décent et croissance économique",
    description: "Techniciens, livreurs, chauffeurs et agents d'agence : VOLTARA crée des emplois formels et qualifiants.",
  },
  {
    number: "ODD 11",
    title: "Villes et communautés durables",
    description: "Moins de bruit, moins d'émissions locales : nos flottes électriques allègent la pression sur les centres urbains.",
  },
  {
    number: "ODD 13",
    title: "Mesures relatives à la lutte contre les changements climatiques",
    description: "Chaque kilomètre parcouru en électrique plutôt qu'en thermique réduit directement les émissions de CO₂ du secteur transport.",
  },
];

const jobCategories = [
  { role: "Techniciens de maintenance EV", count: "45+", desc: "Entretien des véhicules, des bornes et des stations de swap." },
  { role: "Livreurs VOLTARA Go", count: "210+", desc: "Livraison à moto électrique dans les grandes villes couvertes." },
  { role: "Chauffeurs VOLTARA Ride", count: "160+", desc: "Courses VTC en véhicule 100 % électrique." },
  { role: "Agents d'agence", count: "60+", desc: "Accueil, vente, financement et service après-vente en agence." },
];

const faqItems = [
  {
    question: "Comment VOLTARA calcule-t-elle le CO₂ évité ?",
    answer:
      "Nous comparons la consommation énergétique réelle de nos véhicules électriques (mesurée via les sessions de recharge et de swap) à la consommation d'essence qu'un véhicule thermique équivalent aurait nécessitée pour la même distance, en utilisant les facteurs d'émission reconnus pour le mix électrique local.",
  },
  {
    question: "Que deviennent les batteries en fin de vie ?",
    answer:
      "Les batteries de nos motos et véhicules suivent une filière de seconde vie : celles qui ont perdu de la capacité pour un usage mobile sont réaffectées au stockage stationnaire (par exemple pour nos stations solaires), avant un recyclage final par des partenaires spécialisés agréés.",
  },
  {
    question: "VOLTARA publie-t-elle un rapport d'impact ?",
    answer:
      "Un rapport d'impact annuel est en préparation, détaillant le CO₂ évité, les emplois créés et le taux de valorisation des batteries en fin de vie. Les entreprises clientes de VOLTARA Entreprises reçoivent d'ores et déjà un reporting CO₂ dédié à leur flotte.",
  },
];

export function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Une mobilité qui profite au climat, aux emplois et aux villes africaines."
        description="VOLTARA mesure son impact à chaque kilomètre parcouru : moins de CO₂, plus d'emplois locaux, des batteries valorisées jusqu'au bout, et un alignement clair avec les Objectifs de Développement Durable de l'ONU."
        crumbs={[{ label: "Impact" }]}
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Climat" title="Du CO₂ évité, kilomètre après kilomètre" />
        <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4">
          <StatCounter value={980} suffix=" t" label="CO₂ évité par an" />
          <StatCounter value={3200} suffix="+" label="Véhicules électriques en circulation" />
          <StatCounter value={1.4} suffix=" M" prefix="" label="Kilomètres électriques parcourus / mois" />
          <StatCounter value={16} label="Stations Charge & Swap actives" />
        </div>
        <p className="mt-8 max-w-2xl text-sm text-steel">
          Estimations basées sur les sessions de recharge et de swap enregistrées, comparées à un parc thermique équivalent. Méthodologie détaillée disponible sur demande pour nos partenaires entreprises.
        </p>
      </Section>

      <Section tone="graphite">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-go/15 text-go">
              <Briefcase size={20} />
            </span>
            <SectionHeading eyebrow="Emplois" title="Une filière qui crée des emplois locaux" className="mt-5" />
            <p className="mt-4 leading-relaxed text-steel">
              L'écosystème VOLTARA ne se limite pas à vendre des véhicules : il fait vivre des métiers. Chaque station de recharge ou de swap nécessite des techniciens formés sur place. Chaque course VOLTARA Ride ou livraison VOLTARA Go est assurée par un chauffeur ou un livreur partenaire. Chaque agence emploie des équipes commerciales et de service client locales.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {jobCategories.map((j) => (
              <div key={j.role} className="rounded-2xl border border-white/10 bg-night p-5">
                <p className="font-mono text-2xl font-semibold text-volt">{j.count}</p>
                <p className="mt-2 font-display font-semibold text-white">{j.role}</p>
                <p className="mt-1 text-sm text-steel">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan lg:hidden">
            <Recycle size={20} />
          </span>
          <div>
            <SectionHeading
              eyebrow="Seconde vie des batteries"
              title="Rien ne se perd : une filière de recyclage responsable"
              description="Une batterie lithium qui n'est plus adaptée à la mobilité garde encore 60 à 80 % de sa capacité initiale. Plutôt que de la jeter, VOLTARA l'intègre dans un cycle de valorisation en trois étapes."
            />
            <ol className="mt-6 space-y-3 text-sm text-steel">
              <li><span className="font-mono text-volt">01 —</span> Diagnostic de la capacité restante lors de chaque swap ou révision.</li>
              <li><span className="font-mono text-volt">02 —</span> Réaffectation en stockage stationnaire pour les stations VOLTARA Solar.</li>
              <li><span className="font-mono text-volt">03 —</span> Recyclage des matériaux (lithium, cobalt, nickel) par des partenaires agréés en fin de cycle.</li>
            </ol>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan/15 text-cyan">
              <Recycle size={32} />
            </span>
          </div>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading
          eyebrow="Objectifs de Développement Durable"
          title="Un impact aligné avec les priorités mondiales"
          description="VOLTARA situe son action dans le cadre des Objectifs de Développement Durable (ODD) des Nations Unies."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sdgs.map((s) => (
            <div key={s.number} className="rounded-2xl border border-white/10 bg-night p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-volt/15 text-volt">
                <Target size={18} />
              </span>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-volt">{s.number}</p>
              <p className="mt-2 font-display font-semibold text-white">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-solar/15 text-solar">
          <Leaf size={20} />
        </span>
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur notre impact" className="mt-5" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
