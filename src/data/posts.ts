export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readMinutes: number;
  content: string[];
}

export const posts: Post[] = [
  {
    slug: "cout-reel-voiture-electrique-abidjan",
    title: "Le coût réel d'une voiture électrique à Abidjan",
    excerpt:
      "Carburant, entretien, assurance : on compare le coût au kilomètre d'une VOLTARA Citadine One face à une citadine thermique équivalente.",
    category: "Guides",
    date: "2026-09-02",
    readMinutes: 6,
    content: [
      "À Abidjan, le litre d'essence pèse lourd dans le budget d'un ménage ou d'une flotte d'entreprise. En comparant le coût au kilomètre d'une VOLTARA Citadine One et d'une citadine thermique équivalente sur 20 000 km par an, l'écart devient vite significatif.",
      "Côté énergie, recharger en heures creuses sur le réseau VOLTARA Charge revient en moyenne 4 à 5 fois moins cher que le plein d'essence à distance parcourue équivalente.",
      "Côté entretien, l'absence de vidange, d'embrayage et de filtre à carburant réduit la facture d'atelier d'environ 40 % sur les trois premières années.",
      "Sur la durée de vie de la batterie (8 ans / 160 000 km garantis), le coût total de possession devient compétitif dès la troisième année d'utilisation intensive.",
    ],
  },
  {
    slug: "comment-recharger-sa-moto",
    title: "Comment recharger sa moto électrique VOLTARA",
    excerpt: "Swap en 2 minutes ou recharge à domicile : le guide complet pour ne jamais tomber en panne d'énergie.",
    category: "Guides",
    date: "2026-08-18",
    readMinutes: 4,
    content: [
      "Deux options s'offrent aux conducteurs de moto VOLTARA : l'échange de batterie dans une station VOLTARA Swap, ou la recharge classique à domicile avec le chargeur fourni.",
      "Le swap est pensé pour les livreurs et moto-taxis qui ne peuvent pas s'arrêter longtemps : moins de 2 minutes pour repartir avec une batterie pleine, via abonnement hebdomadaire ou mensuel.",
      "La recharge à domicile convient aux usages plus occasionnels : une prise standard recharge une batterie VOLTARA en 2h30 à 3h30 selon le modèle.",
      "L'application VOLTARA permet de localiser la station de swap la plus proche et de réserver un créneau aux heures de forte affluence.",
    ],
  },
  {
    slug: "voltara-pay-mode-emploi",
    title: "VOLTARA Pay : mode d'emploi du paiement échelonné",
    excerpt: "Apport, durée, fréquence : comment fonctionne le simulateur et quelles pièces préparer pour votre dossier.",
    category: "VOLTARA Pay",
    date: "2026-07-30",
    readMinutes: 5,
    content: [
      "VOLTARA Pay permet d'acquérir un véhicule ou une moto électrique sans payer la totalité comptant, avec un apport initial et des paiements réguliers en Mobile Money.",
      "Le simulateur calcule votre paiement quotidien, hebdomadaire ou mensuel à partir du prix du véhicule, de votre apport et de la durée choisie (6 à 48 mois).",
      "Les pièces à préparer : pièce d'identité, justificatif de domicile, et selon les cas un justificatif de revenus ou d'activité (reçus de livraison, relevé Mobile Money).",
      "Le véhicule reste la propriété de VOLTARA jusqu'au dernier paiement ; cette condition est détaillée dans les conditions VOLTARA Pay.",
    ],
  },
  {
    slug: "electrifier-sa-flotte-entreprise",
    title: "Électrifier la flotte de son entreprise : par où commencer ?",
    excerpt: "Diagnostic, financement, bornes au dépôt : les 4 étapes pour transformer une flotte thermique en flotte électrique.",
    category: "Entreprises",
    date: "2026-07-10",
    readMinutes: 7,
    content: [
      "Électrifier une flotte commence par un diagnostic des trajets réels : distances quotidiennes, temps d'arrêt, besoins de charge utile.",
      "VOLTARA Entreprises propose ensuite un plan de financement adapté — achat, location longue durée ou paiement échelonné — selon la trésorerie de l'entreprise.",
      "L'installation de bornes au dépôt ou au siège est dimensionnée selon le nombre de véhicules et les horaires de recharge.",
      "Un tableau de bord suit la consommation, les coûts et les tonnes de CO₂ évitées, utile pour les rapports RSE et les appels d'offres avec clause environnementale.",
    ],
  },
];
