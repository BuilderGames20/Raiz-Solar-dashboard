import React, { useRef, useEffect, useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronDown,
  Send,
  Sparkles,
  Users,
  Building2,
  Star,
  Handshake,
} from 'lucide-react';

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
   Dados
───────────────────────────────────────────── */
const directCards = [
  {
    id: 'whatsapp',
    icon: <MessageCircle className="w-6 h-6" />,
    iconBg: 'bg-gradient-to-br from-[#25D366] to-[#128C7E]',
    iconShadow: 'shadow-[#25D366]/35',
    label: 'WhatsApp Direto',
    sub: 'Atendimento rápido para orçamentos.',
    action: '+55 (27) 9 0000-0000',
    pill: 'Resposta imediata',
    pillClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    href: 'https://wa.me/5527900000000',
    highlight: true,
    cta: 'Iniciar conversa',
  },
  {
    id: 'email',
    icon: <Mail className="w-6 h-6" />,
    iconBg: 'bg-gradient-to-br from-[#4A8532] to-[#1D4330]',
    iconShadow: 'shadow-[#4A8532]/30',
    label: 'E-mail Corporativo',
    sub: 'comercial@raizhidroponia.com.br',
    action: 'comercial@raizhidroponia.com.br',
    pill: 'Resposta em 24h',
    pillClass: 'bg-[#4A8532]/8 text-[#2D5A1B] border-[#4A8532]/20',
    href: 'mailto:comercial@raizhidroponia.com.br',
    cta: 'Enviar e-mail',
  },
  {
    id: 'localizacao',
    icon: <MapPin className="w-6 h-6" />,
    iconBg: 'bg-gradient-to-br from-[#87A922] to-[#4A8532]',
    iconShadow: 'shadow-[#87A922]/30',
    label: 'Sede de Operações',
    sub: 'Serra - ES | Atendimento em toda a Grande Vitória e região.',
    action: 'Serra, Espírito Santo',
    pill: 'Seg–Sex 8h–18h',
    pillClass: 'bg-amber-50 text-amber-700 border-amber-200',
    href: 'https://maps.google.com/?q=Serra,ES',
    cta: 'Ver no mapa',
  },
];

const interests = [
  { value: '', label: 'Qual o seu interesse?' },
  { value: 'residencial', label: '🏠 Horta Residencial' },
  { value: 'corporativo', label: '🏢 Projeto Corporativo' },
  { value: 'parceria', label: '🤝 Parcerias e Revendas' },
  { value: 'outro', label: '💬 Outra Necessidade' },
];

const trustItems = [
  { icon: <Clock className="w-3.5 h-3.5" />, text: 'Resposta em até 2h úteis' },
  { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: 'Sem compromisso de compra' },
  { icon: <Star className="w-3.5 h-3.5" />, text: '4.9 de avaliação média' },
];

/* ─────────────────────────────────────────────
   Sub-componente: Card de Contato Direto
───────────────────────────────────────────── */
function DirectCard({ card, index, visible }) {
  return (
    <a
      href={card.href}
      target={card.href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`group relative flex items-center gap-5
        bg-white/60 backdrop-blur-md border border-white/40
        shadow-[0_4px_24px_rgba(10,46,31,0.07)]
        hover:shadow-[0_12px_40px_rgba(10,46,31,0.13)]
        rounded-[2rem] p-6 overflow-hidden
        hover:translate-x-2 transition-all duration-300 ease-out
        ${card.highlight
          ? 'bg-white/75 border-[#25D366]/30 shadow-[0_4px_24px_rgba(37,211,102,0.12)]'
          : ''}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        transition-all duration-700`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Glow de destaque no card do WhatsApp */}
      {card.highlight && (
        <div
          className="absolute -top-6 -right-6 w-24 h-24 rounded-full pointer-events-none opacity-30"
          style={{
            background: 'radial-gradient(ellipse, #25D366 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Gradiente de acento no hover */}
      <div
        className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-white/30 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ícone */}
      <div
        className={`shrink-0 w-14 h-14 rounded-2xl ${card.iconBg}
          flex items-center justify-center text-white
          shadow-lg ${card.iconShadow}
          group-hover:scale-110 transition-transform duration-300`}
      >
        {card.icon}
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0 relative z-10">
        <p className="font-bold text-[#0A2E1F] text-base leading-tight mb-0.5">
          {card.label}
        </p>
        <p className="text-[#5A7A6B] text-xs font-inter leading-snug truncate">
          {card.sub}
        </p>
        {/* SLA pill */}
        <span className={`inline-flex items-center gap-1.5 mt-2 text-[0.58rem] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-full ${card.pillClass}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
          {card.pill}
        </span>
      </div>

      {/* Seta */}
      <div className="shrink-0 w-8 h-8 rounded-full bg-[#0A2E1F]/5 flex items-center justify-center
        group-hover:bg-[#4A8532]/10 transition-colors duration-300 relative z-10">
        <ArrowRight className="w-4 h-4 text-[#5A7A6B] group-hover:text-[#4A8532] group-hover:translate-x-0.5 transition-all duration-300" />
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────────
   Sub-componente: Campo de formulário
───────────────────────────────────────────── */
function FastField({ label, id, type = 'text', placeholder, required, value, onChange, rows }) {
  const base = `w-full rounded-2xl bg-gray-50 border border-transparent
    px-5 py-4 text-sm text-[#0A2E1F] placeholder:text-[#0A2E1F]/35
    focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-400/60 focus:border-green-200/60
    hover:bg-white/80 transition-all duration-200 font-inter`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[0.65rem] font-bold text-[#0A2E1F] uppercase tracking-widest font-poppins flex gap-1">
        {label}
        {required && <span className="text-green-500 text-sm leading-none">*</span>}
      </label>
      {rows ? (
        <textarea id={id} rows={rows} placeholder={placeholder} value={value} onChange={onChange} required={required} className={`${base} resize-none`} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} required={required} className={base} />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────── */
export default function Contato() {
  const [headerRef, headerVisible] = useInView(0.1);
  const [gridRef,   gridVisible]   = useInView(0.06);

  const [form, setForm] = useState({ name: '', whatsapp: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const field = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contato" className="relative w-full overflow-hidden bg-[#F4F9F5] font-poppins">

      {/* ════════════════════════════════════════
          HERO DE CONTATO
      ════════════════════════════════════════ */}
      <section
        ref={headerRef}
        className="relative pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Blob verde-limão topo direito */}
        <div
          className="absolute -top-16 -right-16 w-[480px] h-[360px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(135,169,34,0.22) 0%, transparent 68%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />
        {/* Blob verde floresta esquerda */}
        <div
          className="absolute -top-8 -left-20 w-[420px] h-[320px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 30% 40%, rgba(29,67,48,0.18) 0%, transparent 68%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />
        {/* Blob verde central suave */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(74,133,50,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        {/* Partículas */}
        <div className="absolute top-20 left-[15%] w-2.5 h-2.5 rounded-full bg-[#87A922]/55 blur-[1px] animate-float pointer-events-none" />
        <div className="absolute top-32 right-[18%] w-2 h-2 rounded-full bg-[#4A8532]/40 animate-float-slow pointer-events-none" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-10 left-[40%] w-2 h-2 rounded-full bg-[#A4C639]/50 blur-[1px] animate-float pointer-events-none" style={{ animationDelay: '2.5s' }} />

        <div
          className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2.5 bg-[#4A8532]/10 border border-[#4A8532]/20 text-[#2D5A1B] text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#87A922]" />
            Fale com a nossa equipe
          </span>

          {/* Título */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold text-[#0A2E1F] leading-[1.06] tracking-tight mb-6">
            Vamos cultivar algo
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A5C42] via-[#4A8532] to-[#87A922]">
                incrível juntos.
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8" preserveAspectRatio="none" aria-hidden="true">
                <path d="M0 6 Q100 1 200 5 Q300 9 400 4" stroke="#87A922" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.65" />
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-[#5A7A6B] text-lg sm:text-xl font-inter leading-relaxed max-w-xl mx-auto mb-10">
            Fale com nossos especialistas e descubra o sistema ideal para{' '}
            <strong className="font-semibold text-[#2A5C42]">a sua casa ou empresa.</strong>
          </p>

          {/* Perfis de atendimento */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: <Users className="w-3.5 h-3.5" />, label: 'Famílias e residências' },
              { icon: <Building2 className="w-3.5 h-3.5" />, label: 'Projetos corporativos' },
              { icon: <Handshake className="w-3.5 h-3.5" />, label: 'Parcerias e revendas' },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-2 bg-white/65 backdrop-blur-sm border border-white/60 text-[#2A5C42] text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                {p.icon}
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GRID 50/50: CARDS + FORMULÁRIO
      ════════════════════════════════════════ */}
      <section
        ref={gridRef}
        className="relative px-6 md:px-12 lg:px-20 pb-28 overflow-visible"
      >
        {/* Blob fundo */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-10"
          style={{
            background: 'radial-gradient(ellipse, #4A8532 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ────────────────────────────────
                COLUNA ESQUERDA — Cards Diretos
            ──────────────────────────────── */}
            <div className="flex flex-col gap-5">

              {/* Chapéu da coluna */}
              <div
                className={`mb-2 transition-all duration-700 ease-out
                  ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              >
                <p className="text-[0.65rem] font-bold text-[#87A922] tracking-widest uppercase mb-1">Contato direto</p>
                <h2 className="text-2xl font-extrabold text-[#0A2E1F] tracking-tight">Fale agora mesmo.</h2>
                <p className="text-[#5A7A6B] text-sm font-inter mt-1">Sem filas, sem burocracia. Escolha o canal preferido.</p>
              </div>

              {/* Cards de canal */}
              {directCards.map((card, i) => (
                <DirectCard key={card.id} card={card} index={i} visible={gridVisible} />
              ))}

              {/* Bloco de horário de funcionamento */}
              <div
                className={`bg-white/40 backdrop-blur-sm border border-white/50 rounded-[1.5rem] p-5
                  flex items-center gap-4 transition-all duration-700 ease-out
                  ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '480ms' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A2E1F]/6 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#4A8532]" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#0A2E1F]">Horário de Atendimento</p>
                  <p className="text-xs text-[#5A7A6B] font-inter mt-0.5">
                    Segunda a Sexta, das <strong className="text-[#0A2E1F]">8h às 18h</strong> · Sábado <strong className="text-[#0A2E1F]">9h às 13h</strong>
                  </p>
                </div>
              </div>

              {/* Prova social discreta */}
              <div
                className={`flex items-center gap-4 pl-2 transition-all duration-700 ease-out
                  ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="flex -space-x-2">
                  {['🧑‍💼', '👩‍🌾', '👨‍💻', '👩‍💼'].map((emoji, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A8532]/20 to-[#87A922]/10 border-2 border-white flex items-center justify-center text-sm shadow-sm">
                      {emoji}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#87A922] fill-[#87A922]" />)}
                    <span className="text-xs font-bold text-[#0A2E1F] ml-1">4.9</span>
                  </div>
                  <p className="text-[0.65rem] text-[#5A7A6B] font-inter">+2.500 clientes satisfeitos em todo o ES</p>
                </div>
              </div>
            </div>

            {/* ────────────────────────────────
                COLUNA DIREITA — Formulário Fast-Track
            ──────────────────────────────── */}
            <div
              className={`transition-all duration-1000 ease-out delay-200
                ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              {/* Container Glassmorphism denso */}
              <div className="relative bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_16px_80px_rgba(10,46,31,0.13)] rounded-[3rem] p-8 md:p-10 overflow-hidden">

                {/* Blob interno decorativo */}
                <div
                  className="absolute -top-10 -right-10 w-52 h-40 rounded-full pointer-events-none opacity-25"
                  style={{
                    background: 'radial-gradient(ellipse, #87A922 0%, transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                  aria-hidden="true"
                />

                {/* Header do form */}
                <div className="relative z-10 flex items-center gap-4 mb-8 pb-6 border-b border-[#0A2E1F]/6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A8532] to-[#1D4330] flex items-center justify-center shadow-lg shadow-[#4A8532]/25 shrink-0">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-bold text-[#87A922] tracking-widest uppercase mb-0.5">Fast-Track</p>
                    <h2 className="text-xl font-extrabold text-[#0A2E1F] tracking-tight leading-tight">
                      Solicitar Orçamento
                    </h2>
                  </div>
                  {/* Badge "sem compromisso" */}
                  <span className="ml-auto text-[0.58rem] font-bold text-[#2D5A1B] bg-[#87A922]/10 border border-[#87A922]/25 px-2.5 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap hidden sm:inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Sem compromisso
                  </span>
                </div>

                {/* Estado: enviado */}
                {submitted ? (
                  <div className="relative z-10 flex flex-col items-center justify-center py-16 gap-5 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#4A8532]/10 border-2 border-[#4A8532]/25 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-[#4A8532]" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0A2E1F]">Solicitação enviada!</h3>
                    <p className="text-[#5A7A6B] text-sm font-inter max-w-xs leading-relaxed">
                      Nossa equipe entrará em contato em até 2 horas úteis pelo WhatsApp informado. Obrigado!
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', whatsapp: '', interest: '', message: '' }); }}
                      className="text-[#4A8532] font-semibold text-sm border-b border-[#87A922]/50 pb-0.5 hover:border-[#87A922] transition-colors duration-200"
                    >
                      Fazer novo pedido
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-5">

                    {/* Nome + WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FastField
                        id="lead-name"
                        label="Nome Completo"
                        placeholder="Seu nome"
                        required
                        value={form.name}
                        onChange={field('name')}
                      />
                      <FastField
                        id="lead-whatsapp"
                        label="WhatsApp"
                        type="tel"
                        placeholder="(27) 9 0000-0000"
                        required
                        value={form.whatsapp}
                        onChange={field('whatsapp')}
                      />
                    </div>

                    {/* Select de interesse */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lead-interest" className="text-[0.65rem] font-bold text-[#0A2E1F] uppercase tracking-widest font-poppins flex gap-1">
                        Qual o seu interesse? <span className="text-green-500 text-sm leading-none">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="lead-interest"
                          value={form.interest}
                          onChange={field('interest')}
                          required
                          className="w-full appearance-none rounded-2xl bg-gray-50 border border-transparent
                            px-5 py-4 text-sm font-inter text-[#0A2E1F]
                            focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-400/60 focus:border-green-200/60
                            hover:bg-white/80 transition-all duration-200 cursor-pointer"
                        >
                          {interests.map((opt) => (
                            <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7A6B] pointer-events-none" />
                      </div>
                    </div>

                    {/* Mensagem breve */}
                    <FastField
                      id="lead-message"
                      label="Mensagem breve"
                      placeholder="Conte brevemente sobre seu espaço, necessidade ou dúvida..."
                      rows={3}
                      value={form.message}
                      onChange={field('message')}
                    />

                    {/* Trust strip */}
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 pt-1">
                      {trustItems.map((t) => (
                        <div key={t.text} className="flex items-center gap-1.5 text-[#5A7A6B] text-xs font-inter">
                          <span className="text-[#4A8532]">{t.icon}</span>
                          {t.text}
                        </div>
                      ))}
                    </div>

                    {/* Botão CTA agressivo e luxuoso */}
                    <button
                      type="submit"
                      id="cta-orcamento-contato"
                      className="group relative w-full inline-flex items-center justify-center gap-3
                        bg-gradient-to-r from-green-600 to-green-400
                        hover:from-green-500 hover:to-green-300
                        text-white font-bold text-lg
                        rounded-full py-4
                        shadow-[0_8px_40px_rgba(74,133,50,0.35)]
                        hover:shadow-[0_12px_56px_rgba(74,133,50,0.50)]
                        hover:-translate-y-1
                        transition-all duration-300 active:scale-[0.97]
                        overflow-hidden"
                    >
                      {/* Brilho tátil */}
                      <span
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.20) 0%,transparent 55%)' }}
                        aria-hidden="true"
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        Solicitar Orçamento sem Compromisso
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </button>

                    <p className="text-center text-[#5A7A6B]/55 text-[0.62rem] font-inter">
                      Ao enviar, você concorda com nossa{' '}
                      <a href="#" className="underline underline-offset-2 hover:text-[#4A8532] transition-colors duration-200">
                        Política de Privacidade
                      </a>. Não compartilhamos seus dados com terceiros.
                    </p>
                  </form>
                )}
              </div>

              {/* Mini mapa / localização simbólica */}
              <div
                className="mt-5 bg-white/50 backdrop-blur-sm border border-white/50 rounded-[1.5rem] p-5
                  flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#87A922] to-[#4A8532] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-[#0A2E1F]">Serra, Espírito Santo</p>
                  <p className="text-xs text-[#5A7A6B] font-inter mt-0.5">
                    Atendemos toda a Grande Vitória, interior do ES e projetos remotos em todo o Brasil.
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Serra,ES"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[0.65rem] font-bold text-[#4A8532] border-b border-[#87A922]/50 pb-0.5 hover:border-[#4A8532] transition-colors duration-200 whitespace-nowrap"
                >
                  Ver no mapa ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
