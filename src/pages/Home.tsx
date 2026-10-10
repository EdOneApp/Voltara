import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Zap, Plug, BatteryCharging, Package, Wallet, MapPin, ArrowRight } from "lucide-react";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Marquee } from "../components/ui/Marquee";
import { StatCounter } from "../components/ui/StatCounter";
import { VehicleCard } from "../components/ui/VehicleCard";
import { StationsMap } from "../components/ui/StationsMap";
import { CTASection } from "../components/ui/CTASection";
import { VisualPlaceholder } from "../components/ui/VisualPlaceholder";
import { poles, ecosystemSteps } from "../data/poles";
import { cars, motos } from "../data/vehicles";
import { stations } from "../data/stations";
import { testimonials } from "../data/testimonials";
import { posts } from "../data/posts";
import { computeSimulation } from "../lib/simulator";
import { formatXOF } from "../lib/utils";

const icons: Record<string, typeof Zap> = {
  zap: Zap,
  plug: Plug,
  "battery-charging": BatteryCharging,
  package: Package,
  wallet: Wallet,
};

export function Home() {
  const [vehicleIdx, setVehicleIdx] = useState(0);
  const [apport, setApport] = useState(20);
  const [duration, setDuration] = useState(18);
  const allVehicles = useMemo(() => [...cars, ...motos], []);
  const vehicle = allVehicles[vehicleIdx];
  const sim = computeSimulation({ price: vehicle.priceFrom, apportPct: apport, durationMonths: duration, frequency: "jour" });

  return (
    <>
      {/* 1. Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 bg-night pt-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-volt/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan/10 blur-[120px]" />
        <div className="noise-bg absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-volt"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-volt" /> Mobilité électrique panafricaine
          </motion.span>

          <h1 className="max-w-4xl text-balance font-display font-bold leading-[0.98] tracking-tight text-[clamp(2.8rem,1.6rem+6vw,7.2rem)]">
            {"L'énergie qui fait".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mr-4 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <span className="voltara-gradient-text">avancer l'Afrique.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-steel"
          >
            Véhicules et motos électriques, recharge, swapping de batteries, VTC, livraison et solaire : VOLTARA est l'écosystème intégré de mobilité et d'énergie propre, conçu pour l'Afrique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button href="/vehicules" size="lg" icon={<ArrowRight size={18} />}>
              Découvrir les véhicules
            </Button>
            <Button href="/voltara-charge" variant="secondary" size="lg" icon={<MapPin size={18} />}>
              Trouver une station
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2. Bandeau des pôles */}
      <div className="border-b border-white/10 bg-graphite py-5">
        <Marquee
          items={poles.map((p) => (
            <span key={p.key} className="flex items-center gap-2 px-6 font-mono text-sm uppercase tracking-wide text-steel">
              <span className="h-1.5 w-1.5 rounded-full bg-volt" /> {p.name}
            </span>
          ))}
        />
      </div>

      {/* 3. Un écosystème complet */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Un écosystème complet"
          title="Une seule moto, toute l'énergie dont l'Afrique a besoin."
          description="Rouler, recharger, swapper, livrer et financer : chaque pôle VOLTARA se connecte aux autres pour couvrir tout le cycle de la mobilité électrique."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ecosystemSteps.map((step, i) => {
            const Icon = icons[step.icon];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl border border-white/10 bg-graphite p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt/15 text-volt">
                  <Icon size={20} />
                </span>
                <p className="mt-4 font-display text-base font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-steel">{step.description}</p>
                {i < ecosystemSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-volt/60 to-transparent lg:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 4. Véhicules phares */}
      <Section tone="graphite">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="VOLTARA Drive"
            title="Véhicules et motos phares"
            description="À partir de, comptant ou en paiement échelonné. Autonomie, recharge et prix mis à jour en direct."
          />
          <Button href="/vehicules" variant="secondary">
            Voir tout le catalogue
          </Button>
        </div>
        <div className="mt-12">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-steel">Voitures</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cars.slice(0, 3).map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-steel">Motos et scooters</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {motos.slice(0, 3).map((v) => (
              <VehicleCard key={v.slug} vehicle={v} />
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Simulateur express */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="VOLTARA Pay"
          title="Payez petit à petit."
          description="Choisissez un véhicule, ajustez l'apport et la durée : découvrez votre paiement quotidien estimé."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-graphite p-8">
            <label className="text-sm text-steel">Véhicule</label>
            <select
              value={vehicleIdx}
              onChange={(e) => setVehicleIdx(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-white/15 bg-night px-4 py-3 text-white focus:border-volt focus:outline-none"
            >
              {allVehicles.map((v, i) => (
                <option key={v.slug} value={i}>
                  {v.name} — {formatXOF(v.priceFrom)}
                </option>
              ))}
            </select>

            <div className="mt-6">
              <div className="flex justify-between text-sm text-steel">
                <span>Apport</span>
                <span className="font-mono text-white">{apport}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={60}
                step={5}
                value={apport}
                onChange={(e) => setApport(Number(e.target.value))}
                className="mt-2 w-full accent-[#C6FF3D]"
              />
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm text-steel">
                <span>Durée</span>
                <span className="font-mono text-white">{duration} mois</span>
              </div>
              <input
                type="range"
                min={6}
                max={48}
                step={6}
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="mt-2 w-full accent-[#C6FF3D]"
              />
            </div>

            <Button href="/voltara-pay" className="mt-8 w-full justify-center">
              Affiner ma simulation
            </Button>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-volt/30 bg-gradient-to-br from-volt/10 via-graphite to-graphite p-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-steel">Paiement estimé</p>
              <p className="mt-3 font-mono text-5xl font-semibold text-volt">{formatXOF(sim.paymentForFrequency)}</p>
              <p className="mt-1 text-steel">par jour</p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-sm">
              <div>
                <dt className="text-steel">Apport</dt>
                <dd className="font-mono text-white">{formatXOF(sim.apportAmount)}</dd>
              </div>
              <div>
                <dt className="text-steel">Montant financé</dt>
                <dd className="font-mono text-white">{formatXOF(sim.financedAmount)}</dd>
              </div>
              <div>
                <dt className="text-steel">Coût total</dt>
                <dd className="font-mono text-white">{formatXOF(sim.totalCost)}</dd>
              </div>
              <div>
                <dt className="text-steel">Par mois</dt>
                <dd className="font-mono text-white">{formatXOF(sim.paymentPerMonth)}</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-steel">
              Simulation indicative, taux annuel de 15 % à titre d'exemple. Le barème définitif sera fixé avec notre partenaire financier.
            </p>
          </div>
        </div>
      </Section>

      {/* 6. Carte du réseau */}
      <Section tone="graphite">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="VOLTARA Charge & Swap"
            title="Un réseau qui grandit chaque mois."
            description="Recharge rapide et échange de batteries dans les grandes villes d'Afrique de l'Ouest et de l'Est."
          />
          <div className="flex gap-10">
            <StatCounter value={stations.length} label="Stations actives" />
            <StatCounter value={5} label="Pays couverts" />
          </div>
        </div>
        <div className="mt-10">
          <StationsMap />
        </div>
        <div className="mt-6 flex justify-center">
          <Button href="/voltara-charge" variant="secondary">
            Voir la carte complète
          </Button>
        </div>
      </Section>

      {/* 7. Applications */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Applications"
          title="Toute l'énergie VOLTARA dans votre poche."
          description="Localisez une station, démarrez une charge, réservez un swap, commandez une course ou une livraison."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {[
            { name: "VOLTARA App", desc: "Recharge, swap, véhicule" },
            { name: "VOLTARA Ride", desc: "Passager et chauffeur" },
            { name: "VOLTARA Go", desc: "Livraison et commerçants" },
          ].map((app) => (
            <div key={app.name} className="text-center">
              <VisualPlaceholder icon="📱" label="Écran app — à venir" className="mx-auto aspect-[9/16] max-w-56" />
              <p className="mt-4 font-display font-semibold">{app.name}</p>
              <p className="text-sm text-steel">{app.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-3">
          <div className="flex h-12 items-center rounded-xl border border-white/15 px-5 text-sm text-steel">App Store</div>
          <div className="flex h-12 items-center rounded-xl border border-white/15 px-5 text-sm text-steel">Google Play</div>
        </div>
      </Section>

      {/* 8. Entreprises */}
      <Section tone="graphite">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Entreprises"
              title="Électrifiez votre flotte, vos bornes, votre toiture."
              description="Location longue durée de véhicules électriques, bornes au siège ou au dépôt, solaire commercial et industriel : un seul interlocuteur pour toute votre transition énergétique."
            />
            <Button href="/entreprises" size="lg" className="mt-8">
              Parler à un expert
            </Button>
          </div>
          <VisualPlaceholder icon="🏢" tone="solar" />
        </div>
      </Section>

      {/* 9. Chiffres clés */}
      <Section tone="dark">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <StatCounter value={16} label="Stations recharge & swap" />
          <StatCounter value={5} label="Pays actifs" />
          <StatCounter value={3200} suffix="+" label="Véhicules en circulation" />
          <StatCounter value={980} suffix=" t" label="CO₂ évité par an" />
        </div>
      </Section>

      {/* 10. Témoignages */}
      <Section tone="graphite">
        <SectionHeading eyebrow="Témoignages" title="Ils roulent déjà à l'énergie VOLTARA." align="center" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-night p-7">
              <p className="text-balance leading-relaxed text-white/90">« {t.quote} »</p>
              <p className="mt-5 font-display font-semibold text-white">{t.name}</p>
              <p className="text-sm text-steel">{t.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 11. Partenaires */}
      <div className="border-y border-white/10 bg-night py-10">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-steel">Ils accompagnent VOLTARA</p>
        <div className="mt-6">
          <Marquee
            items={["Banque partenaire", "Orange Money", "MTN MoMo", "Moov Money", "Wave", "Chambre de commerce CI", "ARTCI"].map((n) => (
              <span key={n} className="px-8 font-display text-lg text-white/30">
                {n}
              </span>
            ))}
          />
        </div>
      </div>

      {/* 12. Actualités */}
      <Section tone="dark">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Actualités" title="Les dernières nouvelles VOLTARA" />
          <Button href="/actualites" variant="secondary">
            Tout le blog
          </Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <Link key={p.slug} to={`/actualites/${p.slug}`} className="group rounded-2xl border border-white/10 bg-graphite p-6">
              <p className="font-mono text-xs uppercase tracking-wide text-volt">{p.category}</p>
              <h3 className="mt-3 font-display text-lg font-semibold text-white group-hover:text-volt">{p.title}</h3>
              <p className="mt-2 text-sm text-steel">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
