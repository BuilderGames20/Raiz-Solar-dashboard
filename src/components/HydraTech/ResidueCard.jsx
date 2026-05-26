// src/components/ResidueCard.jsx
export default function ResidueCard({ tds, alertaStatus }) {
  const display = tds !== null ? Math.round(tds) : '--'

  const statusMap = {
    nenhum:  { label: 'Nível Controlado', cls: 'status-controlado' },
    atencao: { label: 'Nível Elevado',    cls: 'status-elevado'    },
    critico: { label: 'Nível Crítico',    cls: 'status-elevado status-critico' },
  }
  const { label, cls } = statusMap[alertaStatus] ?? statusMap.nenhum

  return (
    <div id="residuos-card" className="card card-residuos">
      <div className="card-header">
        <h3>
          <span className="icon">🗑️</span> Resíduos (TDS)
        </h3>
      </div>
      <div className="card-content">
        <div id="valor-tds" className="valor-grande">
          {display}
        </div>
        <div className="unidade">ppm</div>
        <div id="residuos-status" className={`status-box ${cls}`}>
          {label}
        </div>
      </div>
    </div>
  )
}
