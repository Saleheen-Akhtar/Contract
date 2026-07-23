import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/SmoothScroller";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Classics Group | Ultra Luxury Residences",
  description: "Crafting architectural masterpieces and ultra-luxury residences in prime locations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-cream text-charcoal selection:bg-bronze selection:text-white`}>
        <CustomCursor />
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
