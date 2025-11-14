"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const units = {
  mm: { name: "Millimeter", toMeter: 0.001 },
  cm: { name: "Centimeter", toMeter: 0.01 },
  m: { name: "Meter", toMeter: 1 },
  km: { name: "Kilometer", toMeter: 1000 },
  in: { name: "Inch", toMeter: 0.0254 },
  ft: { name: "Foot", toMeter: 0.3048 },
  yd: { name: "Yard", toMeter: 0.9144 },
  mi: { name: "Mile", toMeter: 1609.344 },
};

export default function LengthConverter() {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
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

    const fromMultiplier = units[fromUnit as keyof typeof units].toMeter;
    const toMultiplier = units[toUnit as keyof typeof units].toMeter;
    
    const meters = value * fromMultiplier;
    const converted = meters / toMultiplier;
    
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
          <span>Length Converter</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          LENGTH CONVERTER
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Length Conversions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Metric to Imperial</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 cm = 0.3937 inches</li>
                <li>1 m = 3.2808 feet</li>
                <li>1 km = 0.6214 miles</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Imperial to Metric</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 inch = 2.54 cm</li>
                <li>1 foot = 0.3048 m</li>
                <li>1 mile = 1.6093 km</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Metric Units</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 m = 100 cm</li>
                <li>1 m = 1000 mm</li>
                <li>1 km = 1000 m</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Imperial Units</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 foot = 12 inches</li>
                <li>1 yard = 3 feet</li>
                <li>1 mile = 5280 feet</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
