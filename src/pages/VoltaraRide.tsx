import {
  MapPin,
  Smartphone,
  Wallet,
  Star,
  ShieldCheck,
  Share2,
  Siren,
  UserCheck,
  Car,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { CTASection } from "../components/ui/CTASection";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";

const steps = [
  {
    icon: Smartphone,
    title: "Commander",
    description:
      "Indiquez votre destination, choisissez votre gamme — Eco, Confort ou Business — et recevez le prix exact avant de valider la course.",
  },
  {
    icon: MapPin,
    title: "Suivre le chauffeur",
    description:
      "Suivez l'arrivée de votre chauffeur en direct sur la carte : nom, photo, véhicule et plaque d'immatriculation sont affichés dès la confirmation.",
  },
  {
    icon: Wallet,
    title: "Payer",
    description:
      "Réglez automatiquement par Orange Money, MTN MoMo, Moov Money ou Wave, ou en espèces auprès du chauffeur — jamais de négociation de tarif.",
  },
  {
    icon: Star,
    title: "Noter",
    description:
      "Notez votre chauffeur sur 5 et laissez un commentaire. La moyenne de chaque chauffeur est publique et conditionne son accès aux courses Business.",
  },
];

const gammes = [
  {
    name: "Eco",
    tone: "cyan" as const,
    vehicle: "VOLTARA Citadine One ou Moto Ride",
    description: "La solution la plus économique pour vos trajets du quotidien en ville, en voiture compacte ou en moto-taxi.",
    pickup: "500 FCFA",
    perKm: "250 FCFA / km",
  },
  {
    name: "Confort",
    tone: "cyan" as const,
    vehicle: "VOLTARA Citadine One+ ou SUV Terra",
    description: "Plus d'espace et d'autonomie pour les familles, les bagages et les trajets interurbains courts.",
    pickup: "1 000 FCFA",
    perKm: "350 FCFA / km",
  },
  {
    name: "Business",
    tone: "cyan" as const,
    vehicle: "VOLTARA Berline Prestige",
    description: "Chauffeurs certifiés, eau offerte et Wi-Fi embarqué, pour vos rendez-vous professionnels et vos clients.",
    pickup: "2 000 FCFA",
    perKm: "550 FCFA / km",
  },
];

const cities = [
  { city: "Abidjan", country: "Côte d'Ivoire" },
  { city: "Yamoussoukro", country: "Côte d'Ivoire" },
  { city: "Dakar", country: "Sénégal" },
  { city: "Thiès", country: "Sénégal" },
  { city: "Accra", country: "Ghana" },
  { city: "Kumasi", country: "Ghana" },
  { city: "Lagos", country: "Nigeria" },
  { city: "Abuja", country: "Nigeria" },
  { city: "Nairobi", country: "Kenya" },
];

const securityCards = [
  {
    icon: UserCheck,
    title: "Chauffeurs vérifiés",
    description: "Identité, permis de conduire et antécédents vérifiés avant toute activation sur la plateforme, puis contrôlés chaque année.",
  },
  {
    icon: Share2,
    title: "Partage de trajet en direct",
    description: "Envoyez votre position en temps réel à un proche par simple lien, sans qu'il ait besoin d'installer l'application.",
  },
  {
    icon: Siren,
    title: "Bouton d'urgence",
    description: "Un bouton SOS visible pendant toute la course alerte instantanément le centre de supervision VOLTARA et les secours locaux.",
  },
  {
    icon: ShieldCheck,
    title: "Numéro masqué",
    description: "L'application masque votre numéro réel : chauffeur et passager communiquent sans jamais échanger leurs contacts personnels.",
  },
];

const candidatureSteps = [
  { title: "Inscription en ligne", description: "Déposez votre dossier chauffeur en 10 minutes, avec permis de conduire et pièce d'identité." },
  { title: "Vérification des documents", description: "Notre équipe valide votre dossier et vérifie vos antécédents sous 48h ouvrées." },
  { title: "Formation et activation", description: "Une formation courte sur l'application, la sécurité et la charge de votre véhicule avant votre première course." },
  { title: "Première course", description: "Votre compte est activé, vous recevez vos premières demandes de course près de chez vous." },
];

const faqItems = [
  {
    question: "Dans quelles zones VOLTARA Ride est-il disponible ?",
    answer:
      "VOLTARA Ride opère actuellement dans 9 villes réparties en Côte d'Ivoire, au Sénégal, au Ghana, au Nigeria et au Kenya. De nouvelles villes rejoignent le réseau chaque trimestre, à mesure que notre flotte de véhicules électriques et notre réseau VOLTARA Charge s'étendent.",
  },
  {
    question: "Puis-je annuler une course après l'avoir commandée ?",
    answer:
      "Oui, l'annulation est gratuite dans les 2 minutes suivant la confirmation. Au-delà, si le chauffeur est déjà en route, des frais d'annulation modestes peuvent s'appliquer pour couvrir son déplacement.",
  },
  {
    question: "J'ai oublié un objet dans le véhicule, que faire ?",
    answer:
      "Depuis l'historique de vos courses dans l'application, signalez l'objet perdu : nous mettons en relation passager et chauffeur en moins d'une heure en moyenne pour organiser la restitution.",
  },
  {
    question: "Quels moyens de paiement sont acceptés ?",
    answer:
      "Orange Money, MTN MoMo, Moov Money, Wave, carte bancaire et espèces sont acceptés selon les pays. Vous choisissez votre moyen de paiement par défaut dans les réglages de l'application.",
  },
  {
    question: "Les tarifs changent-ils la nuit ou en cas de forte demande ?",
    answer:
      "Un ajustement raisonnable peut s'appliquer en cas de forte demande ou de trajets nocturnes, mais il est toujours affiché avant la validation de la course : jamais de surprise à l'arrivée.",
  },
];

export function VoltaraRide() {
  return (
    <>
      <PageHero
        tone="cyan"
        eyebrow="VOLTARA Ride"
        title="Roulez en ville, zéro bruit, zéro émission."
        description="VOLTARA Ride connecte passagers et chauffeurs sur une flotte 100 % électrique : Citadine One, Berline Prestige et motos-taxis Moto Ride. Commandez une course en moins de 3 minutes, suivez votre chauffeur en direct et payez sans sortir d'espèces."
        actions={
          <>
            <Button href="#telecharger-app">Télécharger l'application</Button>
            <Button href="#devenir-chauffeur" variant="secondary">
              Devenir chauffeur
            </Button>
          </>
        }
      />

      {/* Téléchargement */}
      <Section id="telecharger-app" tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Application"
              title="VOLTARA Ride dans votre poche"
              description="Commandez, suivez et payez votre course en trois écrans. Disponible prochainement sur App Store et Google Play, déjà accessible en version web mobile dans les villes pilotes."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex h-12 items-center rounded-xl border border-white/15 px-5 text-sm text-steel">App Store</div>
              <div className="flex h-12 items-center rounded-xl border border-white/15 px-5 text-sm text-steel">Google Play</div>
            </div>
          </div>
          <VisualPlaceholder icon="📱" tone="cyan" label="Écran app VOLTARA Ride — à venir" className="mx-auto aspect-[9/16] max-w-64" />
        </div>
      </Section>

      {/* Comment ça marche */}
      <Section tone="dark">
        <SectionHeading eyebrow="Comment ça marche" title="Une course en 4 étapes" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-steel">Étape {i + 1}</p>
                <p className="mt-1 font-display font-semibold text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{s.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Gammes et tarifs */}
      <Section tone="graphite">
        <SectionHeading
          eyebrow="Tarifs"
          title="Trois gammes, un tarif clair dès la commande"
          description="Le prix est annoncé avant la validation de la course et ne change jamais pendant le trajet, sauf changement d'itinéraire demandé par le passager."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {gammes.map((g) => (
            <div key={g.name} className="rounded-2xl border border-white/10 bg-night p-7">
              <Badge tone={g.tone}>{g.name}</Badge>
              <p className="mt-4 font-display text-lg font-semibold text-white">{g.vehicle}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{g.description}</p>
              <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4 text-sm">
                <div>
                  <p className="text-steel">Prise en charge</p>
                  <p className="font-mono text-white">{g.pickup}</p>
                </div>
                <div className="text-right">
                  <p className="text-steel">Par kilomètre</p>
                  <p className="font-mono text-white">{g.perKm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-steel">Tarifs indicatifs hors ajustement de forte demande. Un tarif minimum s'applique sur les très courtes distances.</p>
      </Section>

      {/* Villes couvertes */}
      <Section tone="dark">
        <SectionHeading eyebrow="Couverture" title="VOLTARA Ride déjà disponible dans 9 villes" />
        <div className="mt-10 flex flex-wrap gap-3">
          {cities.map((c) => (
            <span key={c.city} className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-steel">
              <MapPin size={14} className="text-cyan" />
              <span className="text-white">{c.city}</span>
              <span className="text-steel">· {c.country}</span>
            </span>
          ))}
        </div>
      </Section>

      {/* Sécurité */}
      <Section tone="graphite">
        <SectionHeading eyebrow="Sécurité" title="Chaque trajet sous contrôle" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityCards.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-night p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display font-semibold text-white">{c.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{c.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Devenir chauffeur */}
      <Section id="devenir-chauffeur" tone="dark">
        <SectionHeading
          eyebrow="Rejoindre VOLTARA Ride"
          title="Devenez chauffeur VOLTARA Ride"
          description="Prenez une Citadine One, une Berline Prestige ou une Moto Ride en location-vente via VOLTARA Pay, et touchez des revenus nets plus élevés qu'avec un véhicule thermique : pas de carburant, maintenance incluse, assurance comprise."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="font-display font-semibold text-white">Vos avantages</p>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>— Véhicule financé dès 20 % d'apport, remboursé au jour via VOLTARA Pay</li>
              <li>— Coût d'usage divisé par 3 face à un véhicule thermique équivalent</li>
              <li>— Maintenance, assurance et accès au réseau VOLTARA Charge inclus</li>
              <li>— Support chauffeur disponible 7j/7 par téléphone et WhatsApp</li>
              <li>— Primes de performance sur les notes et le taux d'acceptation</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/vehicules" variant="secondary" size="md">
                Voir les véhicules éligibles
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
                <div key={s.title} className="flex gap-4 rounded-xl border border-white/10 bg-graphite p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/15 font-mono text-sm text-cyan">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-white">{s.title}</p>
                    <p className="mt-1 text-sm text-steel">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button href="/demande-de-devis" size="lg" className="mt-6" icon={<Car size={18} />}>
              Faire une demande de devis
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes sur VOLTARA Ride" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        eyebrow="VOLTARA Ride"
        title="Devenez chauffeur ou passagers d'une flotte 100 % électrique."
        description="Téléchargez l'application pour commander votre première course, ou déposez un dossier chauffeur dès aujourd'hui."
        primaryLabel="Devenir chauffeur"
        primaryHref="/demande-de-devis"
        secondaryLabel="Voir les véhicules"
        secondaryHref="/vehicules"
      />
    </>
  );
}
