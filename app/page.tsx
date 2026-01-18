import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Star, Activity } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

// --- CONFIGURAÇÃO FÁCIL (ADICIONE NOVAS PÁGINAS AQUI) ---
const editorials = [
  {
    id: 'lifestyle',
    title: "O Guia Secreto de SP",
    subtitle: "LIFESTYLE & LUXO",
    description: "Uma curadoria implacável dos melhores bares, alfaiates e experiências que a capital paulista esconde. Apenas para quem exige excelência.",
    link: "/lifestyle",
    image: "/spa-hero.jpg", 
    icon: Star,
    color: "bg-black text-white"
  },
  {
    id: 'vitalidade',
    title: "Projeto Vitalidade 50+",
    subtitle: "SAÚDE & PERFORMANCE",
    description: "Protocolos de nutrição anabólica e treino de potência para homens que recusam o declínio. Recupere a virilidade fisiológica.",
    link: "/vitalidade",
    image: "/hero-desktop.jpg", 
    icon: Activity,
    color: "bg-yellow-600 text-black"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-gray-900">
      <Header />

      <main className="grow">
        
        {/* HERO SECTION */}
        <section className="relative h-[50vh] min-h-125 flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 opacity-60">
             <Image 
                src="/hero-capa.jpg" 
                alt="São Paulo Lifestyle"
                fill
                className="object-cover"
                priority
             />
          </div>
          <div className="absolute inset-0 bg-black/40" /> 
          
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <span className="inline-block py-1 px-3 border border-white/30 text-white text-xs tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
              Edição 2026
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              A Arte de Viver em <br/>
              <span className="italic font-light text-yellow-500">São Paulo</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
              O portal definitivo para o homem moderno. Gastronomia, saúde, negócios e o melhor que a vida urbana pode oferecer.
            </p>
          </div>
        </section>

        {/* LISTA DE EDITORIAS */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px bg-gray-300 flex-1"></div>
            <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase">Editorias em Destaque</h2>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {editorials.map((item) => {
              const Icon = item.icon;
              return (
                <Link href={item.link} key={item.id} className="group">
                  <article className="bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col rounded-xl overflow-hidden group-hover:-translate-y-1">
                    
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded ${item.color}`}>
                          {item.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col grow">
                      <div className="flex items-center gap-2 mb-3 text-gray-400">
                        <Icon size={16} />
                        <span className="text-xs font-medium uppercase tracking-wider">Acesso Exclusivo</span>
                      </div>
                      
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-500 leading-relaxed mb-6 grow">
                        {item.description}
                      </p>

                      <div className="flex items-center text-sm font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
                        LER MATÉRIA <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}