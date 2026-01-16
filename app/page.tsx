
import { ArrowRight, ShieldCheck, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// METADATA - É aqui que o Google e o Facebook leem o título do site
export const metadata = {
  title: 'O Novo Luxo em SP: Guia de Descompressão | SP Lifestyle',
  description: 'Descubra os melhores locais para relaxamento e terapias sensoriais em São Paulo.',
};

export default function Home() {
  // CONFIGURAÇÃO: Coloque aqui o link final para a home do Kamaww ou a lista de SP
  const TARGET_LINK = "https://kamaww.com"; 

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-gray-200">
      
      {/* HEADER SIMPLES */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter text-black uppercase">
            SP • LIFESTYLE
          </span>
          <span className="text-xs font-semibold bg-black text-white px-2 py-1 rounded">
            GUIA 2026
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        
        {/* CATEGORIA E DATA */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
          <span className="uppercase tracking-wide font-semibold text-blue-900">Bem-estar</span>
          <span>•</span>
          <span>Atualizado em Janeiro, 2026</span>
          <span>•</span>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" /> 3 min de leitura
          </div>
        </div>

        {/* MANCHETE */}
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
          O "Novo Luxo" em São Paulo não é sobre ter. É sobre sentir.
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed">
          Executivos e empresários estão trocando o Happy Hour barulhento por terapias sensoriais privadas. Entenda a tendência do "Escape Urbano".
        </h2>

        {/* IMAGEM DE DESTAQUE (Versão Otimizada e Grátis) */}
        <div className="w-full h-64 md:h-96 bg-gray-300 rounded-sm mb-8 overflow-hidden shadow-sm relative">
           <Image 
             src="/spa-hero.jpg"   // <--- O nome exato do arquivo na pasta public
             alt="Ambiente de relaxamento luxuoso em SP" 
             fill                  // <--- Faz a imagem preencher todo o espaço da div pai
             className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
             unoptimized           // <--- O SEGREDO: Isso desliga o processamento da Vercel (Custo Zero)
             priority              // <--- Carrega essa imagem primeiro (melhora nota no Google)
           />
           
           <div className="absolute bottom-0 left-0 bg-black/50 text-white text-xs px-2 py-1 z-10">
             Ambiente Ilustrativo • Privacidade Total
           </div>
        </div>

        {/* ARTIGO */}
        <article className="prose prose-lg prose-gray max-w-none">
          <p className="mb-6">
            São Paulo cobra um preço alto de quem vive nela. O trânsito, as reuniões intermináveis e a pressão constante criam um estado de alerta permanente. Médicos chamam de <em>Burnout</em>. Nós chamamos de "Sinal Vermelho".
          </p>
          
          <p className="mb-6">
            Não é surpresa que a busca por <strong>Terapias Corporais e Massagens Sensoriais</strong> tenha crescido 300% entre o público masculino de alta renda no último ano.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-900 p-6 my-8 italic text-gray-700">
            "Não é apenas sobre massagem. É sobre desligar o cérebro por uma hora e ser cuidado em um ambiente onde ninguém sabe seu nome."
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">O Problema: Onde encontrar qualidade?</h3>
          
          <p className="mb-6">
            Ao procurar no Google ou redes sociais, é fácil cair em armadilhas: fotos falsas, ambientes sem higiene ou falta de segurança. A discrição é fundamental, e a qualidade é inegociável.
          </p>
          
          <p className="mb-6">
            Para resolver isso, o <strong>Projeto Kamaww</strong> realizou uma curadoria rigorosa na capital.
          </p>

          <ul className="space-y-4 mb-10 mt-6">
            <li className="flex items-start">
              <ShieldCheck className="text-green-600 mr-3 mt-1 shrink-0" />
              <span><strong>Verificação de Fotos:</strong> Apenas locais com fotos reais do ambiente.</span>
            </li>
            <li className="flex items-start">
              <Star className="text-yellow-600 mr-3 mt-1 shrink-0" />
              <span><strong>Avaliação de Atendimento:</strong> Foco na experiência do cliente e respeito.</span>
            </li>
            <li className="flex items-start">
              <Clock className="text-blue-600 mr-3 mt-1 shrink-0" />
              <span><strong>Discrição Absoluta:</strong> Locais preparados para receber público executivo.</span>
            </li>
          </ul>
        </article>

        {/* CTA SECTION - A PARTE MAIS IMPORTANTE */}
        <div className="mt-12 p-8 bg-gray-900 rounded-lg text-center shadow-xl">
          <h3 className="text-2xl text-white font-bold mb-4">
            Acesse o Guia Oficial SP
          </h3>
          <p className="text-gray-300 mb-8">
            Filtramos as opções amadoras. Veja agora a lista das clínicas e espaços credenciados que passaram no nosso controle de qualidade.
          </p>
          
          <a 
            href={TARGET_LINK}
            className="inline-flex items-center justify-center w-full md:w-auto bg-white text-gray-900 font-bold text-lg px-8 py-4 rounded hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            VER LISTA DE CLÍNICAS APROVADAS
            <ArrowRight className="ml-2" />
          </a>
          
          <p className="text-gray-500 text-xs mt-4">
            Acesso restrito a maiores de 18 anos.
          </p>
        </div>

      </main>

      {/* FOOTER ATUALIZADO */}
      <footer className="bg-gray-100 py-10 mt-10 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 text-xs">
          <p className="mb-4">
            Este site é um informativo de estilo de vida e não possui vínculo direto com as clínicas citadas.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="app/termos/page.tsx" className="hover:underline">
              Termos de Uso
            </Link>
            <Link href="app/privacidade/page.tsx" className="hover:underline">
              Política de Privacidade
            </Link>
            <a href="mailto:contato@melhoreskamas.com" className="hover:underline">
              Contato
            </a>
          </div>
          <p className="mt-6">© 2026 SP Lifestyle Guide. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}