import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Inter is a good substitute for Helvetica/Lausanne if we tighten it up
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classics Group",
  description: "Real Estate Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black antialiased`}>{children}</body>
    </html>
  );
}
