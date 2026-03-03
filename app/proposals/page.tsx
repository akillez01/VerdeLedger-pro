'use client';

import { motion } from 'motion/react';
import { FileText, Plus, Search, Filter, ArrowRight, ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { GOVERNANCE_ABI, GOVERNANCE_ADDRESS } from '@/lib/contracts';
import { useState } from 'react';

const PROPOSALS = [
  {
    id: 'VLP-001',
    contractId: '11223344556677889900', // ID simulado do Smart Contract
    title: 'Reflorestamento Nascente Rio Claro',
    author: 'EcoAção Local',
    category: 'Impacto',
    status: 'Execução',
    budget: '5,000 VLG',
    votesFor: 85,
    votesAgainst: 15,
    date: '12 Out 2023',
    summary: 'Plantio de 2.000 mudas nativas para recuperação da mata ciliar da nascente principal do Rio Claro.'
  },
  {
    id: 'VLP-002',
    contractId: '22334455667788990011',
    title: 'Horta Comunitária Vila Esperança',
    author: 'Associação Moradores',
    category: 'Impacto',
    status: 'Aprovado',
    budget: '1,200 VLG',
    votesFor: 92,
    votesAgainst: 8,
    date: '05 Out 2023',
    summary: 'Criação de horta orgânica comunitária para 50 famílias, com sistema de compostagem e captação de água.'
  },
  {
    id: 'VLP-003',
    contractId: '33445566778899001122',
    title: 'Capacitação em Economia Circular',
    author: 'Instituto Circular',
    category: 'Educação',
    status: 'Votação',
    budget: '3,000 VLG',
    votesFor: 45,
    votesAgainst: 5,
    date: 'Hoje',
    summary: 'Curso de 40h sobre economia circular e gestão de resíduos para 100 pequenos empreendedores locais.'
  },
  {
    id: 'VLP-004',
    contractId: '44556677889900112233',
    title: 'Ajuste Quórum de Votação',
    author: 'GovTeam',
    category: 'Governança',
    status: 'Votação',
    budget: '0 VLG',
    votesFor: 10,
    votesAgainst: 2,
    date: 'Ontem',
    summary: 'Proposta para reduzir o quórum mínimo de 15% para 10% em propostas operacionais de baixo custo.'
  },
];

function VoteButtons({ proposalId }: { proposalId: string }) {
  const { isConnected } = useAccount();
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });
  const [voteType, setVoteType] = useState<number | null>(null);

  const handleVote = (support: number) => {
    if (!isConnected) {
      alert("Por favor, conecte sua carteira Web3 primeiro!");
      return;
    }
    setVoteType(support);
    writeContract({
      address: GOVERNANCE_ADDRESS as `0x${string}`,
      abi: GOVERNANCE_ABI,
      functionName: 'castVote',
      args: [BigInt(proposalId), support],
    });
  };

  if (isSuccess) {
    return (
      <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 text-center">
        Voto computado com sucesso!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <button 
          onClick={() => handleVote(1)} // 1 = Favor
          disabled={isPending || isConfirming}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-xl text-xs font-medium hover:bg-emerald-100 transition-colors disabled:opacity-50"
        >
          {isPending && voteType === 1 ? <Loader2 className="h-3 w-3 animate-spin" /> : <ThumbsUp className="h-3 w-3" />}
          A Favor
        </button>
        <button 
          onClick={() => handleVote(0)} // 0 = Contra
          disabled={isPending || isConfirming}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-medium hover:bg-red-100 transition-colors disabled:opacity-50"
        >
          {isPending && voteType === 0 ? <Loader2 className="h-3 w-3 animate-spin" /> : <ThumbsDown className="h-3 w-3" />}
          Contra
        </button>
      </div>
      {(isPending || isConfirming) && (
        <p className="text-[10px] text-gray-500 text-center animate-pulse">
          Aguardando confirmação na blockchain...
        </p>
      )}
    </div>
  );
}

export default function Proposals() {
  const { isConnected } = useAccount();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="font-serif text-4xl font-medium text-[#1a1a1a] mb-2">Propostas</h1>
          <p className="text-[#1a1a1a]/70">Participe da governança da VerdeLedger Community.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/proposals/create" className="bg-[#5A5A40] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#3d3d2b] transition-colors shadow-sm flex items-center gap-2">
            <Plus className="h-4 w-4" /> Criar Proposta
          </Link>
        </div>
      </div>

      {!isConnected && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-xl mb-8 text-sm flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Conecte sua carteira Web3 no menu superior para votar nas propostas ativas.
        </div>
      )}

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-[#5A5A40]/20 rounded-full bg-white text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5A5A40] focus:border-transparent sm:text-sm"
            placeholder="Buscar propostas..."
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-[#5A5A40]/20 rounded-full bg-white text-sm font-medium text-[#1a1a1a]/70 hover:bg-[#f5f5f0] transition-colors">
            <Filter className="h-4 w-4" /> Status
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-[#5A5A40]/20 rounded-full bg-white text-sm font-medium text-[#1a1a1a]/70 hover:bg-[#f5f5f0] transition-colors">
            Categoria
          </button>
        </div>
      </div>

      {/* Proposals List */}
      <div className="space-y-4">
        {PROPOSALS.map((proposal, i) => (
          <motion.div
            key={proposal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="bg-white p-6 rounded-3xl border border-[#5A5A40]/10 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-[#5A5A40] bg-[#f5f5f0] px-2 py-1 rounded-md">
                    {proposal.id}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    proposal.status === 'Execução' ? 'bg-blue-100 text-blue-700' :
                    proposal.status === 'Aprovado' ? 'bg-emerald-100 text-emerald-700' :
                    proposal.status === 'Votação' ? 'bg-amber-100 text-amber-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {proposal.status}
                  </span>
                  <span className="text-xs text-gray-500 font-medium px-2 py-0.5 border border-gray-200 rounded-full">
                    {proposal.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-medium text-[#1a1a1a] mb-2 group-hover:text-[#5A5A40] transition-colors cursor-pointer">
                  {proposal.title}
                </h3>
                <p className="text-[#1a1a1a]/70 text-sm mb-4 line-clamp-2">
                  {proposal.summary}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span>Por: <span className="font-medium text-[#1a1a1a]">{proposal.author}</span></span>
                  <span>•</span>
                  <span>{proposal.date}</span>
                </div>
              </div>
              
              <div className="flex flex-col justify-between min-w-[180px] bg-[#f5f5f0]/50 p-4 rounded-2xl border border-[#5A5A40]/5">
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Orçamento Solicitado</p>
                  <p className="font-mono font-medium text-[#1a1a1a]">{proposal.budget}</p>
                </div>
                
                <div className="w-full mb-3">
                  <div className="flex justify-between text-[10px] font-mono mb-1">
                    <span className="text-emerald-600">{proposal.votesFor}% Favor</span>
                    <span className="text-red-600">{proposal.votesAgainst}% Contra</span>
                  </div>
                  <div className="w-full bg-red-100 rounded-full h-1.5 flex overflow-hidden">
                    <div className="bg-emerald-500 h-1.5" style={{ width: `${proposal.votesFor}%` }}></div>
                  </div>
                </div>
                
                {proposal.status === 'Votação' ? (
                  <VoteButtons proposalId={proposal.contractId} />
                ) : (
                  <div className="text-center text-xs font-medium text-gray-500 py-2 bg-gray-100 rounded-xl">
                    Votação Encerrada
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
