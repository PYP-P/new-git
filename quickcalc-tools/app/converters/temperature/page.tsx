"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TemperatureConverter() {
  const [fromValue, setFromValue] = useState("");
  const [fromUnit, setFromUnit] = useState("c");
  const [results, setResults] = useState({ c: 0, f: 0, k: 0 });

  useEffect(() => {
    if (fromValue) {
      convert();
    }
  }, [fromValue, fromUnit]);

  const convert = () => {
    const value = parseFloat(fromValue);
    if (isNaN(value)) {
      setResults({ c: 0, f: 0, k: 0 });
      return;
    }

    let celsius: number;

    switch (fromUnit) {
      case "c":
        celsius = value;
        break;
      case "f":
        celsius = (value - 32) * 5 / 9;
        break;
      case "k":
        celsius = value - 273.15;
        break;
      default:
        celsius = 0;
    }

    setResults({
      c: celsius,
      f: (celsius * 9 / 5) + 32,
      k: celsius + 273.15,
    });
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
          <span>Temperature Converter</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          TEMPERATURE CONVERTER
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Temperature
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter value"
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="c">Celsius (°C)</option>
                <option value="f">Fahrenheit (°F)</option>
                <option value="k">Kelvin (K)</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Celsius (°C)</span>
                <span className="text-2xl font-bold text-gray-900">
                  {results.c.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Fahrenheit (°F)</span>
                <span className="text-2xl font-bold text-gray-900">
                  {results.f.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Kelvin (K)</span>
                <span className="text-2xl font-bold text-gray-900">
                  {results.k.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Temperature Conversion Formulas</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Celsius to Fahrenheit</h3>
              <code className="text-gray-700">°F = (°C × 9/5) + 32</code>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Fahrenheit to Celsius</h3>
              <code className="text-gray-700">°C = (°F - 32) × 5/9</code>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Celsius to Kelvin</h3>
              <code className="text-gray-700">K = °C + 273.15</code>
            </div>

            <div className="bg-white p-4 rounded border border-gray-200">
              <h3 className="font-semibold mb-2">Kelvin to Celsius</h3>
              <code className="text-gray-700">°C = K - 273.15</code>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Key Temperature Points</h3>
            <ul className="space-y-1 text-gray-700">
              <li>Water freezes: 0°C = 32°F = 273.15K</li>
              <li>Water boils: 100°C = 212°F = 373.15K</li>
              <li>Absolute zero: -273.15°C = -459.67°F = 0K</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
