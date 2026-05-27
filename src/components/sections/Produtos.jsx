import React, { useRef, useEffect, useState } from 'react';
import {
  Leaf,
  Zap,
  FlaskConical,
  Package,
  ArrowRight,
  CheckCircle2,
  Star,
  Droplets,
  Settings2,
  Sun,
  Wifi,
} from 'lucide-react';
import imgHero from '../../assets/raiz-hero-produto.png';
import imgSmartHome from '../../assets/raiz-smart-home.png';

/* ─────────────────────────────────────────────
   Micro-hook: scroll reveal
───────────────────────────────────────────── */
function useInView(threshold = 0.1) {
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
   Spec row
───────────────────────────────────────────── */
function SpecRow({ icon, label, value }) {
  return (
    <li className="flex items-center justify-between py-3 border-b border-[#0A2E1F]/6 last:border-0 group">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-lg bg-[#4A8532]/10 flex items-center justify-center text-[#4A8532] group-hover:bg-[#4A8532]/15 transition-colors duration-200">
          {icon}
        </span>
        <span className="text-sm text-[#5A7A6B] font-inter">{label}</span>
      </div>
      <span className="text-sm font-semibold text-[#0A2E1F] font-poppins">{value}</span>
    </li>
  );
}

/* ─────────────────────────────────────────────
   Dados
───────────────────────────────────────────── */
const smartHomeSpecs = [
  { icon: <Leaf className="w-4 h-4" />,       label: 'Capacidade',         value: '40 mudas' },
  { icon: <Zap className="w-4 h-4" />,         label: 'Consumo',            value: '15 W/h' },
  { icon: <Droplets className="w-4 h-4" />,    label: 'Reservatório',       value: '12 litros' },
  { icon: <Sun className="w-4 h-4" />,          label: 'Iluminação',         value: 'LED Full-Spectrum' },
  { icon: <Wifi className="w-4 h-4" />,         label: 'Conectividade',      value: 'Wi-Fi + App' },
  { icon: <Settings2 className="w-4 h-4" />,   label: 'Manutenção',         value: '5 min/semana' },
];



const ecosystemItems = [
  {
    id: 'equip',
    icon: <Package className="w-10 h-10" />,
    color: 'from-[#4A8532] to-[#1D4330]',
    glow: 'rgba(74,133,50,0.3)',
    title: 'O Equipamento',
    desc: 'Hardware de precisão com design premium. Estrutura em alumínio anodizado, LED profissional e bomba ultrasilenciosa.',
    badge: 'Design Award',
  },
  {
    id: 'insumos',
    icon: <FlaskConical className="w-10 h-10" />,
    color: 'from-[#87A922] to-[#4A8532]',
    glow: 'rgba(135,169,34,0.3)',
    title: 'Os Insumos',
    desc: 'Kit de sementes e solução nutritiva premium entregue na sua porta todo mês. Sem sair de casa, sem complicação.',
    badge: 'Entrega Mensal',
  },
];

/* ─────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────── */
export default function Produtos() {
  const [revealRef, revealVisible] = useInView(0.08);
  const [cardsRef,  cardsVisible]  = useInView(0.07);
  const [ecoRef,    ecoVisible]    = useInView(0.1);

  return (
    <div id="produtos" className="relative w-full overflow-hidden font-poppins">

      {/* ════════════════════════════════════════
          PRODUCT REVEAL — FUNDO ESCURO LUXUOSO
      ════════════════════════════════════════ */}
      <section
        ref={revealRef}
        className="relative min-h-screen flex flex-col items-center justify-center
          overflow-hidden bg-[#0B1C14] pt-28 pb-24 px-6"
      >
        {/* Brilho radial esmeralda central */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 55%, rgba(20,83,45,0.45) 0%, rgba(11,28,20,0.0) 65%)',
          }}
          aria-hidden="true"
        />

        {/* Blob topo esquerdo */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[400px] rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(ellipse, #1B5E3A 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Blob baixo direito */}
        <div
          className="absolute -bottom-24 -right-24 w-[400px] h-[350px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(ellipse, #87A922 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />

        {/* Grade decorativa sutil */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />

        {/* — Texto Header — */}
        <div
          className={`relative z-10 text-center mb-16 transition-all duration-1000 ease-out
            ${revealVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-[#A4C639] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A4C639] animate-pulse" />
            Linha de Produtos 2025
          </span>

          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-5">
            Engenharia a serviço
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87A922] via-[#A4C639] to-[#c8e06b]">
              da natureza.
            </span>
          </h1>

          <p className="text-white/55 text-lg sm:text-xl font-inter max-w-xl mx-auto">
            Conheça nossas linhas de cultivo inteligente.
          </p>
        </div>

        {/* — Área da Imagem com Hotspots — */}
        <div
          className={`relative z-10 w-full max-w-xl mx-auto transition-all duration-1200 ease-out delay-200
            ${revealVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          {/* Aura brilhante atrás da imagem */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-[70%] h-[70%] rounded-full animate-pulse-soft"
              style={{
                background:
                  'radial-gradient(ellipse, rgba(74,133,50,0.45) 0%, rgba(27,94,58,0.2) 50%, transparent 75%)',
                filter: 'blur(40px)',
              }}
            />
          </div>

          {/* Imagem hero do produto */}
          <img
            src={imgHero}
            alt="Produto Raiz Solar — Visão Geral"
            className="relative w-full object-contain drop-shadow-[0_40px_80px_rgba(164,198,57,0.2)] animate-float"
            style={{ maxHeight: '520px' }}
          />

          {/* Linhas decorativas removidas com os hotspots */}
        </div>

        {/* — Mini CTA Dark — */}
        <div
          className={`relative z-10 mt-16 flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ease-out
            ${revealVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="#linha-produtos"
            className="group inline-flex items-center gap-3 bg-[#A4C639] hover:bg-[#b8d83d]
              text-[#0A2E1F] font-bold text-base px-10 py-4 rounded-full
              shadow-[0_8px_32px_rgba(164,198,57,0.4)]
              hover:shadow-[0_12px_48px_rgba(164,198,57,0.55)]
              hover:-translate-y-1.5 transition-all duration-300 active:scale-[0.97]
              relative overflow-hidden"
          >
            <span
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.22) 0%,transparent 55%)' }}
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center gap-3">
              Explorar os Modelos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </a>
          <p className="text-white/35 text-xs font-inter">Role para ver a linha completa</p>
        </div>

        {/* Onda de transição para seção clara */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
            <path d="M0,40 C240,80 480,10 720,45 C960,80 1200,20 1440,50 L1440,80 L0,80 Z" fill="#F4F9F5" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════
          LINHA DE PRODUTOS — FUNDO OFF-WHITE
      ════════════════════════════════════════ */}
      <section
        id="linha-produtos"
        ref={cardsRef}
        className="relative bg-[#F4F9F5] py-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Blob decorativo de fundo */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 80% 10%, #87A922 0%, transparent 65%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(ellipse at 20% 90%, #4A8532 0%, transparent 65%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Header da seção */}
          <div
            className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ease-out
              ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-flex items-center gap-2 bg-[#4A8532]/10 border border-[#4A8532]/20 text-[#2D5A1B] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#87A922]" />
              Escolha o seu modelo
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2E1F] leading-[1.08] tracking-tight mb-4">
              O modelo perfeito
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A8532] to-[#87A922]">
                para a sua casa.
              </span>
            </h2>
            <p className="text-[#5A7A6B] text-lg font-inter leading-relaxed">
              Design premiado, tecnologia de ponta e facilidade de uso — tudo pensado para o seu lar.
            </p>
          </div>

          {/* Grid 1 coluna centralizado — apenas Raiz Smart Home */}
          <div className="flex justify-center">

            {/* ── Painel 1: Raiz Smart Home ── */}
            <div
              className={`group relative transition-all duration-700 ease-out
                ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '0ms' }}
            >
              {/* Moldura de gradiente atrás do card */}
              <div
                className="absolute -inset-[2px] rounded-[2.6rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(135,169,34,0.4), rgba(74,133,50,0.2), transparent)' }}
                aria-hidden="true"
              />

              <div
                className="relative bg-white/60 backdrop-blur-xl border border-white/40
                  shadow-[0_8px_40px_rgba(10,46,31,0.08)]
                  group-hover:shadow-[0_20px_60px_rgba(10,46,31,0.13)]
                  rounded-[2.5rem] p-8 overflow-hidden
                  transition-all duration-500 ease-out"
              >
                {/* Badge Residencial */}
                <div className="absolute top-7 right-7 flex items-center gap-2 bg-[#87A922]/15 border border-[#87A922]/25 text-[#2D5A1B] text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87A922]" />
                  Residencial
                </div>

                {/* Imagem do produto */}
                <div className="relative flex items-center justify-center mb-8 min-h-[280px]">
                  {/* Halo */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-56 h-56 rounded-full bg-[#c8dfc0] opacity-50 blur-3xl" />
                  </div>
                  <img
                    src={imgSmartHome}
                    alt="Raiz Smart Home"
                    className="relative w-full max-w-[260px] object-contain drop-shadow-2xl mix-blend-multiply
                      group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Badge flutuante mini */}
                  <div
                    className="absolute bottom-0 left-4 bg-white/70 backdrop-blur-md border border-white/60
                      rounded-2xl px-4 py-2.5 shadow-[0_4px_16px_rgba(10,46,31,0.1)]
                      flex items-center gap-2.5 animate-float"
                    style={{ animationDelay: '0.5s' }}
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[#87A922] fill-[#87A922]" />
                      ))}
                    </div>
                    <span className="text-[0.65rem] font-bold text-[#0A2E1F] font-inter">4.9 · 823 avaliações</span>
                  </div>
                </div>

                {/* Conteúdo textual */}
                <div>
                  <p className="text-[0.65rem] font-bold tracking-widest uppercase text-[#87A922] mb-1">Modelo Residencial</p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2E1F] tracking-tight mb-2">
                    Raiz Smart Home
                  </h3>
                  <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed mb-6">
                    Ideal para varandas, cozinhas e home offices. Design premiado que integra tecnologia e beleza ao seu lar.
                  </p>

                  {/* Especificações */}
                  <ul className="mb-8">
                    {smartHomeSpecs.map((s) => (
                      <SpecRow key={s.label} {...s} />
                    ))}
                  </ul>

                  {/* Preço e CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <div>
                      <p className="text-[0.65rem] text-[#5A7A6B] font-inter uppercase tracking-wide mb-0.5">A partir de</p>
                      <p className="text-3xl font-extrabold text-[#0A2E1F] leading-none">
                        R$ 1.890
                        <span className="text-base font-medium text-[#5A7A6B] ml-1">/instalado</span>
                      </p>
                    </div>
                    <a
                      href="#contato"
                      id="cta-smart-home"
                      className="group/btn inline-flex items-center gap-2.5
                        border-2 border-[#4A8532] text-[#2D5A1B]
                        font-semibold text-sm px-6 py-3 rounded-full
                        hover:bg-[#4A8532] hover:text-white hover:border-[#4A8532]
                        hover:-translate-y-0.5
                        transition-all duration-300 active:scale-[0.97]"
                    >
                      Ver detalhes
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ECOSSISTEMA COMPLETO — VALUE STACK
      ════════════════════════════════════════ */}
      <section
        ref={ecoRef}
        className="relative bg-[#F4F9F5] py-8 pb-28 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Banner largo arredondado */}
          <div
            className={`relative rounded-[3rem] overflow-hidden
              bg-white/70 backdrop-blur-xl border border-white/50
              shadow-[0_16px_64px_rgba(10,46,31,0.09)]
              transition-all duration-1000 ease-out
              ${ecoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Blob interno esverdeado */}
            <div
              className="absolute top-0 right-0 w-[400px] h-[300px] rounded-full pointer-events-none opacity-20"
              style={{
                background: 'radial-gradient(ellipse at 80% 0%, #87A922 0%, transparent 65%)',
                filter: 'blur(60px)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 left-0 w-[350px] h-[250px] rounded-full pointer-events-none opacity-15"
              style={{
                background: 'radial-gradient(ellipse at 20% 100%, #4A8532 0%, transparent 65%)',
                filter: 'blur(60px)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 p-10 md:p-14">

              {/* Header do banner */}
              <div
                className={`text-center mb-14 transition-all duration-1000 delay-100 ease-out
                  ${ecoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <span className="inline-flex items-center gap-2 bg-[#4A8532]/10 border border-[#4A8532]/18 text-[#2D5A1B] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#87A922]" />
                  Ecossistema Completo
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2E1F] leading-[1.1] tracking-tight mb-3">
                  Tudo que você precisa.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A8532] to-[#87A922]">
                    Em um único ecossistema.
                  </span>
                </h2>
                <p className="text-[#5A7A6B] text-base font-inter max-w-lg mx-auto">
                  Não é apenas um equipamento. É uma solução completa de cultivo — hardware, insumos e software em harmonia.
                </p>
              </div>

              {/* Grid 2 colunas centralizadas — Equipamento + Insumos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto mb-14">
                {ecosystemItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`group text-center transition-all duration-700 ease-out
                      ${ecoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${200 + index * 120}ms` }}
                  >
                    {/* Ícone grande com gradiente */}
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color}
                        flex items-center justify-center text-white mx-auto mb-6
                        shadow-[0_8px_24px_var(--glow)]
                        group-hover:scale-110 group-hover:-translate-y-1
                        transition-all duration-400 ease-out`}
                      style={{ '--glow': item.glow }}
                    >
                      {item.icon}
                    </div>

                    {/* Badge pill */}
                    <span className="inline-block bg-[#0A2E1F]/6 text-[#2D5A1B] text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
                      {item.badge}
                    </span>

                    <h3 className="text-lg font-bold text-[#0A2E1F] mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Separador decorativo */}
                    {index < ecosystemItems.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-16 bg-[#0A2E1F]/8" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>

              {/* ── CTA Principal abaixo do banner ── */}
              <div
                className={`flex flex-col items-center gap-4 pt-10 border-t border-[#0A2E1F]/6
                  transition-all duration-1000 delay-500 ease-out
                  ${ecoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <p className="text-[#5A7A6B] text-sm font-inter text-center max-w-sm">
                  Não sabe qual modelo escolher? Nossa equipe monta um diagnóstico gratuito para o seu espaço.
                </p>
                <a
                  href="#contato"
                  id="cta-orcamento-produtos"
                  className="group relative inline-flex items-center gap-3
                    bg-gradient-to-r from-green-600 to-green-500
                    hover:from-green-500 hover:to-green-400
                    text-white font-bold text-base
                    px-10 py-4.5 py-[1.1rem] rounded-full
                    shadow-[0_8px_32px_rgba(74,133,50,0.35)]
                    hover:shadow-[0_12px_48px_rgba(74,133,50,0.50)]
                    hover:-translate-y-1.5
                    transition-all duration-300 active:scale-[0.97]
                    overflow-hidden"
                >
                  <span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.18) 0%,transparent 55%)' }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    Solicitar Orçamento Personalizado
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                <div className="flex items-center gap-6 mt-1">
                  {['Diagnóstico gratuito', 'Sem compromisso', 'Resposta em 2h'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5 text-[#5A7A6B] text-xs font-inter">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#87A922]" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
