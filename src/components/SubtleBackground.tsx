export default function SubtleBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* Faint network hardware outlines */}
      <svg
        className="absolute top-20 right-10 opacity-[0.02] w-[500px] h-[500px]"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Router outline */}
        <rect x="50" y="100" width="120" height="60" rx="8" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="80" cy="130" r="4" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="100" cy="130" r="4" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="120" cy="130" r="4" stroke="#3B82F6" strokeWidth="1" />
        <line x1="70" y1="145" x2="150" y2="145" stroke="#3B82F6" strokeWidth="0.5" />
        
        {/* Switch outline */}
        <rect x="250" y="200" width="180" height="40" rx="4" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="260" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="278" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="296" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="314" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="332" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="350" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="368" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="386" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="404" y="210" width="12" height="8" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
        
        {/* Network rack */}
        <rect x="100" y="300" width="100" height="180" rx="4" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="110" y="310" width="80" height="20" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="110" y="340" width="80" height="20" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="110" y="370" width="80" height="20" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="110" y="400" width="80" height="20" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="110" y="430" width="80" height="20" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
        <rect x="110" y="460" width="80" height="10" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
        
        {/* Connection lines */}
        <line x1="170" y1="130" x2="250" y2="220" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="150" y1="350" x2="250" y2="230" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* Second decorative element - bottom left */}
      <svg
        className="absolute bottom-20 left-10 opacity-[0.015] w-[400px] h-[300px]"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Firewall */}
        <rect x="50" y="50" width="100" height="60" rx="6" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="60" y1="70" x2="140" y2="70" stroke="#3B82F6" strokeWidth="0.5" />
        <line x1="60" y1="85" x2="140" y2="85" stroke="#3B82F6" strokeWidth="0.5" />
        <line x1="60" y1="100" x2="140" y2="100" stroke="#3B82F6" strokeWidth="0.5" />
        
        {/* Ethernet cables */}
        <path d="M150 80 Q200 80 200 130 Q200 180 250 180" stroke="#3B82F6" strokeWidth="0.5" />
        <path d="M150 90 Q210 90 210 140 Q210 190 260 190" stroke="#3B82F6" strokeWidth="0.5" />
        
        {/* Access point */}
        <circle cx="280" cy="180" r="20" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="280" cy="180" r="8" stroke="#3B82F6" strokeWidth="0.5" />
        <path d="M260 160 Q280 140 300 160" stroke="#3B82F6" strokeWidth="0.5" fill="none" />
        <path d="M255 150 Q280 125 305 150" stroke="#3B82F6" strokeWidth="0.5" fill="none" />
      </svg>
    </div>
  );
}
