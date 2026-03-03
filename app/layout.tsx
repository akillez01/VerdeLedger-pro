import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, FileText, Map } from 'lucide-react';
import Chatbot from '@/components/Chatbot';
import { Web3Provider } from '@/components/Web3Provider';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'VerdeLedger Community',
  description: 'DAO sustentável com foco em impacto ambiental rastreável e governança descentralizada.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-[#f5f5f0] text-[#1a1a1a] min-h-screen flex flex-col" suppressHydrationWarning>
        <Web3Provider>
          <nav className="sticky top-0 z-50 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-[#5A5A40]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center gap-2 text-[#5A5A40] hover:text-[#3d3d2b] transition-colors">
                    <div className="relative w-8 h-8">
                      {/* Fallback to a div if image is missing, but Next.js Image will try to load it */}
                      <Image src="/logo-icon.png" alt="VerdeLedger Logo" fill className="object-contain" />
                    </div>
                    <span className="font-serif text-xl font-semibold tracking-wide">VerdeLedger</span>
                  </Link>
                </div>
                <div className="flex items-center space-x-8">
                  <Link href="/dashboard" className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/70 hover:text-[#5A5A40] transition-colors">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link href="/proposals" className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/70 hover:text-[#5A5A40] transition-colors">
                    <FileText className="h-4 w-4" />
                    Propostas
                  </Link>
                  <Link href="/canvas" className="flex items-center gap-2 text-sm font-medium text-[#1a1a1a]/70 hover:text-[#5A5A40] transition-colors">
                    <Map className="h-4 w-4" />
                    DAO Canvas
                  </Link>
                  <ConnectButton showBalance={false} chainStatus="icon" />
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="bg-[#1a1a1a] text-[#f5f5f0] py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative w-8 h-8">
                    <Image src="/logo-icon.png" alt="VerdeLedger Logo" fill className="object-contain" />
                  </div>
                  <span className="font-serif text-xl font-semibold">VerdeLedger</span>
                </div>
                <p className="text-sm text-gray-400 max-w-xs">
                  Democratizando o acesso ao financiamento climático e garantindo rastreabilidade de impacto ambiental.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-4">Links Úteis</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://ethereum.org/pt/dao/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">O que é DAO?</a></li>
                  <li><a href="https://snapshot.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Snapshot</a></li>
                  <li><a href="https://safe.global/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Safe (Gnosis)</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-lg mb-4">Aviso</h3>
                <p className="text-sm text-gray-400">
                  Este projeto é uma entrega acadêmica/prática para o desafio da DIO e não constitui oferta de investimento.
                </p>
              </div>
            </div>
          </footer>
          <Chatbot />
        </Web3Provider>
      </body>
    </html>
  );
}
