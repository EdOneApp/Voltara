import { Link } from "react-router-dom";
import { BatteryWarning, Home, Zap } from "lucide-react";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 bg-night pt-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-volt/15 blur-[140px]" />
      <div className="noise-bg absolute inset-0" />
      <div className="relative mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-graphite text-volt">
          <BatteryWarning size={28} />
        </span>
        <p className="mt-8 font-mono text-sm uppercase tracking-[0.2em] text-volt">Erreur 404</p>
        <h1 className="mt-4 text-balance font-display font-bold leading-[0.98] tracking-tight text-[clamp(2.4rem,1.6rem+4vw,5.5rem)]">
          Cette route ne <span className="voltara-gradient-text">recharge plus.</span>
        </h1>
        <p className="mt-6 text-balance text-lg leading-relaxed text-steel">
          La page que vous cherchez a été débranchée, déplacée, ou n'a jamais existé. Rechargez votre trajet depuis l'accueil, ou trouvez une station sur notre réseau.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg" icon={<Home size={18} />}>
            Retour à l'accueil
          </Button>
          <Button href="/voltara-charge" variant="secondary" size="lg" icon={<Zap size={18} />}>
            Trouver une station
          </Button>
        </div>
        <p className="mt-8 text-sm text-steel">
          Besoin d'aide ?{" "}
          <Link to="/aide" className="text-volt hover:text-white">
            Consultez notre centre d'aide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
