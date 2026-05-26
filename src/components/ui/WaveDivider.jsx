export default function WaveDivider({ flip = false, color = '#F7FAF5', className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`waveGrad-${flip ? 'flip' : 'normal'}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="50%" stopColor={color} stopOpacity="1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.8" />
          </linearGradient>
          <filter id="waveBlur" x="-2%" y="-10%" width="104%" height="120%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
        </defs>
        {/* Back wave - subtle depth layer */}
        <path
          d="M0,80 C240,100 480,40 720,70 C960,100 1200,50 1440,72 L1440,120 L0,120 Z"
          fill={color}
          fillOpacity="0.4"
          filter="url(#waveBlur)"
        />
        {/* Main wave - crisp and rich */}
        <path
          d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
          fill={`url(#waveGrad-${flip ? 'flip' : 'normal'})`}
        />
      </svg>
    </div>
  );
}
