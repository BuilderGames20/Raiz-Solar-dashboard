import GlassCard from '../ui/GlassCard';
import WaveDivider from '../ui/WaveDivider';
import { Droplets, CircleDollarSign, Sprout, ShieldCheck, HeartHandshake, Laptop } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="w-7 h-7 text-blue-500" />,
    title: 'Economia de Água',
    description: 'Sistemas hidropônicos que utilizam até 90% menos água que o cultivo tradicional, com recirculação inteligente.',
  },
  {
    icon: <CircleDollarSign className="w-7 h-7 text-emerald-500" />,
    title: 'Retorno Garantido',
    description: 'Reduza custos com hortifruti e tenha produtos frescos todos os dias. Uma economia real no seu orçamento.',
  },
  {
    icon: <Sprout className="w-7 h-7 text-green-600" />,
    title: 'Zero Agrotóxicos',
    description: 'Cultive saúde. Alimentos 100% puros e livres de defensivos químicos para proteger quem você ama.',
  },
  {
    icon: <Laptop className="w-7 h-7 text-slate-700" />,
    title: 'Fácil Manutenção',
    description: 'Sistema prático e semi-automatizado. Apenas alguns minutos por semana para manter sua horta próspera.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-indigo-500" />,
    title: 'Design Premium',
    description: 'Acabamento impecável que agrega valor à sua decoração, seja na cozinha, varanda ou área gourmet.',
  },
  {
    icon: <HeartHandshake className="w-7 h-7 text-rose-500" />,
    title: 'Momento em Família',
    description: 'Uma excelente oportunidade para ensinar as crianças sobre o cultivo e a importância da alimentação saudável.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-5 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 font-bold text-xs text-green-700 tracking-wider uppercase bg-green-100/50 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
            Nossas Soluções
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Benefícios que <span className="text-green-700">transformam</span> sua rotina
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Mais do que uma horta, um estilo de vida sustentável com tecnologia de ponta e design sofisticado para o seu lar.
          </p>
        </div>

        {/* Feature Grid with Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <GlassCard 
                className="p-8 h-full hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
        
      </div>

      {/* Wave Bottom */}
      <div className="mt-12 pointer-events-none opacity-50">
        <WaveDivider color="#F8FAF8" />
      </div>
    </section>
  );
}
