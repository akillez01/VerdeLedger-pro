'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Leaf, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual da VerdeLedger. Como posso ajudar você a entender mais sobre nossa DAO sustentável e nossos projetos de impacto?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    // Inicializa a sessão de chat da API do Gemini
    try {
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        chatRef.current = ai.chats.create({
          model: 'gemini-3-flash-preview',
          config: {
            systemInstruction: 'Você é o assistente virtual da VerdeLedger Community, uma DAO (Organização Autônoma Descentralizada) sustentável focada em financiar e rastrear projetos de impacto ambiental (como reflorestamento, reciclagem, economia circular). Seja amigável, conciso, inspirador e encoraje a participação na comunidade. Responda sempre em português do Brasil.',
          }
        });
      } else {
        console.warn("NEXT_PUBLIC_GEMINI_API_KEY não encontrada.");
      }
    } catch (error) {
      console.error("Falha ao inicializar o Gemini:", error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      if (!chatRef.current) {
        throw new Error("Chat não inicializado. Verifique a chave da API.");
      }
      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Desculpe, não consegui processar sua solicitação.' }]);
    } catch (error) {
      console.error('Erro ao chamar o Gemini:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro de conexão ou a chave da API não está configurada corretamente no ambiente. Tente novamente mais tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-[#5A5A40] text-white rounded-full shadow-lg hover:bg-[#3d3d2b] transition-all z-50 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Janela do Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-[#5A5A40]/10 flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#5A5A40] text-white p-4 flex justify-between items-center shadow-sm z-10">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                <span className="font-serif font-medium text-lg tracking-wide">Assistente IA</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-md transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f5f5f0]/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-[#5A5A40] text-white rounded-tr-sm' 
                      : 'bg-white border border-[#5A5A40]/10 text-[#1a1a1a] rounded-tl-sm shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#5A5A40]/10 p-3 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-[#5A5A40]" />
                    <span className="text-xs text-gray-500">Digitando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[#5A5A40]/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pergunte sobre a DAO..."
                  className="flex-1 px-4 py-2.5 bg-[#f5f5f0] border border-transparent focus:border-[#5A5A40]/30 focus:bg-white rounded-full text-sm outline-none transition-all"
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || isLoading}
                  className="p-2.5 bg-[#5A5A40] text-white rounded-full hover:bg-[#3d3d2b] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
