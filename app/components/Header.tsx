import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold tracking-tighter text-black uppercase">
            SP • LIFESTYLE
            </span>
        </Link>
        <span className="text-xs font-semibold bg-black text-white px-2 py-1 rounded">
          GUIA 2026
        </span>
      </div>
    </header>
  );
}