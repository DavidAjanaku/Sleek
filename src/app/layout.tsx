import { Metadata } from "next";
import "./globals.css";
import { Staatliches } from "next/font/google";

export const metadata: Metadata = {
  title: "Sleek",
  description: "Sleek - Ecommerce",
};

// Staatliches as default font
const staatliches = Staatliches({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={staatliches.className}>{children}</body>
    </html>
  );
}
