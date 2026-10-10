import { Link } from "react-router-dom";
import { ZapOff } from "lucide-react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <Section tone="dark" className="flex min-h-[70vh] items-center">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-volt/15 text-volt">
          <ZapOff size={28} />
        </span>
        <p className="mt-6 font-mono text-sm uppercase tracking-[0.2em] text-steel">Erreur 404</p>
        <h1 className="mt-3 text-balance font-display text-[clamp(1.8rem,1.4rem+2vw,3rem)] font-semibold">
          Cette route ne recharge plus.
        </h1>
        <p className="mt-4 text-balance leading-relaxed text-steel">
          La page que vous cherchez a été déplacée, renommée ou n'existe pas. Revenez à l'accueil ou trouvez la station
          d'énergie la plus proche.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href="/" size="lg">
            Retour à l'accueil
          </Button>
          <Button href="/voltara-charge" variant="secondary" size="lg">
            Trouver une station
          </Button>
        </div>
        <p className="mt-6 text-sm text-steel">
          Besoin d'aide ?{" "}
          <Link to="/aide" className="text-volt hover:underline">
            Consultez le centre d'aide
          </Link>
        </p>
      </div>
    </Section>
  );
}
