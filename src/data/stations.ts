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
  // Position en pourcentage sur la carte stylisée de l'Afrique de l'Ouest (voir StationsMap).
  x: number;
  y: number;
}

export const stations: Station[] = [
  { id: "abj-plateau", name: "VOLTARA Charge — Plateau", city: "Abidjan", country: "Côte d'Ivoire", type: "mixte", power: "150 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Avenue Chardy, Le Plateau, Abidjan", x: 32, y: 62 },
  { id: "abj-cocody", name: "VOLTARA Charge — Cocody Riviera", city: "Abidjan", country: "Côte d'Ivoire", type: "recharge", power: "60 kW DC", connectors: ["CCS2", "Type 2"], status: "disponible", hours: "6h — 23h", address: "Boulevard Latrille, Cocody, Abidjan", x: 33, y: 61 },
  { id: "abj-marcory", name: "VOLTARA Swap — Marcory Zone 4", city: "Abidjan", country: "Côte d'Ivoire", type: "swap", status: "occupe", hours: "24h/24 — 7j/7", address: "Zone 4C, Marcory, Abidjan", x: 32.5, y: 63 },
  { id: "abj-yopougon", name: "VOLTARA Swap — Yopougon Siporex", city: "Abidjan", country: "Côte d'Ivoire", type: "swap", status: "disponible", hours: "5h — minuit", address: "Siporex, Yopougon, Abidjan", x: 31, y: 61.5 },
  { id: "yakro", name: "VOLTARA Charge — Yamoussoukro Centre", city: "Yamoussoukro", country: "Côte d'Ivoire", type: "recharge", power: "50 kW DC", connectors: ["CCS2"], status: "disponible", hours: "6h — 22h", address: "Avenue Houphouët-Boigny, Yamoussoukro", x: 33, y: 55 },
  { id: "bouake", name: "VOLTARA Charge — Bouaké Nord", city: "Bouaké", country: "Côte d'Ivoire", type: "recharge", power: "50 kW DC", connectors: ["CCS2", "Type 2"], status: "hors-service", hours: "6h — 22h", address: "Route de Korhogo, Bouaké", x: 33.5, y: 48 },
  { id: "dakar-plateau", name: "VOLTARA Charge — Dakar Plateau", city: "Dakar", country: "Sénégal", type: "mixte", power: "120 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Avenue Léopold Sédar Senghor, Dakar", x: 10, y: 50 },
  { id: "dakar-pikine", name: "VOLTARA Swap — Pikine", city: "Dakar", country: "Sénégal", type: "swap", status: "disponible", hours: "5h — minuit", address: "Pikine, Dakar", x: 10.5, y: 50.5 },
  { id: "thies", name: "VOLTARA Charge — Thiès", city: "Thiès", country: "Sénégal", type: "recharge", power: "50 kW DC", connectors: ["CCS2"], status: "disponible", hours: "6h — 22h", address: "Route de Dakar, Thiès", x: 12, y: 49 },
  { id: "accra-osu", name: "VOLTARA Charge — Accra Osu", city: "Accra", country: "Ghana", type: "mixte", power: "100 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Oxford Street, Osu, Accra", x: 38, y: 63 },
  { id: "kumasi", name: "VOLTARA Swap — Kumasi Adum", city: "Kumasi", country: "Ghana", type: "swap", status: "occupe", hours: "5h — minuit", address: "Adum, Kumasi", x: 36, y: 58 },
  { id: "lagos-vi", name: "VOLTARA Charge — Lagos Victoria Island", city: "Lagos", country: "Nigeria", type: "mixte", power: "150 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Adeola Odeku Street, Victoria Island, Lagos", x: 44, y: 62 },
  { id: "lagos-ikeja", name: "VOLTARA Swap — Ikeja", city: "Lagos", country: "Nigeria", type: "swap", status: "disponible", hours: "24h/24 — 7j/7", address: "Ikeja, Lagos", x: 44.5, y: 61 },
  { id: "abuja", name: "VOLTARA Charge — Abuja Central", city: "Abuja", country: "Nigeria", type: "recharge", power: "80 kW DC", connectors: ["CCS2"], status: "disponible", hours: "6h — 23h", address: "Central Business District, Abuja", x: 45, y: 56 },
  { id: "nairobi-cbd", name: "VOLTARA Charge — Nairobi CBD", city: "Nairobi", country: "Kenya", type: "mixte", power: "100 kW DC", connectors: ["CCS2", "Type 2", "Prise moto"], status: "disponible", hours: "24h/24 — 7j/7", address: "Kenyatta Avenue, Nairobi", x: 65, y: 68 },
  { id: "nairobi-westlands", name: "VOLTARA Swap — Westlands", city: "Nairobi", country: "Kenya", type: "swap", status: "disponible", hours: "5h — minuit", address: "Westlands, Nairobi", x: 65.5, y: 67.5 },
];

export const countries = Array.from(new Set(stations.map((s) => s.country)));
export const cities = Array.from(new Set(stations.map((s) => s.city)));

export const statusLabels: Record<Station["status"], string> = {
  disponible: "Disponible",
  occupe: "Occupé",
  "hors-service": "Hors service",
};
