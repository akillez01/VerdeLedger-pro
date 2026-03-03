'use client';

import { motion } from 'motion/react';
import { Users, FileText, Clock, Coins, TreePine, Recycle, Wind, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-serif text-4xl font-medium text-[#1a1a1a] mb-2">Dashboard de Impacto</h1>
          <p className="text-[#1a1a1a]/70">Acompanhe as métricas e a tesouraria da VerdeLedger Community.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/proposals/create" className="bg-[#5A5A40] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#3d3d2b] transition-colors shadow-sm flex items-center gap-2">
            Nova Proposta <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Main KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Membros Ativos', value: '1,248', icon: Users, trend: '+12% este mês' },
          { label: 'Propostas Aprovadas', value: '34', icon: FileText, trend: '85% de aprovação' },
          { label: 'Tempo Médio Execução', value: '14 dias', icon: Clock, trend: '-2 dias vs. último mês' },
          { label: 'Treasury Alocado', value: '68%', icon: Coins, trend: 'Em projetos concluídos' },
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white p-6 rounded-3xl border border-[#5A5A40]/10 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#f5f5f0] rounded-xl">
                <kpi.icon className="h-5 w-5 text-[#5A5A40]" />
              </div>
            </div>
            <h3 className="text-[#1a1a1a]/60 text-sm font-medium mb-1">{kpi.label}</h3>
            <p className="text-3xl font-serif font-medium text-[#1a1a1a] mb-2">{kpi.value}</p>
            <p className="text-xs text-emerald-600 font-medium">{kpi.trend}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Environmental Impact */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1a1a1a]">Impacto Ambiental Agregado</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { label: 'Árvores Plantadas', value: '12,500', icon: TreePine, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'CO₂ Evitado (Ton)', value: '450', icon: Wind, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Resíduos Reciclados (Kg)', value: '8,200', icon: Recycle, color: 'text-amber-600', bg: 'bg-amber-50' },
            ].map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                className={`${impact.bg} p-6 rounded-3xl border border-white/50 shadow-sm`}
              >
                <impact.icon className={`h-8 w-8 ${impact.color} mb-4`} />
                <p className="text-3xl font-mono font-medium text-[#1a1a1a] mb-1">{impact.value}</p>
                <h3 className="text-[#1a1a1a]/70 text-sm font-medium">{impact.label}</h3>
              </motion.div>
            ))}
          </div>

          {/* Recent Proposals */}
          <div className="bg-white rounded-3xl border border-[#5A5A40]/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#5A5A40]/10 flex justify-between items-center">
              <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">Projetos Recentes</h2>
              <Link href="/proposals" className="text-sm font-medium text-[#5A5A40] hover:underline">Ver todas</Link>
            </div>
            <div className="divide-y divide-[#5A5A40]/10">
              {[
                { title: 'Reflorestamento Nascente Rio Claro', status: 'Execução', budget: '5,000 VLG', date: '12 Out 2023' },
                { title: 'Horta Comunitária Vila Esperança', status: 'Aprovado', budget: '1,200 VLG', date: '05 Out 2023' },
                { title: 'Capacitação em Economia Circular', status: 'Votação', budget: '3,000 VLG', date: 'Hoje' },
              ].map((prop, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-[#f5f5f0]/50 transition-colors">
                  <div>
                    <h3 className="font-medium text-[#1a1a1a] mb-1">{prop.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60">{prop.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-medium text-[#5A5A40]">{prop.budget}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      prop.status === 'Execução' ? 'bg-blue-100 text-blue-700' :
                      prop.status === 'Aprovado' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {prop.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Treasury */}
        <div className="space-y-8">
          <h2 className="font-serif text-2xl font-medium text-[#1a1a1a]">Tesouraria (Safe)</h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1a1a1a] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#5A5A40] rounded-full blur-3xl opacity-30"></div>
            
            <p className="text-gray-400 text-sm font-medium mb-2">Saldo Total (VLG)</p>
            <p className="text-4xl font-mono font-medium mb-8">245,000.00</p>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Reserva Estratégica</span>
                  <span className="font-mono">150k</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-[#5A5A40] h-1.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Fundo de Impacto</span>
                  <span className="font-mono">75k</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Alocado (Mês)</span>
                  <span className="font-mono">20k</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-1.5">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 font-mono break-all">
                Safe Address:<br/>
                0x71C...976F
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
