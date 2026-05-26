import { ArrowRight } from 'lucide-react';

export default function CTAButton({ children, onClick, className = '' }) {
  return (
    <button 
      onClick={onClick}
      className={`bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-green-600/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${className}`}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
