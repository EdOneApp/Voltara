import type { ReactNode } from "react";
import { Container } from "../ui/Container";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

export function LegalLayout({
  title,
  updatedAt,
  intro,
  sections,
}: {
  title: string;
  updatedAt: string;
  intro?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="bg-ivory text-night">
      <div className="border-b border-night/10 pb-10 pt-32">
        <Container size="narrow">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-volt-dim">Mise à jour le {updatedAt}</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,1.6rem+1.6vw,3rem)] font-semibold leading-tight">{title}</h1>
          {intro && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-night/70">{intro}</p>}
        </Container>
      </div>

      <Container size="narrow" className="py-14">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav className="hidden lg:block">
            <ul className="sticky top-28 flex flex-col gap-3 border-l border-night/10 pl-4 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-night/60 hover:text-volt-dim">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-night/75">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
