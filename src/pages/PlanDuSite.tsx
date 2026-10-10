import { Link } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";

interface SiteLink {
  label: string;
  href: string;
}

interface SiteGroup {
  title: string;
  links: SiteLink[];
}

const groups: SiteGroup[] = [
  {
    title: "Accueil",
    links: [{ label: "Accueil", href: "/" }],
  },
  {
    title: "Véhicules",
    links: [
      { label: "Véhicules", href: "/vehicules" },
      { label: "Location", href: "/location" },
      { label: "VOLTARA Pay", href: "/voltara-pay" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "VOLTARA Ride", href: "/voltara-ride" },
      { label: "VOLTARA Go", href: "/voltara-go" },
      { label: "Maintenance", href: "/services/maintenance" },
      { label: "Assurance", href: "/services/assurance" },
      { label: "Formation", href: "/services/formation" },
    ],
  },
  {
    title: "Énergie",
    links: [
      { label: "VOLTARA Charge", href: "/voltara-charge" },
      { label: "VOLTARA Swap", href: "/voltara-swap" },
      { label: "VOLTARA Solar — Bornes", href: "/voltara-solar/bornes" },
      { label: "VOLTARA Solar — Panneaux", href: "/voltara-solar/panneaux" },
    ],
  },
  {
    title: "Entreprises",
    links: [
      { label: "Entreprises", href: "/entreprises" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
  {
    title: "VOLTARA",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Impact", href: "/impact" },
      { label: "Carrières", href: "/carrieres" },
      { label: "Actualités", href: "/actualites" },
      { label: "Presse", href: "/presse" },
      { label: "Aide", href: "/aide" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Partenariat",
    links: [
      { label: "Devenir partenaire", href: "/devenir-partenaire" },
      { label: "Demande de devis", href: "/demande-de-devis" },
    ],
  },
  {
    title: "Compte",
    links: [{ label: "Espace client", href: "/espace-client" }],
  },
  {
    title: "Mentions légales",
    links: [
      { label: "Mentions légales", href: "/legal/mentions-legales" },
      { label: "Politique de confidentialité", href: "/legal/confidentialite" },
      { label: "Politique de cookies", href: "/legal/cookies" },
      { label: "Conditions générales d'utilisation", href: "/legal/cgu" },
      { label: "Conditions générales de vente", href: "/legal/cgv" },
      { label: "Conditions de location", href: "/legal/conditions-location" },
      { label: "Conditions VOLTARA Pay", href: "/legal/conditions-pay" },
      { label: "Conditions recharge & swap", href: "/legal/conditions-recharge-swap" },
      { label: "Conditions VTC & livraison", href: "/legal/conditions-vtc-livraison" },
      { label: "Charte partenaires", href: "/legal/charte-partenaires" },
      { label: "Accessibilité", href: "/legal/accessibilite" },
      { label: "Plan du site", href: "/plan-du-site" },
    ],
  },
];

export function PlanDuSite() {
  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="Plan du site"
        description="Toutes les pages de VOLTARA, organisées par univers."
        crumbs={[{ label: "Plan du site" }]}
        compact
      />

      <Section tone="dark">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-volt">{group.title}</p>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-steel hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
