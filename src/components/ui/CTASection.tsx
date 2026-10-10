import { Section } from "./Section";
import { Button } from "./Button";

export function CTASection({
  eyebrow = "Devenir partenaire",
  title = "Hébergez une station, distribuez VOLTARA, investissez dans l'énergie qui fait avancer l'Afrique.",
  description = "Hôtes de station, revendeurs, installateurs agréés, flottes, investisseurs et collectivités : rejoignez le réseau VOLTARA dans votre pays.",
  primaryLabel = "Devenir partenaire",
  primaryHref = "/devenir-partenaire",
  secondaryLabel = "Demander un devis",
  secondaryHref = "/demande-de-devis",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <Section tone="graphite" className="overflow-hidden">
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-graphite via-graphite to-night p-10 sm:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-volt/15 blur-[100px]" />
        <div className="relative max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-volt">
            {eyebrow}
          </span>
          <h2 className="text-balance font-display text-[clamp(1.8rem,1.3rem+2vw,2.8rem)] font-semibold leading-tight">{title}</h2>
          <p className="mt-4 text-balance text-lg text-steel">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
