'use client';

import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, Users, TreePine, Coins, Vote, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 text-[#5A5A40] text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5A5A40] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5A5A40]"></span>
          </span>
          Projeto Desafio DIO
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
            <Image 
              src="/logo-icon.png" 
              alt="VerdeLedger Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-[#1a1a1a] max-w-4xl">
            Financiamento climático com <span className="italic text-[#5A5A40]">transparência radical</span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#1a1a1a]/70 max-w-2xl mb-10"
        >
          Uma DAO sustentável que conecta comunidades, ONGs e apoiadores para financiar, executar e auditar iniciativas verdes.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/dashboard" className="bg-[#5A5A40] text-white px-8 py-4 rounded-full font-medium hover:bg-[#3d3d2b] transition-colors flex items-center justify-center gap-2">
            Ver Dashboard <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/proposals" className="bg-white border border-[#5A5A40]/20 text-[#1a1a1a] px-8 py-4 rounded-full font-medium hover:bg-[#f5f5f0] transition-colors flex items-center justify-center">
            Explorar Propostas
          </Link>
        </motion.div>
      </section>

      {/* Problem & Solution */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl mb-6">O Problema</h2>
              <ul className="space-y-4">
                {[
                  'Dificuldade de captação com confiança',
                  'Pouca comprovação de impacto para apoiadores',
                  'Governança centralizada e pouco transparente',
                  'Baixa sustentabilidade financeira no longo prazo'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#1a1a1a]/80">
                    <div className="mt-1 bg-red-100 text-red-600 rounded-full p-1">
                      <div className="h-2 w-2 rounded-full bg-current" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#f5f5f0] p-8 rounded-3xl border border-[#5A5A40]/10"
            >
              <h2 className="font-serif text-4xl mb-6 text-[#5A5A40]">Nossa Solução</h2>
              <p className="text-lg mb-6 text-[#1a1a1a]/80">
                A VerdeLedger Community responde com um modelo integrado:
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Vote className="h-6 w-6 text-[#5A5A40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Propostas On-chain</h4>
                    <p className="text-sm text-[#1a1a1a]/60">Governança participativa e imutável</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Coins className="h-6 w-6 text-[#5A5A40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Treasury Comunitária</h4>
                    <p className="text-sm text-[#1a1a1a]/60">Gestão transparente de recursos (Multisig)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    <Globe className="h-6 w-6 text-[#5A5A40]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">KPI Ambiental Público</h4>
                    <p className="text-sm text-[#1a1a1a]/60">Indicadores de impacto rastreáveis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Nossos Valores</h2>
          <p className="text-[#1a1a1a]/70 max-w-2xl mx-auto">
            Princípios que guiam a VerdeLedger Community na construção de um futuro sustentável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: 'Transparência Radical', desc: 'Open data e registros on-chain para total auditoria.' },
            { icon: Users, title: 'Colaboração Comunitária', desc: 'Decisões tomadas em conjunto por quem gera impacto.' },
            { icon: TreePine, title: 'Responsabilidade', desc: 'Foco em métricas reais e sustentabilidade ambiental.' }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-[#5A5A40]/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-[#f5f5f0] w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <val.icon className="h-7 w-7 text-[#5A5A40]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{val.title}</h3>
              <p className="text-[#1a1a1a]/70">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tokenomics & Governance */}
      <section className="w-full bg-[#1a1a1a] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl mb-8">Tokenomia <span className="text-sm font-sans text-gray-400 align-top">(Conceitual)</span></h2>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#5A5A40] text-white px-3 py-1 rounded-md font-mono text-sm font-bold">VLG</div>
                  <span className="text-xl">VerdeLedger Governance</span>
                </div>
                <p className="text-gray-400">Token de governança e utilidade da DAO.</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Comunidade & Recompensas', pct: 40, color: 'bg-[#5A5A40]' },
                  { label: 'Treasury da DAO', pct: 20, color: 'bg-[#7a7a5c]' },
                  { label: 'Equipe Fundadora', pct: 15, color: 'bg-[#9a9a78]' },
                  { label: 'Fundo de Impacto (Pilotos)', pct: 15, color: 'bg-[#baba94]' },
                  { label: 'Parcerias & Advisors', pct: 10, color: 'bg-[#dadab0]' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.label}</span>
                      <span className="font-mono">{item.pct}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-4xl mb-8">Fluxo de Governança</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                {[
                  'Membro cria proposta (stake + reputação)',
                  'Discussão pública (Fórum/Discord)',
                  'Votação on-chain (Quórum 15%)',
                  'Execução via Multisig',
                  'Prestação de contas (KPIs)'
                ].map((step, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[#1a1a1a] text-gray-400 group-[.is-active]:text-[#5A5A40] group-[.is-active]:border-[#5A5A40] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {i + 1}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-800 bg-gray-900/50">
                      <p className="text-sm font-medium">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
