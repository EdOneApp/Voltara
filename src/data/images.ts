import { pexels } from "../lib/images";

// Une photo par véhicule (illustration — pas les vrais modèles VOLTARA).
export const vehiclePhotos: Record<string, string> = {
  "citadine-one": pexels(24376862),
  "citadine-one-plus": pexels(86993),
  "suv-terra": pexels(17395382),
  "suv-terra-4x4": pexels(15089585),
  "utilitaire-fret": pexels(5093241),
  "berline-prestige": pexels(12590851),
  "moto-eclair": pexels(9813408),
  "moto-eclair-pro": pexels(19828715),
  "scooter-zephyr": pexels(7237616),
  "moto-cargo": pexels(14242276),
  "moto-ride": pexels(9177145),
  "scooter-mini": pexels(3614952),
};

export const heroCityNight = pexels(15944627, 2000);
export const cityNightAerial = pexels(53756, 1800);

export const chargingPhotos = {
  stationOutdoor: pexels(9800009),
  stationModern: pexels(35736786),
  stationUrban: pexels(9799998),
  homeCharger: pexels(27355827),
};

export const solarPhotos = {
  installationRoof: pexels(11645008),
  technicianInstalling: pexels(9875418),
  technicianSunny: pexels(4254168),
  technicianTwo: pexels(6961112),
  rooftopWork: pexels(29206488),
  manInstalling: pexels(6040783),
};

// Remarque : plusieurs photos "delivery rider" trouvées sur Pexels affichent de
// vraies marques tierces (Papa John's, Grab) sur le coffre du livreur — écartées
// volontairement pour ne pas laisser croire à un partenariat. Seules des photos
// sans logo visible sont retenues ci-dessous.
export const deliveryPhotos = {
  riderIntersection: pexels(33411898),
  riderBag: pexels(7362948),
};

export const ridePhotos = {
  taxiDriver: pexels(5834978),
  matureDriver: pexels(5835445),
};

export const businessPhotos = {
  meeting: pexels(3862127),
  officeTeam: pexels(8518660),
  colleagues: pexels(5668498),
  modernMeeting: pexels(36765715),
  fleetParking: pexels(29566904),
};

export const teamPortraits = {
  ceo: pexels(20209020),
  coo: pexels(30767572),
  energy: pexels(34381970),
  cto: pexels(19456424),
  country: pexels(12871449),
};

export const nightCars = {
  blackCarRoad: pexels(6698365),
  blackCarParked: pexels(5707124),
  blackSedan: pexels(3786091),
};

export const scooterExtra = {
  rowParked: pexels(27099441),
  redVespa: pexels(10901856),
  silverRain: pexels(19762809),
};
