export default function GlassCard({ children, className = '' }) {
  return (
    <div className={`bg-white/60 backdrop-blur-lg border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl ${className}`}>
      {children}
    </div>
  );
}
