import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Calculators</h3>
            <ul className="space-y-2">
              <li><Link href="/calculators/percentage" className="text-gray-600 hover:text-blue-600">Percentage Calculator</Link></li>
              <li><Link href="/calculators/scientific" className="text-gray-600 hover:text-blue-600">Scientific Calculator</Link></li>
              <li><Link href="/calculators/bmi" className="text-gray-600 hover:text-blue-600">BMI Calculator</Link></li>
              <li><Link href="/calculators/gpa" className="text-gray-600 hover:text-blue-600">GPA Calculator</Link></li>
              <li><Link href="/calculators/mortgage" className="text-gray-600 hover:text-blue-600">Mortgage Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Converters</h3>
            <ul className="space-y-2">
              <li><Link href="/converters/length" className="text-gray-600 hover:text-blue-600">Length Converter</Link></li>
              <li><Link href="/converters/weight" className="text-gray-600 hover:text-blue-600">Weight Converter</Link></li>
              <li><Link href="/converters/temperature" className="text-gray-600 hover:text-blue-600">Temperature Converter</Link></li>
              <li><Link href="/converters/energy" className="text-gray-600 hover:text-blue-600">Energy Converter</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tools/rgb-color" className="text-gray-600 hover:text-blue-600">RGB Color Picker</Link></li>
              <li><Link href="/tools/ascii-table" className="text-gray-600 hover:text-blue-600">ASCII Table</Link></li>
              <li><Link href="/tools/color-codes" className="text-gray-600 hover:text-blue-600">Color Codes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Use</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; 2025 QuickCalc Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
