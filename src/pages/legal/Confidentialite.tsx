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

export function Confidentialite() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      updatedAt="10 octobre 2026"
      intro="Comment VOLTARA collecte, utilise et protège les données personnelles des utilisateurs du site, de l'application VOLTARA App et des applications VOLTARA Ride et VOLTARA Go."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "responsable",
          title: "Responsable du traitement",
          body: (
            <p>
              Le responsable du traitement des données personnelles collectées via le site voltara.africa et les
              applications VOLTARA est <strong>VOLTARA SA</strong>, dont le siège social est situé à Abidjan Plateau,
              Côte d'Ivoire. Pour toute question relative à vos données, contactez notre délégué à la protection des
              données à l'adresse <strong>dpo@voltara.africa</strong> (modèle).
            </p>
          ),
        },
        {
          id: "donnees-collectees",
          title: "Données collectées",
          body: (
            <>
              <p>Nous collectons plusieurs catégories de données, selon votre usage des services VOLTARA :</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Données de formulaire</strong> : nom, prénom, numéro de téléphone, adresse email, ville,
                  renseignés lors d'une demande de simulation VOLTARA Pay, d'une réservation de test de conduite ou
                  d'une demande de devis entreprise.
                </li>
                <li>
                  <strong>Données de navigation</strong> : adresse IP, type d'appareil, pages consultées, durée de
                  visite, cookies et identifiants techniques (voir notre politique relative aux cookies).
                </li>
                <li>
                  <strong>Données issues des applications mobiles</strong> : position GPS lors de la recherche d'une
                  station de recharge ou de swap, historique de trajets VTC ou de livraison, informations de compte
                  (pièce d'identité, justificatif de domicile) pour les dossiers VOLTARA Pay, moyens de paiement
                  Mobile Money associés (Orange Money, MTN MoMo, Moov Money, Wave).
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "finalites",
          title: "Finalités du traitement",
          body: (
            <ul className="list-disc space-y-2 pl-5">
              <li>Gérer votre compte utilisateur et vos commandes de véhicules, courses VTC ou livraisons.</li>
              <li>Instruire les dossiers de financement VOLTARA Pay et vérifier votre éligibilité.</li>
              <li>Assurer le fonctionnement des services de recharge et de swap de batteries (localisation, réservation de créneau).</li>
              <li>Vous adresser des communications commerciales, sous réserve de votre consentement lorsqu'il est requis.</li>
              <li>Améliorer nos services, prévenir la fraude et assurer la sécurité des transactions.</li>
            </ul>
          ),
        },
        {
          id: "base-legale",
          title: "Base légale",
          body: (
            <p>
              Les traitements reposent, selon les cas, sur l'exécution du contrat qui vous lie à VOLTARA (commande de
              véhicule, abonnement de swap, financement VOLTARA Pay), sur votre consentement (prospection commerciale,
              certains cookies), sur le respect d'une obligation légale (lutte contre la fraude, obligations
              comptables) ou sur l'intérêt légitime de VOLTARA (sécurité du réseau, amélioration des services).
            </p>
          ),
        },
        {
          id: "duree-conservation",
          title: "Durées de conservation",
          body: (
            <p>
              Les données relatives à un compte actif sont conservées pendant toute la durée de la relation
              contractuelle, puis archivées pendant la durée nécessaire au respect des obligations légales et
              comptables (en principe 10 ans pour les pièces justifiant un financement VOLTARA Pay). Les données de
              navigation et cookies sont conservées pour une durée maximale de 13 mois.
            </p>
          ),
        },
        {
          id: "destinataires",
          title: "Destinataires",
          body: (
            <p>
              Vos données peuvent être transmises à nos partenaires de paiement Mobile Money (Orange Money, MTN MoMo,
              Moov Money, Wave) pour le traitement des paiements échelonnés et des abonnements de recharge et de swap,
              à notre partenaire financier dans le cadre de l'instruction des dossiers VOLTARA Pay, ainsi qu'aux
              prestataires techniques (hébergement, envoi d'emails et de SMS) agissant pour le compte de VOLTARA SA.
            </p>
          ),
        },
        {
          id: "transferts",
          title: "Transferts hors du pays",
          body: (
            <p>
              VOLTARA opère dans plusieurs pays d'Afrique de l'Ouest et de l'Est. Certaines données peuvent donc être
              traitées dans un pays différent de celui où vous résidez, notamment lorsque vous utilisez les services
              VOLTARA lors d'un déplacement. Dans ce cas, VOLTARA s'assure que des garanties appropriées encadrent ce
              transfert, conformément à la réglementation applicable.
            </p>
          ),
        },
        {
          id: "securite",
          title: "Sécurité",
          body: (
            <p>
              VOLTARA met en œuvre des mesures techniques et organisationnelles (chiffrement des échanges, contrôle
              d'accès, journalisation) pour protéger vos données contre la perte, l'accès non autorisé ou la
              divulgation.
            </p>
          ),
        },
        {
          id: "droits",
          title: "Droits des personnes",
          body: (
            <p>
              Conformément à la loi n°2013-450 relative à la protection des données à caractère personnel, vous
              disposez d'un droit d'accès, de rectification, d'opposition et de suppression de vos données. Vous pouvez
              exercer ces droits en écrivant à <strong>dpo@voltara.africa</strong> (modèle), en précisant votre
              identité et l'objet de votre demande.
            </p>
          ),
        },
        {
          id: "autorite-controle",
          title: "Autorité de contrôle",
          body: (
            <p>
              En Côte d'Ivoire, l'autorité compétente en matière de protection des données personnelles est l'Autorité
              de Régulation des Télécommunications/TIC de Côte d'Ivoire (<strong>ARTCI</strong>). Vous pouvez
              introduire une réclamation auprès de cette autorité si vous estimez que vos droits ne sont pas
              respectés.
            </p>
          ),
        },
      ]}
    />
  );
}
