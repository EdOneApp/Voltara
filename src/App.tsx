import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";

const Catalogue = lazy(() => import("./pages/vehicules/Catalogue").then((m) => ({ default: m.Catalogue })));
const Fiche = lazy(() => import("./pages/vehicules/Fiche").then((m) => ({ default: m.Fiche })));
const Location = lazy(() => import("./pages/Location").then((m) => ({ default: m.Location })));
const VoltaraPay = lazy(() => import("./pages/VoltaraPay").then((m) => ({ default: m.VoltaraPay })));

const VoltaraRide = lazy(() => import("./pages/VoltaraRide").then((m) => ({ default: m.VoltaraRide })));
const VoltaraGo = lazy(() => import("./pages/VoltaraGo").then((m) => ({ default: m.VoltaraGo })));
const VoltaraCharge = lazy(() => import("./pages/VoltaraCharge").then((m) => ({ default: m.VoltaraCharge })));
const VoltaraSwap = lazy(() => import("./pages/VoltaraSwap").then((m) => ({ default: m.VoltaraSwap })));

const SolarBornes = lazy(() => import("./pages/solar/SolarBornes").then((m) => ({ default: m.SolarBornes })));
const SolarPanneaux = lazy(() => import("./pages/solar/SolarPanneaux").then((m) => ({ default: m.SolarPanneaux })));

const Maintenance = lazy(() => import("./pages/services/Maintenance").then((m) => ({ default: m.Maintenance })));
const Assurance = lazy(() => import("./pages/services/Assurance").then((m) => ({ default: m.Assurance })));
const Formation = lazy(() => import("./pages/services/Formation").then((m) => ({ default: m.Formation })));

const Entreprises = lazy(() => import("./pages/Entreprises").then((m) => ({ default: m.Entreprises })));
const Tarifs = lazy(() => import("./pages/Tarifs").then((m) => ({ default: m.Tarifs })));

const DevenirPartenaire = lazy(() => import("./pages/DevenirPartenaire").then((m) => ({ default: m.DevenirPartenaire })));
const DemandeDevis = lazy(() => import("./pages/DemandeDevis").then((m) => ({ default: m.DemandeDevis })));

const APropos = lazy(() => import("./pages/APropos").then((m) => ({ default: m.APropos })));
const Impact = lazy(() => import("./pages/Impact").then((m) => ({ default: m.Impact })));
const Carrieres = lazy(() => import("./pages/Carrieres").then((m) => ({ default: m.Carrieres })));
const Presse = lazy(() => import("./pages/Presse").then((m) => ({ default: m.Presse })));
const Contact = lazy(() => import("./pages/Contact").then((m) => ({ default: m.Contact })));
const Aide = lazy(() => import("./pages/Aide").then((m) => ({ default: m.Aide })));
const EspaceClient = lazy(() => import("./pages/EspaceClient").then((m) => ({ default: m.EspaceClient })));
const PlanDuSite = lazy(() => import("./pages/PlanDuSite").then((m) => ({ default: m.PlanDuSite })));

const Actualites = lazy(() => import("./pages/Actualites").then((m) => ({ default: m.Actualites })));
const Article = lazy(() => import("./pages/Article").then((m) => ({ default: m.Article })));

const MentionsLegales = lazy(() => import("./pages/legal/MentionsLegales").then((m) => ({ default: m.MentionsLegales })));
const Confidentialite = lazy(() => import("./pages/legal/Confidentialite").then((m) => ({ default: m.Confidentialite })));
const Cookies = lazy(() => import("./pages/legal/Cookies").then((m) => ({ default: m.Cookies })));
const CGU = lazy(() => import("./pages/legal/CGU").then((m) => ({ default: m.CGU })));
const CGV = lazy(() => import("./pages/legal/CGV").then((m) => ({ default: m.CGV })));
const ConditionsLocation = lazy(() => import("./pages/legal/ConditionsLocation").then((m) => ({ default: m.ConditionsLocation })));
const ConditionsPay = lazy(() => import("./pages/legal/ConditionsPay").then((m) => ({ default: m.ConditionsPay })));
const ConditionsRechargeSwap = lazy(() =>
  import("./pages/legal/ConditionsRechargeSwap").then((m) => ({ default: m.ConditionsRechargeSwap })),
);
const ConditionsVTCLivraison = lazy(() =>
  import("./pages/legal/ConditionsVTCLivraison").then((m) => ({ default: m.ConditionsVTCLivraison })),
);
const ChartePartenaires = lazy(() => import("./pages/legal/ChartePartenaires").then((m) => ({ default: m.ChartePartenaires })));
const Accessibilite = lazy(() => import("./pages/legal/Accessibilite").then((m) => ({ default: m.Accessibilite })));

const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-night">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-volt" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="vehicules" element={<Catalogue />} />
          <Route path="vehicules/:slug" element={<Fiche />} />
          <Route path="location" element={<Location />} />
          <Route path="voltara-pay" element={<VoltaraPay />} />

          <Route path="voltara-ride" element={<VoltaraRide />} />
          <Route path="voltara-go" element={<VoltaraGo />} />
          <Route path="voltara-charge" element={<VoltaraCharge />} />
          <Route path="voltara-swap" element={<VoltaraSwap />} />

          <Route path="voltara-solar/bornes" element={<SolarBornes />} />
          <Route path="voltara-solar/panneaux" element={<SolarPanneaux />} />

          <Route path="services/maintenance" element={<Maintenance />} />
          <Route path="services/assurance" element={<Assurance />} />
          <Route path="services/formation" element={<Formation />} />

          <Route path="entreprises" element={<Entreprises />} />
          <Route path="tarifs" element={<Tarifs />} />

          <Route path="devenir-partenaire" element={<DevenirPartenaire />} />
          <Route path="demande-de-devis" element={<DemandeDevis />} />

          <Route path="a-propos" element={<APropos />} />
          <Route path="impact" element={<Impact />} />
          <Route path="carrieres" element={<Carrieres />} />
          <Route path="presse" element={<Presse />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aide" element={<Aide />} />
          <Route path="espace-client" element={<EspaceClient />} />
          <Route path="plan-du-site" element={<PlanDuSite />} />

          <Route path="actualites" element={<Actualites />} />
          <Route path="actualites/:slug" element={<Article />} />

          <Route path="legal/mentions-legales" element={<MentionsLegales />} />
          <Route path="legal/confidentialite" element={<Confidentialite />} />
          <Route path="legal/cookies" element={<Cookies />} />
          <Route path="legal/cgu" element={<CGU />} />
          <Route path="legal/cgv" element={<CGV />} />
          <Route path="legal/conditions-location" element={<ConditionsLocation />} />
          <Route path="legal/conditions-pay" element={<ConditionsPay />} />
          <Route path="legal/conditions-recharge-swap" element={<ConditionsRechargeSwap />} />
          <Route path="legal/conditions-vtc-livraison" element={<ConditionsVTCLivraison />} />
          <Route path="legal/charte-partenaires" element={<ChartePartenaires />} />
          <Route path="legal/accessibilite" element={<Accessibilite />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
