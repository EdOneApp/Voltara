export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavPanel {
  key: string;
  label: string;
  tagline: string;
  tone: "volt" | "cyan" | "solar" | "go";
  links: NavLink[];
  highlight: { label: string; description: string; href: string };
}

export const navPanels: NavPanel[] = [
  {
    key: "vehicules",
    label: "Véhicules",
    tagline: "VOLTARA Drive — achat, location, paiement échelonné",
    tone: "volt",
    links: [
      { label: "Voitures électriques", href: "/vehicules?type=voiture", description: "Citadines, SUV, utilitaires, berlines" },
      { label: "Motos et scooters", href: "/vehicules?type=moto", description: "Livraison, VTC moto, usage particulier" },
      { label: "Location courte et longue durée", href: "/location", description: "Jour, semaine, mois" },
      { label: "Paiement échelonné VOLTARA Pay", href: "/voltara-pay", description: "Simuler un financement" },
      { label: "Catalogue complet", href: "/vehicules", description: "Tous les modèles VOLTARA" },
    ],
    highlight: {
      label: "VOLTARA SUV Terra",
      description: "Notre SUV familial 410 km d'autonomie, dès 7 800 FCFA/jour.",
      href: "/vehicules/suv-terra",
    },
  },
  {
    key: "services",
    label: "Services",
    tagline: "VTC, livraison, maintenance et formation",
    tone: "cyan",
    links: [
      { label: "VOLTARA Ride — VTC électrique", href: "/voltara-ride", description: "Courses urbaines zéro émission" },
      { label: "VOLTARA Go — Livraison moto", href: "/voltara-go", description: "Colis, repas, e-commerce" },
      { label: "Maintenance et pièces", href: "/services/maintenance", description: "Réseau d'ateliers agréés" },
      { label: "Assurance", href: "/services/assurance", description: "Véhicules, motos et batteries" },
      { label: "Formation technicien", href: "/services/formation", description: "Certification maintenance EV" },
    ],
    highlight: {
      label: "Devenir chauffeur ou livreur",
      description: "Rejoignez VOLTARA Ride ou VOLTARA Go avec un véhicule en location-vente.",
      href: "/voltara-ride#devenir-chauffeur",
    },
  },
  {
    key: "energie",
    label: "Énergie",
    tagline: "Recharge, swapping et solaire",
    tone: "solar",
    links: [
      { label: "VOLTARA Charge — Recharge", href: "/voltara-charge", description: "Carte des bornes en temps réel" },
      { label: "VOLTARA Swap — Échange batterie", href: "/voltara-swap", description: "Moins de 2 minutes, par abonnement" },
      { label: "Installation de bornes", href: "/voltara-solar/bornes", description: "Domicile, entreprise, public" },
      { label: "Panneaux solaires", href: "/voltara-solar/panneaux", description: "Résidentiel, commercial, industriel" },
    ],
    highlight: {
      label: "Trouver une station",
      description: "16 stations actives en Afrique de l'Ouest et de l'Est.",
      href: "/voltara-charge",
    },
  },
  {
    key: "entreprises",
    label: "Entreprises",
    tagline: "Flottes, bornes et solaire B2B",
    tone: "go",
    links: [
      { label: "Électrification de flottes", href: "/entreprises", description: "Accompagnement, financement, reporting CO₂" },
      { label: "Bornes pour entreprises", href: "/voltara-solar/bornes", description: "Dépôts, sièges, parkings" },
      { label: "Solaire commercial et industriel", href: "/voltara-solar/panneaux", description: "Simulateur d'économies" },
      { label: "Demander un devis", href: "/demande-de-devis", description: "Réponse sous 24h ouvrées" },
    ],
    highlight: {
      label: "Parler à un expert",
      description: "Un conseiller entreprise vous répond sous 24h ouvrées.",
      href: "/entreprises",
    },
  },
];

export const topLevelLinks = [
  { label: "Tarifs", href: "/tarifs" },
  { label: "Stations", href: "/voltara-charge" },
];
