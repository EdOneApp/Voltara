import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { cn } from "../lib/utils";
import { cityNightAerial } from "../data/images";

interface HelpItem {
  category: string;
  question: string;
  answer: string;
}

const categories = [
  "VOLTARA Drive",
  "VOLTARA Pay",
  "Location",
  "VOLTARA Ride",
  "VOLTARA Go",
  "VOLTARA Charge",
  "VOLTARA Swap",
  "VOLTARA Solar",
  "Entreprises",
  "Compte et facturation",
] as const;

const helpItems: HelpItem[] = [
  // VOLTARA Drive
  {
    category: "VOLTARA Drive",
    question: "Puis-je essayer un véhicule avant de l'acheter ?",
    answer:
      "Oui. Chaque agence VOLTARA propose un essai routier de 20 à 30 minutes, sur rendez-vous ou directement sur place selon la disponibilité du véhicule. Une pièce d'identité et un permis de conduire valide sont demandés.",
  },
  {
    category: "VOLTARA Drive",
    question: "Les véhicules VOLTARA sont-ils neufs ou d'occasion ?",
    answer:
      "Nous proposons les deux : des véhicules neufs importés directement de nos constructeurs partenaires, et une sélection de véhicules d'occasion reconditionnés, contrôlés sur 40 points avant mise en vente, avec une garantie batterie minimale de 12 mois.",
  },
  {
    category: "VOLTARA Drive",
    question: "Quelle garantie accompagne l'achat d'un véhicule VOLTARA ?",
    answer:
      "Les véhicules neufs bénéficient d'une garantie constructeur de 2 à 5 ans selon le modèle, incluant la batterie. Les véhicules d'occasion reconditionnés bénéficient d'une garantie VOLTARA de 12 mois sur la motorisation et la batterie.",
  },
  {
    category: "VOLTARA Drive",
    question: "Puis-je revendre mon véhicule thermique en échange d'un modèle électrique ?",
    answer:
      "Oui, le programme de reprise VOLTARA permet d'estimer votre véhicule thermique en agence et de déduire sa valeur du prix d'un véhicule électrique, neuf ou d'occasion.",
  },
  // VOLTARA Pay
  {
    category: "VOLTARA Pay",
    question: "Quel est le taux appliqué sur un financement VOLTARA Pay ?",
    answer:
      "Un taux indicatif de 15 % l'an est utilisé pour les simulations en ligne. Le taux définitif dépend de votre profil et du barème fixé avec notre partenaire financier, communiqué avant toute signature.",
  },
  {
    category: "VOLTARA Pay",
    question: "Puis-je payer mon échéance en Mobile Money ?",
    answer:
      "Oui, VOLTARA Pay accepte Orange Money, MTN MoMo, Moov Money et Wave, en plus de la carte bancaire et du virement. Vous choisissez une fréquence de paiement au jour, à la semaine ou au mois.",
  },
  {
    category: "VOLTARA Pay",
    question: "Que se passe-t-il en cas de retard de paiement ?",
    answer:
      "Un délai de grâce de 5 jours est accordé sans frais. Au-delà, des pénalités s'appliquent selon le barème VOLTARA Pay, détaillé dans vos conditions contractuelles et consultable dans nos mentions légales.",
  },
  {
    category: "VOLTARA Pay",
    question: "Qui est propriétaire du véhicule pendant le paiement échelonné ?",
    answer:
      "VOLTARA reste propriétaire juridique du véhicule jusqu'au dernier paiement de l'échéancier. Le transfert de propriété est ensuite automatique, sans démarche supplémentaire de votre part.",
  },
  // Location
  {
    category: "Location",
    question: "Quelle est la durée minimale d'une location VOLTARA ?",
    answer:
      "La location courte durée démarre à 24 heures. La location longue durée (particuliers et entreprises) est disponible à partir d'un mois renouvelable, avec un tarif dégressif selon la durée engagée.",
  },
  {
    category: "Location",
    question: "L'assurance est-elle incluse dans le prix de location ?",
    answer:
      "Oui, une assurance tous risques est systématiquement incluse dans nos forfaits de location, avec une franchise réduite en cas de sinistre. Une franchise zéro est disponible en option moyennant un supplément journalier.",
  },
  {
    category: "Location",
    question: "Puis-je louer un véhicule VOLTARA sans permis de conduire ?",
    answer:
      "Non, un permis de conduire valide correspondant à la catégorie du véhicule est obligatoire pour toute location, à l'exception des motos de faible cylindrée où un permis AM ou équivalent peut suffire selon la réglementation locale.",
  },
  // VOLTARA Ride
  {
    category: "VOLTARA Ride",
    question: "Quelle différence entre les offres Eco, Confort et Business de VOLTARA Ride ?",
    answer:
      "Eco utilise nos motos et petites citadines électriques pour les trajets courts. Confort propose des berlines électriques climatisées. Business ajoute un chauffeur en tenue, une eau offerte et une priorité de prise en charge pour les trajets professionnels.",
  },
  {
    category: "VOLTARA Ride",
    question: "Comment devenir chauffeur VOLTARA Ride ?",
    answer:
      "Il faut disposer d'un permis de conduire valide depuis au moins 2 ans, d'un casier judiciaire vierge, et soit apporter votre propre véhicule électrique homologué, soit louer un véhicule VOLTARA dédié aux chauffeurs partenaires.",
  },
  {
    category: "VOLTARA Ride",
    question: "Puis-je réserver une course VOLTARA Ride à l'avance ?",
    answer:
      "Oui, la réservation programmée est disponible jusqu'à 7 jours à l'avance depuis l'application, utile notamment pour les trajets vers l'aéroport ou les rendez-vous professionnels.",
  },
  // VOLTARA Go
  {
    category: "VOLTARA Go",
    question: "Dans quelles villes VOLTARA Go est-il disponible ?",
    answer:
      "VOLTARA Go est actif à Abidjan, Dakar et Accra, avec une extension progressive vers Yamoussoukro et Lagos au fil de l'ouverture des nouvelles zones de couverture.",
  },
  {
    category: "VOLTARA Go",
    question: "Comment devenir livreur VOLTARA Go ?",
    answer:
      "Inscrivez-vous depuis l'application ou en agence avec une pièce d'identité et un permis de conduire moto. VOLTARA propose une moto électrique en location-vente aux livreurs qui n'en possèdent pas encore.",
  },
  {
    category: "VOLTARA Go",
    question: "VOLTARA Go livre-t-il les commandes e-commerce des commerçants ?",
    answer:
      "Oui, les commerçants partenaires peuvent intégrer VOLTARA Go comme solution de livraison du dernier kilomètre via notre API ou notre interface commerçant dédiée.",
  },
  // VOLTARA Charge
  {
    category: "VOLTARA Charge",
    question: "Comment localiser une borne VOLTARA Charge disponible ?",
    answer:
      "L'application VOLTARA affiche en temps réel les bornes disponibles, occupées ou hors service, avec le temps d'attente estimé et le type de connecteur à chaque station.",
  },
  {
    category: "VOLTARA Charge",
    question: "Combien coûte une recharge sur le réseau VOLTARA Charge ?",
    answer:
      "Le tarif dépend de la puissance de la borne et de la quantité d'énergie consommée, affiché avant chaque session. Les abonnés VOLTARA Charge bénéficient d'un tarif préférentiel par rapport au paiement à l'acte.",
  },
  {
    category: "VOLTARA Charge",
    question: "Combien de temps prend une recharge rapide ?",
    answer:
      "Selon le véhicule et la puissance de la borne, une recharge rapide permet de retrouver 80 % d'autonomie en 25 à 45 minutes sur nos bornes les plus puissantes.",
  },
  // VOLTARA Swap
  {
    category: "VOLTARA Swap",
    question: "Combien de temps prend un échange de batterie ?",
    answer:
      "Moins de 2 minutes : vous déposez votre batterie déchargée dans une station VOLTARA Swap et repartez avec une batterie entièrement chargée, sans file d'attente aux heures creuses.",
  },
  {
    category: "VOLTARA Swap",
    question: "Dois-je m'abonner pour utiliser VOLTARA Swap ?",
    answer:
      "Oui, VOLTARA Swap fonctionne par abonnement mensuel incluant un quota de swaps, avec un tarif au swap supplémentaire au-delà du quota. Le prix de la batterie elle-même n'est pas inclus dans l'achat de la moto.",
  },
  {
    category: "VOLTARA Swap",
    question: "Que se passe-t-il si aucune batterie chargée n'est disponible en station ?",
    answer:
      "L'application indique le niveau de charge des batteries disponibles dans chaque station avant votre déplacement, afin d'éviter tout trajet inutile en cas de station momentanément à court de batteries pleines.",
  },
  // VOLTARA Solar
  {
    category: "VOLTARA Solar",
    question: "VOLTARA Solar installe-t-elle des panneaux chez les particuliers ?",
    answer:
      "Oui, en plus des installations commerciales et industrielles, VOLTARA Solar propose des kits résidentiels avec panneaux, onduleur et stockage par batterie, dimensionnés après une étude de votre consommation.",
  },
  {
    category: "VOLTARA Solar",
    question: "Les batteries de stockage solaire sont-elles neuves ?",
    answer:
      "Une partie de nos solutions de stockage utilise des batteries de seconde vie issues de nos véhicules électriques, offrant un stockage stationnaire performant à un coût réduit par rapport à une batterie neuve.",
  },
  {
    category: "VOLTARA Solar",
    question: "Quel est le délai d'installation d'une borne de recharge à domicile ?",
    answer:
      "Après l'étude technique, l'installation d'une borne de recharge domestique prend généralement entre 1 et 2 semaines, sous réserve de la disponibilité du matériel et de la validation du raccordement électrique.",
  },
  // Entreprises
  {
    category: "Entreprises",
    question: "VOLTARA propose-t-elle un reporting CO₂ pour les flottes d'entreprise ?",
    answer:
      "Oui, chaque entreprise cliente de VOLTARA Entreprises reçoit un reporting périodique détaillant la consommation énergétique de sa flotte et le CO₂ évité par rapport à un parc thermique équivalent.",
  },
  {
    category: "Entreprises",
    question: "Peut-on louer une flotte de véhicules électriques avec chauffeurs ?",
    answer:
      "Oui, notre offre Entreprises inclut une formule avec chauffeurs VOLTARA Ride dédiés, ou une formule en autonomie où vos propres collaborateurs conduisent les véhicules loués.",
  },
  {
    category: "Entreprises",
    question: "Quel est le nombre minimal de véhicules pour un contrat Entreprises ?",
    answer:
      "Nos offres flotte démarrent à partir de 3 véhicules, avec des conditions tarifaires et un accompagnement dédié qui s'améliorent au-delà de 10 véhicules.",
  },
  // Compte et facturation
  {
    category: "Compte et facturation",
    question: "Comment créer un compte VOLTARA ?",
    answer:
      "Un compte se crée en quelques minutes depuis l'application ou en agence, avec un numéro de téléphone et une pièce d'identité. Il centralise vos achats, locations, abonnements Swap et échéanciers Pay.",
  },
  {
    category: "Compte et facturation",
    question: "Où puis-je retrouver mes factures VOLTARA ?",
    answer:
      "Toutes vos factures (véhicule, recharge, swap, location) sont centralisées dans votre espace client, téléchargeables au format PDF à tout moment.",
  },
  {
    category: "Compte et facturation",
    question: "Comment mettre à jour mon moyen de paiement enregistré ?",
    answer:
      "Depuis votre espace client, rubrique Paiements, vous pouvez ajouter, modifier ou supprimer un moyen de paiement Mobile Money ou carte bancaire à tout moment.",
  },
  {
    category: "Compte et facturation",
    question: "Puis-je clôturer mon compte VOLTARA ?",
    answer:
      "Oui, sous réserve qu'aucun financement, location ou abonnement ne soit en cours. La demande se fait depuis l'espace client ou en agence, avec confirmation par e-mail sous 48 heures.",
  },
];

export function Aide() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Toutes");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return helpItems.filter((item) => {
      const matchesCategory = activeCategory === "Toutes" || item.category === activeCategory;
      const matchesQuery =
        q.length === 0 ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    const map = new Map<string, HelpItem[]>();
    for (const item of filtered) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <>
      <PageHero
        image={cityNightAerial}
        eyebrow="Centre d'aide"
        title="Toutes les réponses sur l'écosystème VOLTARA."
        description="Recherchez une question ou filtrez par univers : véhicules, financement, recharge, swap, solaire, entreprises et compte."
        crumbs={[{ label: "Aide" }]}
      />

      <Section tone="dark">
        <div className="relative">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une question (ex : swap, taux, garantie...)"
            className="w-full rounded-full border border-white/15 bg-graphite py-3.5 pl-12 pr-5 text-white placeholder:text-steel/60 focus:border-volt focus:outline-none"
          />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("Toutes")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              activeCategory === "Toutes" ? "border-volt text-volt" : "border-white/15 text-steel hover:text-white",
            )}
          >
            Toutes
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                activeCategory === c ? "border-volt text-volt" : "border-white/15 text-steel hover:text-white",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-steel">
          {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
          {query && <> pour « {query} »</>}
        </p>

        <div className="mt-8 space-y-12">
          {grouped.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-graphite p-8 text-center text-steel">
              Aucune question ne correspond à votre recherche. Essayez un autre mot-clé ou contactez-nous directement.
            </p>
          )}
          {grouped.map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-volt">{category}</p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-graphite px-6">
                <FAQAccordion items={items} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
