import { useState } from "react";
import { Lock, Mail, Info, Car, Wallet, FileText, CalendarCheck } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { formatXOF } from "../lib/utils";

export function EspaceClient() {
  const [showDemo, setShowDemo] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Espace client"
        title="Suivez vos commandes, vos échéances et vos factures VOLTARA."
        description="Connectez-vous pour retrouver votre échéancier VOLTARA Pay, vos factures de recharge et de swap, et vos réservations VOLTARA Ride."
        crumbs={[{ label: "Espace client" }]}
      />

      <Section tone="dark">
        <div className="mx-auto max-w-md rounded-2xl border border-white/10 bg-graphite p-8">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt/15 text-volt">
            <Lock size={20} />
          </span>
          <h2 className="mt-5 font-display text-xl font-semibold text-white">Se connecter</h2>
          <p className="mt-2 text-sm text-steel">Accédez à votre espace personnel VOLTARA.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowDemo(true);
            }}
            className="mt-6 space-y-4"
          >
            <div>
              <label className="text-sm text-steel">E-mail</label>
              <div className="relative mt-1.5">
                <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  className="w-full rounded-xl border border-white/15 bg-night py-2.5 pl-11 pr-4 placeholder:text-steel/50 focus:border-volt focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-steel">Mot de passe</label>
              <div className="relative mt-1.5">
                <Lock size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-steel" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/15 bg-night py-2.5 pl-11 pr-4 placeholder:text-steel/50 focus:border-volt focus:outline-none"
                />
              </div>
            </div>
            <Button type="submit" className="w-full justify-center">
              Se connecter
            </Button>
            <button type="button" className="w-full text-center text-sm text-steel hover:text-volt">
              Mot de passe oublié ?
            </button>
          </form>

          <div className="mt-6 flex items-start gap-2 rounded-xl border border-white/10 bg-night p-4 text-xs text-steel">
            <Info size={15} className="mt-0.5 shrink-0 text-volt" />
            <p>
              L'espace client VOLTARA (suivi de commandes, échéancier VOLTARA Pay, factures, réservations) sera disponible à l'ouverture officielle des comptes. Cliquez sur « Se connecter » pour découvrir un aperçu de démonstration du futur tableau de bord.
            </p>
          </div>
        </div>
      </Section>

      {showDemo && (
        <Section tone="graphite">
          <SectionHeading
            eyebrow="Aperçu"
            title="À quoi ressemblera votre tableau de bord"
            description="Démonstration avec des données fictives, à titre d'exemple uniquement. Aucune donnée réelle n'est affichée ici."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-night p-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-display font-semibold text-white">
                  <Wallet size={18} className="text-volt" /> Échéancier VOLTARA Pay
                </span>
                <Badge tone="neutral">Exemple</Badge>
              </div>
              <p className="mt-2 text-sm text-steel">Moto Eclair — 18 mois, paiement journalier</p>
              <div className="mt-4 space-y-2 text-sm">
                {[
                  { label: "Échéance du 1 oct. 2026", amount: 2500, status: "Payée" },
                  { label: "Échéance du 2 oct. 2026", amount: 2500, status: "Payée" },
                  { label: "Échéance du 3 oct. 2026", amount: 2500, status: "À venir" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-2.5">
                    <span className="text-steel">{row.label}</span>
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-white">{formatXOF(row.amount)}</span>
                      <Badge tone={row.status === "Payée" ? "available" : "neutral"}>{row.status}</Badge>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-night p-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-display font-semibold text-white">
                  <FileText size={18} className="text-cyan" /> Dernières factures
                </span>
                <Badge tone="neutral">Exemple</Badge>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {[
                  { label: "Facture Swap — Sept. 2026", amount: 15000 },
                  { label: "Facture Charge — Sept. 2026", amount: 4200 },
                  { label: "Abonnement Swap — Août 2026", amount: 15000 },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-2.5">
                    <span className="text-steel">{row.label}</span>
                    <span className="font-mono text-white">{formatXOF(row.amount)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-night p-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-display font-semibold text-white">
                  <Car size={18} className="text-solar" /> Mon véhicule
                </span>
                <Badge tone="neutral">Exemple</Badge>
              </div>
              <div className="mt-4 space-y-2 text-sm text-steel">
                <p>Moto Eclair — Immatriculée AB 1234 CI</p>
                <p>Autonomie restante estimée : 68 km</p>
                <p>Prochaine révision : dans 420 km</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-night p-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-display font-semibold text-white">
                  <CalendarCheck size={18} className="text-go" /> Réservations VOLTARA Ride
                </span>
                <Badge tone="neutral">Exemple</Badge>
              </div>
              <div className="mt-4 space-y-2 text-sm text-steel">
                <p>Course Business — Aéroport FHB, demain 7h30</p>
                <p>Historique : 24 courses ce mois-ci</p>
              </div>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
