import React, { useRef, useEffect, useState } from 'react';
import {
  Droplets,
  Leaf,
  Wind,
  HeartPulse,
  TrendingUp,
  Sprout,
  ArrowRight,
  Globe,
  FlaskConical,
  Recycle,
  BadgeCheck,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   Micro-hook: scroll reveal + counter
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

function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

/* ─────────────────────────────────────────────
   Sub-componente: Número animado
───────────────────────────────────────────── */
function AnimatedStat({ value, suffix = '', prefix = '', active, className = '' }) {
  const num = useCounter(value, 1600, active);
  return (
    <span className={className}>
      {prefix}{num}{suffix}
    </span>
  );
}

/* ─────────────────────────────────────────────
   Sub-componente: Pill de dado
───────────────────────────────────────────── */
function DataPill({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 bg-white/50 border border-white/60 rounded-full px-4 py-2.5 backdrop-blur-sm">
      <span className="text-[#4A8532]">{icon}</span>
      <div>
        <p className="text-[0.6rem] text-[#5A7A6B] font-inter uppercase tracking-widest leading-none">{label}</p>
        <p className="text-xs font-bold text-[#0A2E1F] leading-tight mt-0.5">{value}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────── */
export default function Impacto() {
  const [headerRef, headerVisible] = useInView(0.1);
  const [gridRef,   gridVisible]   = useInView(0.06);
  const [ctaRef,    ctaVisible]    = useInView(0.15);

  return (
    <div id="impacto" className="relative w-full overflow-hidden bg-[#F4F9F5] font-poppins">

      {/* ════════════════════════════════════════
          CABEÇALHO DE IMPACTO
      ════════════════════════════════════════ */}
      <section
        ref={headerRef}
        className="relative pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Gradiente radial central de iluminação */}
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="w-[700px] h-[400px] rounded-full"
            style={{
              background:
                'radial-gradient(ellipse, rgba(74,133,50,0.10) 0%, rgba(135,169,34,0.06) 40%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        {/* Blob superior esquerdo */}
        <div
          className="absolute -top-20 -left-20 w-[400px] h-[300px] rounded-full pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(ellipse, #87A922 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />
        {/* Blob direita */}
        <div
          className="absolute top-10 -right-16 w-[350px] h-[250px] rounded-full pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(ellipse, #4A8532 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Partículas */}
        <div className="absolute top-20 left-[20%] w-2 h-2 rounded-full bg-[#87A922]/60 blur-[1px] animate-float pointer-events-none" />
        <div className="absolute top-36 right-[28%] w-3 h-3 rounded-full bg-[#4A8532]/30 animate-float-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-8 left-[45%] w-2 h-2 rounded-full bg-[#A4C639]/50 blur-[1px] animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

        <div
          className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#4A8532]/10 border border-[#4A8532]/20 text-[#2D5A1B] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            <Globe className="w-3.5 h-3.5 text-[#87A922]" />
            Impacto & Sustentabilidade
          </span>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#0A2E1F] leading-[1.06] tracking-tight mb-6">
            Transformando metros
            <br />
            quadrados em{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A5C42] via-[#4A8532] to-[#87A922]">
                impacto global.
              </span>
              {/* Sublinhado orgânico */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 400 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 Q100 1 200 5 Q300 9 400 4"
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
          <p className="text-[#5A7A6B] text-lg sm:text-xl font-inter leading-relaxed max-w-2xl mx-auto mb-12">
            Nossos sistemas não apenas cultivam alimentos,{' '}
            <strong className="font-semibold text-[#2A5C42]">
              eles regeneram a forma como consumimos.
            </strong>
          </p>

          {/* Mini pills de destaque */}
          <div className="flex flex-wrap gap-3 justify-center">
            <DataPill icon={<Droplets className="w-4 h-4" />} label="Economia hídrica" value="Até 90% menos água" />
            <DataPill icon={<Leaf className="w-4 h-4" />} label="Defensivos" value="0 agrotóxicos" />
            <DataPill icon={<Recycle className="w-4 h-4" />} label="Transporte" value="Carbono zero local" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BENTO GRID DE MÉTRICAS
      ════════════════════════════════════════ */}
      <section
        ref={gridRef}
        className="relative px-6 md:px-12 lg:px-20 pb-20 overflow-hidden"
      >
        {/* Blob fundo central */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-10"
          style={{
            background: 'radial-gradient(ellipse, #4A8532 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/*
              BENTO GRID:
              Mobile: 1 coluna
              Desktop: 3 colunas, rows com spans variados
              Row 1: [Card 1 span-2] [Card 2 span-1]
              Row 2: [Card 3 span-1] [Card 4 span-2]
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">

            {/* ── Card 1: Economia Hídrica (span 2) ── */}
            <div
              className={`md:col-span-2 group relative
                bg-white/60 backdrop-blur-xl border border-white/50
                shadow-[0_8px_40px_rgba(10,46,31,0.08)]
                hover:shadow-[0_20px_60px_rgba(10,46,31,0.13)]
                rounded-[2.5rem] p-8 lg:p-10 overflow-hidden
                hover:-translate-y-1.5 transition-all duration-500 ease-out
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                transition-all duration-700`}
              style={{ transitionDelay: '0ms' }}
            >
              {/* Aura azul-verde água */}
              <div
                className="absolute -top-10 -right-10 w-52 h-52 rounded-full pointer-events-none opacity-30 group-hover:opacity-45 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse, #38bdf8 0%, transparent 65%)',
                  filter: 'blur(50px)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 flex-wrap">
                {/* Número gigante */}
                <div className="shrink-0">
                  <div className="flex items-start gap-1">
                    <span className="font-black text-[4.5rem] lg:text-[6rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#0ea5e9] via-[#2563eb] to-[#1D4330] select-none">
                      50%-90%
                    </span>
                  </div>
                  {/* Ícone gota grande */}
                  <div className="flex items-center gap-2 mt-2">
                    <Droplets className="w-6 h-6 text-[#0ea5e9]" strokeWidth={1.5} />
                    <span className="text-xs font-bold tracking-widest uppercase text-[#5A7A6B] font-inter">
                      Economia de Água
                    </span>
                  </div>
                </div>

                {/* Divider vertical */}
                <div className="hidden md:block w-px h-36 bg-gradient-to-b from-transparent via-[#0A2E1F]/12 to-transparent shrink-0" aria-hidden="true" />

                {/* Texto */}
                <div className="flex flex-col gap-4 min-w-0 flex-1">
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0A2E1F] leading-tight tracking-tight">
                    Menos água utilizada
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#1D4330]">
                      em comparação ao solo tradicional.
                    </span>
                  </h2>
                  <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed max-w-sm">
                    Cada gota é recirculada e nutrida dentro do sistema fechado. 
                    Tecnologia que respeita o recurso mais precioso do planeta.
                  </p>
                  {/* Barra de progresso visual */}
                  <div>
                    <div className="flex justify-between text-[0.65rem] font-bold text-[#5A7A6B] font-inter mb-2">
                      <span className="uppercase tracking-widest">Hidroponia Raiz</span>
                      <span className="uppercase tracking-widest">Solo tradicional</span>
                    </div>
                    <div className="relative h-3 bg-[#0A2E1F]/8 rounded-full overflow-hidden">
                      <div
                        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#1B5E3A] transition-all duration-1500 ease-out"
                        style={{ width: gridVisible ? '10%' : '0%', transitionDuration: '1.8s' }}
                      />
                    </div>
                    <div className="flex justify-between text-[0.6rem] text-[#5A7A6B]/70 font-inter mt-1.5">
                      <span>10% do consumo</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card 2: Zero Agrotóxicos (span 1) ── */}
            <div
              className={`group relative
                bg-white/60 backdrop-blur-xl border border-white/50
                shadow-[0_8px_40px_rgba(10,46,31,0.08)]
                hover:shadow-[0_20px_60px_rgba(10,46,31,0.13)]
                rounded-[2.5rem] p-8 overflow-hidden
                hover:-translate-y-1.5 transition-all duration-500 ease-out
                flex flex-col justify-between
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                transition-all duration-700`}
              style={{ transitionDelay: '120ms' }}
            >
              {/* Aura verde folha */}
              <div
                className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full pointer-events-none opacity-35 group-hover:opacity-50 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse, #4A8532 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Ícone combo */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4A8532] to-[#1D4330] flex items-center justify-center shadow-lg shadow-[#4A8532]/30 group-hover:scale-110 transition-transform duration-400">
                    <Leaf className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#e11d48]/10 flex items-center justify-center">
                    <HeartPulse className="w-5 h-5 text-[#e11d48]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Número de destaque */}
                <div className="mb-2">
                  <span className="font-black text-[5rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#4A8532] to-[#87A922] select-none">
                    0
                  </span>
                  <span className="font-extrabold text-2xl text-[#4A8532] ml-1">agrotóxicos</span>
                </div>

                <h3 className="text-xl font-bold text-[#0A2E1F] leading-tight tracking-tight mb-3">
                  Zero Agrotóxicos.
                  <br />
                  100% Controle Total.
                </h3>
                <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed">
                  Controle total do ambiente significa comida 100% limpa,
                  direto para a sua mesa. Sem pesticidas, sem fungicidas, sem residual.
                </p>
              </div>

              {/* Check pills */}
              <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                {['Sem pesticidas', 'Sem fungicidas', 'Sem herbicidas'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-[#4A8532]/8 border border-[#4A8532]/15 text-[#2D5A1B] text-[0.6rem] font-bold uppercase tracking-wide px-3 py-1.5 rounded-full">
                    <BadgeCheck className="w-3 h-3" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Card 3: Pegada de Carbono (span 1) ── */}
            <div
              className={`group relative
                bg-gradient-to-br from-[#0B1C14]/95 to-[#1B5E3A]/90
                border border-white/10
                shadow-[0_8px_40px_rgba(10,46,31,0.20)]
                hover:shadow-[0_20px_60px_rgba(10,46,31,0.28)]
                rounded-[2.5rem] p-8 overflow-hidden
                hover:-translate-y-1.5 transition-all duration-500 ease-out
                flex flex-col justify-between
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                transition-all duration-700`}
              style={{ transitionDelay: '240ms' }}
            >
              {/* Aura brilhante interna */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(ellipse, #A4C639 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Ícone */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-400">
                  <Wind className="w-7 h-7 text-[#A4C639]" strokeWidth={1.5} />
                </div>

                {/* Número */}
                <div className="mb-2 flex items-end gap-2">
                  <span className="font-black text-[5rem] leading-none text-white select-none">
                    ↓
                  </span>
                  <span className="font-extrabold text-3xl text-[#A4C639] pb-3">CO₂</span>
                </div>

                <h3 className="text-xl font-bold text-white leading-tight tracking-tight mb-3">
                  Pegada de Carbono
                  <br />
                  <span className="text-[#A4C639]">quase zerada.</span>
                </h3>
                <p className="text-white/60 text-sm font-inter leading-relaxed">
                  Zero transporte. Da semente à colheita no mesmo ambiente.
                  Sem caminhões, sem geladeiras de distribuição, sem desperdício logístico.
                </p>
              </div>

            </div>

            {/* ── Card 4: Retorno em Saúde e ESG (span 2) ── */}
            <div
              className={`md:col-span-2 group relative
                bg-white/60 backdrop-blur-xl border border-white/50
                shadow-[0_8px_40px_rgba(10,46,31,0.08)]
                hover:shadow-[0_20px_60px_rgba(10,46,31,0.13)]
                rounded-[2.5rem] p-8 lg:p-10 overflow-hidden
                hover:-translate-y-1.5 transition-all duration-500 ease-out
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                transition-all duration-700`}
              style={{ transitionDelay: '360ms' }}
            >
              {/* Gradiente sutil interno */}
              <div
                className="absolute inset-0 rounded-[2.5rem] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(135,169,34,0.06) 0%, rgba(74,133,50,0.04) 50%, transparent 100%)',
                }}
                aria-hidden="true"
              />
              {/* Aura */}
              <div
                className="absolute -bottom-12 -left-12 w-64 h-48 rounded-full pointer-events-none opacity-20"
                style={{
                  background: 'radial-gradient(ellipse, #87A922 0%, transparent 70%)',
                  filter: 'blur(60px)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex flex-col gap-6">

                {/* Coluna Saúde Familiar — agora única coluna */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e11d48] to-[#9f1239] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-400">
                      <HeartPulse className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <span className="text-[0.6rem] font-bold text-[#e11d48] tracking-widest uppercase border border-[#e11d48]/20 bg-[#e11d48]/8 px-3 py-1 rounded-full">Para Famílias</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0A2E1F] tracking-tight leading-tight mb-3">
                    Saúde na mesa.
                    <br />
                    <span className="text-[#e11d48]">Economia no bolso.</span>
                  </h3>
                  <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed mb-5">
                    Alimentos frescos, sem agrotóxicos e com valor nutricional máximo.
                    Reduza gastos com hortifrúti e invista na saúde de quem você ama.
                  </p>
                  {/* Comparação visual */}
                  <div className="space-y-3">
                    {[
                      { label: 'Valor nutritivo', raiz: 95, trad: 62 },
                      { label: 'Custo mensal', raiz: 30, trad: 100, invert: true },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-[0.62rem] font-bold text-[#5A7A6B] font-inter mb-1.5">
                          <span className="uppercase tracking-wide">{item.label}</span>
                          <span className="text-[#87A922]">{item.invert ? '20%-70%' : '+53%'} com Raiz</span>
                        </div>
                        <div className="flex gap-1.5 h-2">
                          <div
                            className="rounded-full bg-gradient-to-r from-[#4A8532] to-[#87A922] transition-all ease-out"
                            style={{ width: gridVisible ? `${item.raiz}%` : '0%', transitionDuration: '1.6s', transitionDelay: '400ms' }}
                          />
                          <div
                            className="rounded-full bg-[#0A2E1F]/15 transition-all ease-out"
                            style={{ width: gridVisible ? `${item.trad}%` : '0%', transitionDuration: '1.6s', transitionDelay: '400ms' }}
                          />
                        </div>
                        <div className="flex justify-between text-[0.55rem] text-[#5A7A6B]/60 font-inter mt-1">
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#87A922]" /> Raiz Solar</span>
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#0A2E1F]/20" /> Mercado tradicional</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Card 5: Bônus — Produtividade Biófilica (span 1, full row) ── */}
            <div
              className={`group relative
                bg-white/60 backdrop-blur-xl border border-white/50
                shadow-[0_8px_40px_rgba(10,46,31,0.06)]
                hover:shadow-[0_20px_60px_rgba(10,46,31,0.11)]
                rounded-[2.5rem] p-8 overflow-hidden
                hover:-translate-y-1.5 transition-all duration-500 ease-out
                flex flex-col justify-between
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                transition-all duration-700`}
              style={{ transitionDelay: '480ms' }}
            >
              {/* Aura esmeralda */}
              <div
                className="absolute -top-8 -left-8 w-40 h-40 rounded-full pointer-events-none opacity-25"
                style={{
                  background: 'radial-gradient(ellipse, #A4C639 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A4C639] to-[#4A8532] flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-400">
                  <Sprout className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>

                <div className="mb-2">
                  <AnimatedStat
                    value={15}
                    suffix="%"
                    active={gridVisible}
                    className="font-black text-[4.5rem] leading-none text-transparent bg-clip-text bg-gradient-to-br from-[#87A922] to-[#4A8532] select-none"
                  />
                </div>

                <h3 className="text-lg font-bold text-[#0A2E1F] leading-snug tracking-tight mb-3">
                  Mais produtividade
                  <br />
                  em ambientes biofílicos.
                </h3>
                <p className="text-[#5A7A6B] text-xs font-inter leading-relaxed">
                  Estudos da Universidade de Harvard indicam que
                  ambientes com plantas aumentam a produtividade
                  em até 15% e reduzem o estresse em 37%.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-5 pt-5 border-t border-[#0A2E1F]/6 relative z-10">
                <TrendingUp className="w-4 h-4 text-[#87A922]" />
                <span className="text-[0.65rem] text-[#5A7A6B] font-inter font-medium">Baseado em pesquisas Harvard & Exeter</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BANNER CALCULADORA DE ECONOMIA
      ════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        className="relative px-6 md:px-12 lg:px-20 pb-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative bg-[#114232] text-white
              rounded-full
              px-8 py-6
              flex flex-col sm:flex-row items-center justify-between gap-6
              shadow-[0_16px_64px_rgba(17,66,50,0.35)]
              overflow-hidden
              transition-all duration-1000 ease-out
              ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Blob interno esmeralda */}
            <div
              className="absolute -left-16 -top-10 w-52 h-28 rounded-full pointer-events-none opacity-40"
              style={{
                background: 'radial-gradient(ellipse, #A4C639 0%, transparent 65%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -right-10 bottom-0 w-40 h-32 rounded-full pointer-events-none opacity-25"
              style={{
                background: 'radial-gradient(ellipse, #4A8532 0%, transparent 65%)',
                filter: 'blur(30px)',
              }}
              aria-hidden="true"
            />

            {/* Texto esquerdo */}
            <div className="relative z-10 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                <FlaskConical className="w-6 h-6 text-[#A4C639]" />
              </div>
              <div>
                <p className="text-[0.65rem] text-white/50 font-inter uppercase tracking-widest mb-0.5">
                  Ferramenta gratuita
                </p>
                <p className="font-bold text-lg text-white leading-snug">
                  Descubra quanto você pode
                  <br />
                  <span className="text-[#A4C639]">economizar por ano.</span>
                </p>
              </div>
            </div>

            {/* CTA direito */}
            <div className="relative z-10 flex items-center gap-4 shrink-0">
              <p className="hidden lg:block text-white/50 text-sm font-inter text-right">
                Cálculo personalizado
                <br />
                para o seu perfil.
              </p>
              <a
                href="#contato"
                id="cta-calculadora"
                className="group inline-flex items-center gap-2.5
                  bg-white text-green-800
                  font-bold text-sm
                  rounded-full px-8 py-3.5
                  hover:bg-[#A4C639] hover:text-[#0A2E1F]
                  hover:shadow-[0_8px_32px_rgba(164,198,57,0.5)]
                  hover:-translate-y-0.5
                  transition-all duration-300 active:scale-[0.97]"
              >
                Acessar Calculadora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
