import React, { useRef, useEffect, useState } from 'react';
import {
  Smartphone,
  Leaf,
  Wallet,
  Home,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
} from 'lucide-react';
import hortaImg from '../../assets/horta-residencial.png';

/* ─────────────────────────────────────────────
   Micro-hook: reveal on scroll
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const benefits = [
  {
    id: 'saude',
    icon: <Leaf className="w-7 h-7" />,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    accent: 'from-emerald-400/20 to-emerald-600/5',
    tag: 'Saúde',
    title: '100% Livre de Agrotóxicos',
    description:
      'Colha diretamente para o prato. Alimentos vivos, puros e nutritivos, cultivados pela sua família.',
    highlight: 'Colha direto para o prato.',
  },
  {
    id: 'economia',
    icon: <Wallet className="w-7 h-7" />,
    iconColor: 'text-brand-green-dark',
    iconBg: 'bg-[#E8F5E9]',
    accent: 'from-[#87A922]/20 to-[#87A922]/5',
    tag: 'Economia Real',
    title: 'Reduza em até 70% sua conta de hortifrúti',
    description:
      'Economia mensal real e comprovada. Chega de pagar caro por alimentos que murcha em 2 dias.',
    highlight: '-70% ao mês.',
  },
  {
    id: 'design',
    icon: <Home className="w-7 h-7" />,
    iconColor: 'text-teal-700',
    iconBg: 'bg-teal-50',
    accent: 'from-teal-400/20 to-teal-600/5',
    tag: 'Design Biofílico',
    title: 'Peça de decoração viva',
    description:
      'Sem terra, sem sujeira, sem odor. Um jardim de design premium que valoriza qualquer ambiente.',
    highlight: 'Zero terra, zero sujeira.',
  },
];

const checkpoints = [
  'Instalação incluída e garantida',
  'Suporte técnico por 12 meses',
  'Kit de mudas no primeiro mês grátis',
  'App de monitoramento iOS & Android',
];

/* ─────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────── */
export default function ParaSuaCasa() {
  const [heroRef, heroVisible] = useInView(0.1);
  const [benefitsRef, benefitsVisible] = useInView(0.1);
  const [ctaRef, ctaVisible] = useInView(0.15);

  return (
    <div
      id="para-sua-casa"
      className="relative w-full overflow-hidden bg-[#F4F9F5] font-poppins"
    >

      {/* ════════════════════════════════════════
          HERO SECTION RESIDENCIAL
      ════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-20"
      >

        {/* — Blobs de fundo orgânicos — */}
        {/* Blob verde principal top-right */}
        <div
          className="absolute -top-32 -right-40 w-[700px] h-[700px] rounded-full opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, #87A922 0%, #1B5E3A 55%, transparent 75%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Blob verde suave mid-left */}
        <div
          className="absolute top-[30%] -left-48 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 40% 60%, #4A8532 0%, #0A2E1F 60%, transparent 80%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Blob accent bottom-center */}
        <div
          className="absolute -bottom-20 left-[30%] w-[400px] h-[300px] rounded-full opacity-15 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, #A4C639 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* — Partículas decorativas flutuantes — */}
        <div className="absolute top-24 left-[15%] w-2.5 h-2.5 rounded-full bg-[#87A922]/70 blur-[1px] animate-float pointer-events-none" />
        <div className="absolute top-40 left-[8%] w-1.5 h-1.5 rounded-full bg-[#4A8532]/50 animate-float-slow pointer-events-none" />
        <div className="absolute top-16 right-[38%] w-3 h-3 rounded-full bg-[#A4C639]/60 blur-[2px] animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-36 left-[22%] w-2 h-2 rounded-full bg-[#87A922]/50 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[45%] right-[12%] w-3.5 h-3.5 rounded-full bg-[#4A8532]/40 blur-[1px] animate-float pointer-events-none" style={{ animationDelay: '0.8s' }} />

        {/* — Grid 2 colunas — */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Coluna Esquerda: Texto ── */}
          <div
            className={`flex flex-col items-start transition-all duration-1000 ease-out ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >

            {/* Badge de destaque */}
            <div className="flex items-center gap-2.5 bg-[#4A8532]/10 border border-[#4A8532]/25 text-[#2D5A1B] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#87A922] animate-pulse inline-block" />
              <Sparkles className="w-3.5 h-3.5 text-[#87A922]" />
              Solução Residencial Premium
            </div>

            {/* Título principal */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#0A2E1F] leading-[1.06] tracking-tight mb-6">
              Sua horta{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2A5C42] via-[#4A8532] to-[#87A922]">
                  orgânica
                </span>
                {/* Sublinhado orgânico decorativo */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0 6 Q50 1 100 5 Q150 9 200 4"
                    stroke="#87A922"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </svg>
              </span>
              <br />
              <span className="text-[#0A2E1F]">na sala de estar.</span>
              <br />
              <span className="text-[#2A5C42] text-4xl sm:text-5xl xl:text-6xl font-bold">
                Zero esforço.
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-[#3D6B52] text-lg leading-relaxed font-inter max-w-lg mb-10">
              Tecnologia hidropônica de alta performance em um design que{' '}
              <strong className="font-semibold text-[#0A2E1F]">
                transforma sua casa
              </strong>{' '}
              e elimina as idas ao mercado. Colha alimentos frescos todos os
              dias com{' '}
              <strong className="font-semibold text-[#0A2E1F]">
                apenas 5 minutos por semana.
              </strong>
            </p>

            {/* Checkpoints rápidos */}
            <ul className="space-y-2.5 mb-10">
              {checkpoints.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#3D6B52] font-inter">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#87A922] shrink-0 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Botões CTA */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#cta-residencial"
                className="inline-flex items-center gap-3 bg-gradient-to-br from-[#4A8532] to-[#1D4330] text-white font-semibold text-base px-9 py-4 rounded-full shadow-[0_8px_32px_rgba(74,133,50,0.35)] hover:shadow-[0_12px_40px_rgba(74,133,50,0.45)] hover:-translate-y-1.5 transition-all duration-300 active:scale-[0.97] group"
              >
                Quero a Minha Horta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#beneficios"
                className="inline-flex items-center gap-2 text-[#2A5C42] font-semibold text-sm border-b border-[#87A922]/60 pb-0.5 hover:border-[#87A922] transition-colors duration-200"
              >
                Ver como funciona
              </a>
            </div>

            {/* Mini stats row */}
            <div className="flex items-center gap-6 mt-12 pt-8 border-t border-[#0A2E1F]/8">
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-[#0A2E1F] leading-none">2.400+</span>
                <span className="text-xs text-[#5A7A6B] font-inter mt-1">Famílias atendidas</span>
              </div>
              <div className="w-px h-10 bg-[#0A2E1F]/10" />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl text-[#0A2E1F] leading-none">90%</span>
                <span className="text-xs text-[#5A7A6B] font-inter mt-1">Menos água</span>
              </div>
              <div className="w-px h-10 bg-[#0A2E1F]/10" />
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#87A922] fill-[#87A922]" />
                  ))}
                </div>
                <span className="text-xs text-[#5A7A6B] font-inter">4.9/5.0</span>
              </div>
            </div>
          </div>

          {/* ── Coluna Direita: Imagem + Card Flutuante ── */}
          <div
            className={`relative flex justify-center items-center mt-12 lg:mt-0 transition-all duration-1000 ease-out delay-200 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Halo verde atrás da imagem */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-[80%] h-[80%] rounded-full bg-[#c8dfc0] opacity-55 blur-3xl" />
            </div>

            {/* Anel decorativo */}
            <div
              className="absolute w-[110%] h-[110%] rounded-full border border-[#87A922]/15 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute w-[95%] h-[95%] rounded-full border border-[#4A8532]/10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Imagem principal */}
            <img
              src={hortaImg}
              alt="Horta hidropônica residencial moderna"
              className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-2xl mix-blend-multiply animate-float"
            />

            {/* ── Card Glassmorphism: App Monitoring ── */}
            <div
              className="absolute bottom-4 right-0 lg:-right-8 z-40
                         bg-white/40 backdrop-blur-lg border border-white/50
                         rounded-3xl p-4 shadow-[0_8px_40px_rgba(10,46,31,0.12)]
                         flex items-center gap-4 w-64
                         animate-float"
              style={{ animationDelay: '1s' }}
            >
              {/* Ícone */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A8532] to-[#1D4330] flex items-center justify-center shrink-0 shadow-md">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[0.72rem] font-bold text-[#0A2E1F] leading-tight">
                  Monitoramento
                </p>
                <p className="text-[0.72rem] font-bold text-[#0A2E1F] leading-tight">
                  via App
                </p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[0.62rem] text-[#5A7A6B] font-inter font-medium">
                    Online agora
                  </span>
                </div>
              </div>
            </div>

            {/* ── Badge flutuante: Certified Organic ── */}
            <div
              className="absolute top-8 -left-4 lg:-left-10 z-40
                         bg-white/50 backdrop-blur-lg border border-white/60
                         rounded-2xl px-4 py-3 shadow-[0_4px_24px_rgba(10,46,31,0.1)]
                         animate-float-slow"
              style={{ animationDelay: '2.5s' }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🌿</span>
                <div>
                  <p className="text-[0.65rem] font-bold text-[#0A2E1F]">Certificado</p>
                  <p className="text-[0.65rem] text-[#5A7A6B] font-inter">100% Orgânico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CURVA ORGÂNICA DE TRANSIÇÃO
      ════════════════════════════════════════ */}
      <div className="relative -mt-2 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,40 C200,90 400,10 720,50 C1040,90 1280,20 1440,55 L1440,90 L0,90 Z"
            fill="rgba(255,255,255,0.6)"
          />
        </svg>
      </div>

      {/* ════════════════════════════════════════
          SEÇÃO DE BENEFÍCIOS / QUEBRA DE OBJEÇÕES
      ════════════════════════════════════════ */}
      <section
        id="beneficios"
        ref={benefitsRef}
        className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Fundo com curva orgânica SVG */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(244,249,245,0.95) 30%, #F4F9F5 100%)',
          }}
        />

        {/* Blob decorativo de fundo */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] opacity-20 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 80% 20%, #87A922 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header da seção */}
          <div
            className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ease-out ${
              benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-flex items-center gap-2 font-bold text-xs text-[#2D5A1B] tracking-widest uppercase bg-[#87A922]/12 border border-[#87A922]/25 rounded-full px-5 py-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87A922]" />
              Benefícios Reais
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2E1F] leading-[1.1] tracking-tight mb-5">
              Mais do que uma horta.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A8532] to-[#87A922]">
                Uma transformação de vida.
              </span>
            </h2>
            <p className="text-[#5A7A6B] text-lg font-inter leading-relaxed">
              Chega de alimentos sem procedência. Com a Raiz Solar, você controla o que
              coloca no prato e ainda economiza todo mês.
            </p>
          </div>

          {/* Grade fluida de 3 cards irregulares */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((card, index) => (
              <div
                key={card.id}
                className={`transition-all duration-700 ease-out ${
                  benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Cartão com offset vertical alternado para layout irregular */}
                <div
                  className={`group relative h-full
                    bg-white/60 backdrop-blur-md
                    rounded-[2rem] border border-white/70
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                    hover:-translate-y-2
                    hover:shadow-[0_16px_50px_rgba(10,46,31,0.10)]
                    transition-all duration-500 ease-out
                    overflow-hidden
                    ${index === 1 ? 'md:mt-8' : ''}
                    ${index === 2 ? 'md:mt-4' : ''}
                  `}
                >
                  {/* Gradiente interno de destaque no hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`}
                  />

                  {/* Conteúdo do card */}
                  <div className="relative z-10 p-8 flex flex-col h-full">

                    {/* Tag + Ícone */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor}
                          flex items-center justify-center
                          shadow-sm border border-white/60
                          group-hover:scale-110 transition-transform duration-400`}
                      >
                        {card.icon}
                      </div>
                      <span
                        className="text-[0.65rem] font-bold tracking-widest uppercase text-white
                          bg-gradient-to-r from-[#4A8532] to-[#87A922]
                          px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {card.tag}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-[#0A2E1F] leading-tight mb-3 tracking-tight">
                      {card.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed flex-1">
                      {card.description}
                    </p>

                    {/* Highlight pill */}
                    <div className="mt-6 inline-flex items-center gap-2 bg-[#0A2E1F]/6 rounded-full px-4 py-2 w-fit">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#87A922]" />
                      <span className="text-xs font-semibold text-[#2A5C42] font-inter">
                        {card.highlight}
                      </span>
                    </div>

                    {/* Barra de acento na base */}
                    <div className="mt-6 h-[3px] w-8 bg-gradient-to-r from-[#87A922] to-[#4A8532] rounded-full group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA DE ALTA CONVERSÃO
      ════════════════════════════════════════ */}
      <section
        id="cta-residencial"
        ref={ctaRef}
        className="relative py-20 px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <div
            className={`relative bg-gradient-to-br from-[#1D4330] to-[#2A5C42]
              text-white rounded-[3rem] p-12 md:p-16 overflow-hidden
              transition-all duration-1000 ease-out
              ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >

            {/* — Decorações internas do CTA — */}
            {/* Blob de brilho interno top-right */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(164,198,57,0.25) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            {/* Blob escuro bottom-left */}
            <div
              className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(10,46,31,0.6) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            {/* Linhas orgânicas decorativas */}
            <svg
              className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <path
                d="M-50,200 C100,50 300,350 500,150 C700,-50 900,300 900,200"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M-50,280 C150,130 350,430 550,230 C750,30 900,380 950,280"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </svg>

            {/* Conteúdo do CTA */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">

              {/* Texto */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#A4C639] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  Oferta Residencial
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5 text-white">
                  Pronto para colher{' '}
                  <span className="text-[#A4C639]">saúde todos os dias?</span>
                </h2>
                <p className="text-white/70 text-base font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Fale com um especialista agora. Instalação rápida, sem obras,
                  sem sujeira. A sua horta orgânica pode estar funcionando ainda esta semana.
                </p>

                {/* Lista rápida de garantias */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 justify-center lg:justify-start">
                  {['Sem fidelidade', 'Garantia de 1 ano', 'Frete grátis SP'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-white/80 text-sm font-inter">
                      <CheckCircle2 className="w-4 h-4 text-[#A4C639]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grupo de botões + mini-card */}
              <div className="flex flex-col items-center gap-5 shrink-0">

                {/* Botão principal vibrante */}
                <a
                  href="https://wa.me/5511309028380"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-whatsapp-residencial"
                  className="group relative inline-flex items-center gap-3
                    bg-[#A4C639] hover:bg-[#b8d83d]
                    text-[#0A2E1F] font-bold text-lg
                    px-10 py-5 rounded-full
                    shadow-[0_8px_32px_rgba(164,198,57,0.45),0_2px_8px_rgba(0,0,0,0.15)]
                    hover:shadow-[0_12px_48px_rgba(164,198,57,0.6),0_4px_16px_rgba(0,0,0,0.2)]
                    hover:-translate-y-1.5
                    transition-all duration-300 active:scale-[0.97]
                    whitespace-nowrap"
                >
                  {/* Brilho tátil interno */}
                  <span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)',
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    💬 Falar com Especialista
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>

                {/* Botão secundário fantasma */}
                <a
                  href="#beneficios"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white
                    text-sm font-inter font-medium border-b border-white/20 pb-0.5
                    hover:border-white/50 transition-all duration-200"
                >
                  Ver mais detalhes
                </a>

                {/* Mini prova social */}
                <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-5 py-3 mt-2">
                  <div className="flex -space-x-2">
                    {['🧑', '👩', '🧓'].map((emoji, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-white/20 border-2 border-[#2A5C42] flex items-center justify-center text-sm"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#A4C639] fill-[#A4C639]" />
                      ))}
                    </div>
                    <p className="text-white/60 text-[0.65rem] font-inter mt-0.5">
                      +2.400 famílias satisfeitas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Padding final */}
        <div className="h-16" />
      </section>

    </div>
  );
}
