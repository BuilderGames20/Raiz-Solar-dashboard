import GlassCard from './GlassCard';

export default function FloatingBadge({ icon, title, subtitle, className = '', animationDelay = '0s' }) {
  return (
    <div className={`absolute animate-float ${className}`} style={{ animationDelay }}>
      <GlassCard className="p-4 flex items-center gap-4">
        {icon && <div className="text-4xl text-blue-500">{icon}</div>}
        <div>
          <p className="font-extrabold text-slate-900 text-xl leading-tight">{title}</p>
          {subtitle && <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{subtitle}</p>}
        </div>
      </GlassCard>
    </div>
  );
}
