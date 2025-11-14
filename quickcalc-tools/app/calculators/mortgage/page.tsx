"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  const calculateMortgage = () => {
    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(loanTerm);

    if (isNaN(principal) || isNaN(annualRate) || isNaN(years)) return;

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;

    let monthly: number;
    if (monthlyRate === 0) {
      monthly = principal / numberOfPayments;
    } else {
      monthly = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }

    const total = monthly * numberOfPayments;
    const interest = total - principal;

    setMonthlyPayment(monthly);
    setTotalPayment(total);
    setTotalInterest(interest);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/#calculators" className="hover:text-blue-600">Calculators</Link>
          <span className="mx-2">›</span>
          <span>Mortgage Calculator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          MORTGAGE CALCULATOR
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount ($)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="300000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Interest Rate (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="4.5"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Term (years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="30"
              />
            </div>

            <button
              onClick={calculateMortgage}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Calculate
            </button>
          </div>

          {monthlyPayment !== null && (
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Monthly Payment</h2>
                <p className="text-3xl font-bold text-gray-900">
                  ${monthlyPayment.toFixed(2)}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Total Payment</h3>
                  <p className="text-xl font-bold text-gray-900">
                    ${totalPayment?.toFixed(2)}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Total Interest</h3>
                  <p className="text-xl font-bold text-gray-900">
                    ${totalInterest?.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Formula</h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              The monthly mortgage payment is calculated using the following formula:
            </p>
            <div className="bg-white p-4 rounded border border-gray-200">
              <code className="text-sm">
                M = P × [r(1 + r)^n] / [(1 + r)^n - 1]
              </code>
            </div>
            <div className="text-gray-700">
              <p><strong>Where:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>M = Monthly payment</li>
                <li>P = Principal loan amount</li>
                <li>r = Monthly interest rate (annual rate / 12)</li>
                <li>n = Total number of payments (years × 12)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
