// src/components/Header.jsx
export default function Header({ location = 'Estação Principal' }) {
  return (
    <header className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <h2 className="logo-text">
        <span style={{ color: '#A4C639' }}>Raiz</span>{' '}
        <span style={{ color: '#ffffff' }}>Solar</span>
      </h2>
      <h1>Monitoramento em Tempo Real</h1>
      <p className="subtitle">Tecnologia de cultivo inteligente</p>
      <div className="location">
        <span id="location-icon" aria-hidden="true">📍</span>
        <span id="location-text">{location}</span>
      </div>
    </header>
  )
}
