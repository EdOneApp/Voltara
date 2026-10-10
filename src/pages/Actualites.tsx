import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { posts } from "../data/posts";
import { cn } from "../lib/utils";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export function Actualites() {
  const categories = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), []);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesCategory = activeCategory ? p.category === activeCategory : true;
      const matchesQuery = q ? p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) : true;
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <PageHero
        eyebrow="Blog VOLTARA"
        title="Actualités VOLTARA"
        description="Guides pratiques sur la recharge, le swap de batteries et le paiement échelonné, actualités du réseau et retours d'expérience d'entreprises qui électrifient leur flotte."
      />

      <Section tone="dark">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === null
                  ? "border-volt bg-volt text-night"
                  : "border-white/15 text-steel hover:border-volt hover:text-volt",
              )}
            >
              Tous
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "border-volt bg-volt text-night"
                    : "border-white/15 text-steel hover:border-volt hover:text-volt",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article…"
            className="w-full rounded-xl border border-white/15 bg-graphite px-4 py-2.5 text-sm text-white placeholder:text-steel focus:border-volt focus:outline-none sm:w-72"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-steel">Aucun article ne correspond à votre recherche.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                to={`/actualites/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-graphite p-6 transition-colors hover:border-volt/40"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-volt">{post.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-volt">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-steel">
                  <span>{formatDate(post.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-steel" />
                  <span>{post.readMinutes} min de lecture</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
