"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);

  const handleNumber = (num: string) => {
    if (display === "0" || display === "Error") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    if (display !== "Error") {
      setDisplay(display + op);
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const handleEquals = () => {
    try {
      const result = eval(display.replace(/×/g, "*").replace(/÷/g, "/"));
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const handleFunction = (func: string) => {
    try {
      const value = parseFloat(display);
      let result: number;

      switch (func) {
        case "sin":
          result = Math.sin(value * Math.PI / 180);
          break;
        case "cos":
          result = Math.cos(value * Math.PI / 180);
          break;
        case "tan":
          result = Math.tan(value * Math.PI / 180);
          break;
        case "sqrt":
          result = Math.sqrt(value);
          break;
        case "square":
          result = value * value;
          break;
        case "log":
          result = Math.log10(value);
          break;
        case "ln":
          result = Math.log(value);
          break;
        case "1/x":
          result = 1 / value;
          break;
        default:
          return;
      }

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const handleConstant = (constant: string) => {
    switch (constant) {
      case "pi":
        setDisplay(String(Math.PI));
        break;
      case "e":
        setDisplay(String(Math.E));
        break;
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
          <span>Scientific Calculator</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          SCIENTIFIC CALCULATOR
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 text-right">
              <div className="text-3xl font-mono break-all">{display}</div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2">
            <button onClick={() => handleFunction("sin")} className="calc-btn-func">sin</button>
            <button onClick={() => handleFunction("cos")} className="calc-btn-func">cos</button>
            <button onClick={() => handleFunction("tan")} className="calc-btn-func">tan</button>
            <button onClick={() => handleFunction("sqrt")} className="calc-btn-func">√</button>
            <button onClick={() => handleFunction("square")} className="calc-btn-func">x²</button>

            <button onClick={() => handleFunction("log")} className="calc-btn-func">log</button>
            <button onClick={() => handleFunction("ln")} className="calc-btn-func">ln</button>
            <button onClick={() => handleConstant("pi")} className="calc-btn-func">π</button>
            <button onClick={() => handleConstant("e")} className="calc-btn-func">e</button>
            <button onClick={() => handleFunction("1/x")} className="calc-btn-func">1/x</button>

            <button onClick={handleClear} className="calc-btn-operator">C</button>
            <button onClick={handleBackspace} className="calc-btn-operator">←</button>
            <button onClick={() => handleOperator("(")} className="calc-btn-operator">(</button>
            <button onClick={() => handleOperator(")")} className="calc-btn-operator">)</button>
            <button onClick={() => handleOperator("÷")} className="calc-btn-operator">÷</button>

            <button onClick={() => handleNumber("7")} className="calc-btn">7</button>
            <button onClick={() => handleNumber("8")} className="calc-btn">8</button>
            <button onClick={() => handleNumber("9")} className="calc-btn">9</button>
            <button onClick={() => handleOperator("×")} className="calc-btn-operator">×</button>
            <button onClick={() => handleOperator("^")} className="calc-btn-operator">^</button>

            <button onClick={() => handleNumber("4")} className="calc-btn">4</button>
            <button onClick={() => handleNumber("5")} className="calc-btn">5</button>
            <button onClick={() => handleNumber("6")} className="calc-btn">6</button>
            <button onClick={() => handleOperator("-")} className="calc-btn-operator">-</button>
            <button onClick={() => handleOperator("%")} className="calc-btn-operator">%</button>

            <button onClick={() => handleNumber("1")} className="calc-btn">1</button>
            <button onClick={() => handleNumber("2")} className="calc-btn">2</button>
            <button onClick={() => handleNumber("3")} className="calc-btn">3</button>
            <button onClick={() => handleOperator("+")} className="calc-btn-operator">+</button>
            <button onClick={handleEquals} className="calc-btn-equals row-span-2">=</button>

            <button onClick={() => handleNumber("0")} className="calc-btn col-span-2">0</button>
            <button onClick={() => handleNumber(".")} className="calc-btn">.</button>
            <button onClick={() => handleOperator("*")} className="calc-btn-operator">×10^</button>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculator Functions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Trigonometric Functions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>sin, cos, tan - Trigonometric functions (degrees)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Mathematical Functions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>√ - Square root</li>
                <li>x² - Square</li>
                <li>^ - Power</li>
                <li>1/x - Reciprocal</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Logarithmic Functions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>log - Base 10 logarithm</li>
                <li>ln - Natural logarithm</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Constants</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>π (pi) - 3.14159...</li>
                <li>e - 2.71828...</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .calc-btn {
          @apply px-4 py-3 bg-gray-200 hover:bg-gray-300 rounded font-semibold text-lg transition-colors;
        }
        .calc-btn-operator {
          @apply px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded font-semibold text-lg transition-colors;
        }
        .calc-btn-func {
          @apply px-4 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded font-semibold text-sm transition-colors;
        }
        .calc-btn-equals {
          @apply px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded font-semibold text-lg transition-colors;
        }
      `}</style>
    </div>
  );
}
