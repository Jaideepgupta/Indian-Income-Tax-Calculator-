import { calculateTax } from './src/engine/taxCalculator.js';

console.log("=== RUNNING TAX ENGINE TEST CASES ===");

// 12.1 Basic Scenario — New Regime Better
const tc1 = {
  monthlyInHand: 80000,
  ageGroup: 'below60',
  hasEPF: true,
  epfMonthlyDeduction: 3600,
  hasProfessionalTax: true,
  annualBonus: 0,
  monthlyRent: 0,
  investments80C: 0
};
const res1 = calculateTax(tc1);
console.log("\nTC 1: Basic (New Better)");
console.log("Old Tax:", res1.oldRegime.totalTax);
console.log("New Tax:", res1.newRegime.totalTax);
console.log("Recommendation:", res1.recommendation.betterRegime, "saves", res1.recommendation.savingsAmount);

// 12.2 Old Regime Better — Heavy Deductions
const tc2 = {
  monthlyInHand: 120000,
  ageGroup: 'below60',
  hasEPF: true,
  epfMonthlyDeduction: 7200,
  hasProfessionalTax: true,
  annualBonus: 200000,
  monthlyRent: 25000,
  isMetroCity: true,
  investments80C: 63600,
  npsSelfContribution: 50000,
  healthInsuranceSelf: 25000,
  healthInsuranceParents: 30000,
  parentsAreSenior: true,
  hasHomeLoan: true,
  homeLoanInterestAnnual: 200000,
  savingsAccountInterest: 8000
};
const res2 = calculateTax(tc2);
console.log("\nTC 2: Heavy Deductions (Old Better)");
console.log("Old Tax:", res2.oldRegime.totalTax);
console.log("New Tax:", res2.newRegime.totalTax);
console.log("Recommendation:", res2.recommendation.betterRegime, "saves", res2.recommendation.savingsAmount);

// 12.3 Section 87A Rebate — New Regime Zero Tax
const tc3 = {
  monthlyInHand: 85000,
  ageGroup: 'below60',
  hasEPF: true,
  epfMonthlyDeduction: 1800,
  hasProfessionalTax: false
};
const res3 = calculateTax(tc3);
console.log("\nTC 3: 87A Rebate (New Zero)");
console.log("Old Tax:", res3.oldRegime.totalTax);
console.log("New Tax:", res3.newRegime.totalTax);
console.log("Recommendation:", res3.recommendation.betterRegime, "saves", res3.recommendation.savingsAmount);

// 12.4 Senior Citizen
const tc4 = {
  monthlyInHand: 60000,
  ageGroup: '60to79',
  hasEPF: false,
  healthInsuranceSelf: 40000,
  fdInterest: 45000,
  savingsAccountInterest: 12000
};
const res4 = calculateTax(tc4);
console.log("\nTC 4: Senior Citizen");
console.log("Old Tax:", res4.oldRegime.totalTax);
console.log("New Tax:", res4.newRegime.totalTax);
console.log("Recommendation:", res4.recommendation.betterRegime, "saves", res4.recommendation.savingsAmount);

// 12.5 Marginal Relief Alert
const tc5 = {
  monthlyInHand: 90000,
  ageGroup: 'below60',
  hasEPF: true,
  epfMonthlyDeduction: 1800,
  hasProfessionalTax: false
};
const res5 = calculateTax(tc5);
console.log("\nTC 5: Marginal Relief");
console.log("New Taxable Income:", res5.newRegime.taxableIncome);
console.log("Marginal Relief Alert:", res5.recommendation.marginalReliefAlert);
if (res5.recommendation.marginalReliefAlert) {
  console.log("Amount to reduce:", res5.recommendation.marginalReliefAmount);
}

console.log("\n=== DONE ===");
