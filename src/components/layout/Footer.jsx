import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';

const InstagramSvg = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookSvg = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinSvg = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: InstagramSvg, label: 'Instagram' },
    { Icon: FacebookSvg, label: 'Facebook' },
    { Icon: LinkedinSvg, label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gradient-forest text-white overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/4 via-transparent to-black/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green-light/5 rounded-bl-[8rem] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-emerald/8 rounded-tr-[6rem] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green-light/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
                <Sprout className="w-5 h-5 text-brand-green-glow" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-lg leading-none tracking-premium">
                  Raiz<span className="text-brand-green-glow">Hidroponia</span>
                </span>
                <span className="font-inter text-[0.5rem] font-medium text-white/40 tracking-wide-premium uppercase mt-0.5">
                  Cultivo Inteligente
                </span>
              </div>
            </Link>
            <p className="font-inter text-sm text-white/45 leading-relaxed max-w-xs">
              Soluções completas em hidroponia corporativa inteligente. 
              Unindo sustentabilidade e tecnologia agrícola avançada para um futuro mais verde.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="font-poppins font-semibold text-sm mb-5 tracking-premium text-white/90">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: 'Início',    to: '/' },
                { label: 'Soluções', to: '/solucoes' },
                { label: 'Impacto',  to: '/impacto' },
                { label: 'Contato',  to: '/contato' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-inter text-sm text-white/45 hover:text-brand-green-glow transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="font-poppins font-semibold text-sm mb-5 tracking-premium text-white/90">Soluções</h4>
            <ul className="space-y-3">
              {[
                { label: 'Hortas Corporativas',    to: '/solucoes' },
                { label: 'Hidroponia Residencial', to: '/para-sua-casa' },
                { label: 'Sistemas IoT',           to: '/produtos' },
                { label: 'Consultoria Verde',      to: '/contato' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-inter text-sm text-white/45 hover:text-brand-green-glow transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-poppins font-semibold text-sm mb-5 tracking-premium text-white/90">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green-glow/70 flex-shrink-0" />
                <span className="font-inter text-sm text-white/45">(11) 3090-2838</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-green-glow/70 flex-shrink-0" />
                <span className="font-inter text-sm text-white/45">comercial@raizhidroponia.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green-glow/70 flex-shrink-0 mt-0.5" />
                <span className="font-inter text-sm text-white/45">Rua Verbo Divino, 2001<br/>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-xs text-white/30">
            © {currentYear} RaizHidroponia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            {socialIcons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center hover:bg-brand-green-glow/20 hover:border-brand-green-glow/40 transition-all duration-300 text-white/40 hover:text-brand-green-glow"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
