import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickCalc Tools - Free Online Calculators & Converters",
  description: "Free online calculators, converters, and tools for math, finance, health, and more. Quick and easy calculations for everyday use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
