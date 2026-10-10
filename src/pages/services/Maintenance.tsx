import { Wrench, ShieldCheck, PackageCheck, Calendar } from "lucide-react";
import { PageHero } from "../../components/ui/PageHero";
import { Section } from "../../components/ui/Section";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { Button } from "../../components/ui/Button";
import { FAQAccordion } from "../../components/ui/FAQAccordion";
import { CTASection } from "../../components/ui/CTASection";
import { formatXOF } from "../../lib/utils";

const ateliers = [
  { city: "Abidjan", address: "Boulevard Latrille, Cocody — 2 ateliers" },
  { city: "Yamoussoukro", address: "Zone industrielle" },
  { city: "Dakar", address: "Route des Niayes" },
  { city: "Accra", address: "Spintex Road" },
  { city: "Lagos", address: "Victoria Island" },
  { city: "Nairobi", address: "Industrial Area" },
];

const forfaits = [
  { name: "Essentiel", price: 25_000, detail: "Contrôle annuel, freins, pneus, mise à jour logicielle" },
  { name: "Confort", price: 45_000, detail: "Essentiel + vidange des fluides auxiliaires, climatisation, diagnostic batterie approfondi" },
  { name: "Flotte", price: 35_000, detail: "Par véhicule et par mois, pour les contrats de 5 véhicules et plus, intervention sous 48 h incluse" },
];

const faqItems = [
  { question: "Que couvre la garantie batterie ?", answer: "La garantie batterie couvre la perte de capacité anormale (sous le seuil garanti) pendant 8 ans ou jusqu'à 160 000 à 200 000 km selon le véhicule, pièces et main d'œuvre incluses dans notre réseau agréé." },
  { question: "Où trouver un atelier agréé VOLTARA près de chez moi ?", answer: "Le réseau compte des ateliers agréés à Abidjan, Yamoussoukro, Dakar, Accra, Lagos et Nairobi, avec de nouvelles ouvertures chaque trimestre. La liste à jour est disponible dans l'appli VOLTARA." },
  { question: "Les pièces détachées sont-elles toujours disponibles ?", answer: "Les pièces d'usure courantes sont stockées dans chaque atelier. Les pièces spécifiques sont livrées sous 3 à 10 jours ouvrés depuis nos hubs régionaux." },
  { question: "Puis-je souscrire un forfait d'entretien après l'achat de mon véhicule ?", answer: "Oui, les forfaits Essentiel et Confort peuvent être souscrits à tout moment, y compris pour un véhicule acheté d'occasion dans le réseau VOLTARA." },
];

export function Maintenance() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="Services — Maintenance"
        title="Un réseau d'ateliers agréés pour garder votre véhicule en parfait état."
        description="Garantie batterie et moteur, pièces détachées disponibles, forfaits d'entretien clairs : la maintenance VOLTARA couvre tout le cycle de vie de votre véhicule ou de votre moto électrique."
        actions={<Button href="/demande-de-devis">Prendre rendez-vous</Button>}
      />

      <Section tone="dark">
        <SectionHeading
          eyebrow="Réseau"
          title="Des ateliers agréés dans 6 villes"
          description="Chaque atelier est formé et équipé pour l'entretien et le diagnostic des véhicules et motos électriques VOLTARA."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ateliers.map((a) => (
            <div key={a.city} className="rounded-xl border border-white/10 p-5">
              <p className="font-display font-semibold text-white">{a.city}</p>
              <p className="mt-1 text-sm text-steel">{a.address}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Garanties" title="Des garanties étendues sur les pièces critiques" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-night p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
              <ShieldCheck size={20} />
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-white">Garantie batterie</p>
            <p className="mt-2 text-sm leading-relaxed text-steel">8 ans ou 160 000 à 200 000 km selon le véhicule, contre toute perte de capacité anormale sous le seuil garanti.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-night p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
              <Wrench size={20} />
            </span>
            <p className="mt-4 font-display text-lg font-semibold text-white">Garantie moteur</p>
            <p className="mt-2 text-sm leading-relaxed text-steel">2 à 3 ans ou jusqu'à 60 000 km selon le modèle, pièces et main d'œuvre incluses en atelier agréé.</p>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Pièces détachées"
          title="Un stock régional pour limiter l'immobilisation"
          description="Les pièces d'usure courante (plaquettes, pneus, filtres, câblages de charge) sont disponibles en atelier. Les pièces spécifiques sont livrées depuis nos hubs régionaux sous 3 à 10 jours ouvrés."
        />
        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-graphite p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
            <PackageCheck size={20} />
          </span>
          <p className="text-sm leading-relaxed text-steel">
            Un véhicule de courtoisie électrique est proposé en cas d'immobilisation supérieure à 48 h dans les villes couvertes par le réseau VOLTARA Drive.
          </p>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Forfaits" title="Des forfaits d'entretien prévisibles" />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {forfaits.map((f) => (
            <div key={f.name} className="rounded-2xl border border-white/10 bg-night p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <Calendar size={20} />
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-white">{f.name}</p>
              <p className="mt-2 font-mono text-2xl font-semibold text-cyan">{formatXOF(f.price)}</p>
              <p className="text-xs text-steel">par an{f.name === "Flotte" ? "/véhicule/mois" : ""}</p>
              <p className="mt-3 text-sm leading-relaxed text-steel">{f.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/demande-de-devis">Prendre rendez-vous</Button>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur la maintenance" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="Services VOLTARA"
        title="Besoin d'un entretien ou d'un diagnostic batterie ?"
        description="Prenez rendez-vous dans l'atelier agréé le plus proche, ou contactez-nous pour toute question sur votre garantie."
        primaryLabel="Prendre rendez-vous"
        primaryHref="/demande-de-devis"
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />
    </>
  );
}
