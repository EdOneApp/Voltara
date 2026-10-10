import { Download, Mail, Phone } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";

interface PressRelease {
  date: string;
  title: string;
  excerpt: string;
}

const releases: PressRelease[] = [
  {
    date: "3 septembre 2026",
    title: "VOLTARA lève des fonds pour étendre son réseau de swap en Afrique de l'Ouest",
    excerpt:
      "VOLTARA annonce une levée de fonds auprès d'investisseurs panafricains pour tripler son réseau de stations VOLTARA Swap à Abidjan, Dakar et Accra d'ici la fin de l'année prochaine.",
  },
  {
    date: "12 juin 2026",
    title: "VOLTARA annonce son arrivée au Kenya",
    excerpt:
      "Après le Sénégal et le Ghana, VOLTARA confirme l'ouverture de ses opérations à Nairobi, avec un premier déploiement de véhicules VOLTARA Drive et d'une flotte VOLTARA Ride dès le premier trimestre.",
  },
  {
    date: "28 février 2026",
    title: "VOLTARA Pay franchit le cap des 10 000 dossiers de financement",
    excerpt:
      "Le pôle de paiement échelonné de VOLTARA dépasse les 10 000 dossiers financés depuis son lancement, confirmant la demande forte pour un financement adapté aux revenus journaliers des indépendants africains.",
  },
  {
    date: "15 novembre 2025",
    title: "VOLTARA lance son offre solaire pour les entreprises",
    excerpt:
      "VOLTARA Solar ouvre son offre aux entreprises ivoiriennes : panneaux, stockage par batteries de seconde vie et installation de bornes de recharge pour flottes professionnelles.",
  },
];

export function Presse() {
  return (
    <>
      <PageHero
        eyebrow="Presse"
        title="Actualités, ressources et contacts pour les journalistes."
        description="Communiqués de presse, kit média et contacts dédiés pour toute demande d'interview, de visuel ou d'information sur VOLTARA."
        crumbs={[{ label: "Presse" }]}
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Communiqués" title="Dernières annonces VOLTARA" />
        <div className="mt-10 space-y-6">
          {releases.map((r) => (
            <div key={r.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-volt">{r.date}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{r.excerpt}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Kit média"
              title="Logos, charte graphique et visuels"
              description="Téléchargez les éléments officiels de la marque VOLTARA pour vos articles : logos en haute définition, charte graphique et déclinaisons de couleurs."
            />
            <Button variant="secondary" className="mt-6" icon={<Download size={16} />}>
              Télécharger le kit média
            </Button>
          </div>
          <VisualPlaceholder icon="🖼️" tone="volt" label="Logos & charte graphique — à venir" />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Contact presse" title="Une question, une demande d'interview ?" />
        <div className="mt-8 max-w-md rounded-2xl border border-white/10 bg-graphite p-6">
          <p className="font-display font-semibold text-white">Nadège Aka</p>
          <p className="text-sm text-steel">Responsable communication & relations presse</p>
          <div className="mt-4 space-y-2 text-sm">
            <a href="mailto:presse@voltara.africa" className="flex items-center gap-2 text-steel hover:text-volt">
              <Mail size={15} /> presse@voltara.africa
            </a>
            <a href="tel:+2250102030405" className="flex items-center gap-2 text-steel hover:text-volt">
              <Phone size={15} /> +225 01 02 03 04 05
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
