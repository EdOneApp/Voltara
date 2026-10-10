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

export function MentionsLegales() {
  return (
    <LegalLayout
      title="Mentions légales"
      updatedAt="10 octobre 2026"
      intro="Informations relatives à l'éditeur, à l'hébergement et à la propriété intellectuelle du site et des applications VOLTARA."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "editeur",
          title: "Éditeur du site",
          body: (
            <>
              <p>
                Le site <strong>voltara.africa</strong> et les applications mobiles VOLTARA App, VOLTARA Ride et
                VOLTARA Go sont édités par <strong>VOLTARA SA</strong>, société anonyme avec conseil d'administration
                au capital social de 500 000 000 FCFA (modèle), immatriculée au Registre du Commerce et du Crédit
                Mobilier sous le numéro <strong>RCCM CI-ABJ-2024-B-00000 (fictif)</strong> et au numéro de compte
                contribuable <strong>CI0000000 X (fictif)</strong>.
              </p>
              <p>Siège social : Abidjan Plateau, Immeuble VOLTARA, Avenue Chardy, 01 BP 0000 Abidjan 01, Côte d'Ivoire.</p>
              <p>
                Téléphone : +225 27 00 00 00 00 (modèle) — Email : <strong>contact@voltara.africa</strong> (modèle).
              </p>
            </>
          ),
        },
        {
          id: "directeur-publication",
          title: "Directeur de la publication",
          body: (
            <p>
              Le directeur de la publication est le Directeur Général de VOLTARA SA. Pour toute question relative au
              contenu du site, de l'application VOLTARA App ou des applications VOLTARA Ride et VOLTARA Go, contactez
              le service communication à l'adresse <strong>presse@voltara.africa</strong> (modèle).
            </p>
          ),
        },
        {
          id: "hebergement",
          title: "Hébergement",
          body: (
            <>
              <p>
                Le site est hébergé par un prestataire d'hébergement (nom à confirmer, modèle : « AfriCloud Hosting
                Ltd »), dont l'adresse est à préciser lors de la contractualisation définitive, joignable à l'adresse
                <strong> support@hebergeur-modele.africa</strong> (modèle).
              </p>
              <p>
                Le site et les applications s'appuient sur une infrastructure de diffusion de contenu (CDN) disposant
                de points de présence en Afrique de l'Ouest et de l'Est, afin de garantir des temps de chargement
                réduits pour les utilisateurs situés dans les pays où VOLTARA opère ses stations de recharge et de
                swap, ses services VTC et de livraison.
              </p>
            </>
          ),
        },
        {
          id: "propriete-intellectuelle",
          title: "Propriété intellectuelle",
          body: (
            <>
              <p>
                L'ensemble des éléments présents sur le site et les applications VOLTARA — textes, logos, marques
                (VOLTARA, VOLTARA Drive, VOLTARA Charge, VOLTARA Swap, VOLTARA Pay, VOLTARA Ride, VOLTARA Go, VOLTARA
                Solar), icônes, visuels de véhicules et de stations, interfaces et code source — sont la propriété
                exclusive de VOLTARA SA ou de ses partenaires, et sont protégés par le droit de la propriété
                intellectuelle applicable en Côte d'Ivoire et dans les pays d'exploitation.
              </p>
              <p>
                Toute reproduction, représentation, modification ou diffusion, totale ou partielle, de ces éléments
                sans autorisation écrite préalable de VOLTARA SA est interdite et peut constituer une contrefaçon.
              </p>
            </>
          ),
        },
        {
          id: "credits",
          title: "Crédits",
          body: (
            <p>
              Les photographies et visuels de véhicules électriques, de bornes de recharge, de stations de swap et de
              panneaux solaires présentés sur le site sont la propriété de VOLTARA SA ou utilisés sous licence auprès de
              leurs auteurs respectifs (banques d'images et constructeurs partenaires, à référencer précisément avant
              mise en ligne définitive).
            </p>
          ),
        },
      ]}
    />
  );
}
