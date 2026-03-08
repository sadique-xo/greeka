import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Greeka Kitchen & Bar | Greek Dining in Ranchi",
  description:
    "A Greek Setting Above the City. Mediterranean cuisine, rooftop views, live music. Perched on Minu Heights, Ranchi.",
  openGraph: {
    title: "Greeka Kitchen & Bar | Ranchi",
    description: "A Greek Setting Above the City. Mediterranean dining with stunning rooftop views.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
