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

export function ConditionsVTCLivraison() {
  return (
    <LegalLayout
      title="Conditions VTC et livraison"
      updatedAt="10 octobre 2026"
      intro="Conditions d'utilisation des services VOLTARA Ride (transport avec chauffeur) et VOLTARA Go (livraison)."
      sections={[
        {
          id: "avertissement",
          title: "Avertissement",
          body: avertissement,
        },
        {
          id: "role-voltara",
          title: "Rôle de VOLTARA",
          body: (
            <p>
              VOLTARA Ride et VOLTARA Go sont des plateformes de mise en relation entre, d'une part, des passagers ou
              des expéditeurs de colis, et d'autre part, des chauffeurs et livreurs indépendants circulant à bord de
              véhicules et motos électriques VOLTARA. VOLTARA n'est pas transporteur au sens du droit commun : elle
              met à disposition la technologie, le réseau de recharge et de swap, et le suivi des courses.
            </p>
          ),
        },
        {
          id: "role-chauffeurs",
          title: "Rôle des chauffeurs et livreurs indépendants",
          body: (
            <p>
              Les chauffeurs VOLTARA Ride et livreurs VOLTARA Go sont des professionnels indépendants, titulaires des
              autorisations requises par la réglementation locale du transport de personnes ou de marchandises. Ils
              demeurent seuls responsables de la bonne exécution de la course ou de la livraison, dans le respect du
              code de la route et des présentes conditions.
            </p>
          ),
        },
        {
          id: "annulation",
          title: "Annulation et frais associés",
          body: (
            <p>
              Toute annulation d'une course ou d'une livraison après acceptation par un chauffeur ou un livreur peut
              entraîner des frais d'annulation, affichés dans l'application avant confirmation, destinés à compenser le
              temps et le déplacement du professionnel mobilisé.
            </p>
          ),
        },
        {
          id: "objets-perdus",
          title: "Objets perdus",
          body: (
            <p>
              En cas d'objet oublié à bord d'un véhicule VOLTARA Ride, le passager peut signaler la perte via
              l'application, qui met en relation avec le chauffeur concerné. VOLTARA facilite cette mise en relation
              mais ne garantit pas la restitution de l'objet.
            </p>
          ),
        },
        {
          id: "colis-interdits",
          title: "Colis interdits au transport",
          body: (
            <p>
              Sont interdits au transport via VOLTARA Go : les matières dangereuses, inflammables ou explosives, les
              substances illicites, les armes, les animaux vivants (sauf accord préalable), les espèces en numéraire au-delà
              d'un montant raisonnable, et plus généralement tout objet dont le transport est contraire à la
              réglementation en vigueur dans le pays concerné.
            </p>
          ),
        },
        {
          id: "responsabilite-incident",
          title: "Responsabilité en cas d'incident",
          body: (
            <p>
              En cas d'accident, de retard important ou de dommage survenu lors d'une course VOLTARA Ride ou d'une
              livraison VOLTARA Go, la responsabilité est déterminée selon les circonstances de l'incident et les
              garanties d'assurance applicables au chauffeur ou au livreur indépendant, VOLTARA apportant son concours à
              la résolution du litige via son service client.
            </p>
          ),
        },
      ]}
    />
  );
}
