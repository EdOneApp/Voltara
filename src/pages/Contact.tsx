import { useState } from "react";
import { MessageCircle, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Section } from "../components/ui/Section";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { StationsMap } from "../components/ui/StationsMap";

interface Agency {
  city: string;
  name: string;
  address: string;
  hours: string;
}

const agencies: Agency[] = [
  { city: "Abidjan", name: "Agence Plateau", address: "Avenue Chardy, Immeuble Alpha 2000, Abidjan Plateau", hours: "Lun–Sam, 8h–18h" },
  { city: "Abidjan", name: "Agence Cocody", address: "Boulevard Latrille, Riviera 2, Abidjan Cocody", hours: "Lun–Sam, 8h–18h" },
  { city: "Yamoussoukro", name: "Agence Yamoussoukro", address: "Route de Dimbokro, face au lycée scientifique", hours: "Lun–Sam, 8h30–17h30" },
  { city: "Dakar", name: "Agence Dakar Plateau", address: "Avenue Léopold Sédar Senghor, Dakar", hours: "Lun–Sam, 8h–18h" },
  { city: "Accra", name: "Agence Accra Osu", address: "Oxford Street, Osu, Accra", hours: "Mon–Sat, 8am–6pm" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Une question ? Parlons-en."
        description="Formulaire, WhatsApp, téléphone ou passage en agence : choisissez le canal qui vous convient le mieux."
        crumbs={[{ label: "Contact" }]}
      />

      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-2xl border border-white/10 bg-graphite p-7"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <CheckCircle2 className="text-volt" size={36} />
                <p className="font-display font-semibold">Message envoyé</p>
                <p className="text-sm text-steel">Merci {form.name || ""}, notre équipe vous répond sous 24h ouvrées par e-mail.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
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
                </div>
                <div>
                  <label className="text-sm text-steel">Sujet</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="vehicules">Véhicules & VOLTARA Drive</option>
                    <option value="pay">VOLTARA Pay / financement</option>
                    <option value="charge-swap">VOLTARA Charge / Swap</option>
                    <option value="entreprises">Offre Entreprises</option>
                    <option value="partenariat">Devenir partenaire</option>
                    <option value="autre">Autre demande</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-steel">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-white/15 bg-night px-4 py-2.5 focus:border-volt focus:outline-none"
                  />
                </div>
                <Button type="submit" className="w-full justify-center">
                  Envoyer le message
                </Button>
              </div>
            )}
          </form>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-graphite p-6">
              <p className="font-display font-semibold text-white">Contact direct</p>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  href="https://wa.me/2250000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-steel hover:text-volt"
                >
                  <MessageCircle size={16} /> WhatsApp — +225 00 00 00 00 00
                </a>
                <a href="tel:+2250102030405" className="flex items-center gap-2 text-steel hover:text-volt">
                  <Phone size={16} /> +225 01 02 03 04 05
                </a>
              </div>
            </div>
            <StationsMap compact />
          </div>
        </div>
      </Section>

      <Section tone="graphite">
        <SectionHeading eyebrow="Nos agences" title="Retrouvez-nous sur place" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agencies.map((a) => (
            <div key={a.name} className="rounded-2xl border border-white/10 bg-night p-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-volt">{a.city}</p>
              <p className="mt-2 font-display font-semibold text-white">{a.name}</p>
              <p className="mt-2 flex items-start gap-2 text-sm text-steel">
                <MapPin size={15} className="mt-0.5 shrink-0" /> {a.address}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-steel">
                <Clock size={15} className="shrink-0" /> {a.hours}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
