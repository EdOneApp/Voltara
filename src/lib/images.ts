/**
 * Photos libres de droits (Pexels, licence gratuite y compris usage commercial,
 * cf. cahier des charges section 10 — "Unsplash / Pexels pour les ambiances").
 * Ce sont des photos de stock réelles utilisées à titre d'illustration en
 * attendant le shooting VOLTARA dédié : elles ne représentent pas les
 * véhicules VOLTARA réels, d'où le badge "Photo d'illustration" posé par
 * le composant Photo sur les visuels produit.
 */
export function pexels(id: number, width = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}
