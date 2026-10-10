import { LegalLayout } from "../../components/layout/LegalLayout";

const avertissement = (
  <div className="rounded-2xl border border-solar/40 bg-solar/10 p-5 text-sm leading-relaxed text-night/80">
    <p className="font-semibold text-night">Document de travail — à valider juridiquement</p>
    <p className="mt-2">
      Ce texte est un modèle de travail rédigé pour la phase de conception du site. Il devra être relu et validé par un
      avocat avant toute mise en ligne réelle, conformément aux obligations légales ivoiriennes (loi n°2013-450 sur la
      protection des données, loi n°2013-546 sur les transactions électroniques, loi n°2013-451 sur la cybercriminalité)
      et à la réglementation locale de chaque pays d'activité.
    </p>
  </div>
);

export function Accessibilite() {
  return (
    <LegalLayout
      title="Accessibilité"
      updatedAt="10 octobre 2026"
      intro="Démarche d'accessibilité numérique du site voltara.africa et des applications VOLTARA."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "niveau-conformite",
          title: "Niveau de conformité visé",
          body: (
            <p>
              VOLTARA vise une conformité au niveau <strong>AA des Web Content Accessibility Guidelines (WCAG) 2.2</strong>
              pour l'ensemble des pages du site voltara.africa, ainsi que pour les parcours essentiels des applications
              VOLTARA App, VOLTARA Ride et VOLTARA Go (recherche de station, simulation VOLTARA Pay, commande de
              course ou de livraison).
            </p>
          ),
        },
        {
          id: "mesures",
          title: "Mesures mises en œuvre",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>Contrastes de couleurs vérifiés entre le texte et les fonds, y compris sur les visuels mettant en avant la couleur signature Volt Lime.</li>
              <li>Navigation complète possible au clavier sur l'ensemble des pages et formulaires (simulateur VOLTARA Pay, recherche de station).</li>
              <li>Textes alternatifs descriptifs sur les visuels de véhicules, de stations de recharge et de swap, et les pictogrammes de l'interface.</li>
              <li>Sous-titres disponibles sur les contenus vidéo de présentation des véhicules et des services VOLTARA.</li>
              <li>Structure sémantique des pages (titres hiérarchisés, repères de navigation) facilitant l'usage des lecteurs d'écran.</li>
            </ul>
          ),
        },
        {
          id: "limites",
          title: "Limites connues",
          body: (
            <p>
              Certains contenus tiers intégrés (cartes de localisation des stations, widgets de paiement Mobile Money)
              peuvent ne pas être totalement conformes au niveau AA des WCAG 2.2, VOLTARA ne maîtrisant pas directement
              leur code. Des solutions de contournement et des alternatives textuelles sont fournies lorsque cela est
              possible, en attendant une mise en conformité complète par les fournisseurs concernés.
            </p>
          ),
        },
        {
          id: "contact",
          title: "Contact pour signaler un problème d'accessibilité",
          body: (
            <p>
              Si vous rencontrez une difficulté d'accessibilité sur le site ou les applications VOLTARA, vous pouvez
              nous le signaler à l'adresse <strong>accessibilite@voltara.africa</strong> (modèle) en précisant la page
              ou la fonctionnalité concernée et, si possible, l'outil d'assistance utilisé. Nous nous engageons à
              examiner chaque signalement et à apporter les corrections nécessaires.
            </p>
          ),
        },
      ]}
    />
  );
}
