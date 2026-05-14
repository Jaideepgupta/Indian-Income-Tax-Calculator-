# Indian Income Tax Calculator (FY 2025-26) 🇮🇳

A modern, highly accurate, and beautifully designed Indian Income Tax Calculator built with **React**, **Vite**, and **Tailwind CSS**. This application helps users quickly determine their exact tax liability under both the **Old Regime** and **New Regime** based on the latest tax rules for the Financial Year 2025-26.

## 🚀 Features

- **Dual-Regime Comparison:** Instantly calculates and compares taxes between the Old and New tax regimes side-by-side.
- **Real-Time Live Preview:** As you input your salary and deductions, a persistent side-panel updates your final tax liability and explicitly tells you which regime saves you more money.
- **Accurate Mathematical Engine:** 
  - Supports Section 87A rebate limits (up to ₹7L for New, ₹5L for Old).
  - Handles Standard Deductions correctly across both regimes.
  - Accounts for complex deductions including HRA, 80C, 80D (Health Insurance), NPS (80CCD), Home Loan Interest (Section 24), and Professional Tax.
- **Transparent Slab Breakdown:** Features an interactive "Tax Slabs Breakdown" accordion that shows the exact step-by-step mathematical logic across different percentage slabs.
- **Smart Suggestions:** Analyzes the user's profile and provides actionable tips on how to save more tax (e.g., investing in NPS or Health Insurance).
- **Responsive & Premium UI:** Designed using modern "glassmorphism" aesthetics with smooth micro-interactions, ensuring it looks incredible on both desktop and mobile.

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Styling:** Tailwind CSS (Vanilla CSS & PostCSS)
- **Build Tool:** Vite
- **Icons:** Heroicons (SVG)

## 💻 Running the Project Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/taxapp.git
   cd taxapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the application**
   Open your browser and navigate to `http://localhost:5173`.

## 📁 Project Structure

- `/src/components/Wizard/`: Contains the 7-step data entry forms (Salary, Deductions, Rent, Investments, Insurance, Loans, Other Income).
- `/src/components/LivePreview/`: The real-time side panel that compares regimes instantly.
- `/src/components/Results/`: The final comprehensive breakdown and smart suggestions page.
- `/src/engine/`: The core backend logic that performs all mathematically rigorous tax calculations based on FY 2025-26 rules.

## 📝 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.
