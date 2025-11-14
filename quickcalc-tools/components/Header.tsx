"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">QuickCalc Tools</h1>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
              Share
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
