import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hydroponic-shelf.png';

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#f0f5ee] font-poppins flex flex-col justify-center">

      {/* ── Fundo Orgânico: blobs SVG suaves ── */}

      {/* Blob verde-escuro superior direito — forma orgânica, parcialmente off-screen */}
      <svg
        className="absolute -top-64 -right-64 w-[900px] h-[900px] opacity-80 z-0 pointer-events-none"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="blobGrad" cx="55%" cy="38%" r="60%">
            <stop offset="0%" stopColor="#5a9e3a" />
            <stop offset="100%" stopColor="#1e3d0e" />
          </radialGradient>
        </defs>
        <path
          fill="url(#blobGrad)"
          d="M460,50 C530,70 600,140 590,230 C580,320 520,360 490,430 C460,500 480,570 410,595 C340,620 255,590 190,545 C125,500 80,430 70,350 C60,270 90,185 140,130 C190,75 270,45 360,40 C420,37 440,38 460,50Z"
        />
      </svg>

      {/* Blob verde-médio inferior esquerdo */}
      <svg
        className="absolute -bottom-48 -left-48 w-[600px] h-[600px] opacity-50 z-0 pointer-events-none"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="blobGrad2" cx="40%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#6aaa3a" />
            <stop offset="100%" stopColor="#3a6e1c" />
          </radialGradient>
        </defs>
        <path
          fill="url(#blobGrad2)"
          d="M160,80 C220,50 300,60 360,100 C420,140 460,200 470,280 C480,360 450,440 400,490 C350,540 270,560 200,530 C130,500 80,440 60,360 C40,280 50,180 100,120 C120,100 140,90 160,80Z"
        />
      </svg>

      {/* Partícula decorativa verde-limão (topo esquerdo) */}
      <div className="absolute top-32 left-[8%] w-3 h-3 rounded-full bg-[#87A922]/60 blur-sm z-0 pointer-events-none" />
      <div className="absolute top-48 left-[12%] w-2 h-2 rounded-full bg-[#4A8532]/40 z-0 pointer-events-none" />
      <div className="absolute top-20 right-[42%] w-4 h-4 rounded-full bg-[#a8d072]/50 blur-[2px] z-0 pointer-events-none" />

      {/* ── Conteúdo Principal ── */}
      <div className="relative z-10 container mx-auto px-10 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Coluna Esquerda: Texto + CTA + Card Stats */}
        <div className="flex flex-col items-start">

          {/* Badge verde */}
          <div className="flex items-center gap-2 bg-[#4A8532]/10 border border-[#4A8532]/20 text-[#2f5c1a] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#4A8532] animate-pulse inline-block" />
            100% Natural · Sem Agrotóxicos
          </div>

          {/* Título */}
          <h1 className="text-6xl font-extrabold text-gray-800 leading-[1.08] mb-6">
            Sua Horta <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                em Casa
              </span>
            </span>
          </h1>

          {/* Descrição */}
          <p className="text-white/90 text-base sm:text-lg mb-10 max-w-md leading-relaxed font-inter">
            Cultive hortaliças frescas, <strong className="text-white font-bold">sem agrotóxicos</strong> e 100%{' '}
            <strong className="text-white font-bold">sustentáveis</strong> diretamente na sua cozinha ou varanda.
            Reduza despesas com o mercado e <strong className="text-white font-bold">colha saúde</strong> todos os dias.
          </p>

          {/* Botão CTA */}
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-gradient-to-br from-[#4A8532] to-[#1e3d0e] text-white font-semibold text-lg px-9 py-4 rounded-full shadow-xl shadow-green-900/25 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/30 transition-all duration-300 active:translate-y-0 mb-10"
          >
            Fale Conosco
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Card Stats: 90% Menos Água + Economia */}
          <div className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-6 flex gap-6 border border-white/60">
            <div className="flex flex-col items-center border-r border-gray-100 pr-6 justify-center">
              <div className="text-4xl mb-1">💧</div>
              <span className="font-extrabold text-2xl text-gray-800 leading-none">50%-90%</span>
              <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest mt-1">Menos Água</span>
            </div>
            <div className="flex flex-col items-center justify-center pl-2">
              <div className="text-4xl mb-1">💰</div>
              <span className="font-extrabold text-[1.1rem] text-gray-800 uppercase leading-none mt-1">Economia</span>
              <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest mt-1">Mensal Real</span>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Imagem Flutuante + Card Impacto Familiar */}
        <div className="relative mt-8 lg:mt-0 flex justify-center items-center">

          {/* Halo verde suave atrás da imagem — serve de "cama" para mix-blend-multiply */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[90%] h-[90%] rounded-full bg-[#c8dfc0] opacity-60 blur-3xl" />
          </div>

          {/* Imagem mix-blend-multiply → fundo branco desaparece */}
          <img
            src={heroImage}
            alt="Sistema Hidropônico Residencial"
            className="relative z-10 w-full max-w-[580px] object-contain drop-shadow-2xl mix-blend-multiply animate-float"
          />

          {/* Card Impacto Familiar — glassmorphism verde escuro */}
          <div className="absolute -bottom-6 -left-8 z-40 w-76 bg-gradient-to-br from-[#40683D] to-[#254223] text-white p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-3">
              <div className="text-3xl bg-white/10 p-2 rounded-xl shrink-0">👨‍👩‍👧‍👦</div>
              <div>
                <h3 className="font-bold text-base leading-tight text-green-50">Impacto<br />Familiar</h3>
              </div>
            </div>
            <p className="text-xs text-white/75 leading-relaxed font-inter">
              Ensine sustentabilidade para seus filhos e desfrute de alimentos puros e nutritivos cultivados em família.
            </p>
            <div className="mt-4 h-[3px] w-10 bg-[#87A922] rounded-full" />
          </div>

        </div>
      </div>

      {/* Cards de contato removidos — foco residencial direto */}

    </div>
  );
}
