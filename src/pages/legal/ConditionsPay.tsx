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

export function ConditionsPay() {
  return (
    <LegalLayout
      title="Conditions VOLTARA Pay"
      updatedAt="10 octobre 2026"
      intro="Conditions applicables au paiement échelonné VOLTARA Pay pour l'acquisition d'un véhicule ou d'une moto électrique."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "fonctionnement",
          title: "Fonctionnement du paiement échelonné",
          body: (
            <p>
              VOLTARA Pay permet d'acquérir un véhicule ou une moto électrique VOLTARA en versant un apport initial
              (compris en général entre 0 % et 60 % du prix du véhicule selon le profil du client) puis des paiements
              réguliers — quotidiens, hebdomadaires ou mensuels — via Mobile Money (Orange Money, MTN MoMo, Moov Money,
              Wave) ou virement bancaire, sur une durée choisie entre 6 et 48 mois.
            </p>
          ),
        },
        {
          id: "cout-credit",
          title: "Coût total du crédit et taux",
          body: (
            <p>
              Le montant financé est soumis à un taux annuel indicatif (15 % à titre d'exemple dans le simulateur en
              ligne), dont la valeur définitive dépend du profil du client, de la durée choisie et du barème en vigueur
              fixé avec le partenaire financier de VOLTARA. Le coût total du crédit (montant financé + intérêts) est
              communiqué de façon détaillée et transparente avant la signature du contrat de financement.
            </p>
          ),
        },
        {
          id: "retard-defaut",
          title: "Conséquences d'un retard ou défaut de paiement",
          body: (
            <p>
              Tout retard de paiement peut entraîner l'application de pénalités conformément au contrat de
              financement signé et, en cas d'impayés répétés ou de défaut prolongé, la suspension de l'usage du
              véhicule, voire sa reprise par VOLTARA ou son partenaire financier, après notification préalable au
              client conformément à la procédure contractuelle.
            </p>
          ),
        },
        {
          id: "propriete",
          title: "Propriété du véhicule jusqu'au dernier paiement",
          body: (
            <p>
              Le véhicule financé via VOLTARA Pay reste la propriété de VOLTARA SA ou de son partenaire financier
              jusqu'au règlement intégral du dernier paiement prévu au contrat. Le client en dispose en tant
              qu'utilisateur pendant toute la durée du financement, avec transfert de propriété automatique à l'issue
              du dernier versement.
            </p>
          ),
        },
        {
          id: "partenaire-financier",
          title: "Partenaire financier",
          body: (
            <p>
              Le dispositif VOLTARA Pay est opéré en partenariat avec un établissement financier agréé (partenaire à
              préciser lors de la contractualisation définitive), qui instruit les dossiers de financement et peut, le
              cas échéant, être le cessionnaire des créances issues des contrats VOLTARA Pay.
            </p>
          ),
        },
        {
          id: "remboursement-anticipe",
          title: "Remboursement anticipé",
          body: (
            <p>
              Le client peut à tout moment solder par anticipation le montant restant dû, sans pénalité excessive, selon
              les modalités précisées dans son contrat de financement VOLTARA Pay. Le remboursement anticipé entraîne le
              transfert immédiat de la propriété du véhicule au client, dès réception du paiement.
            </p>
          ),
        },
      ]}
    />
  );
}
