import { Link, Navigate, useParams } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { posts } from "../data/posts";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/actualites" replace />;
  }

  const sameCategory = posts.filter((p) => p.slug !== post.slug && p.category === post.category);
  const others = posts.filter((p) => p.slug !== post.slug && p.category !== post.category);
  const related = [...sameCategory, ...others].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        crumbs={[{ label: "Actualités", href: "/actualites" }, { label: post.title }]}
      />

      <Section tone="dark" size="narrow">
        <div className="flex items-center gap-3 text-sm text-steel">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-steel" />
          <span>{post.readMinutes} min de lecture</span>
        </div>

        <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/85">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <Link to="/actualites" className="text-sm font-medium text-volt hover:text-white">
            ← Retour aux actualités
          </Link>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="graphite">
          <h2 className="font-display text-2xl font-semibold text-white">Articles similaires</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/actualites/${p.slug}`}
                className="group rounded-2xl border border-white/10 bg-night p-6 transition-colors hover:border-volt/40"
              >
                <p className="font-mono text-xs uppercase tracking-wide text-volt">{p.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-volt">{p.title}</h3>
                <p className="mt-2 text-sm text-steel">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
