export const ANNUAL_RATE = 0.15; // Taux indicatif, à confirmer avec le partenaire financier VOLTARA Pay.

export type Frequency = "jour" | "semaine" | "mois";

export interface SimulationInput {
  price: number;
  apportPct: number;
  durationMonths: number;
  frequency: Frequency;
}

export interface SimulationResult {
  apportAmount: number;
  financedAmount: number;
  totalInterest: number;
  totalCost: number;
  paymentPerMonth: number;
  paymentPerWeek: number;
  paymentPerDay: number;
  paymentForFrequency: number;
  frequencyLabel: string;
}

export function computeSimulation({ price, apportPct, durationMonths, frequency }: SimulationInput): SimulationResult {
  const apportAmount = Math.round(price * (apportPct / 100));
  const financedAmount = price - apportAmount;
  const totalInterest = Math.round(financedAmount * ANNUAL_RATE * (durationMonths / 12));
  const totalCost = financedAmount + totalInterest;

  const paymentPerMonth = Math.round(totalCost / durationMonths);
  const paymentPerWeek = Math.round(paymentPerMonth / 4.33);
  const paymentPerDay = Math.round(paymentPerMonth / 30);

  const map: Record<Frequency, { amount: number; label: string }> = {
    jour: { amount: paymentPerDay, label: "par jour" },
    semaine: { amount: paymentPerWeek, label: "par semaine" },
    mois: { amount: paymentPerMonth, label: "par mois" },
  };

  return {
    apportAmount,
    financedAmount,
    totalInterest,
    totalCost,
    paymentPerMonth,
    paymentPerWeek,
    paymentPerDay,
    paymentForFrequency: map[frequency].amount,
    frequencyLabel: map[frequency].label,
  };
}
