import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { HeaderMenu } from './components/Haeder'
import { Footer } from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-pedidos Cardapio',
  description: 'E-pedidos é um aplicativo que oferece uma solução completa para administração, cardápio e agilidade em pedidos de alimentos e bebidas.ss',
}


export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <HeaderMenu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
