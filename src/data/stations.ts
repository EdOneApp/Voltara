export interface Station {
  id: string;
  name: string;
  city: string;
  country: string;
  type: "recharge" | "swap" | "mixte";
  power?: string;
  connectors?: string[];
  status: "disponible" | "occupe" | "hors-service";
  hours: string;
  address: string;
  // Coordonnées géographiques réelles (WGS84), utilisées par la carte d'Afrique.
  lat: number;
  lng: number;
}

export const stations: Station[] = [
  { id: "abj-plateau", name: "VOLTARA Charge — Plateau", city: "Abidjan", country: "Côte d'Ivoire", type: "mixte", power: "150 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Avenue Chardy, Le Plateau, Abidjan", lat: 5.3097, lng: -4.0122 },
  { id: "abj-cocody", name: "VOLTARA Charge — Cocody Riviera", city: "Abidjan", country: "Côte d'Ivoire", type: "recharge", power: "60 kW DC", connectors: ["CCS2", "Type 2"], status: "disponible", hours: "6h — 23h", address: "Boulevard Latrille, Cocody, Abidjan", lat: 5.345, lng: -3.9876 },
  { id: "abj-marcory", name: "VOLTARA Swap — Marcory Zone 4", city: "Abidjan", country: "Côte d'Ivoire", type: "swap", status: "occupe", hours: "24h/24 — 7j/7", address: "Zone 4C, Marcory, Abidjan", lat: 5.2989, lng: -3.9897 },
  { id: "abj-yopougon", name: "VOLTARA Swap — Yopougon Siporex", city: "Abidjan", country: "Côte d'Ivoire", type: "swap", status: "disponible", hours: "5h — minuit", address: "Siporex, Yopougon, Abidjan", lat: 5.336, lng: -4.0747 },
  { id: "yakro", name: "VOLTARA Charge — Yamoussoukro Centre", city: "Yamoussoukro", country: "Côte d'Ivoire", type: "recharge", power: "50 kW DC", connectors: ["CCS2"], status: "disponible", hours: "6h — 22h", address: "Avenue Houphouët-Boigny, Yamoussoukro", lat: 6.8276, lng: -5.2893 },
  { id: "bouake", name: "VOLTARA Charge — Bouaké Nord", city: "Bouaké", country: "Côte d'Ivoire", type: "recharge", power: "50 kW DC", connectors: ["CCS2", "Type 2"], status: "hors-service", hours: "6h — 22h", address: "Route de Korhogo, Bouaké", lat: 7.69, lng: -5.03 },
  { id: "dakar-plateau", name: "VOLTARA Charge — Dakar Plateau", city: "Dakar", country: "Sénégal", type: "mixte", power: "120 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Avenue Léopold Sédar Senghor, Dakar", lat: 14.6928, lng: -17.4467 },
  { id: "dakar-pikine", name: "VOLTARA Swap — Pikine", city: "Dakar", country: "Sénégal", type: "swap", status: "disponible", hours: "5h — minuit", address: "Pikine, Dakar", lat: 14.7549, lng: -17.39 },
  { id: "thies", name: "VOLTARA Charge — Thiès", city: "Thiès", country: "Sénégal", type: "recharge", power: "50 kW DC", connectors: ["CCS2"], status: "disponible", hours: "6h — 22h", address: "Route de Dakar, Thiès", lat: 14.791, lng: -16.9359 },
  { id: "accra-osu", name: "VOLTARA Charge — Accra Osu", city: "Accra", country: "Ghana", type: "mixte", power: "100 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Oxford Street, Osu, Accra", lat: 5.556, lng: -0.183 },
  { id: "kumasi", name: "VOLTARA Swap — Kumasi Adum", city: "Kumasi", country: "Ghana", type: "swap", status: "occupe", hours: "5h — minuit", address: "Adum, Kumasi", lat: 6.6885, lng: -1.6244 },
  { id: "lagos-vi", name: "VOLTARA Charge — Lagos Victoria Island", city: "Lagos", country: "Nigeria", type: "mixte", power: "150 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Adeola Odeku Street, Victoria Island, Lagos", lat: 6.4281, lng: 3.4219 },
  { id: "lagos-ikeja", name: "VOLTARA Swap — Ikeja", city: "Lagos", country: "Nigeria", type: "swap", status: "disponible", hours: "24h/24 — 7j/7", address: "Ikeja, Lagos", lat: 6.6018, lng: 3.3515 },
  { id: "abuja", name: "VOLTARA Charge — Abuja Central", city: "Abuja", country: "Nigeria", type: "recharge", power: "80 kW DC", connectors: ["CCS2"], status: "disponible", hours: "6h — 23h", address: "Central Business District, Abuja", lat: 9.0765, lng: 7.3986 },
  { id: "nairobi-cbd", name: "VOLTARA Charge — Nairobi CBD", city: "Nairobi", country: "Kenya", type: "mixte", power: "100 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Kenyatta Avenue, Nairobi", lat: -1.2864, lng: 36.8172 },
  { id: "nairobi-westlands", name: "VOLTARA Swap — Westlands", city: "Nairobi", country: "Kenya", type: "swap", status: "disponible", hours: "5h — minuit", address: "Westlands, Nairobi", lat: -1.2672, lng: 36.8107 },
];

export const countries = Array.from(new Set(stations.map((s) => s.country)));
export const cities = Array.from(new Set(stations.map((s) => s.city)));

export const statusLabels: Record<Station["status"], string> = {
  disponible: "Disponible",
  occupe: "Occupé",
  "hors-service": "Hors service",
};
