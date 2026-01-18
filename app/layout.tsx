import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Guia SP Lifestyle | O Portal Definitivo para o Homem Moderno em São Paulo',
  description: 'Descubra o melhor de São Paulo com nosso guia exclusivo de lifestyle, saúde, gastronomia e negócios para o homem moderno.',
  icons: {
    icon: '/favicon-96x96.png', // O ícone padrão para abas (use o png de alta qualidade)
    shortcut: '/favicon.ico', // Para navegadores antigos
    apple: '/apple-touch-icon.png', // Para quem salva na tela do iPhone
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    }
  },
  keywords: [
    'lifestyle São Paulo', 'guia de luxo SP', 'saúde masculina',
    'gastronomia SP', 'negócios São Paulo', 'experiências exclusivas SP',
    'bem-estar masculino', 'moda masculina SP', 'cultura urbana São Paulo',
    'eventos exclusivos SP',
  ],
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-S0LF5QB3M3" />
    </html>
  );
}