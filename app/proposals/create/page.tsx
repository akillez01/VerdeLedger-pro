'use client';

import { motion } from 'motion/react';
import { ArrowLeft, Save, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '@/lib/contracts';
import { useState } from 'react';

export default function CreateProposal() {
  const { isConnected } = useAccount();
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      alert("Conecte sua carteira Web3 para submeter uma proposta on-chain.");
      return;
    }

    if (!title || !description) {
      alert("Preencha o título e a descrição.");
      return;
    }

    // Em um cenário real, os targets, values e calldatas seriam as ações 
    // que o contrato executaria se a proposta passasse (ex: transferir fundos).
    // Aqui estamos enviando arrays vazios apenas para registrar o texto da proposta.
    const fullDescription = `# ${title}\n\n${description}`;

    writeContract({
      address: GOVERNANCE_ADDRESS as `0x${string}`,
      abi: GOVERNANCE_ABI,
      functionName: 'propose',
      args: [[], [], [], fullDescription],
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/proposals" className="inline-flex items-center gap-2 text-sm font-medium text-[#5A5A40] hover:text-[#3d3d2b] transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Voltar para Propostas
        </Link>
        <h1 className="font-serif text-4xl font-medium text-[#1a1a1a] mb-2">Nova Proposta</h1>
        <p className="text-[#1a1a1a]/70">Preencha o formulário abaixo para submeter uma proposta à VerdeLedger Community.</p>
      </div>

      {!isConnected && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl mb-8 text-sm flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Você precisa conectar sua carteira Web3 no menu superior para criar uma proposta on-chain.
        </div>
      )}

      {isSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-4 rounded-xl mb-8 flex flex-col gap-2">
          <h3 className="font-medium text-lg">Proposta Submetida com Sucesso! 🎉</h3>
          <p className="text-sm">Sua proposta foi registrada na blockchain. A votação começará em breve de acordo com o Voting Delay configurado no contrato.</p>
          <Link href="/proposals" className="text-emerald-700 underline text-sm mt-2 font-medium">Ver todas as propostas</Link>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 md:p-12 rounded-3xl border border-[#5A5A40]/10 shadow-sm"
      >
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* 1. Identificação */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-medium text-[#5A5A40] border-b border-[#5A5A40]/10 pb-2">1. Identificação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Título da Proposta</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent outline-none transition-all" 
                  placeholder="Ex: Reflorestamento Nascente Rio Claro" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Autor(a)</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent outline-none transition-all" placeholder="Seu nome ou organização" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Categoria</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent outline-none transition-all bg-white">
                  <option value="">Selecione...</option>
                  <option value="operacional">Operacional</option>
                  <option value="financeira">Financeira</option>
                  <option value="impacto">Impacto Ambiental</option>
                  <option value="governanca">Governança</option>
                </select>
              </div>
            </div>
          </section>

          {/* 2. Resumo */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-medium text-[#5A5A40] border-b border-[#5A5A40]/10 pb-2">2. Resumo Executivo</h2>
            <div>
              <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Descrição Curta (até 10 linhas)</label>
              <textarea 
                rows={4} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent outline-none transition-all resize-none" 
                placeholder="Descreva o que será feito e por que é importante para a DAO..."
                required
              ></textarea>
            </div>
          </section>

          {/* 7. Orçamento */}
          <section className="space-y-6">
            <h2 className="font-serif text-2xl font-medium text-[#5A5A40] border-b border-[#5A5A40]/10 pb-2">3. Orçamento Solicitado</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Valor Total (VLG)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-500 font-mono">VLG</span>
                  </div>
                  <input type="number" className="w-full pl-14 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent outline-none transition-all font-mono" placeholder="0.00" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Forma de Desembolso</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent outline-none transition-all bg-white">
                  <option value="unico">Pagamento Único</option>
                  <option value="parcelado">Parcelado (Mensal)</option>
                  <option value="marco">Por Marco de Entrega</option>
                </select>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="pt-8 border-t border-[#5A5A40]/10 flex flex-col sm:flex-row justify-end gap-4">
            <button type="button" className="px-6 py-3 rounded-full font-medium text-[#1a1a1a] border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Save className="h-4 w-4" /> Salvar Rascunho
            </button>
            <button 
              type="submit" 
              disabled={isPending || isConfirming || !isConnected}
              className="px-6 py-3 rounded-full font-medium text-white bg-[#5A5A40] hover:bg-[#3d3d2b] transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending || isConfirming ? (
                <><Loader2 className="h-4 w-4 animate-spin" /> Assinando Transação...</>
              ) : (
                <><Send className="h-4 w-4" /> Submeter Proposta On-chain</>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
