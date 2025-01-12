import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Нова Надія - Церква",
  description:
    "Ми віримо в силу віри, яка об'єднує людей та надихає на добрісправи. Наша церква - це місце, де кожен може знайти духовну підтримку, зростати у вірі та служити ближньому.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
