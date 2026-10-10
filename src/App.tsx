import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

import { Home } from "./pages/Home";
import { Catalogue } from "./pages/vehicules/Catalogue";
import { Fiche } from "./pages/vehicules/Fiche";
import { Location } from "./pages/Location";
import { VoltaraPay } from "./pages/VoltaraPay";
import { VoltaraRide } from "./pages/VoltaraRide";
import { VoltaraGo } from "./pages/VoltaraGo";
import { VoltaraCharge } from "./pages/VoltaraCharge";
import { VoltaraSwap } from "./pages/VoltaraSwap";
import { SolarBornes } from "./pages/solar/SolarBornes";
import { SolarPanneaux } from "./pages/solar/SolarPanneaux";
import { Entreprises } from "./pages/Entreprises";
import { Tarifs } from "./pages/Tarifs";
import { Maintenance } from "./pages/services/Maintenance";
import { Assurance } from "./pages/services/Assurance";
import { Formation } from "./pages/services/Formation";
import { DevenirPartenaire } from "./pages/DevenirPartenaire";
import { DemandeDevis } from "./pages/DemandeDevis";
import { APropos } from "./pages/APropos";
import { Impact } from "./pages/Impact";
import { Carrieres } from "./pages/Carrieres";
import { Presse } from "./pages/Presse";
import { Contact } from "./pages/Contact";
import { Aide } from "./pages/Aide";
import { EspaceClient } from "./pages/EspaceClient";
import { PlanDuSite } from "./pages/PlanDuSite";
import { Actualites } from "./pages/Actualites";
import { Article } from "./pages/Article";
import { MentionsLegales } from "./pages/legal/MentionsLegales";
import { Confidentialite } from "./pages/legal/Confidentialite";
import { Cookies } from "./pages/legal/Cookies";
import { CGU } from "./pages/legal/CGU";
import { CGV } from "./pages/legal/CGV";
import { ConditionsLocation } from "./pages/legal/ConditionsLocation";
import { ConditionsPay } from "./pages/legal/ConditionsPay";
import { ConditionsRechargeSwap } from "./pages/legal/ConditionsRechargeSwap";
import { ConditionsVTCLivraison } from "./pages/legal/ConditionsVTCLivraison";
import { ChartePartenaires } from "./pages/legal/ChartePartenaires";
import { Accessibilite } from "./pages/legal/Accessibilite";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
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
  );
}
