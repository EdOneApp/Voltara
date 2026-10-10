import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Container } from "./Container";

interface Crumb {
  label: string;
  href?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  actions,
  tone = "volt",
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  actions?: ReactNode;
  tone?: "volt" | "cyan" | "solar" | "go";
  compact?: boolean;
}) {
  const glow: Record<string, string> = {
    volt: "bg-volt/20",
    cyan: "bg-cyan/20",
    solar: "bg-solar/20",
    go: "bg-go/20",
  };

  return (
    <section className={cn("relative overflow-hidden border-b border-white/10 bg-night", compact ? "pt-28 pb-10" : "pt-32 pb-16 sm:pt-40 sm:pb-24")}>
      <div className={cn("pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full blur-[120px]", glow[tone])} />
      <Container className="relative">
        {crumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-steel">
            <Link to="/" className="hover:text-volt">
              Accueil
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {c.href ? (
                  <Link to={c.href} className="hover:text-volt">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/70">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-volt">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              {eyebrow}
            </span>
          )}
          <h1 className="text-balance font-display font-semibold leading-[1.05] tracking-tight text-[clamp(2.4rem,1.6rem+3.5vw,4.5rem)]">
            {title}
          </h1>
          {description && <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-steel">{description}</p>}
          {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
        </motion.div>
      </Container>
    </section>
  );
}
