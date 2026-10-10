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

export function ConditionsLocation() {
  return (
    <LegalLayout
      title="Conditions de location"
      updatedAt="10 octobre 2026"
      intro="Conditions applicables à la location de courte et longue durée de véhicules et motos électriques VOLTARA."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "age-permis",
          title: "Âge et permis requis",
          body: (
            <p>
              Pour louer un véhicule électrique VOLTARA, le conducteur doit être âgé d'au moins 21 ans et être titulaire
              d'un permis de conduire valide depuis au moins deux ans, correspondant à la catégorie du véhicule loué.
              Pour la location d'une moto ou d'un scooter électrique, un permis catégorie A ou équivalent est exigé
              selon la réglementation du pays de location.
            </p>
          ),
        },
        {
          id: "caution",
          title: "Caution",
          body: (
            <p>
              Une caution est demandée au moment de la prise du véhicule, sous forme d'empreinte bancaire ou de dépôt
              via Mobile Money. Son montant varie selon le modèle loué (citadine, utilitaire, moto). Elle est restituée
              dans un délai de quelques jours ouvrés après la restitution du véhicule, déduction faite des éventuels
              frais dus (dommages, dépassement de kilométrage, carburant d'appoint ou recharge manquante).
            </p>
          ),
        },
        {
          id: "assurance",
          title: "Assurance et franchise",
          body: (
            <p>
              Chaque location inclut une assurance responsabilité civile obligatoire. Une assurance dommages avec
              franchise réductible est proposée en option. En l'absence de souscription à la réduction de franchise, le
              locataire reste redevable du montant de la franchise en cas de sinistre dont il est responsable.
            </p>
          ),
        },
        {
          id: "kilometrage",
          title: "Kilométrage inclus et dépassement",
          body: (
            <p>
              Un forfait kilométrique est inclus selon la formule de location choisie (courte durée ou longue durée
              entreprise). Tout kilomètre parcouru au-delà de ce forfait est facturé au tarif en vigueur indiqué dans le
              contrat de location, afin de couvrir notamment l'usure et les coûts de recharge supplémentaires.
            </p>
          ),
        },
        {
          id: "retard",
          title: "Retard de restitution",
          body: (
            <p>
              Tout retard dans la restitution du véhicule par rapport à l'horaire convenu entraîne la facturation d'une
              journée de location supplémentaire, sauf accord préalable avec le service client VOLTARA. Au-delà de 24
              heures de retard sans contact, VOLTARA peut considérer le véhicule comme non restitué et engager les
              démarches appropriées.
            </p>
          ),
        },
        {
          id: "dommages",
          title: "Dommages",
          body: (
            <p>
              Tout dommage constaté sur le véhicule (carrosserie, intérieur, batterie, chargeur fourni) est facturé au
              locataire selon le barème en vigueur, déduction faite de la part couverte par l'assurance souscrite. Les
              dommages résultant d'un usage non conforme (recharge sur une installation non adaptée, conduite hors
              piste) ne sont pas couverts par la garantie constructeur ni par l'assurance location.
            </p>
          ),
        },
        {
          id: "etat-des-lieux",
          title: "État des lieux de restitution",
          body: (
            <p>
              Un état des lieux contradictoire est réalisé à la prise et à la restitution du véhicule, incluant le
              niveau de charge de la batterie, le kilométrage et l'état général. Ce document, signé par les deux
              parties ou validé via l'application VOLTARA App, sert de référence en cas de contestation.
            </p>
          ),
        },
      ]}
    />
  );
}
