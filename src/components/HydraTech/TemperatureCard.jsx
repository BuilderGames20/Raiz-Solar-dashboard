// src/components/TemperatureCard.jsx
export default function TemperatureCard({ temperatura }) {
  const display = temperatura !== null
    ? `${Number(temperatura).toFixed(1)}°C`
    : '--°C'

  return (
    <div id="temperatura-card" className="card card-temperatura">
      <div className="card-header">
        <h3>
          <span className="icon">🌡️</span> Temperatura
        </h3>
      </div>
      <div className="card-content">
        <div id="valor-temperatura" className="valor-grande">
          {display}
        </div>
        <div className="status-box status-controlado">Nível Ideal</div>
      </div>
    </div>
  )
}
