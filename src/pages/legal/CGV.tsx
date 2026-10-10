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

export function CGV() {
  return (
    <LegalLayout
      title="Conditions générales de vente"
      updatedAt="10 octobre 2026"
      intro="Conditions applicables à l'achat d'un véhicule ou d'une moto électrique VOLTARA, au comptant ou en paiement échelonné VOLTARA Pay."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "commandes",
          title: "Commandes de véhicules",
          body: (
            <p>
              Toute commande d'un véhicule ou d'une moto électrique VOLTARA (gamme VOLTARA Drive : citadines, utilitaires,
              motos et scooters) passe par une demande de réservation en ligne ou en concession, suivie d'une
              confirmation écrite précisant le modèle, la couleur, les options et le prix. La commande est définitive
              après versement de l'acompte prévu et signature du bon de commande.
            </p>
          ),
        },
        {
          id: "prix-paiement",
          title: "Prix et modalités de paiement",
          body: (
            <p>
              Les prix affichés sur le site sont exprimés en FCFA, toutes taxes comprises, et valables à la date de
              consultation. Le règlement peut s'effectuer au comptant (virement, Mobile Money : Orange Money, MTN MoMo,
              Moov Money, Wave) ou via le dispositif de paiement échelonné <strong>VOLTARA Pay</strong>, dont les
              conditions spécifiques sont détaillées dans les Conditions VOLTARA Pay.
            </p>
          ),
        },
        {
          id: "acomptes",
          title: "Acomptes",
          body: (
            <p>
              Un acompte est exigé à la commande, dont le montant varie selon le modèle et le mode de financement choisi
              (comptant ou VOLTARA Pay). Cet acompte est déduit du prix total à la livraison. En cas d'annulation de la
              commande à l'initiative du client en dehors du délai de rétractation, l'acompte peut être retenu à titre
              d'indemnité, sauf cas de force majeure.
            </p>
          ),
        },
        {
          id: "livraison",
          title: "Livraison",
          body: (
            <p>
              Les délais de livraison indiqués lors de la commande sont donnés à titre indicatif et peuvent varier selon
              la disponibilité du modèle et la ville de livraison. Le véhicule est livré avec son certificat de
              conformité, sa carte de garantie et, le cas échéant, l'équipement de recharge associé. Le client est
              invité à vérifier l'état du véhicule à la livraison et à signaler immédiatement toute anomalie.
            </p>
          ),
        },
        {
          id: "garanties",
          title: "Garanties",
          body: (
            <p>
              Chaque véhicule VOLTARA bénéficie d'une garantie constructeur couvrant les principaux organes mécaniques
              et électriques, ainsi que d'une garantie spécifique sur la batterie (durée et kilométrage précisés sur la
              fiche produit du véhicule, en général 8 ans ou 160 000 km). Ces garanties s'appliquent dans le cadre d'un
              usage normal du véhicule et selon le plan d'entretien recommandé.
            </p>
          ),
        },
        {
          id: "retractation",
          title: "Droit de rétractation",
          body: (
            <p>
              Conformément à la réglementation applicable à la vente à distance, le client particulier dispose d'un
              délai pour exercer son droit de rétractation après une commande passée en ligne, sauf lorsque la livraison
              du véhicule a déjà eu lieu avec son accord exprès. Les modalités précises d'exercice de ce droit seront
              détaillées dans le bon de commande.
            </p>
          ),
        },
        {
          id: "reclamations",
          title: "Réclamations",
          body: (
            <p>
              Toute réclamation relative à une commande, une livraison ou une garantie peut être adressée au service
              client VOLTARA via l'application VOLTARA App ou à l'adresse <strong>support@voltara.africa</strong>
              (modèle). VOLTARA s'engage à accuser réception de toute réclamation dans un délai raisonnable.
            </p>
          ),
        },
      ]}
    />
  );
}
