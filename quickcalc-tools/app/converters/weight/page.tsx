"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const units = {
  mg: { name: "Milligram", toKg: 0.000001 },
  g: { name: "Gram", toKg: 0.001 },
  kg: { name: "Kilogram", toKg: 1 },
  oz: { name: "Ounce", toKg: 0.0283495 },
  lb: { name: "Pound", toKg: 0.453592 },
  ton: { name: "Ton (US)", toKg: 907.185 },
};

export default function WeightConverter() {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lb");
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    if (fromValue) {
      convert();
    }
  }, [fromValue, fromUnit, toUnit]);

  const convert = () => {
    const value = parseFloat(fromValue);
    if (isNaN(value)) {
      setResult(null);
      return;
    }

    const fromMultiplier = units[fromUnit as keyof typeof units].toKg;
    const toMultiplier = units[toUnit as keyof typeof units].toKg;
    
    const kg = value * fromMultiplier;
    const converted = kg / toMultiplier;
    
    setResult(converted);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/#converters" className="hover:text-blue-600">Converters</Link>
          <span className="mx-2">›</span>
          <span>Weight Converter</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          WEIGHT CONVERTER
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                placeholder="Enter value"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(units).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({key})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <div className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-50 mb-3 h-[42px] flex items-center">
                {result !== null ? result.toFixed(6) : "0"}
              </div>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {Object.entries(units).map(([key, unit]) => (
                  <option key={key} value={key}>
                    {unit.name} ({key})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Weight Conversions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Metric to Imperial</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 g = 0.0353 ounces</li>
                <li>1 kg = 2.2046 pounds</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Imperial to Metric</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 ounce = 28.35 g</li>
                <li>1 pound = 0.4536 kg</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Metric Units</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 g = 1000 mg</li>
                <li>1 kg = 1000 g</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Imperial Units</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 pound = 16 ounces</li>
                <li>1 ton = 2000 pounds</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
