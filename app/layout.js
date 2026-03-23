import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Black Bullet Garage Performance | Dubai",
  description:
    "The pinnacle of performance tuning and aesthetic restoration in Dubai. ECU remapping, carbon fiber kits, exhaust systems, and bespoke automotive engineering.",
  keywords: [
    "car performance tuning Dubai",
    "ECU remapping",
    "carbon fiber kits",
    "exhaust systems",
    "Black Bullet Garage",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} font-body bg-background text-on-surface min-h-screen antialiased`}
      >
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
