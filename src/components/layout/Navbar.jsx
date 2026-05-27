import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';

/* ─────────────────────────────────────────────
   Rotas do menu principal
───────────────────────────────────────────── */
const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Soluções', to: '/solucoes' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Impacto', to: '/impacto' },
  { label: 'Sua Casa', to: '/para-sua-casa' },
  { label: 'Ouvidoria', to: '/ouvidoria' },
];

/* ─────────────────────────────────────────────
   Classe base + active via NavLink
───────────────────────────────────────────── */
const linkBase =
  "font-inter text-[0.82rem] font-medium transition-colors duration-300 relative " +
  "after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] " +
  "after:bg-gradient-to-r after:from-brand-green-light after:to-brand-emerald " +
  "after:transition-all after:duration-500 after:rounded-full hover:after:w-full";

const linkInactive = "text-brand-muted hover:text-brand-green-dark";
const linkActive = "text-brand-green-dark after:!w-full";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu mobile ao navegar
  const handleMobileNav = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out overflow-hidden ${scrolled
        ? 'bg-white/90 backdrop-blur-2xl shadow-elevated py-3'
        : 'bg-white/60 backdrop-blur-lg py-5'
        }`}
    >
      {/* Linha de acento superior */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-green-light/0 via-brand-green-light/60 to-brand-green-light/0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">

        {/* ── Logo (Link para Home) ── */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-cta rounded-xl flex items-center justify-center shadow-btn-depth group-hover:shadow-btn-depth-hover transition-shadow duration-300">
            <Sprout className="w-5 h-5 text-brand-green-glow" />
          </div>
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-xl tracking-premium text-brand-green-dark leading-none">
              Raiz<span className="text-brand-green-light">Solar</span>
            </span>
            <span className="font-inter text-[0.55rem] font-semibold text-brand-muted tracking-wide-premium mt-0.5 uppercase">
              Cultivo Inteligente
            </span>
          </div>
        </Link>

        {/* ── Links Desktop ── */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}   /* "end" evita que "/" fique sempre ativo */
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkInactive}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ── CTA Desktop ── */}
        <Link
          to="/contato"
          className="hidden lg:flex btn-primary text-sm px-6 py-2.5"
        >
          Fale Conosco
        </Link>

        {/* ── Toggle Mobile ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brand-green-dark p-2 rounded-xl hover:bg-brand-green-dark/5 transition-colors"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Menu Mobile ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-brand-green-dark/5 px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={handleMobileNav}
              className={({ isActive }) =>
                `block font-inter text-base font-medium py-2.5 px-3 rounded-xl transition-all duration-200 ${isActive
                  ? 'bg-brand-green-light/10 text-brand-green-dark font-semibold'
                  : 'text-brand-muted hover:text-brand-green-dark hover:bg-brand-green-dark/4'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* CTA Mobile */}
          <div className="pt-3 border-t border-brand-green-dark/5 mt-3">
            <Link
              to="/contato"
              onClick={handleMobileNav}
              className="block btn-primary text-center text-sm"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
