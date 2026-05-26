import React, { useRef, useEffect, useState } from 'react';
import {
  Lightbulb,
  Headset,
  ShieldCheck,
  Lock,
  MessageSquare,
  Eye,
  EyeOff,
  Send,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Globe,
  ChevronDown,
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
const channels = [
  {
    id: 'sugestoes',
    icon: <Lightbulb className="w-7 h-7" />,
    iconBg: 'bg-gradient-to-br from-amber-400 to-amber-600',
    iconShadow: 'shadow-amber-400/30',
    tag: 'Sugestões',
    title: 'Sugestões e Melhorias',
    desc: 'Ideias para melhorar nossos produtos, serviços ou processos. Sua visão nos ajuda a evoluir.',
    pill: 'Resposta em 48h',
    pillColor: 'bg-amber-50 text-amber-700 border-amber-200',
    border: 'hover:border-amber-200/80',
    accent: 'from-amber-400/10 to-transparent',
  },
  {
    id: 'suporte',
    icon: <Headset className="w-7 h-7" />,
    iconBg: 'bg-gradient-to-br from-[#4A8532] to-[#1D4330]',
    iconShadow: 'shadow-[#4A8532]/30',
    tag: 'Suporte Técnico',
    title: 'Suporte ao Cliente',
    desc: 'Precisa de ajuda técnica com o seu sistema hidropônico? Nossa equipe especializada está pronta.',
    pill: 'Resposta em 24h',
    pillColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    border: 'hover:border-emerald-200/80',
    accent: 'from-[#4A8532]/10 to-transparent',
  },
  {
    id: 'ouvidoria',
    icon: <ShieldCheck className="w-7 h-7" />,
    iconBg: 'bg-gradient-to-br from-teal-600 to-[#0B3D2E]',
    iconShadow: 'shadow-teal-600/30',
    tag: 'Confidencial',
    title: 'Relatos e Ouvidoria',
    desc: 'Canal seguro e anônimo para questões de conduta e ética. Garantimos absoluta confidencialidade.',
    pill: 'Anônimo & Seguro',
    pillColor: 'bg-teal-50 text-teal-700 border-teal-200',
    border: 'border-teal-400/40 hover:border-teal-400/70',
    accent: 'from-teal-500/12 to-transparent',
    highlight: true,
  },
];

const categories = [
  'Selecione o tipo de contato',
  'Sugestão de melhoria',
  'Problema técnico no equipamento',
  'Questão financeira / cobrança',
  'Relato de conduta',
  'Elogio',
  'Outro assunto',
];

const governanceItems = [
  { icon: <Lock className="w-4 h-4" />, text: 'Criptografia de ponta a ponta (TLS 1.3)' },
  { icon: <ShieldAlert className="w-4 h-4" />, text: 'Conformidade total com a LGPD' },
  { icon: <Clock className="w-4 h-4" />, text: 'Tempo médio de resposta: 24 horas úteis' },
  { icon: <Globe className="w-4 h-4" />, text: 'Dados armazenados em servidores no Brasil' },
];

/* ─────────────────────────────────────────────
   Sub-componente: Toggle de Anonimato
───────────────────────────────────────────── */
function AnonToggle({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`group relative flex items-center gap-4 w-full
        rounded-2xl px-5 py-4 border transition-all duration-300 cursor-pointer text-left
        ${checked
          ? 'bg-teal-50/80 border-teal-300/60 shadow-[0_2px_12px_rgba(20,184,166,0.12)]'
          : 'bg-white/60 border-white/60 hover:border-teal-200/60'
        }`}
    >
      {/* Trilho do switch */}
      <div
        className={`relative w-12 h-6 rounded-full shrink-0 transition-all duration-300
          ${checked ? 'bg-gradient-to-r from-teal-500 to-teal-600' : 'bg-[#0A2E1F]/15'}`}
      >
        <span
          className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300
            ${checked ? 'left-7' : 'left-1'}`}
        />
      </div>

      {/* Texto */}
      <div className="flex-1">
        <p className={`text-sm font-semibold transition-colors duration-200 ${checked ? 'text-teal-800' : 'text-[#0A2E1F]'}`}>
          Desejo que este relato seja anônimo
        </p>
        <p className="text-xs text-[#5A7A6B] font-inter mt-0.5">
          {checked
            ? 'Seu nome e e-mail não serão vinculados a este relato.'
            : 'Ative para enviar sem identificação pessoal.'}
        </p>
      </div>

      {/* Ícone de olho */}
      <div className={`shrink-0 transition-colors duration-200 ${checked ? 'text-teal-500' : 'text-[#5A7A6B]/50'}`}>
        {checked ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   Sub-componente: Input Field
───────────────────────────────────────────── */
function FormField({ label, id, type = 'text', placeholder, required, value, onChange, rows }) {
  const baseClass = `w-full bg-white/80 border border-white/60
    rounded-xl px-6 py-4
    text-sm text-[#0A2E1F] placeholder:text-[#5A7A6B]/60
    shadow-[inset_0_2px_8px_rgba(10,46,31,0.04)]
    focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:border-teal-300/60
    hover:bg-white/90 hover:border-white/80
    transition-all duration-200 font-inter`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold text-[#0A2E1F] uppercase tracking-widest font-poppins flex items-center gap-1">
        {label}
        {required && <span className="text-teal-500 text-sm leading-none">*</span>}
      </label>
      {rows ? (
        <textarea
          id={id}
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={baseClass}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Componente Principal
───────────────────────────────────────────── */
export default function Ouvidoria() {
  const [headerRef,  headerVisible]  = useInView(0.1);
  const [cardsRef,   cardsVisible]   = useInView(0.08);
  const [formRef,    formVisible]    = useInView(0.05);

  const [activeChannel, setActiveChannel] = useState(null);
  const [isAnonymous,   setIsAnonymous]   = useState(false);
  const [category,      setCategory]      = useState('');
  const [submitted,     setSubmitted]     = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', message: '',
  });

  const handleField = (field) => (e) =>
    setFormData((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="ouvidoria" className="relative w-full overflow-hidden bg-[#F4F9F5] font-poppins">

      {/* ════════════════════════════════════════
          TRUST HEADER
      ════════════════════════════════════════ */}
      <section
        ref={headerRef}
        className="relative pt-28 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden"
      >
        {/* Blob teal — segurança / calma */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(20,184,166,0.10) 0%, rgba(74,133,50,0.06) 40%, transparent 70%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />
        {/* Blob verde suave esquerda */}
        <div
          className="absolute -top-16 -left-16 w-[380px] h-[280px] rounded-full pointer-events-none opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(20,184,166,0.6) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
          aria-hidden="true"
        />
        {/* Blob teal direita */}
        <div
          className="absolute top-8 -right-12 w-[320px] h-[240px] rounded-full pointer-events-none opacity-15"
          style={{
            background: 'radial-gradient(ellipse, rgba(20,184,166,0.7) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
          aria-hidden="true"
        />

        {/* Partículas sutis */}
        <div className="absolute top-24 left-[18%] w-2 h-2 rounded-full bg-teal-400/50 blur-[1px] animate-float pointer-events-none" />
        <div className="absolute top-36 right-[22%] w-2.5 h-2.5 rounded-full bg-[#87A922]/35 animate-float-slow pointer-events-none" style={{ animationDelay: '2s' }} />

        <div
          className={`relative z-10 max-w-3xl mx-auto text-center transition-all duration-1000 ease-out
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2.5 bg-teal-500/10 border border-teal-400/25 text-teal-800 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
            Canal Oficial de Governança
          </span>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#0A2E1F] leading-[1.1] tracking-tight mb-6">
            Transparência é
            <br />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-[#4A8532]">
                a nossa raiz.
              </span>
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                height="8"
                viewBox="0 0 320 8"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M0 6 Q80 1 160 5 Q240 9 320 4"
                  stroke="#14b8a6"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-[#5A7A6B] text-base sm:text-lg font-inter leading-relaxed max-w-xl mx-auto mb-10">
            Um canal direto, seguro e confidencial para dúvidas, sugestões ou relatos.{' '}
            <span className="font-semibold text-[#2A5C42]">
              Sua voz constrói o nosso futuro.
            </span>
          </p>

          {/* Mini garantias */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { icon: <Lock className="w-3.5 h-3.5" />, label: 'Criptografado' },
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: 'Conformidade LGPD' },
              { icon: <Clock className="w-3.5 h-3.5" />, label: 'Resposta em 24h' },
            ].map((g) => (
              <div key={g.label} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/60 text-[#2A5C42] text-xs font-semibold px-4 py-2 rounded-full shadow-sm">
                {g.icon}
                {g.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CARDS DE TRIAGEM
      ════════════════════════════════════════ */}
      <section
        ref={cardsRef}
        className="relative px-6 md:px-12 lg:px-20 pb-4 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {channels.map((ch, index) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => setActiveChannel(activeChannel === ch.id ? null : ch.id)}
              className={`group relative text-left
                bg-white/70 backdrop-blur-xl border border-white/50
                shadow-[0_4px_24px_rgba(10,46,31,0.07)]
                hover:shadow-[0_12px_40px_rgba(10,46,31,0.12)]
                rounded-[2rem] p-8 overflow-hidden
                hover:-translate-y-2 transition-all duration-300 ease-out
                focus:outline-none
                ${ch.highlight ? `${ch.border} shadow-[0_4px_24px_rgba(20,184,166,0.12)]` : ch.border}
                ${activeChannel === ch.id ? 'ring-2 ring-teal-400/50 shadow-[0_12px_40px_rgba(20,184,166,0.15)]' : ''}
                ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                transition-all duration-700`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Gradiente de acento no hover */}
              <div
                className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${ch.accent}
                  opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`}
                aria-hidden="true"
              />

              {/* Ribbon "Confidencial" no card de destaque */}
              {ch.highlight && (
                <div className="absolute top-5 right-5">
                  <span className="flex items-center gap-1.5 bg-teal-500/15 border border-teal-400/30 text-teal-700 text-[0.6rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    Anônimo
                  </span>
                </div>
              )}

              <div className="relative z-10">
                {/* Ícone */}
                <div
                  className={`w-14 h-14 rounded-2xl ${ch.iconBg}
                    flex items-center justify-center text-white
                    shadow-lg ${ch.iconShadow} mb-6
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  {ch.icon}
                </div>

                {/* Tag */}
                <span className={`inline-block text-[0.6rem] font-bold tracking-widest uppercase border px-3 py-1 rounded-full mb-3 ${ch.pillColor}`}>
                  {ch.tag}
                </span>

                {/* Título */}
                <h3 className="text-lg font-extrabold text-[#0A2E1F] leading-tight tracking-tight mb-2">
                  {ch.title}
                </h3>

                {/* Descrição */}
                <p className="text-[#5A7A6B] text-sm font-inter leading-relaxed">
                  {ch.desc}
                </p>

                {/* SLA Pill */}
                <div className={`inline-flex items-center gap-1.5 mt-5 text-[0.65rem] font-bold uppercase tracking-wide border px-3 py-1.5 rounded-full ${ch.pillColor}`}>
                  <Clock className="w-3 h-3" />
                  {ch.pill}
                </div>

                {/* Indicador "selecionado" */}
                {activeChannel === ch.id && (
                  <div className="absolute bottom-5 right-5 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shadow-md">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          FORMULÁRIO SEGURO
      ════════════════════════════════════════ */}
      <section
        ref={formRef}
        className="relative px-6 md:px-12 lg:px-20 py-16 pb-12 overflow-hidden"
      >
        {/* Blob de fundo teal centralizado */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-[600px] h-[400px] rounded-full opacity-15"
            style={{
              background: 'radial-gradient(ellipse, rgba(20,184,166,0.5) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Painel Glassmorphism do formulário */}
          <div
            className={`bg-white/50 backdrop-blur-2xl border border-white/60
              rounded-[3rem] p-8 md:p-12 shadow-[0_16px_64px_rgba(10,46,31,0.09)]
              transition-all duration-1000 ease-out
              ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Header do formulário */}
            <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[#0A2E1F]/6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-500/25">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[0.6rem] font-bold text-teal-600 tracking-widest uppercase mb-0.5">
                  Formulário Seguro
                </p>
                <h2 className="text-xl font-extrabold text-[#0A2E1F] tracking-tight">
                  {activeChannel
                    ? channels.find((c) => c.id === activeChannel)?.title ?? 'Envie sua mensagem'
                    : 'Envie sua mensagem'}
                </h2>
              </div>
              {/* Badge de seleção ativa */}
              {activeChannel && (
                <span className={`ml-auto text-[0.6rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border
                  ${channels.find((c) => c.id === activeChannel)?.pillColor ?? ''}`}>
                  {channels.find((c) => c.id === activeChannel)?.tag}
                </span>
              )}
            </div>

            {/* ESTADO: Formulário enviado com sucesso */}
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-5 text-center">
                <div className="w-20 h-20 rounded-full bg-teal-50 border-2 border-teal-200 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0A2E1F]">Mensagem recebida!</h3>
                <p className="text-[#5A7A6B] text-sm font-inter max-w-sm">
                  Sua mensagem foi enviada com segurança. Você receberá um protocolo de atendimento em breve.
                  {isAnonymous && ' Como solicitado, seu relato permanece anônimo.'}
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); setIsAnonymous(false); setActiveChannel(null); }}
                  className="mt-2 text-teal-600 font-semibold text-sm border-b border-teal-400/50 pb-0.5 hover:border-teal-600 transition-colors duration-200"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Linha: Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    id="nome"
                    label="Nome Completo"
                    placeholder="Seu nome"
                    required={!isAnonymous}
                    value={isAnonymous ? '' : formData.name}
                    onChange={handleField('name')}
                  />
                  <FormField
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="seu@email.com.br"
                    required={!isAnonymous}
                    value={isAnonymous ? '' : formData.email}
                    onChange={handleField('email')}
                  />
                </div>

                {/* Campos desabilitados se anônimo */}
                {isAnonymous && (
                  <div className="flex items-center gap-3 bg-teal-50/70 border border-teal-200/60 rounded-xl px-5 py-3.5">
                    <EyeOff className="w-4 h-4 text-teal-500 shrink-0" />
                    <p className="text-xs text-teal-700 font-inter">
                      Modo anônimo ativado. Nome e e-mail não serão solicitados nem armazenados.
                    </p>
                  </div>
                )}

                {/* Categoria */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="categoria" className="text-xs font-bold text-[#0A2E1F] uppercase tracking-widest font-poppins">
                    Categoria
                  </label>
                  <div className="relative">
                    <select
                      id="categoria"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                      className="w-full appearance-none bg-white/80 border border-white/60
                        rounded-xl px-6 py-4
                        text-sm font-inter text-[#0A2E1F]
                        shadow-[inset_0_2px_8px_rgba(10,46,31,0.04)]
                        focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:border-teal-300/60
                        hover:bg-white/90 transition-all duration-200 cursor-pointer"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat === categories[0] ? '' : cat} disabled={cat === categories[0]}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A7A6B] pointer-events-none" />
                  </div>
                </div>

                {/* Mensagem */}
                <FormField
                  id="mensagem"
                  label="Mensagem"
                  placeholder="Descreva com detalhes. Quanto mais informações, mais rápido podemos ajudar..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleField('message')}
                />

                {/* Toggle Anonimato */}
                <AnonToggle checked={isAnonymous} onChange={setIsAnonymous} />

                {/* Aviso de protocolo */}
                <div className="flex items-start gap-3 bg-[#4A8532]/6 border border-[#4A8532]/12 rounded-xl px-5 py-4">
                  <CheckCircle2 className="w-4 h-4 text-[#4A8532] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#5A7A6B] font-inter leading-relaxed">
                    Ao enviar, você receberá automaticamente um <strong className="text-[#0A2E1F]">número de protocolo</strong> para acompanhar o andamento. Garantimos sigilo absoluto no tratamento das informações.
                  </p>
                </div>

                {/* Botão de envio */}
                <button
                  type="submit"
                  id="btn-enviar-ouvidoria"
                  className="group relative w-full inline-flex items-center justify-center gap-3
                    bg-gradient-to-r from-teal-700 to-[#1B5E3A]
                    hover:from-teal-600 hover:to-[#2A6E4A]
                    text-white font-semibold text-base
                    rounded-full py-4
                    shadow-[0_8px_32px_rgba(20,184,166,0.3)]
                    hover:shadow-[0_12px_48px_rgba(20,184,166,0.45)]
                    hover:-translate-y-1
                    transition-all duration-300 active:scale-[0.97]
                    overflow-hidden"
                >
                  <span
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: 'linear-gradient(180deg,rgba(255,255,255,0.15) 0%,transparent 55%)' }}
                    aria-hidden="true"
                  />
                  <Lock className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Enviar Relato Seguro</span>
                  <Send className="w-4 h-4 relative z-10 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

              </form>
            )}
          </div>

          {/* ── Rodapé de Governança ── */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {governanceItems.map((g) => (
                <div key={g.text} className="flex items-center gap-2 text-[#5A7A6B] text-xs font-inter">
                  <span className="text-teal-500">{g.icon}</span>
                  {g.text}
                </div>
              ))}
            </div>
            <p className="text-[#5A7A6B]/55 text-[0.65rem] font-inter text-center max-w-md">
              Este canal é gerenciado de forma independente pela equipe de Governança e Compliance da Raiz Solar. 
              Todos os relatos são tratados com absoluta confidencialidade, independentemente de hierarquia.
            </p>
          </div>
        </div>
      </section>

      {/* Espaço final */}
      <div className="h-20" />

    </div>
  );
}
