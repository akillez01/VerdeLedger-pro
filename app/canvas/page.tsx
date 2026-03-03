'use client';

import { motion } from 'motion/react';
import { Target, Users, Lightbulb, Zap, MessageSquare, DollarSign, PieChart, BarChart3, AlertTriangle } from 'lucide-react';

export default function DaoCanvas() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 text-center">
        <h1 className="font-serif text-4xl font-medium text-[#1a1a1a] mb-4">DAO Canvas</h1>
        <p className="text-[#1a1a1a]/70 max-w-2xl mx-auto">
          Visão estratégica da VerdeLedger Community: problema, solução, modelo de receita e riscos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. Problema */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white p-6 rounded-3xl border border-red-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-50 text-red-600 rounded-xl">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">1. Problema</h2>
          </div>
          <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
            Projetos verdes locais possuem baixa capacidade de captação e dificuldade para comprovar impacto com transparência.
          </p>
        </motion.div>

        {/* 2. Público-alvo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">2. Público-alvo</h2>
          </div>
          <ul className="space-y-2 text-[#1a1a1a]/70 text-sm">
            <li>• ONGs e coletivos ambientais</li>
            <li>• Comunidades locais</li>
            <li>• Pequenos negócios de economia circular</li>
            <li>• Apoiadores e investidores de impacto</li>
          </ul>
        </motion.div>

        {/* 3. Proposta de valor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="bg-[#5A5A40] text-white p-6 rounded-3xl shadow-md lg:row-span-2 flex flex-col justify-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-white/20 rounded-xl">
              <Lightbulb className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-serif text-2xl font-medium">3. Proposta de Valor</h2>
          </div>
          <p className="text-white/90 text-lg leading-relaxed font-medium">
            Financiamento participativo e transparente de iniciativas ambientais, com governança aberta e indicadores auditáveis.
          </p>
        </motion.div>

        {/* 4. Solução */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
              <Zap className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">4. Solução</h2>
          </div>
          <ul className="space-y-2 text-[#1a1a1a]/70 text-sm">
            <li>• Fluxo de propostas padronizadas</li>
            <li>• Votação comunitária em governança descentralizada</li>
            <li>• Tesouraria compartilhada com regras públicas</li>
            <li>• Monitoramento de execução e impacto com dashboard</li>
          </ul>
        </motion.div>

        {/* 5. Canais */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white p-6 rounded-3xl border border-purple-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">5. Canais</h2>
          </div>
          <ul className="space-y-2 text-[#1a1a1a]/70 text-sm">
            <li>• Discord (comunicação)</li>
            <li>• Fórum/Notion (documentação e propostas)</li>
            <li>• Snapshot (votação)</li>
            <li>• Dashboard público (prestação de contas)</li>
          </ul>
        </motion.div>

        {/* 6. Fontes de receita */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="bg-white p-6 rounded-3xl border border-amber-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
              <DollarSign className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">6. Fontes de Receita</h2>
          </div>
          <ul className="space-y-2 text-[#1a1a1a]/70 text-sm">
            <li>• Taxa de serviço sobre projetos financiados (ex: 2%-5%)</li>
            <li>• Parcerias com empresas ESG</li>
            <li>• Grants Web3</li>
            <li>• Contribuições recorrentes da comunidade</li>
          </ul>
        </motion.div>

        {/* 7. Estrutura de custos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-100 text-gray-600 rounded-xl">
              <PieChart className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">7. Estrutura de Custos</h2>
          </div>
          <ul className="space-y-2 text-[#1a1a1a]/70 text-sm">
            <li>• Infraestrutura tecnológica (plataformas e analytics)</li>
            <li>• Operação de comunidade e suporte</li>
            <li>• Auditoria/validação de impacto</li>
            <li>• Comunicação e aquisição de membros</li>
          </ul>
        </motion.div>

        {/* 8. Indicadores-chave */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="bg-white p-6 rounded-3xl border border-indigo-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
              <BarChart3 className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">8. Indicadores-chave</h2>
          </div>
          <ul className="space-y-2 text-[#1a1a1a]/70 text-sm">
            <li>• Volume de treasury captado</li>
            <li>• Taxa de execução dos projetos</li>
            <li>• Custo operacional por projeto</li>
            <li>• Crescimento e retenção de membros</li>
            <li>• Impacto ambiental agregado</li>
          </ul>
        </motion.div>

        {/* 9. Riscos e mitigação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="bg-white p-6 rounded-3xl border border-orange-100 shadow-sm lg:col-span-3"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-xl font-medium text-[#1a1a1a]">9. Riscos e Mitigação</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium text-[#1a1a1a] mb-2 text-sm">Baixa participação</h3>
              <p className="text-[#1a1a1a]/70 text-sm">Campanhas de onboarding + incentivos por contribuição.</p>
            </div>
            <div>
              <h3 className="font-medium text-[#1a1a1a] mb-2 text-sm">Governança capturada</h3>
              <p className="text-[#1a1a1a]/70 text-sm">Limites de voto e reputação combinada.</p>
            </div>
            <div>
              <h3 className="font-medium text-[#1a1a1a] mb-2 text-sm">Projetos sem impacto real</h3>
              <p className="text-[#1a1a1a]/70 text-sm">Due diligence e marco de entregas verificáveis.</p>
            </div>
            <div>
              <h3 className="font-medium text-[#1a1a1a] mb-2 text-sm">Risco regulatório</h3>
              <p className="text-[#1a1a1a]/70 text-sm">Assessoria jurídica e transparência documental.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
