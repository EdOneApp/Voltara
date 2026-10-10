import { GraduationCap, Wrench, Award, Briefcase } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Button } from "../../components/ui/Button";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { CTASection } from "../../components/ui/CTASection";

const modules = [
  { title: "Électricité et sécurité haute tension", duration: "2 semaines", detail: "Habilitation électrique, risques spécifiques à la haute tension, procédures de consignation." },
  { title: "Diagnostic et maintenance batterie", duration: "3 semaines", detail: "Fonctionnement des cellules lithium, diagnostic de capacité, procédures de remplacement et de recyclage." },
  { title: "Électronique de puissance et moteur", duration: "2 semaines", detail: "Onduleurs, moteurs électriques, chaîne de traction, diagnostic des pannes les plus fréquentes." },
  { title: "Stage pratique en atelier agréé", duration: "3 semaines", detail: "Mise en situation réelle dans un atelier du réseau VOLTARA, sous la supervision d'un technicien certifié." },
];

const debouches = [
  "Technicien en atelier agréé VOLTARA, dans l'une des 6 villes du réseau",
  "Technicien itinérant pour les flottes d'entreprise VOLTARA Entreprises",
  "Création d'un atelier indépendant partenaire, avec accès aux pièces détachées officielles",
  "Évolution vers des postes de chef d'atelier ou de formateur régional",
];

const faqItems = [
  { question: "Quel est le niveau requis pour candidater ?", answer: "Un CAP ou BEP en mécanique, électricité ou maintenance automobile est recommandé, mais une expérience pratique équivalente est également prise en compte à l'entrée en formation." },
  { question: "Quelle certification est délivrée à l'issue du programme ?", answer: "Un certificat de technicien agréé VOLTARA en maintenance de véhicules électriques, reconnu dans l'ensemble du réseau d'ateliers agréés VOLTARA." },
  { question: "La formation est-elle payante ?", answer: "La formation est prise en charge par VOLTARA pour les candidats retenus qui s'engagent à exercer au moins 12 mois dans le réseau agréé. Une participation est demandée en l'absence d'engagement." },
  { question: "Puis-je suivre cette formation si je travaille déjà dans un garage ?", answer: "Oui, un format en alternance est proposé pour les techniciens déjà en activité, avec des sessions pratiques concentrées sur 2 jours par semaine." },
];

export function Formation() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Services — Formation"
        title="Devenez technicien certifié en maintenance de véhicules électriques."
        description="VOLTARA forme et certifie les techniciens de son réseau d'ateliers agréés, avec un programme pratique de 10 semaines et des débouchés concrets dans toute l'Afrique de l'Ouest et de l'Est."
        actions={<Button href="/carrieres">Candidater</Button>}
      />

      <Section tone="dark">
        <SectionHeading
          eyebrow="Programme"
          title="10 semaines, 4 modules, 1 certification"
          description="Un parcours conçu avec nos techniciens les plus expérimentés, mêlant théorie, ateliers pratiques et stage en conditions réelles."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m, i) => (
            <div key={m.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <span className="font-mono text-xs text-steel">Module 0{i + 1}</span>
              <p className="mt-3 font-display text-base font-semibold text-white">{m.title}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-cyan">{m.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel">{m.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Certification"
              title="Un certificat reconnu dans tout le réseau VOLTARA"
              description="À l'issue des 10 semaines et de l'évaluation pratique finale, chaque candidat reçoit le certificat de technicien agréé VOLTARA, condition d'accès aux postes du réseau d'ateliers."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-night p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <GraduationCap size={20} />
              </span>
              <p className="mt-3 font-display font-semibold text-white">10 semaines</p>
              <p className="text-xs text-steel">Durée du programme</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-night p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <Award size={20} />
              </span>
              <p className="mt-3 font-display font-semibold text-white">Certification</p>
              <p className="text-xs text-steel">Technicien agréé VOLTARA</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-night p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <Wrench size={20} />
              </span>
              <p className="mt-3 font-display font-semibold text-white">7 semaines</p>
              <p className="text-xs text-steel">De pratique en atelier</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-night p-6 text-center">
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <Briefcase size={20} />
              </span>
              <p className="mt-3 font-display font-semibold text-white">6 villes</p>
              <p className="text-xs text-steel">De débouchés possibles</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Débouchés" title="Des postes concrets dès la certification obtenue" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {debouches.map((d) => (
            <li key={d} className="flex gap-3 rounded-xl border border-white/10 bg-graphite p-5 text-sm leading-relaxed text-white/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {d}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/carrieres">Candidater</Button>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur la formation" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="Formation VOLTARA"
        title="Prêt à vous former à la maintenance électrique de demain ?"
        description="Les candidatures sont ouvertes en continu, avec une nouvelle session de formation lancée chaque trimestre dans l'une de nos villes partenaires."
        primaryLabel="Candidater"
        primaryHref="/carrieres"
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />
    </>
  );
}
