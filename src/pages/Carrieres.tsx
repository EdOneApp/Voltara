import { useState } from "react";
import { Heart, Users, Zap, TrendingUp, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { businessPhotos } from "../data/images";

interface Value {
  icon: typeof Heart;
  title: string;
  description: string;
}

const values: Value[] = [
  { icon: Zap, title: "Énergie d'abord", description: "Nous mesurons nos décisions à l'aune de leur impact réel sur l'accès à une énergie propre et abordable." },
  { icon: Users, title: "Terrain avant tout", description: "Nos équipes passent du temps en agence, en station et sur la route : on ne construit pas un produit africain depuis un bureau fermé." },
  { icon: TrendingUp, title: "Exigence et rapidité", description: "Nous préférons livrer vite, apprendre du terrain, et corriger, plutôt que de chercher la perfection avant de lancer." },
  { icon: Heart, title: "Impact collectif", description: "Chaque poste chez VOLTARA contribue directement à un emploi créé ailleurs dans la chaîne : technicien, livreur, chauffeur." },
];

interface JobOffer {
  title: string;
  city: string;
  contract: string;
  pole: string;
}

const jobs: JobOffer[] = [
  { title: "Technicien maintenance EV", city: "Abidjan", contract: "CDI", pole: "VOLTARA Charge" },
  { title: "Développeur mobile", city: "Abidjan", contract: "CDI", pole: "Tech" },
  { title: "Responsable station Dakar", city: "Dakar", contract: "CDI", pole: "VOLTARA Swap" },
  { title: "Chargé de clientèle B2B", city: "Accra", contract: "CDI", pole: "Entreprises" },
  { title: "Conseiller VOLTARA Pay", city: "Abidjan", contract: "CDI", pole: "VOLTARA Pay" },
  { title: "Technicien installation solaire", city: "Yamoussoukro", contract: "CDI", pole: "VOLTARA Solar" },
  { title: "Responsable qualité flotte", city: "Abidjan", contract: "CDI", pole: "VOLTARA Drive" },
  { title: "Chargé de partenariats livreurs", city: "Lagos", contract: "CDD 12 mois", pole: "VOLTARA Go" },
];

const faqItems = [
  {
    question: "Comment se déroule le processus de recrutement chez VOLTARA ?",
    answer:
      "En général : un premier échange téléphonique avec notre équipe RH, un entretien avec le responsable du pôle concerné, puis selon le poste une mise en situation pratique (technique, commerciale ou produit). Nous visons une réponse sous deux semaines.",
  },
  {
    question: "Puis-je postuler si je ne vois pas de poste correspondant à mon profil ?",
    answer:
      "Oui, tout à fait. Utilisez le formulaire de candidature spontanée ci-dessus : nous conservons les profils pertinents et vous recontactons dès qu'une opportunité correspondante s'ouvre.",
  },
  {
    question: "VOLTARA recrute-t-elle en dehors de la Côte d'Ivoire ?",
    answer:
      "Oui. Nos recrutements s'étendent désormais au Sénégal, au Ghana, et bientôt au Nigeria et au Kenya, au rythme de notre expansion. Consultez la ville indiquée sur chaque offre.",
  },
];

export function Carrieres() {
  const [form, setForm] = useState({ name: "", email: "", desiredRole: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        image={businessPhotos.colleagues}
        eyebrow="Carrières"
        title="Construisez l'énergie qui fait avancer l'Afrique."
        description="VOLTARA recrute des profils techniques, commerciaux et opérationnels dans chacun de ses pays d'implantation. Rejoignez une équipe qui construit une infrastructure, pas seulement une application."
        crumbs={[{ label: "Carrières" }]}
      />

      <Section tone="dark">
        <SectionHeading eyebrow="Notre culture" title="Ce qui nous rassemble" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-graphite p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt/15 text-volt">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display font-semibold text-white">{v.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{v.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section tone="graphite" id="offres">
        <SectionHeading eyebrow="Offres d'emploi" title="Postes ouverts actuellement" />
        <div className="mt-10 grid gap-4">
          {jobs.map((job) => (
            <div
              key={job.title + job.city}
              className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-night p-5"
            >
              <div>
                <p className="font-display font-semibold text-white">{job.title}</p>
                <div className="mt-1.5 flex flex-wrap items-center gap-3 text-sm text-steel">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.city}</span>
                  <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.contract}</span>
                  <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-volt">{job.pole}</span>
                </div>
              </div>
              <Button
                href={`mailto:carrieres@voltara.africa?subject=${encodeURIComponent("Candidature — " + job.title + " — " + job.city)}`}
                external
                variant="secondary"
              >
                Postuler
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" id="candidature-spontanee">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Candidature spontanée"
              title="Vous ne voyez pas le poste qu'il vous faut ?"
              description="Envoyez-nous votre profil : nous le conservons et vous recontactons dès qu'une opportunité correspond à vos compétences."
            />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-white/10 bg-graphite p-6"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="text-volt" size={36} />
                <p className="font-display font-semibold">Candidature envoyée</p>
                <p className="text-sm text-steel">Merci {form.name || ""}, notre équipe RH étudie votre profil et revient vers vous sous deux semaines.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-steel">Nom complet</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-steel">E-mail</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-steel">Poste souhaité</label>
                  <input
                    required
                    value={form.desiredRole}
                    onChange={(e) => setForm({ ...form, desiredRole: e.target.value })}
                    placeholder="Ex : Technicien maintenance EV"
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 placeholder:text-steel/50 focus:border-volt focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm text-steel">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                  />
                </div>
                <Button type="submit" className="w-full justify-center">
                  Envoyer ma candidature
                </Button>
              </div>
            )}
          </form>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        <div className="mt-6">
          <FAQAccordion items={faqItems} />
        </div>
      </Section>
    </>
  );
}
