// src/components/Header.jsx
export default function Header({ location = 'Estação Principal' }) {
  return (
    <header className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <img
        className="logo"
        src="/logo--removebg-preview.png"
        alt="HydroTech Logo"
      />
      <h1>Monitoramento em Tempo Real</h1>
      <p className="subtitle">Tecnologia para a água do futuro</p>
      <div className="location">
        <span id="location-icon" aria-hidden="true">📍</span>
        <span id="location-text">{location}</span>
      </div>
    </header>
  )
}
