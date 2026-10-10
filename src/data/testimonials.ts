export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Awa Koné",
    role: "Livreuse, VOLTARA Go — Abidjan",
    quote:
      "Avant je dépensais presque 3 000 FCFA d'essence par jour. Avec ma VOLTARA Moto Eclair et le swap, je paie environ 900 FCFA et je ne perds plus de temps à la station-service.",
  },
  {
    name: "Moussa Diarra",
    role: "Chauffeur, VOLTARA Ride Business — Abidjan",
    quote:
      "J'ai pris ma Berline Prestige en location-vente. Les clients adorent le silence et la clim qui ne consomme pas d'essence. Mes revenus nets ont augmenté de 20 % en six mois.",
  },
  {
    name: "Fatou Ndiaye",
    role: "Dirigeante, PME de distribution — Dakar",
    quote:
      "Nous avons électrifié 12 utilitaires avec VOLTARA Entreprises. Le reporting CO₂ nous a aidés à décrocher un appel d'offres avec une clause environnementale stricte.",
  },
];
