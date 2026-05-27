import React, { useRef, useEffect, useState } from 'react';
import {
  Leaf,
  Sun,
  Droplets,
  ArrowRight,
  Home,
  Salad,
  PiggyBank,
  CheckCircle2,
} from 'lucide-react';
import imgResid from '../../assets/horta-residencial-2.png';

/* ─────────────────────────────────────────────
   Micro-hook: scroll reveal
───────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────────
   Dados
───────────────────────────────────────────── */

const residentialFeatures = [
  {
    icon: <Home className="w-5 h-5" />,
    label: 'Design Biófilico para Interiores',
    desc: 'Peça de decoração viva que se adapta a qualquer ambiente.',
  },
  {
    icon: <Salad className="w-5 h-5" />,
    label: 'Alimentação 100% Orgânica',
    desc: 'Colha alimentos frescos, sem agrotóxicos, direto para o prato.',
  },
  {
    icon: <PiggyBank className="w-5 h-5" />,
    label: 'Economia Direta',
    desc: 'Reduza sua conta de hortifrúti em até 70% ao mês.',
  },
];

const techPillars = [
  {
    id: 'sensores',
    icon: <Droplets className="w-8 h-8" />,
    title: 'Sensores de Qualidade da Água',
    desc: 'Monitoramento contínuo de pH, CE e temperatura. Alertas automáticos quando a solução nutritiva precisa de ajuste.',
    accent: 'from-blue-400/30 to-blue-600/10',
  },
  {
    id: 'luz',
    icon: <Sun className="w-8 h-8" />,
    title: 'Iluminação Espectral',
    desc: 'LEDs de espectro completo calibrados para cada fase de crescimento. Consumo 80% menor que a iluminação convencional.',
    accent: 'from-amber-400/30 to-yellow-500/10',
  },
];

/* ─────────────────────────────────────────────
   Sub-componente: Feature Item
───────────────────────────────────────────── */
function FeatureItem({ icon, label, desc, light = false }) {
  return (
    <li className="flex items-start gap-4 group">
      <div
        className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mt-0.5
          transition-transform duration-300 group-hover:scale-110
          ${light
            ? 'bg-white/15 text-white border border-white/20'
            : 'bg-[#4A8532]/10 text-[#2D5A1B] border border-[#4A8532]/15'
          }`}
      >
        {icon}
      </div>
      <div>
        <p className={`font-semibold text-sm mb-0.5 ${light ? 'text-white' : 'text-[#0A2E1F]'}`}>
          {label}
        </p>
        <p className={`text-xs font-inter leading-relaxed ${light ? 'text-white/65' : 'text-[#5A7A6B]'}`}>
          {desc}
        </p>
      </div>
    </li>
  );
}

/* ─────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────── */
export default function Solucoes() {
  const [headerRef, headerVisible] = useInView(0.1);
  const [residRef, residVisible] = useInView(0.08);
  const [techRef, techVisible] = useInView(0.1);

  return (
    <div
      id="solucoes"
      className="relative w-full overflow-hidden bg-[#F4F9F5] font-poppins"
    >

      {/* ════════════════════════════════════════
          HERO HEADER
      ════════════════════════════════════════ */}
      <section
        ref={headerRef}
        className="relative pt-28 pb-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Luz volumétrica superior esquerda */}
        <div
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(34,197,94,0.18) 0%, transparent 70%)',
            filter: 'blur(150px)',
          }}
          aria-hidden="true"
        />
        {/* Luz volumétrica superior direita */}
        <div
          className="absolute -top-16 -right-16 w-[560px] h-[380px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(52,211,153,0.16) 0%, transparent 70%)',
            filter: 'blur(150px)',
          }}
          aria-hidden="true"
        />
        {/* Partícula decorativa */}
        <div className="absolute top-20 left-[45%] w-2 h-2 rounded-full bg-[#87A922]/60 blur-[1px] animate-float pointer-events-none" />
        <div className="absolute top-36 right-[20%] w-3 h-3 rounded-full bg-[#4A8532]/30 blur-[1px] animate-float-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />

        {/* Conteúdo centralizado */}
        <div
          className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#4A8532]/10 border border-[#4A8532]/20 text-[#2D5A1B] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#87A922] animate-pulse" />
            Portfólio de Soluções
          </span>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#0A2E1F] leading-[1.06] tracking-tight mb-6">
            Tecnologia Agrícola.
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A5C42] via-[#4A8532] to-[#87A922]">
                Escalada para o seu espaço.
              </span>
              {/* Sublinhado orgânico SVG */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="10"
                viewBox="0 0 500 10"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 7 Q125 1 250 6 Q375 11 500 5"
                  stroke="#87A922"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-[#5A7A6B] text-lg sm:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
            Sistemas modulares, monitoramento IoT e manutenção zero.{' '}
            <span className="font-semibold text-[#2A5C42]">Nós cuidamos do cultivo</span>,
            você colhe os resultados.
          </p>

          {/* Linha separadora orgânica */}
          <div className="flex items-center justify-center gap-4 mt-14">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#87A922]/40" />
            <Leaf className="w-5 h-5 text-[#87A922]/60" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#87A922]/40" />
          </div>
        </div>
      </section>



      {/* ════════════════════════════════════════
          SOLUÇÃO 2: RESIDENCIAL — Card Esq sobreposto, Imagem Dir
      ════════════════════════════════════════ */}
      <section
        ref={residRef}
        className="relative px-6 md:px-12 lg:px-20 pb-32 overflow-visible"
      >
        {/* Blob verde esquerdo */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 20% 30%, #87A922 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto">

          {/* Layout: Imagem Dir + Card Esq */}

          {/* Layout Z-Pattern invertido: Card Esq + Imagem Dir */}
          <div className="flex flex-col md:flex-row-reverse items-stretch gap-0">

            {/* Imagem residencial */}
            <div
              className={`relative md:w-[58%] shrink-0 transition-all duration-900 ease-out
                ${residVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              {/* Moldura decorativa verde-limão */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-bl from-[#A4C639]/15 to-[#4A8532]/10 -z-10" aria-hidden="true" />

              <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(10,46,31,0.14)]">
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="w-[85%] h-[85%] rounded-full bg-[#d4edcc] opacity-45 blur-3xl" />
                </div>
                <img
                  src={imgResid}
                  alt="Sistema hidropônico residencial Raiz Solar"
                  className="relative w-full h-full object-cover min-h-[420px] mix-blend-multiply drop-shadow-2xl"
                  style={{ aspectRatio: '4/3' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,46,31,0.10), transparent)',
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Badge flutuante: Colha Hoje */}
              <div
                className="absolute -bottom-5 right-8 z-30
                  bg-white/60 backdrop-blur-lg border border-white/60
                  rounded-2xl px-5 py-3 shadow-[0_4px_24px_rgba(10,46,31,0.10)]
                  flex items-center gap-3 animate-float-slow"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="text-[0.68rem] font-bold text-[#0A2E1F] leading-none">
                    Colha em 15 dias
                  </p>
                  <p className="text-[0.6rem] text-[#5A7A6B] font-inter mt-0.5">
                    Primeiras mudas inclusas
                  </p>
                </div>
              </div>
            </div>

            {/* Card Glassmorphism: sobrepõe a imagem pela direita */}
            <div
              className={`relative md:-mr-16 z-20 self-center transition-all duration-900 ease-out delay-200
                ${residVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
                mt-8 md:mt-0 order-first md:order-none`}
            >
              <div
                className="bg-white/70 backdrop-blur-xl border border-white/40
                  shadow-[0_24px_80px_rgba(10,46,31,0.14),0_4px_16px_rgba(10,46,31,0.06)]
                  rounded-3xl p-8 md:p-10 max-w-md"
              >
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 100%)',
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Ícone + Título */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#87A922] to-[#4A8532] flex items-center justify-center shadow-lg shadow-[#87A922]/30">
                      <Leaf className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[#87A922] mb-0.5">
                        Sistemas Residenciais
                      </p>
                      <h2 className="text-2xl font-extrabold text-[#0A2E1F] leading-tight">
                        Sistemas Residenciais
                      </h2>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed mb-8">
                    Uma horta orgânica inteligente que se encaixa perfeitamente na sua
                    sala, cozinha ou varanda. Beleza, saúde e economia em um único
                    equipamento.
                  </p>

                  {/* Features */}
                  <ul className="space-y-5 mb-9">
                    {residentialFeatures.map((f) => (
                      <FeatureItem key={f.label} {...f} />
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3 items-start">
                    <a
                      href="#para-sua-casa"
                      id="cta-residencial-solucoes"
                      className="group inline-flex items-center gap-2.5
                        bg-gradient-to-br from-[#87A922] to-[#4A8532]
                        text-white font-semibold text-sm
                        px-7 py-3.5 rounded-full
                        shadow-[0_6px_24px_rgba(135,169,34,0.35)]
                        hover:shadow-[0_10px_36px_rgba(135,169,34,0.45)]
                        hover:-translate-y-1 transition-all duration-300 active:scale-[0.97]"
                    >
                      Ver Modelos
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                    <a
                      href="#tecnologia"
                      className="inline-flex items-center gap-1.5 text-[#4A8532] font-semibold text-sm self-center
                        border-b border-[#87A922]/50 pb-0.5 hover:border-[#87A922] transition-colors duration-200"
                    >
                      Como funciona
                    </a>
                  </div>

                  {/* Mini stat */}
                  <div className="mt-8 pt-6 border-t border-[#0A2E1F]/8 flex items-center gap-6">
                    <div>
                      <p className="text-2xl font-extrabold text-[#0A2E1F] leading-none">2.400+</p>
                      <p className="text-[0.65rem] text-[#5A7A6B] font-inter mt-1 uppercase tracking-wide">
                        Famílias Atendidas
                      </p>
                    </div>
                    <div className="w-px h-8 bg-[#0A2E1F]/10" />
                    <div>
                      <p className="text-2xl font-extrabold text-[#0A2E1F] leading-none">20%-70%</p>
                      <p className="text-[0.65rem] text-[#5A7A6B] font-inter mt-1 uppercase tracking-wide">
                        Economia Mensal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAIXA TECNOLÓGICA: "A Tecnologia Raiz"
      ════════════════════════════════════════ */}
      <section
        id="tecnologia"
        ref={techRef}
        className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Fundo gradiente verde escuro ponta a ponta */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #114232 0%, #1A5C45 50%, #0F3D2C 100%)',
          }}
          aria-hidden="true"
        />

        {/* Blobs internos de luz */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(ellipse, #87A922 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[250px] rounded-full pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(ellipse, #4A8532 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        {/* Linhas decorativas orgânicas */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
          viewBox="0 0 1200 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M-100,200 C200,50 400,350 700,150 C1000,-50 1200,300 1400,200" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M-100,280 C200,130 450,430 750,230 C1050,30 1200,350 1400,280" stroke="white" strokeWidth="1" fill="none" />
        </svg>

        {/* Partícula decorativa */}
        <div className="absolute top-12 left-[25%] w-2 h-2 rounded-full bg-[#87A922]/60 blur-[1px] animate-float pointer-events-none" />
        <div className="absolute bottom-16 right-[35%] w-3 h-3 rounded-full bg-white/20 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header da faixa */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ease-out
              ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-[#A4C639] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
              <Leaf className="w-3.5 h-3.5" />
              Tecnologia de Cultivo
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
              A Tecnologia{' '}
              <span className="text-[#A4C639]">Raiz Solar</span>
            </h2>
            <p className="text-white/65 text-base font-inter max-w-xl mx-auto">
              Cada sistema é uma plataforma agrícola completa. Hardware de precisão,
              software inteligente e suporte humano em harmonia.
            </p>
          </div>

          {/* Grid 2 colunas dos pilares */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-3xl mx-auto">
            {techPillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`group relative transition-all duration-700 ease-out
                  ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card glassmorphism escuro */}
                <div
                  className="relative h-full bg-white/8 backdrop-blur-md border border-white/12
                    rounded-[2rem] p-8
                    hover:-translate-y-2 hover:bg-white/12 hover:border-white/20
                    transition-all duration-400 ease-out overflow-hidden"
                >
                  {/* Gradiente de acento interno */}
                  <div
                    className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${pillar.accent}
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Ícone */}
                    <div
                      className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15
                        flex items-center justify-center text-[#A4C639] mb-6
                        group-hover:scale-110 group-hover:bg-white/15
                        transition-all duration-400"
                    >
                      {pillar.icon}
                    </div>

                    {/* Título */}
                    <h3 className="text-xl font-bold text-white leading-snug tracking-tight mb-3">
                      {pillar.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-white/60 text-sm font-inter leading-relaxed">
                      {pillar.desc}
                    </p>

                    {/* Check de feature */}
                    <div className="flex items-center gap-2 mt-6 text-[#A4C639]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-xs font-semibold font-inter">
                        {index === 0 && 'Alertas em tempo real'}
                        {index === 1 && 'LED Full Spectrum'}
                      </span>
                    </div>

                    {/* Barra de acento */}
                    <div className="mt-5 h-[2px] w-8 bg-gradient-to-r from-[#A4C639] to-[#87A922] rounded-full group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA global no rodapé da faixa */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-400 ease-out
              ${techVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <a
              href="#contato"
              id="cta-tecnologia"
              className="group inline-flex items-center gap-3
                bg-[#A4C639] hover:bg-[#b8d83d] text-[#0A2E1F]
                font-bold text-base px-10 py-4 rounded-full
                shadow-[0_8px_32px_rgba(164,198,57,0.4)]
                hover:shadow-[0_12px_48px_rgba(164,198,57,0.55)]
                hover:-translate-y-1 transition-all duration-300 active:scale-[0.97]
                relative overflow-hidden"
            >
              <span
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, transparent 55%)',
                }}
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center gap-3">
                Quero uma Solução Personalizada
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <p className="text-white/45 text-xs font-inter mt-4">
              Diagnóstico gratuito · Sem compromisso · Resposta em até 2h
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
