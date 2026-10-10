import {
  Package,
  Store,
  Pill,
  Building2,
  User,
  MapPin,
  Code2,
  FileBarChart,
  Bike,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";

const audiences = [
  {
    icon: User,
    title: "Particuliers",
    description: "Envoyez un colis, un document ou un cadeau en moins de 45 minutes, partout à Abidjan, Dakar ou Accra.",
  },
  {
    icon: Store,
    title: "E-commerce",
    description: "Externalisez la livraison du dernier kilomètre de votre boutique en ligne, avec suivi client automatique par SMS.",
  },
  {
    icon: Package,
    title: "Restaurants",
    description: "Livraison de repas chauds en moins de 30 minutes dans un rayon de 8 km, sacs isothermes fournis par VOLTARA.",
  },
  {
    icon: Pill,
    title: "Pharmacies",
    description: "Livraison prioritaire de médicaments, avec créneaux de nuit disponibles dans les zones les plus couvertes.",
  },
  {
    icon: Building2,
    title: "Entreprises",
    description: "Navettes de documents inter-agences, courses urgentes et gestion de flotte de livraison externalisée.",
  },
];

const zonePricing = [
  { zone: "Plateau ↔ Cocody", distance: "≈ 5 km", price: "1 500 FCFA" },
  { zone: "Plateau ↔ Yopougon", distance: "≈ 12 km", price: "2 500 FCFA" },
  { zone: "Cocody ↔ Marcory", distance: "≈ 8 km", price: "2 000 FCFA" },
  { zone: "Yopougon ↔ Abobo", distance: "≈ 7 km", price: "1 800 FCFA" },
  { zone: "Même commune", distance: "< 3 km", price: "1 000 FCFA" },
];

const proAdvantages = [
  { title: "Facturation groupée", description: "Une facture unique en fin de mois pour l'ensemble de vos livraisons, avec export comptable." },
  { title: "SLA garantis", description: "Délai de prise en charge et de livraison contractualisé, avec pénalités en cas de dépassement répété." },
  { title: "Accès API", description: "Créez des livraisons, suivez leur statut et recevez des webhooks directement depuis vos propres outils." },
  { title: "Tarifs dégressifs", description: "Le prix par livraison baisse automatiquement à partir de 50 puis 200 livraisons mensuelles." },
];

const candidatureSteps = [
  { title: "Inscription en ligne", description: "Déposez votre dossier livreur avec permis (si moto) et pièce d'identité en 10 minutes." },
  { title: "Vérification", description: "Vérification de votre identité et de vos antécédents sous 48h ouvrées." },
  { title: "Prise en main de la moto", description: "Remise de votre VOLTARA Moto Eclair ou Cargo et formation rapide à l'application livreur." },
  { title: "Premières courses", description: "Votre compte est activé, vous recevez vos premières courses dans votre zone de résidence." },
];

const faqItems = [
  {
    question: "Dans quelles villes VOLTARA Go est-il disponible ?",
    answer:
      "VOLTARA Go couvre aujourd'hui Abidjan, Dakar, Accra, Lagos et Nairobi, avec une densité de livreurs plus forte dans les grandes communes. La couverture précise de votre quartier s'affiche directement dans l'application au moment de la commande.",
  },
  {
    question: "Quel est le délai moyen de livraison ?",
    answer:
      "Comptez 30 à 45 minutes pour une livraison en zone urbaine dense, selon la distance et le trafic. Les commandes restaurant et pharmacie bénéficient d'une priorité de dispatching.",
  },
  {
    question: "Puis-je annuler une commande de livraison ?",
    answer:
      "Oui, gratuitement tant que le livreur n'a pas récupéré le colis. Une fois la prise en charge effectuée, des frais couvrant le trajet déjà parcouru peuvent s'appliquer.",
  },
  {
    question: "Quels objets ne peuvent pas être livrés par VOLTARA Go ?",
    answer:
      "Les matières dangereuses, inflammables, les armes et les objets dont la valeur dépasse 500 000 FCFA sans assurance spécifique sont exclus. La liste complète est disponible dans les conditions d'utilisation.",
  },
  {
    question: "Comment suivre ma livraison en cours ?",
    answer:
      "Un lien de suivi en direct est envoyé par SMS et dans l'application dès la prise en charge, avec la position du livreur, l'heure estimée d'arrivée et une preuve de livraison (photo ou signature).",
  },
];

export function VoltaraGo() {
  return (
    <>
      <PageHero
        tone="go"
        eyebrow="VOLTARA Go"
        title="La livraison à moto électrique, rapide et sans émission."
        description="Colis, repas, médicaments ou commandes e-commerce : la flotte de motos électriques VOLTARA Go livre en moins de 45 minutes dans les grandes villes couvertes, avec un suivi en temps réel à chaque étape."
        actions={
          <>
            <Button
              href={`https://wa.me/2250000000000?text=${encodeURIComponent("Bonjour, je souhaite commander une livraison VOLTARA Go")}`}
              external
            >
              Commander une livraison
            </Button>
            <Button href="#compte-pro" variant="secondary">
              Ouvrir un compte pro
            </Button>
          </>
        }
      />

      {/* Offres par cible */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Pour qui"
          title="Une offre de livraison pour chaque besoin"
          description="Du colis ponctuel à la logistique quotidienne d'un commerce, VOLTARA Go s'adapte à votre volume et à votre rythme."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-go/15 text-go">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display font-semibold text-white">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{a.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Tarifs par zone */}
      <Section tone="graphite">
        <SectionHeading
          eyebrow="Tarifs"
          title="Des tarifs clairs par zone à Abidjan"
          description="Le prix exact de votre livraison est confirmé avant validation, selon la distance réelle du trajet."
        />
        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-steel">
                <th className="px-5 py-3 font-mono font-normal">Zone</th>
                <th className="px-5 py-3 font-mono font-normal">Distance</th>
                <th className="px-5 py-3 font-mono font-normal">Prix indicatif</th>
              </tr>
            </thead>
            <tbody>
              {zonePricing.map((z) => (
                <tr key={z.zone} className="border-b border-white/5 last:border-0">
                  <td className="px-5 py-3 text-white">{z.zone}</td>
                  <td className="px-5 py-3 text-steel">{z.distance}</td>
                  <td className="px-5 py-3 font-mono text-white">{z.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-steel">Tarifs indicatifs pour Abidjan, hors ajustement de forte demande. Grille équivalente disponible pour chaque ville couverte.</p>
      </Section>

      {/* Suivi en temps réel */}
      <Section tone="dark">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Suivi en direct"
              title="Votre colis, suivi à la minute près"
              description="Dès la prise en charge, suivez la position de votre livreur sur la carte, recevez une notification à chaque étape — pris en charge, en route, livré — et obtenez une preuve de livraison par photo ou signature électronique."
            />
            <div className="mt-6 flex items-center gap-2 text-sm text-steel">
              <MapPin size={16} className="text-go" />
              Position GPS du livreur rafraîchie en continu dans l'application.
            </div>
          </div>
          <VisualPlaceholder icon="📦" tone="go" label="Écran suivi de livraison — à venir" className="mx-auto aspect-[9/16] max-w-64" />
        </div>
      </Section>

      {/* API commerçants */}
      <Section tone="graphite">
        <div className="rounded-2xl border border-white/10 bg-night p-8 sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-2xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-go/15 text-go">
                <Code2 size={20} />
              </span>
              <p className="mt-4 font-display text-xl font-semibold text-white">Une API pour les commerçants</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Créez une livraison, suivez son statut et recevez un webhook à chaque changement d'étape directement depuis votre site ou votre
                caisse, sans intervention manuelle. Idéal pour les commerçants à fort volume qui veulent automatiser leur logistique du dernier kilomètre.
              </p>
            </div>
            <Button href="/demande-de-devis" variant="secondary">
              Demander un accès API
            </Button>
          </div>
        </div>
      </Section>

      {/* Compte pro */}
      <Section id="compte-pro" tone="dark">
        <SectionHeading
          eyebrow="VOLTARA Go Pro"
          title="Ouvrez un compte professionnel"
          description="Facturation groupée, SLA garantis et accès API : le compte pro VOLTARA Go est pensé pour les commerces et entreprises qui livrent chaque jour."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proAdvantages.map((a) => (
            <div key={a.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
              <FileBarChart size={20} className="text-go" />
              <p className="mt-4 font-display font-semibold text-white">{a.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{a.description}</p>
            </div>
          ))}
        </div>
        <Button href="/demande-de-devis" size="lg" className="mt-8">
          Ouvrir un compte pro
        </Button>
      </Section>

      {/* Devenir livreur */}
      <Section tone="graphite">
        <SectionHeading
          eyebrow="Rejoindre VOLTARA Go"
          title="Devenez livreur VOLTARA Go"
          description="Prenez une VOLTARA Moto Eclair ou Moto Cargo en location-vente via VOLTARA Pay : batterie swappable en moins de 2 minutes, coût d'usage divisé par 3 face à une moto thermique."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display font-semibold text-white">Vos avantages</p>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>— Moto financée dès 15 % d'apport, remboursée au jour via VOLTARA Pay</li>
              <li>— Jamais d'attente à la station-service grâce au réseau VOLTARA Swap</li>
              <li>— Dispatching automatique des courses proches de votre position</li>
              <li>— Assurance et entretien inclus dans le contrat de financement</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/vehicules?type=moto" variant="secondary" size="md" icon={<Bike size={18} />}>
                Voir les motos éligibles
              </Button>
              <Button href="/voltara-pay" variant="secondary" size="md">
                Simuler un financement
              </Button>
            </div>
          </div>
          <div>
            <p className="font-display font-semibold text-white">Votre candidature en 4 étapes</p>
            <div className="mt-4 space-y-4">
              {candidatureSteps.map((s, i) => (
                <div key={s.title} className="flex gap-4 rounded-xl border border-white/10 bg-night p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-go/15 font-mono text-sm text-go">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{s.title}</p>
                    <p className="mt-1 text-sm text-steel">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="dark">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur VOLTARA Go" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
        <div className="mt-6 flex justify-center">
          <Badge tone="go">Livraison 100 % électrique</Badge>
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Go"
        title="Livrez plus vite, sans essence, sans émission."
        description="Ouvrez un compte pro pour vos livraisons quotidiennes, ou rejoignez notre flotte de livreurs électriques."
        primaryLabel="Ouvrir un compte pro"
        primaryHref="/demande-de-devis"
        secondaryLabel="Devenir livreur"
        secondaryHref="/vehicules?type=moto"
      />
    </>
  );
}
