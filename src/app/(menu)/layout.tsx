import type { Metadata } from "next";
import { Footer } from "./menu/components/Footer";
import { HeaderMenu } from "./menu/components/HaederMenu";

export const metadata: Metadata = {
  title: "E-pedidos Cardapio",
  description:
    "E-pedidos é um aplicativo que oferece uma solução completa para administração, cardápio e agilidade em pedidos de alimentos e bebidas.ss",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderMenu />
      {children}
      <Footer />
    </>
  );
}
