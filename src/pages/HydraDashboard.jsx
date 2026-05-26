// src/pages/HydraDashboard.jsx
import { useState, useEffect } from 'react'
import './HydraDashboard.css'

// ── Componentes da subpasta HydraTech ──────────────────────────
import Header          from '../components/HydraTech/Header'
import AlertCenter     from '../components/HydraTech/AlertCenter'
import WaterQualityCard from '../components/HydraTech/WaterQualityCard'
import TemperatureCard  from '../components/HydraTech/TemperatureCard'
import ResidueCard      from '../components/HydraTech/ResidueCard'

// ── Firebase (descomente quando a conexão estiver pronta) ──────
// import { database }    from '../firebase'
// import { ref, onValue } from 'firebase/database'

// ── Funções utilitárias ────────────────────────────────────────
function calcularQualidade(tds) {
  if (tds > 600) return { label: 'Ruim',    corClass: 'qualidade-ruim',    alertaStatus: 'critico' }
  if (tds > 400) return { label: 'Regular', corClass: 'qualidade-regular', alertaStatus: 'atencao' }
  return           { label: 'Boa',          corClass: 'qualidade-boa',     alertaStatus: 'nenhum'  }
}

function calcularPercentual(tds) {
  return Math.max(0, 100 - tds / 10)
}

// ── Dados simulados para desenvolvimento (sem Firebase) ───────
const MOCK_DATA = {
  temperatura: 22.4,
  tds: 310,
  timestamp: Date.now(),
}

export default function HydraDashboard() {
  const [dados, setDados] = useState({
    temperatura: null,
    tds: null,
    timestamp: null,
  })

  useEffect(() => {
    // ── Com Firebase real: descomente o bloco abaixo e remova o mock ──
    // const dadosRef   = ref(database, '/leituraAtual')
    // const unsubscribe = onValue(dadosRef, (snapshot) => {
    //   const val = snapshot.val()
    //   if (val) setDados({ temperatura: val.temperatura, tds: val.tds, timestamp: val.timestamp })
    // })
    // return () => unsubscribe()

    // ── Mock: simula dados enquanto Firebase está desconectado ────────
    setDados(MOCK_DATA)
  }, [])

  const { temperatura, tds, timestamp } = dados

  const qualidadeInfo  = tds !== null ? calcularQualidade(tds)  : null
  const percentual     = tds !== null ? calcularPercentual(tds) : null
  const horaFormatada  = timestamp
    ? new Date(timestamp).toLocaleTimeString('pt-BR')
    : '--:--:--'

  return (
    <div className="app-wrapper">
      <Header location="Estação Principal" />

      <main className="container">
        <AlertCenter
          status={qualidadeInfo?.alertaStatus ?? 'nenhum'}
          tds={tds}
        />

        <div className="metrics-grid">
          <WaterQualityCard
            qualidade={qualidadeInfo?.label ?? '--'}
            percentual={percentual}
            corClass={qualidadeInfo?.corClass ?? ''}
          />
          <TemperatureCard temperatura={temperatura} />
          <ResidueCard
            tds={tds}
            alertaStatus={qualidadeInfo?.alertaStatus ?? 'nenhum'}
          />
        </div>
      </main>

      <footer className="footer">
        <p>
          Última atualização:{' '}
          <span id="hydra-timestamp" className="footer-timestamp">
            {horaFormatada}
          </span>
        </p>
      </footer>
    </div>
  )
}
