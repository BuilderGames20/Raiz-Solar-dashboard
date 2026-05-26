// src/components/AlertCenter.jsx
const CONFIG = {
  nenhum: {
    borderClass: 'alerta-nenhum',
    title: 'Tudo Certo',
    message: 'A qualidade da água está boa.',
    icon: '✅',
  },
  atencao: {
    borderClass: 'alerta-atencao',
    title: 'Atenção',
    message: 'Qualidade da água em declínio.',
    icon: '⚠️',
  },
  critico: {
    borderClass: 'alerta-critico',
    title: 'Alerta Crítico!',
    message: 'Níveis de resíduos muito elevados.',
    icon: '🚨',
  },
}

export default function AlertCenter({ status = 'nenhum', tds }) {
  const cfg = CONFIG[status] ?? CONFIG.nenhum

  return (
    <div id="alerta-card" className={`card alerta-card ${cfg.borderClass}`}>
      <div className="card-header">
        <h3>
          <span className="icon">💧</span> Central de Alertas
        </h3>
      </div>
      <div id="alerta-content" className="card-content alerta-content">
        <span className="alerta-icon" aria-label={cfg.title}>{cfg.icon}</span>
        <div className="alerta-text">
          <h4 className="alerta-title">{cfg.title}</h4>
          <p className="alerta-message">{cfg.message}</p>
        </div>
      </div>
    </div>
  )
}
