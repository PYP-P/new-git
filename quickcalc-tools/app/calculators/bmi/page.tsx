"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    
    if (isNaN(w) || isNaN(h) || h === 0) return;

    let bmiValue: number;
    
    if (unit === "metric") {
      bmiValue = w / ((h / 100) ** 2);
    } else {
      bmiValue = (w / (h ** 2)) * 703;
    }

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue < 25) {
      setCategory("Normal weight");
    } else if (bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
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
          <span>BMI Calculator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          BMI CALCULATOR
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unit System
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="metric"
                  checked={unit === "metric"}
                  onChange={(e) => setUnit(e.target.value as "metric")}
                  className="mr-2"
                />
                Metric (kg, cm)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="imperial"
                  checked={unit === "imperial"}
                  onChange={(e) => setUnit(e.target.value as "imperial")}
                  className="mr-2"
                />
                Imperial (lbs, inches)
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight {unit === "metric" ? "(kg)" : "(lbs)"}
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={unit === "metric" ? "70" : "154"}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height {unit === "metric" ? "(cm)" : "(inches)"}
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={unit === "metric" ? "175" : "69"}
              />
            </div>
          </div>

          <button
            onClick={calculateBMI}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Calculate BMI
          </button>

          {bmi !== null && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your BMI: {bmi.toFixed(1)}
              </h2>
              <p className="text-lg text-gray-700">
                Category: <span className="font-semibold">{category}</span>
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">BMI Categories</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-3 px-4">BMI Range</th>
                  <th className="text-left py-3 px-4">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">Below 18.5</td>
                  <td className="py-3 px-4">Underweight</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">18.5 - 24.9</td>
                  <td className="py-3 px-4">Normal weight</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">25.0 - 29.9</td>
                  <td className="py-3 px-4">Overweight</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">30.0 and above</td>
                  <td className="py-3 px-4">Obese</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">BMI Formula</h3>
            <p className="text-gray-700 mb-2">
              <strong>Metric:</strong> <code className="bg-gray-200 px-2 py-1 rounded">BMI = weight(kg) / (height(m))²</code>
            </p>
            <p className="text-gray-700">
              <strong>Imperial:</strong> <code className="bg-gray-200 px-2 py-1 rounded">BMI = (weight(lbs) / (height(in))²) × 703</code>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
