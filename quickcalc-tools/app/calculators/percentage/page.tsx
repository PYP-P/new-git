"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PercentageCalculator() {
  const [calc1A, setCalc1A] = useState("");
  const [calc1B, setCalc1B] = useState("");
  const [result1, setResult1] = useState<number | null>(null);

  const [calc2A, setCalc2A] = useState("");
  const [calc2B, setCalc2B] = useState("");
  const [result2, setResult2] = useState<number | null>(null);

  const [calc3A, setCalc3A] = useState("");
  const [calc3B, setCalc3B] = useState("");
  const [result3, setResult3] = useState<number | null>(null);

  const [calc4A, setCalc4A] = useState("");
  const [calc4B, setCalc4B] = useState("");
  const [result4, setResult4] = useState<number | null>(null);

  const calculate1 = () => {
    const percent = parseFloat(calc1A);
    const value = parseFloat(calc1B);
    if (!isNaN(percent) && !isNaN(value)) {
      setResult1((percent / 100) * value);
    }
  };

  const calculate2 = () => {
    const part = parseFloat(calc2A);
    const whole = parseFloat(calc2B);
    if (!isNaN(part) && !isNaN(whole) && whole !== 0) {
      setResult2((part / whole) * 100);
    }
  };

  const calculate3 = () => {
    const part = parseFloat(calc3A);
    const percent = parseFloat(calc3B);
    if (!isNaN(part) && !isNaN(percent) && percent !== 0) {
      setResult3((part / percent) * 100);
    }
  };

  const calculate4 = () => {
    const original = parseFloat(calc4A);
    const newVal = parseFloat(calc4B);
    if (!isNaN(original) && !isNaN(newVal) && original !== 0) {
      setResult4(((newVal - original) / original) * 100);
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
          <span>Percentage Calculator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          PERCENTAGE CALCULATOR (%)
        </h1>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">What is % of ?</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span>What is</span>
              <input
                type="number"
                value={calc1A}
                onChange={(e) => setCalc1A(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <span>% of</span>
              <input
                type="number"
                value={calc1B}
                onChange={(e) => setCalc1B(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <button
                onClick={calculate1}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
              {result1 !== null && (
                <span className="font-semibold text-lg">= {result1.toFixed(2)}</span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">is what % of ?</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <input
                type="number"
                value={calc2A}
                onChange={(e) => setCalc2A(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <span>is what % of</span>
              <input
                type="number"
                value={calc2B}
                onChange={(e) => setCalc2B(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <button
                onClick={calculate2}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
              {result2 !== null && (
                <span className="font-semibold text-lg">= {result2.toFixed(2)}%</span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">is % of what?</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <input
                type="number"
                value={calc3A}
                onChange={(e) => setCalc3A(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <span>is</span>
              <input
                type="number"
                value={calc3B}
                onChange={(e) => setCalc3B(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <span>% of what?</span>
              <button
                onClick={calculate3}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
              {result3 !== null && (
                <span className="font-semibold text-lg">= {result3.toFixed(2)}</span>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">What is the percentage change from to ?</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <span>From</span>
              <input
                type="number"
                value={calc4A}
                onChange={(e) => setCalc4A(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <span>to</span>
              <input
                type="number"
                value={calc4B}
                onChange={(e) => setCalc4B(e.target.value)}
                className="w-24 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="0"
              />
              <button
                onClick={calculate4}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Calculate
              </button>
              {result4 !== null && (
                <span className="font-semibold text-lg">
                  = {result4 > 0 ? "+" : ""}{result4.toFixed(2)}%
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">PERCENTAGE CALCULATIONS</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Example 1: What is 20% of $60?</h3>
              <p className="text-gray-700">
                Formula: <code className="bg-gray-200 px-2 py-1 rounded">20% × $60 = (20/100) × $60 = 0.2 × $60 = $12</code>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Example 2: $12 is what percent of $60?</h3>
              <p className="text-gray-700">
                Formula: <code className="bg-gray-200 px-2 py-1 rounded">($12/$60) × 100% = 0.2 × 100% = 20%</code>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Example 3: $12 is 20% of what?</h3>
              <p className="text-gray-700">
                Formula: <code className="bg-gray-200 px-2 py-1 rounded">$12/20% = ($12/20) × 100 = $60</code>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Example 4: What is the percentage change from $40 to $50?</h3>
              <p className="text-gray-700">
                Formula: <code className="bg-gray-200 px-2 py-1 rounded">[($50 - $40)/$40] × 100% = 0.25 × 100% = 25%</code>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
