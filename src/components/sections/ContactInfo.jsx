import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(11) 3090-2838',
    description: 'Seg a Sex, 8h às 18h',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'comercial@raizhidroponia.com.br',
    description: 'Respondemos em até 24h',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'Rua Verbo Divino, 2001',
    description: 'CJ 305 - São Paulo, SP',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg a Sex: 8h - 18h',
    description: 'Sáb: 9h - 13h',
  },
];

export default function ContactInfo() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative bg-brand-bg section-padding">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.01]"
        style={{
          backgroundImage: 'radial-gradient(circle, #0A2E1F 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 font-inter text-[0.65rem] font-semibold text-brand-green-light tracking-wide-premium uppercase bg-brand-green-light/8 rounded-full px-4 py-1.5">
            <span className="w-1 h-1 rounded-full bg-brand-green-light" />
            Fale Conosco
          </span>
          <h2 className="premium-heading text-3xl sm:text-4xl lg:text-5xl text-brand-green-dark">
            Vamos construir um{' '}
            <span className="text-gradient">futuro verde</span> juntos?
          </h2>
          <p className="premium-body text-base text-soft max-w-lg mx-auto">
            Entre em contato e descubra como a hidroponia inteligente pode transformar sua empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="glass-card glass-card-hover p-5 flex items-start gap-4 animate-fade-in-up cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-green-light/15 to-brand-emerald/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-brand-green-light" />
                  </div>
                  <div>
                    <p className="font-inter text-[0.65rem] text-softer font-medium uppercase tracking-wide-premium mb-0.5">{item.label}</p>
                    <p className="font-poppins font-semibold text-sm text-brand-green-dark tracking-premium">{item.value}</p>
                    <p className="font-inter text-xs text-soft mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 md:p-10 shadow-elevated">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-green-light/20 to-brand-emerald/10 flex items-center justify-center animate-glow">
                    <CheckCircle className="w-8 h-8 text-brand-green-light" />
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-brand-green-dark tracking-premium">Mensagem Enviada!</h3>
                  <p className="font-inter text-sm text-soft text-center max-w-xs">
                    Obrigado pelo contato. Nossa equipe retornará em até 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-inter text-[0.65rem] font-semibold text-softer mb-2 uppercase tracking-wide-premium">
                        Nome completo
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/80 border border-brand-green-dark/8 font-inter text-sm text-brand-green-dark placeholder:text-brand-green-dark/25 focus:outline-none focus:ring-2 focus:ring-brand-green-light/30 focus:border-brand-green-light/50 transition-all duration-300"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-[0.65rem] font-semibold text-softer mb-2 uppercase tracking-wide-premium">
                        E-mail
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/80 border border-brand-green-dark/8 font-inter text-sm text-brand-green-dark placeholder:text-brand-green-dark/25 focus:outline-none focus:ring-2 focus:ring-brand-green-light/30 focus:border-brand-green-light/50 transition-all duration-300"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-[0.65rem] font-semibold text-softer mb-2 uppercase tracking-wide-premium">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/80 border border-brand-green-dark/8 font-inter text-sm text-brand-green-dark placeholder:text-brand-green-dark/25 focus:outline-none focus:ring-2 focus:ring-brand-green-light/30 focus:border-brand-green-light/50 transition-all duration-300"
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-[0.65rem] font-semibold text-softer mb-2 uppercase tracking-wide-premium">
                      Mensagem
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-bg/80 border border-brand-green-dark/8 font-inter text-sm text-brand-green-dark placeholder:text-brand-green-dark/25 focus:outline-none focus:ring-2 focus:ring-brand-green-light/30 focus:border-brand-green-light/50 transition-all duration-300 resize-none"
                      placeholder="Descreva seu projeto ou dúvida..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="group relative flex items-center justify-center gap-2 bg-gradient-cta text-white font-poppins font-semibold text-sm px-8 py-4 rounded-xl shadow-btn-depth hover:shadow-btn-depth-hover transition-all duration-300 active:scale-[0.97] overflow-hidden w-full sm:w-auto"
                  >
                    <span className="absolute inset-0 bg-gradient-to-b from-white/12 to-transparent rounded-xl pointer-events-none" />
                    <span className="relative z-10 flex items-center gap-2">
                      Enviar Mensagem
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
