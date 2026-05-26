// src/components/WaterQualityCard.jsx
export default function WaterQualityCard({ qualidade, percentual, corClass }) {
  const displayPercentual = percentual !== null ? `${Math.round(percentual)}%` : '--%'
  const barWidth          = percentual !== null ? `${percentual}%` : '0%'

  return (
    <div id="qualidade-card" className="card card-qualidade">
      <div className="card-header">
        <h3>
          <span className="icon">💧</span> Qualidade da Água
        </h3>
      </div>
      <div className="card-content">
        <div id="qualidade-badge" className={`qualidade-badge ${corClass}`}>
          {qualidade}
        </div>
        <div className="progress-container">
          <span>Índice de Qualidade</span>
          <strong id="percentual-qualidade">{displayPercentual}</strong>
        </div>
        <div className="progress-bar-background">
          <div
            id="progress-bar"
            className={`progress-bar ${corClass}`}
            style={{ width: barWidth }}
          />
        </div>
      </div>
    </div>
  )
}
