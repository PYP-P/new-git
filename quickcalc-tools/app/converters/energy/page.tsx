"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const units = {
  j: { name: "Joule", toJoule: 1 },
  kj: { name: "Kilojoule", toJoule: 1000 },
  cal: { name: "Calorie", toJoule: 4.184 },
  kcal: { name: "Kilocalorie", toJoule: 4184 },
  wh: { name: "Watt-hour", toJoule: 3600 },
  kwh: { name: "Kilowatt-hour", toJoule: 3600000 },
  ev: { name: "Electronvolt", toJoule: 1.602176634e-19 },
  btu: { name: "BTU", toJoule: 1055.06 },
};

export default function EnergyConverter() {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("j");
  const [toUnit, setToUnit] = useState("cal");
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

    const fromMultiplier = units[fromUnit as keyof typeof units].toJoule;
    const toMultiplier = units[toUnit as keyof typeof units].toJoule;
    
    const joules = value * fromMultiplier;
    const converted = joules / toMultiplier;
    
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
          <span>Energy Converter</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ENERGY CONVERTER
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
                {result !== null ? result.toExponential(6) : "0"}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Energy Conversions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Joules</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 kJ = 1000 J</li>
                <li>1 J = 0.239 cal</li>
                <li>1 J = 0.000278 Wh</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Calories</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 cal = 4.184 J</li>
                <li>1 kcal = 1000 cal</li>
                <li>1 kcal = 4184 J</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Watt-hours</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 Wh = 3600 J</li>
                <li>1 kWh = 1000 Wh</li>
                <li>1 kWh = 3.6 MJ</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">BTU</h3>
              <ul className="space-y-1 text-gray-700">
                <li>1 BTU = 1055.06 J</li>
                <li>1 BTU = 0.293 Wh</li>
                <li>1 BTU = 252 cal</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
