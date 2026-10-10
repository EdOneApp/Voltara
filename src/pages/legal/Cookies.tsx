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

export function Cookies() {
  return (
    <LegalLayout
      title="Politique de gestion des cookies"
      updatedAt="10 octobre 2026"
      intro="Les cookies et traceurs utilisés sur le site voltara.africa et la façon de gérer vos préférences."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "definition",
          title: "Qu'est-ce qu'un cookie ?",
          body: (
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, téléphone, tablette) lors de
              la visite du site voltara.africa. Il permet de reconnaître votre navigateur, de mémoriser certaines
              informations (préférences de langue, véhicule consulté dans le simulateur VOLTARA Pay) et de mesurer la
              fréquentation du site.
            </p>
          ),
        },
        {
          id: "categories",
          title: "Catégories de cookies utilisés",
          body: (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-night/15 text-night/60">
                    <th className="py-2 pr-4 font-semibold">Catégorie</th>
                    <th className="py-2 pr-4 font-semibold">Finalité</th>
                    <th className="py-2 font-semibold">Consentement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-night/10">
                  <tr>
                    <td className="py-3 pr-4 font-medium">Nécessaires</td>
                    <td className="py-3 pr-4">
                      Fonctionnement du site, sécurité, mémorisation du simulateur VOLTARA Pay et des stations
                      récemment consultées.
                    </td>
                    <td className="py-3">Non requis (exemptés)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Mesure d'audience</td>
                    <td className="py-3 pr-4">
                      Statistiques de fréquentation du site, pages les plus consultées, parcours de navigation entre
                      les pôles VOLTARA Drive, Charge, Swap, Pay, Ride et Go.
                    </td>
                    <td className="py-3">Requis</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">Marketing</td>
                    <td className="py-3 pr-4">
                      Personnalisation des contenus publicitaires et mesure de la performance des campagnes relatives
                      aux véhicules électriques, au paiement échelonné et aux services de livraison.
                    </td>
                    <td className="py-3">Requis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          id: "duree",
          title: "Durée de conservation",
          body: (
            <p>
              Les cookies nécessaires sont conservés pour la durée de votre session ou jusqu'à 12 mois pour certains
              cookies de préférence. Les cookies de mesure d'audience et marketing sont conservés pour une durée
              maximale de 13 mois à compter de leur dépôt, après quoi votre consentement vous est à nouveau demandé.
            </p>
          ),
        },
        {
          id: "gestion-preferences",
          title: "Comment gérer vos préférences",
          body: (
            <>
              <p>
                Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non
                nécessaires. Le refus est aussi simple et rapide que l'acceptation : un seul geste suffit dans les deux
                cas, conformément aux bonnes pratiques en matière de recueil du consentement.
              </p>
              <p>
                Vous pouvez à tout moment modifier vos choix via le centre de préférences accessible depuis le pied de
                page du site, ou en configurant directement les paramètres de cookies de votre navigateur.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
