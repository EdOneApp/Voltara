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

export function ConditionsRechargeSwap() {
  return (
    <LegalLayout
      title="Conditions recharge et swap"
      updatedAt="10 octobre 2026"
      intro="Conditions d'utilisation du réseau VOLTARA Charge (recharge rapide) et VOLTARA Swap (échange de batteries)."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "tarifs",
          title: "Tarifs et abonnements",
          body: (
            <p>
              L'accès aux bornes de recharge VOLTARA Charge est facturé au kWh consommé, selon le tarif affiché dans
              l'application VOLTARA App au moment de la session. L'accès au réseau de stations VOLTARA Swap se fait par
              abonnement hebdomadaire ou mensuel, donnant droit à un nombre d'échanges de batterie inclus, au-delà
              duquel chaque échange supplémentaire est facturé à l'unité.
            </p>
          ),
        },
        {
          id: "propriete-batteries",
          title: "Propriété des batteries",
          body: (
            <p>
              Dans le cadre du service VOLTARA Swap, les batteries échangées en station restent la <strong>propriété
              exclusive de VOLTARA SA</strong>. L'abonné bénéficie d'un droit d'usage de la batterie qui lui est remise
              à chaque échange, mais n'en devient jamais propriétaire, y compris lorsque le véhicule associé a été
              acheté ou financé via VOLTARA Pay.
            </p>
          ),
        },
        {
          id: "responsabilite-dommage",
          title: "Responsabilité en cas de dommage à une batterie",
          body: (
            <p>
              L'abonné est responsable de tout dommage causé à une batterie VOLTARA Swap résultant d'une négligence
              manifeste (choc, immersion, exposition à une chaleur excessive, tentative d'ouverture ou de modification
              du boîtier). Dans ce cas, le coût de remplacement de la batterie peut être facturé à l'abonné, déduction
              faite le cas échéant de la couverture prévue par son abonnement.
            </p>
          ),
        },
        {
          id: "usage-normal",
          title: "Usage normal des stations",
          body: (
            <p>
              Les stations VOLTARA Charge et VOLTARA Swap doivent être utilisées conformément aux instructions
              affichées et aux consignes de l'application VOLTARA App : respect des créneaux réservés, remise de la
              batterie dans le bon emplacement, absence de branchement de matériel non compatible sur les bornes de
              recharge.
            </p>
          ),
        },
        {
          id: "force-majeure",
          title: "Cas de force majeure",
          body: (
            <p>
              VOLTARA ne saurait être tenue responsable d'une indisponibilité temporaire d'une borne de recharge ou
              d'une station de swap résultant d'un cas de force majeure (coupure électrique généralisée, catastrophe
              naturelle, décision administrative) ou d'une panne technique signalée dans l'application, qui donnera
              lieu, lorsque cela est pertinent, à une orientation vers la station disponible la plus proche.
            </p>
          ),
        },
      ]}
    />
  );
}
