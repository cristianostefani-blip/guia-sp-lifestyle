import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; // Ícone do zap opcional, mas fica legal

export default function Footer() {
  // Configure seu número aqui (apenas números, com DDI 55 e DDD)
  const WHATSAPP_NUMBER = "5511947822876"; 
  const MESSAGE = encodeURIComponent("Olá lifestyle, peguei seu contato no site");
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  return (
    <footer className="bg-gray-100 py-10 mt-10 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6 text-center text-gray-500 text-xs">
        <p className="mb-4">
          Este site é um informativo de estilo de vida e não possui vínculo direto com os estabelecimentos citados.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/termos" className="hover:underline">
            Termos de Uso
          </Link>
          <Link href="/privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
          
          {/* LINK DO WHATSAPP */}
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-green-700 font-bold hover:text-green-800 hover:underline"
          >
            <MessageCircle size={14} className="mr-1" />
            Falar no WhatsApp
          </a>
        </div>
        <p className="mt-6">© 2026 SP Lifestyle Guide. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}