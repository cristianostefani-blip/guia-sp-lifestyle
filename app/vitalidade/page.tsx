'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'; // Melhor usar Image do Next
import Header from '../components/Header'; // Reutilizando seu Header novo
import Footer from '../components/Footer'; // Reutilizando seu Footer novo
import { 
  Dumbbell, 
  Utensils, 
  Activity, 
  X, 
  Send, 
  ChevronRight, 
  Flame,
  Bot,
  Loader2,
  MessageCircle
} from 'lucide-react';

export default function VitalidadePage() {
  // Estado do Chat
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Olá, guerreiro. Sou o Especialista IA do Kama Vitality. Analiso sua idade e objetivos para sugerir o treino e a dieta ideais. O que você busca hoje?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Estado para os Cards Interativos
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Auto-scroll do chat
  useEffect(() => {
    if (isChatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isChatOpen, isLoading]);

  const handleCardClick = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    // @ts-ignore
    setMessages(prev => [...prev, { type: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // ATENÇÃO: Você precisa criar a rota /api/chat neste projeto para isso funcionar!
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      if (!response.ok) throw new Error('Falha na comunicação');

      const data = await response.json();

      // @ts-ignore
      setMessages(prev => [...prev, { type: 'bot', text: data.reply }]);

    } catch (error) {
      console.error(error);
      // @ts-ignore
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'O sistema de IA está offline no momento (Falta configurar a API neste projeto). Tente mais tarde.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      id: 0,
      icon: Utensils,
      title: "Nutrição Anabólica",
      text: "O 'Limiar de Leucina': Como comer para manter músculos duros após os 50. Descubra a dieta ideal para sua testosterona."
    },
    {
      id: 1,
      icon: Dumbbell,
      title: "Treino de Potência",
      text: "Fibras Tipo II: O segredo para recuperar a explosão muscular e virilidade sem destruir suas articulações."
    },
    {
      id: 2,
      icon: Activity,
      title: "Segurança Total",
      text: "Checklist da SBMEE. Monitore seu coração antes de subir as cargas. Treine pesado, mas treine vivo."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-gray-100 font-sans">
      {/* HEADER INTEGRADO (Opcional - Removemos a margem branca para não quebrar o design dark) */}
      <div className="bg-white"><Header /></div>
      
      {/* 1. HERO SECTION OTIMIZADA */}
      <div className="relative h-[600px] w-full overflow-hidden">
        
        {/* IMAGEM DE FUNDO - Lembre de colocar as imagens na pasta public */}
        <div className="absolute inset-0">
            <picture>
                <source media="(min-width: 768px)" srcSet="/hero-desktop.jpg" />
                <img 
                    src="/hero-mobile.jpg" 
                    alt="Homem treinando com intensidade" 
                    className="w-full h-full object-cover object-center"
                />
            </picture>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-4xl">
             <div className="flex items-center gap-3 mb-4">
            <span className="bg-yellow-600 text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
              Novo no Guia
            </span>
            <div className="flex text-yellow-500">
              <Flame size={18} fill="#CA8A04" />
              <span className="text-sm font-medium ml-1">Projeto Vitalidade 50+</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            NÃO É SÓ SOBRE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              ESTÉTICA.
            </span> É POTÊNCIA.
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
            Um guia científico para homens que se recusam a parar. 
            Nutrição anabólica, controle hormonal e treinos inteligentes.
          </p>

          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Acessar o Guia <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 2. FEATURES */}
      <div id="features" className="max-w-6xl mx-auto px-6 py-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((card, index) => {
            const isActive = activeCard === index;
            const Icon = card.icon;

            return (
              <div 
                key={index}
                onClick={() => handleCardClick(index)}
                className={`
                  relative p-8 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out border
                  ${isActive 
                    ? 'bg-yellow-500 border-yellow-400 scale-105 shadow-[0_0_30px_rgba(234,179,8,0.3)]' 
                    : 'bg-neutral-800 border-neutral-700 hover:border-yellow-600'
                  }
                `}
              >
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                  ${isActive ? 'bg-neutral-900' : 'bg-neutral-900'}
                `}>
                  <Icon 
                    className={`transition-colors duration-300 ${isActive ? 'text-yellow-500' : 'text-yellow-500'}`} 
                    size={28} 
                  />
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isActive ? 'text-neutral-900' : 'text-white'}`}>
                  {card.title}
                </h3>
                
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="text-neutral-900 font-medium leading-relaxed mb-4">
                     {card.text}
                   </p>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       setIsChatOpen(true);
                     }}
                     className="flex items-center gap-2 text-sm font-bold text-neutral-900 hover:underline"
                   >
                     <MessageCircle size={16} />
                     Fale com nosso especialista IA gratuitamente
                   </button>
                </div>

                {!isActive && (
                  <div className="absolute bottom-8 right-8 animate-bounce opacity-50">
                    <ChevronRight className="text-gray-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3. BANNER IA */}
        <div 
          onClick={() => setIsChatOpen(true)}
          className="relative bg-gradient-to-r from-yellow-500 to-yellow-600 border-2 border-yellow-400 rounded-3xl p-8 md:p-12 cursor-pointer hover:shadow-[0_0_60px_rgba(234,179,8,0.4)] transition-all group overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-white/30 transition duration-500"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-neutral-900 rounded-2xl flex items-center justify-center border-[3px] border-neutral-800 shadow-xl group-hover:scale-105 transition duration-300">
                        <Bot size={40} className="text-yellow-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-2">
                            Especialista IA Vitality
                        </h3>
                        <p className="text-neutral-900/80 font-bold text-lg max-w-md">
                           Converse gratuitamente com nossa IA, otimize seu treino e eleve sua qualidade de vida agora!
                        </p>
                    </div>
                </div>
                
                <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transform transition group-hover:translate-x-1 flex items-center gap-2 border border-neutral-700">
                    Iniciar Consultoria <ChevronRight size={20} />
                </button>
            </div>
        </div>
      </div>

      {/* 4. CHAT MODAL */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-[90vw] md:w-[600px] h-[80vh] md:h-[750px] max-h-[90vh] bg-neutral-900 border border-yellow-600/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all">
            
            <div className="bg-neutral-950 p-4 border-b border-neutral-800 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-600/20 p-2 rounded-lg">
                    <Bot size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Consultoria Vitality</h4>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online agora
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)} 
                className="p-2 text-gray-400 hover:text-white hover:bg-neutral-800 rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-neutral-900 scrollbar-thin scrollbar-thumb-yellow-600/20 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center mr-2 border border-yellow-600/30 shrink-0">
                        <Bot size={14} className="text-yellow-500" />
                    </div>
                  )}
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[1.05rem] leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-yellow-600 text-black font-medium rounded-br-none shadow-lg' 
                      : 'bg-neutral-800 text-gray-100 rounded-bl-none border border-neutral-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start animate-pulse">
                   <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center mr-2 border border-yellow-600/30 shrink-0">
                        <Bot size={14} className="text-yellow-500" />
                    </div>
                    <div className="bg-neutral-800 text-gray-400 p-4 rounded-2xl rounded-bl-none border border-neutral-700 text-sm flex items-center gap-2">
                        <Loader2 className="animate-spin" size={16} /> Analisando fisiologia...
                    </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-neutral-950 border-t border-neutral-800 shrink-0">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  disabled={isLoading}
                  placeholder={isLoading ? "Aguarde..." : "Digite sua dúvida aqui..."}
                  className="flex-1 bg-neutral-900 text-white text-base rounded-xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-yellow-600 border border-neutral-800 placeholder-gray-600 disabled:opacity-50"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="bg-yellow-600 text-black px-6 rounded-xl hover:bg-yellow-500 transition shadow-lg font-bold flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER NO FINAL */}
      <div className="bg-gray-100"><Footer /></div>
    </div>
  );
};