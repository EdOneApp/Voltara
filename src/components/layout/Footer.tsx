import { Link } from "react-router-dom";
import { Send } from "lucide-react";
import { Container } from "../ui/Container";
import { poles } from "../../data/poles";

const socials = ["Facebook", "Instagram", "LinkedIn", "YouTube"];

const legalLinks = [
  { label: "Mentions légales", href: "/legal/mentions-legales" },
  { label: "Politique de confidentialité", href: "/legal/confidentialite" },
  { label: "Politique cookies", href: "/legal/cookies" },
  { label: "CGU", href: "/legal/cgu" },
  { label: "CGV", href: "/legal/cgv" },
  { label: "Conditions de location", href: "/legal/conditions-location" },
  { label: "Conditions VOLTARA Pay", href: "/legal/conditions-pay" },
  { label: "Conditions recharge et swap", href: "/legal/conditions-recharge-swap" },
  { label: "Conditions VTC et livraison", href: "/legal/conditions-vtc-livraison" },
  { label: "Charte partenaires", href: "/legal/charte-partenaires" },
  { label: "Accessibilité", href: "/legal/accessibilite" },
  { label: "Plan du site", href: "/plan-du-site" },
];

const company = [
  { label: "À propos", href: "/a-propos" },
  { label: "Impact et durabilité", href: "/impact" },
  { label: "Carrières", href: "/carrieres" },
  { label: "Actualités", href: "/actualites" },
  { label: "Presse", href: "/presse" },
  { label: "Centre d'aide / FAQ", href: "/aide" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="font-display text-2xl font-bold voltara-gradient-text">
              VOLTARA
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-steel">
              L'énergie qui fait avancer l'Afrique. Véhicules et motos électriques, recharge, swapping, VTC, livraison et solaire.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((name) => (
                <a
                  key={name}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-mono text-xs text-steel hover:border-volt hover:text-volt"
                  aria-label={`VOLTARA sur ${name}`}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">Univers</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-steel">
              {poles.map((p) => (
                <li key={p.key}>
                  <Link to={p.href} className="hover:text-volt">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">VOLTARA</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-steel">
              {company.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="hover:text-volt">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2">
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">Restez informé</p>
            <p className="mt-4 text-sm text-steel">Actualités, nouvelles stations et offres VOLTARA Pay, une fois par mois.</p>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                required
                placeholder="Votre e-mail"
                className="w-full rounded-full border border-white/15 bg-night px-4 py-2.5 text-sm text-white placeholder:text-steel focus:border-volt focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-volt text-night hover:bg-white"
                aria-label="S'inscrire à la newsletter"
              >
                <Send size={16} />
              </button>
            </form>
            <div className="mt-8">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-white">Applications</p>
              <div className="mt-4 flex gap-3">
                <div className="flex h-11 items-center rounded-xl border border-white/15 px-4 text-xs text-steel">App Store</div>
                <div className="flex h-11 items-center rounded-xl border border-white/15 px-4 text-xs text-steel">Google Play</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VOLTARA. Tous droits réservés.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="hover:text-volt">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
