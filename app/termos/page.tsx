import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Termos de Uso | SP Lifestyle',
};

export default function Termos() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-sm">
        
        <Link href="/" className="inline-flex items-center text-blue-900 hover:underline mb-8 font-semibold">
          <ArrowLeft size={16} className="mr-2" /> Voltar para o Guia
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-gray-900">Termos de Uso</h1>
        
        <div className="prose prose-gray max-w-none text-sm text-gray-600">
          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">1. Aceitação dos Termos</h3>
          <p>Ao acessar ao site <strong>SP Lifestyle Guide</strong>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">2. Isenção de Responsabilidade</h3>
          <p>Os materiais no site da SP Lifestyle Guide são fornecidos "como estão". O SP Lifestyle Guide atua apenas como um portal informativo e de curadoria.</p>
          <p>Não prestamos os serviços de relaxamento ou terapias mencionados, nem temos vínculo empregatício com as clínicas listadas. A contratação de qualquer serviço é de responsabilidade exclusiva do usuário e do prestador de serviço.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">3. Maioridade</h3>
          <p>Este site destina-se a fins informativos para o público adulto. Ao utilizar este site, você declara ter mais de 18 anos de idade.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">4. Precisão dos materiais</h3>
          <p>Os materiais exibidos no site da SP Lifestyle Guide podem incluir erros técnicos, tipográficos ou fotográficos. Não garantimos que qualquer material em seu site seja preciso, completo ou atual, embora façamos o esforço de curadoria.</p>

          <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">5. Modificações</h3>
          <p>O SP Lifestyle Guide pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
        </div>
      </div>
    </div>
  );
}