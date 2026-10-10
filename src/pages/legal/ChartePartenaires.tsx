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

export function ChartePartenaires() {
  return (
    <LegalLayout
      title="Charte partenaires"
      updatedAt="10 octobre 2026"
      intro="Engagements réciproques entre VOLTARA et ses partenaires (financiers, Mobile Money, concessionnaires, entreprises clientes de la flotte)."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "engagements",
          title: "Engagements réciproques",
          body: (
            <p>
              VOLTARA s'engage à fournir à ses partenaires (partenaires financiers de VOLTARA Pay, opérateurs Mobile
              Money, concessionnaires, entreprises partenaires pour l'électrification de flotte) un accès fiable à ses
              outils (simulateur de financement, suivi des stations de recharge et de swap, tableau de bord entreprise)
              ainsi qu'un support dédié. En retour, le partenaire s'engage à respecter les standards de qualité et de
              sécurité définis par VOLTARA dans l'exécution de ses missions.
            </p>
          ),
        },
        {
          id: "qualite-service",
          title: "Exigences de qualité de service",
          body: (
            <p>
              Tout partenaire opérant au contact des clients VOLTARA (livraison, installation de bornes, maintenance de
              véhicules) s'engage à respecter les délais annoncés, à assurer un accueil courtois et à signaler sans
              délai toute anomalie technique ou tout incident impliquant un client ou un véhicule VOLTARA.
            </p>
          ),
        },
        {
          id: "usage-marque",
          title: "Usage de la marque VOLTARA",
          body: (
            <p>
              L'utilisation du nom « VOLTARA », de son logo et de sa charte graphique par un partenaire est strictement
              encadrée et soumise à autorisation écrite préalable. Toute communication (affichage, publicité,
              supports imprimés ou numériques) faisant référence à VOLTARA doit être validée par le service
              communication de VOLTARA avant diffusion.
            </p>
          ),
        },
        {
          id: "confidentialite",
          title: "Confidentialité",
          body: (
            <p>
              Les partenaires s'engagent à préserver la confidentialité des informations commerciales, techniques et
              clients auxquelles ils ont accès dans le cadre du partenariat (données de financement VOLTARA Pay,
              volumes de recharge, informations clients des entreprises partenaires), y compris après la fin de la
              relation contractuelle.
            </p>
          ),
        },
        {
          id: "duree-resiliation",
          title: "Durée et résiliation du partenariat",
          body: (
            <p>
              Le partenariat est conclu pour une durée précisée dans la convention signée entre les parties, renouvelable
              par tacite reconduction sauf dénonciation. Chaque partie peut résilier le partenariat en cas de manquement
              grave de l'autre partie aux engagements de la présente charte, après mise en demeure restée sans effet
              dans le délai contractuellement prévu.
            </p>
          ),
        },
      ]}
    />
  );
}
