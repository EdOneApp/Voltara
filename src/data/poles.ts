export interface Pole {
  key: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  href: string;
  tone: "volt" | "cyan" | "solar" | "go";
}

export const poles: Pole[] = [
  {
    key: "drive",
    name: "VOLTARA Drive",
    shortName: "Drive",
    tagline: "Vente et location de véhicules et motos électriques",
    description: "Voitures, SUV, utilitaires et motos électriques à l'achat, en location ou en paiement échelonné.",
    href: "/vehicules",
    tone: "volt",
  },
  {
    key: "pay",
    name: "VOLTARA Pay",
    shortName: "Pay",
    tagline: "Payer petit à petit, en Mobile Money",
    description: "Le paiement échelonné pensé pour l'Afrique : apport, durée et fréquence de paiement ajustables.",
    href: "/voltara-pay",
    tone: "volt",
  },
  {
    key: "ride",
    name: "VOLTARA Ride",
    shortName: "Ride",
    tagline: "VTC 100 % électrique",
    description: "Des courses urbaines silencieuses et zéro émission, en Eco, Confort ou Business.",
    href: "/voltara-ride",
    tone: "cyan",
  },
  {
    key: "go",
    name: "VOLTARA Go",
    shortName: "Go",
    tagline: "Livraison à moto électrique",
    description: "Colis, repas et commandes e-commerce livrés par notre flotte de motos électriques.",
    href: "/voltara-go",
    tone: "go",
  },
  {
    key: "charge",
    name: "VOLTARA Charge",
    shortName: "Charge",
    tagline: "Réseau de recharge panafricain",
    description: "Des bornes rapides dans les grandes villes, disponibles en temps réel sur l'application.",
    href: "/voltara-charge",
    tone: "cyan",
  },
  {
    key: "swap",
    name: "VOLTARA Swap",
    shortName: "Swap",
    tagline: "Échange de batteries en moins de 2 minutes",
    description: "Le plein d'énergie pour votre moto sans jamais attendre, par abonnement.",
    href: "/voltara-swap",
    tone: "cyan",
  },
  {
    key: "solar",
    name: "VOLTARA Solar",
    shortName: "Solar",
    tagline: "Solaire, stockage et bornes sur mesure",
    description: "Panneaux solaires, batteries de stockage et installation de bornes pour particuliers et entreprises.",
    href: "/voltara-solar",
    tone: "solar",
  },
];

export interface EcosystemStep {
  title: string;
  description: string;
  icon: string;
}

export const ecosystemSteps: EcosystemStep[] = [
  { title: "Rouler", description: "Une moto ou une voiture VOLTARA, achetée, louée ou payée petit à petit.", icon: "zap" },
  { title: "Recharger", description: "Une borne VOLTARA Charge à chaque coin de rue, disponible en temps réel.", icon: "plug" },
  { title: "Swapper", description: "Pour les motos, une batterie neuve échangée en moins de 2 minutes.", icon: "battery-charging" },
  { title: "Livrer ou transporter", description: "La même moto part livrer un colis ou prendre en charge un passager VOLTARA Ride.", icon: "package" },
  { title: "Financer", description: "Tout cela payé petit à petit, au jour, à la semaine ou au mois, via VOLTARA Pay.", icon: "wallet" },
];
