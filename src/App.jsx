import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Layout
import Navbar           from './components/layout/Navbar';
import Footer           from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

// Páginas do site principal
import Home        from './pages/Home';
import ParaSuaCasa from './pages/ParaSuaCasa';
import Solucoes    from './pages/Solucoes';
import Produtos    from './pages/Produtos';
import Impacto     from './pages/Impacto';
import Ouvidoria   from './pages/Ouvidoria';
import Contato     from './pages/Contato';

// Dashboard HydraTech
import HydraDashboard from './pages/HydraDashboard';

/* ─────────────────────────────────────────────
   Scroll to top sempre que a rota mudar
───────────────────────────────────────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/* ─────────────────────────────────────────────
   Botão fixo "Acessar HydraTech" — flutua
   sobre o layout principal do site
───────────────────────────────────────────── */
function HydraTechEntry({ onEnter }) {
  return (
    <button
      onClick={onEnter}
      title="Abrir painel HydraTech"
      className="
        fixed bottom-6 left-6 z-[100]
        flex items-center gap-2
        bg-gradient-to-br from-sky-500 to-blue-700
        text-white text-sm font-semibold
        px-5 py-3 rounded-full
        shadow-[0_4px_24px_rgba(14,165,233,0.45)]
        hover:shadow-[0_6px_32px_rgba(14,165,233,0.65)]
        hover:-translate-y-0.5
        transition-all duration-300
        active:translate-y-0
      "
    >
      {/* ícone simples inline — sem dependência extra */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" strokeWidth="2.2"
           strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
      </svg>
      Acessar HydraTech
    </button>
  );
}

/* ─────────────────────────────────────────────
   Cabeçalho global exibido sobre o dashboard
───────────────────────────────────────────── */
function HydraTopBar({ onBack }) {
  return (
    <header className="
      fixed top-0 left-0 right-0 z-[200]
      flex items-center justify-between
      px-6 py-3
      bg-[#050e1f]/90 backdrop-blur-xl
      border-b border-sky-900/40
      shadow-[0_2px_20px_rgba(0,0,0,0.4)]
    ">
      {/* Marca */}
      <div className="flex items-center gap-3">
        <span className="
          w-8 h-8 rounded-lg
          bg-gradient-to-br from-sky-400 to-blue-600
          flex items-center justify-center text-white font-bold text-xs
          shadow-[0_0_12px_rgba(14,165,233,0.5)]
        ">
          HT
        </span>
        <div className="flex flex-col leading-none">
          <span className="text-white font-bold text-sm tracking-wide">HydraTech</span>
          <span className="text-sky-400/70 text-[0.6rem] font-semibold uppercase tracking-widest">
            Painel de Monitoramento
          </span>
        </div>
      </div>

      {/* Status badge */}
      <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10
                      rounded-full px-4 py-1.5 text-xs text-sky-300 font-medium">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block"/>
        Sistema Operacional
      </div>

      {/* Botão Voltar */}
      <button
        onClick={onBack}
        className="
          flex items-center gap-2
          bg-white/8 hover:bg-white/15
          border border-white/10 hover:border-sky-400/40
          text-sky-300 hover:text-white
          text-xs font-semibold
          px-4 py-2 rounded-full
          transition-all duration-300
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth="2.5"
             strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7"/>
        </svg>
        Voltar ao Site
      </button>
    </header>
  );
}

/* ─────────────────────────────────────────────
   Layout base: Navbar fixa + rotas + Footer
───────────────────────────────────────────── */
function AppLayout({ onEnterHydra }) {
  return (
    <div className="min-h-screen bg-[#F4F9F5] relative flex flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/para-sua-casa" element={<ParaSuaCasa />} />
          <Route path="/solucoes"      element={<Solucoes />} />
          <Route path="/produtos"      element={<Produtos />} />
          <Route path="/impacto"       element={<Impacto />} />
          <Route path="/ouvidoria"     element={<Ouvidoria />} />
          <Route path="/contato"       element={<Contato />} />
          <Route path="*"              element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />

      {/* Botão flutuante para entrar no dashboard */}
      <HydraTechEntry onEnter={onEnterHydra} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Root com BrowserRouter + alternância de tela
───────────────────────────────────────────── */
export default function App() {
  const [showHydra, setShowHydra] = useState(false);

  return (
    <BrowserRouter>
      {showHydra ? (
        /* ── Modo Dashboard ── */
        <div className="min-h-screen bg-[#f0f4f8]">
          {/* Adiciona padding-top para não cobrir o conteúdo com o HydraTopBar */}
          <HydraTopBar onBack={() => setShowHydra(false)} />
          <div style={{ paddingTop: '56px' }}>
            <HydraDashboard />
          </div>
        </div>
      ) : (
        /* ── Modo Site Principal ── */
        <AppLayout onEnterHydra={() => setShowHydra(true)} />
      )}
    </BrowserRouter>
  );
}
