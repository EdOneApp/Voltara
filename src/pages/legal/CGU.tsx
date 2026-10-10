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

export function CGU() {
  return (
    <LegalLayout
      title="Conditions générales d'utilisation"
      updatedAt="10 octobre 2026"
      intro="Règles applicables à l'utilisation du site voltara.africa et des applications VOLTARA App, VOLTARA Ride et VOLTARA Go."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "acces",
          title: "Accès au site et aux applications",
          body: (
            <p>
              L'accès au site voltara.africa est libre et gratuit. Certaines fonctionnalités (simulateur VOLTARA Pay
              détaillé, suivi de dossier, réservation de station de recharge ou de swap, commande de course VTC ou de
              livraison) nécessitent la création d'un compte via l'application VOLTARA App, VOLTARA Ride ou VOLTARA Go.
              VOLTARA se réserve le droit de suspendre temporairement l'accès pour des opérations de maintenance.
            </p>
          ),
        },
        {
          id: "compte",
          title: "Compte utilisateur",
          body: (
            <>
              <p>
                La création d'un compte requiert un numéro de téléphone valide, une adresse email et, pour les services
                VOLTARA Pay, VTC et livraison, une pièce d'identité en cours de validité. Vous êtes responsable de la
                confidentialité de vos identifiants et de toute activité réalisée depuis votre compte.
              </p>
              <p>
                Vous vous engagez à fournir des informations exactes et à les tenir à jour, notamment en cas de
                changement de numéro de téléphone associé à votre moyen de paiement Mobile Money.
              </p>
            </>
          ),
        },
        {
          id: "comportements-interdits",
          title: "Comportements interdits",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>Utiliser une fausse identité ou usurper l'identité d'un tiers pour créer un compte.</li>
              <li>Tenter de contourner les dispositifs de sécurité des bornes de recharge ou des stations de swap.</li>
              <li>Utiliser les services VTC ou de livraison à des fins de transport de biens ou personnes illicites.</li>
              <li>Reproduire, extraire ou réutiliser tout ou partie du contenu du site sans autorisation.</li>
              <li>Perturber le fonctionnement technique du site ou des applications (introduction de virus, tentative d'intrusion).</li>
            </ul>
          ),
        },
        {
          id: "responsabilite",
          title: "Responsabilité",
          body: (
            <p>
              VOLTARA met tout en œuvre pour assurer l'exactitude des informations publiées (disponibilité des
              véhicules, prix, localisation des stations) mais ne peut garantir l'absence totale d'erreur ou
              d'interruption de service. VOLTARA ne saurait être tenue responsable des dommages indirects résultant de
              l'utilisation du site ou des applications, dans les limites autorisées par la loi.
            </p>
          ),
        },
        {
          id: "propriete-intellectuelle",
          title: "Propriété intellectuelle",
          body: (
            <p>
              Les marques VOLTARA, VOLTARA Drive, VOLTARA Charge, VOLTARA Swap, VOLTARA Pay, VOLTARA Ride, VOLTARA Go
              et VOLTARA Solar, ainsi que les logos, visuels et contenus du site, sont protégés par le droit de la
              propriété intellectuelle. Toute utilisation non autorisée est interdite, conformément aux mentions
              légales du site.
            </p>
          ),
        },
        {
          id: "droit-applicable",
          title: "Droit applicable et juridiction compétente",
          body: (
            <p>
              Les présentes conditions générales d'utilisation sont soumises au droit ivoirien. Tout litige relatif à
              leur interprétation ou à leur exécution relève, à défaut de règlement amiable, de la compétence
              exclusive des juridictions d'Abidjan, sous réserve des règles impératives applicables aux consommateurs
              résidant dans un autre pays d'activité de VOLTARA.
            </p>
          ),
        },
      ]}
    />
  );
}
