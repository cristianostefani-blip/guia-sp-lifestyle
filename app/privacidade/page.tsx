import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Política de Privacidade | SP Lifestyle',
};

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-sm">
        
        <Link href="/" className="inline-flex items-center text-blue-900 hover:underline mb-8 font-semibold">
          <ArrowLeft size={16} className="mr-2" /> Voltar para o Guia
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-gray-900">Política de Privacidade</h1>
        
        <div className="prose prose-gray max-w-none text-sm text-gray-600">
          <p><strong>Última atualização: Janeiro de 2026</strong></p>

          <p>A sua privacidade é importante para nós. É política do <strong>SP Lifestyle Guide</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. Informações que coletamos</h3>
          <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. Uso de Cookies</h3>
          <p>Utilizamos cookies para analisar o tráfego do site e melhorar sua experiência. Ao utilizar nosso site, você concorda com o uso de cookies de acordo com esta política.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Links para sites de terceiros</h3>
          <p>Nosso site pode conter links para sites externos que não são operados por nós (como as clínicas listadas em nosso guia). Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
          <p>Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">4. Compromisso do Usuário</h3>
          <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o SP Lifestyle Guide oferece no site.</p>
        </div>
      </div>
    </div>
  );
}