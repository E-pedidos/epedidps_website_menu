import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-pedidos",
  description:
    "E-pedidos é um aplicativo que oferece uma solução completa para administração, cardápio e agilidade em pedidos de alimentos e bebidas.ss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
