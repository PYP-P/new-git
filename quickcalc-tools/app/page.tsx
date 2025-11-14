import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = [
  {
    title: "Math Calculators",
    icon: "📐",
    tools: [
      { name: "Percentage Calculator", href: "/calculators/percentage" },
      { name: "Scientific Calculator", href: "/calculators/scientific" },
      { name: "Fraction Calculator", href: "/calculators/fraction" },
      { name: "Average Calculator", href: "/calculators/average" },
    ],
  },
  {
    title: "Financial Calculators",
    icon: "💰",
    tools: [
      { name: "Mortgage Calculator", href: "/calculators/mortgage" },
      { name: "Compound Interest", href: "/calculators/compound-interest" },
      { name: "Loan Calculator", href: "/calculators/loan" },
    ],
  },
  {
    title: "Grade Calculators",
    icon: "🎓",
    tools: [
      { name: "GPA Calculator", href: "/calculators/gpa" },
      { name: "Final Grade Calculator", href: "/calculators/final-grade" },
      { name: "Grade Calculator", href: "/calculators/grade" },
    ],
  },
  {
    title: "Health Calculators",
    icon: "❤️",
    tools: [
      { name: "BMI Calculator", href: "/calculators/bmi" },
      { name: "Calorie Calculator", href: "/calculators/calorie" },
    ],
  },
  {
    title: "Length Conversion",
    icon: "📏",
    tools: [
      { name: "Length Converter", href: "/converters/length" },
      { name: "cm to inches", href: "/converters/length?from=cm&to=in" },
      { name: "feet to meters", href: "/converters/length?from=ft&to=m" },
    ],
  },
  {
    title: "Weight Conversion",
    icon: "⚖️",
    tools: [
      { name: "Weight Converter", href: "/converters/weight" },
      { name: "kg to lbs", href: "/converters/weight?from=kg&to=lb" },
      { name: "lbs to kg", href: "/converters/weight?from=lb&to=kg" },
    ],
  },
  {
    title: "Temperature Conversion",
    icon: "🌡️",
    tools: [
      { name: "Temperature Converter", href: "/converters/temperature" },
      { name: "Celsius to Fahrenheit", href: "/converters/temperature?from=c&to=f" },
      { name: "Fahrenheit to Celsius", href: "/converters/temperature?from=f&to=c" },
    ],
  },
  {
    title: "Energy Conversion",
    icon: "⚡",
    tools: [
      { name: "Energy Converter", href: "/converters/energy" },
      { name: "Joules to Calories", href: "/converters/energy?from=j&to=cal" },
    ],
  },
  {
    title: "Color Tools",
    icon: "🎨",
    tools: [
      { name: "RGB Color Picker", href: "/tools/rgb-color" },
      { name: "Color Codes", href: "/tools/color-codes" },
      { name: "Hex to RGB", href: "/tools/hex-to-rgb" },
    ],
  },
  {
    title: "Web Tools",
    icon: "🌐",
    tools: [
      { name: "ASCII Table", href: "/tools/ascii-table" },
      { name: "HTML Color Codes", href: "/tools/html-colors" },
      { name: "Web Colors", href: "/tools/web-colors" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free Online Calculators & Converters
          </h2>
          <p className="text-xl text-gray-600">
            Quick and easy calculations for math, finance, health, and more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.tools.map((tool) => (
                  <li key={tool.name}>
                    <Link
                      href={tool.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose QuickCalc Tools?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast & Easy</h4>
              <p className="text-gray-600">
                Get instant results with our user-friendly calculators and converters
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">100% Free</h4>
              <p className="text-gray-600">
                All tools are completely free to use with no registration required
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Accurate</h4>
              <p className="text-gray-600">
                Reliable calculations with detailed formulas and explanations
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
