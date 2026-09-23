import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const statusItems = [
  { label: 'ROUTING', status: 'OPERATIONAL' },
  { label: 'WIRELESS', status: 'OPERATIONAL' },
  { label: 'FIREWALL', status: 'OPERATIONAL' },
  { label: 'VPN', status: 'OPERATIONAL' },
  { label: 'SD-WAN', status: 'OPERATIONAL' },
  { label: 'MONITORING', status: 'ACTIVE' },
];

export default function NetworkOps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">NETWORK ENVIRONMENT</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Enterprise Architecture Overview</p>
        </motion.div>

        {/* Network Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative p-8 sm:p-12 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80"
        >
          {/* Title */}
          <div className="text-center mb-8">
            <span className="text-[#00D4FF] text-xs font-bold tracking-[0.3em] uppercase">GLOBAL NETWORK</span>
          </div>

          {/* Architecture SVG */}
          <svg viewBox="0 0 600 320" className="w-full max-w-2xl mx-auto" fill="none">
            {/* Internet */}
            <circle cx="300" cy="30" r="10" fill="rgba(0,212,255,0.4)" stroke="rgba(0,212,255,0.6)" strokeWidth="1" />
            <text x="300" y="15" textAnchor="middle" fill="rgba(0,212,255,0.5)" fontSize="10" fontFamily="Inter" fontWeight="600">INTERNET</text>
            
            {/* Firewall */}
            <rect x="275" y="70" width="50" height="24" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" />
            <text x="300" y="86" textAnchor="middle" fill="rgba(16,185,129,0.7)" fontSize="9" fontFamily="Inter" fontWeight="600">FIREWALL</text>
            
            {/* Core Router */}
            <circle cx="300" cy="140" r="14" fill="rgba(0,212,255,0.3)" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5" />
            <text x="300" y="144" textAnchor="middle" fill="rgba(0,212,255,0.8)" fontSize="8" fontFamily="Inter" fontWeight="600">CORE</text>
            <text x="300" y="170" textAnchor="middle" fill="rgba(0,212,255,0.5)" fontSize="9" fontFamily="Inter">ROUTER</text>
            
            {/* Site A */}
            <rect x="80" y="200" width="80" height="24" rx="4" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
            <text x="120" y="216" textAnchor="middle" fill="rgba(0,212,255,0.6)" fontSize="9" fontFamily="Inter" fontWeight="500">SITE A</text>
            
            {/* Site B */}
            <rect x="260" y="200" width="80" height="24" rx="4" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
            <text x="300" y="216" textAnchor="middle" fill="rgba(0,212,255,0.6)" fontSize="9" fontFamily="Inter" fontWeight="500">SITE B</text>
            
            {/* Site C */}
            <rect x="440" y="200" width="80" height="24" rx="4" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
            <text x="480" y="216" textAnchor="middle" fill="rgba(0,212,255,0.6)" fontSize="9" fontFamily="Inter" fontWeight="500">SITE C</text>
            
            {/* Switches */}
            <circle cx="120" cy="260" r="8" fill="rgba(0,212,255,0.2)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
            <text x="120" y="264" textAnchor="middle" fill="rgba(0,212,255,0.5)" fontSize="7" fontFamily="Inter">SW</text>
            
            <circle cx="300" cy="260" r="8" fill="rgba(0,212,255,0.2)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
            <text x="300" y="264" textAnchor="middle" fill="rgba(0,212,255,0.5)" fontSize="7" fontFamily="Inter">SW</text>
            
            <circle cx="480" cy="260" r="8" fill="rgba(0,212,255,0.2)" stroke="rgba(0,212,255,0.4)" strokeWidth="1" />
            <text x="480" y="264" textAnchor="middle" fill="rgba(0,212,255,0.5)" fontSize="7" fontFamily="Inter">SW</text>
            
            {/* APs */}
            <circle cx="95" cy="300" r="5" fill="rgba(0,212,255,0.15)" />
            <circle cx="145" cy="300" r="5" fill="rgba(0,212,255,0.15)" />
            <circle cx="275" cy="300" r="5" fill="rgba(0,212,255,0.15)" />
            <circle cx="325" cy="300" r="5" fill="rgba(0,212,255,0.15)" />
            <circle cx="455" cy="300" r="5" fill="rgba(0,212,255,0.15)" />
            <circle cx="505" cy="300" r="5" fill="rgba(0,212,255,0.15)" />
            
            <text x="95" y="315" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="Inter">AP</text>
            <text x="145" y="315" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="Inter">AP</text>
            <text x="275" y="315" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="Inter">AP</text>
            <text x="325" y="315" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="Inter">AP</text>
            <text x="455" y="315" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="Inter">AP</text>
            <text x="505" y="315" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="7" fontFamily="Inter">AP</text>
            
            {/* Connections */}
            <line x1="300" y1="40" x2="300" y2="70" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
            <line x1="300" y1="94" x2="300" y2="126" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
            <line x1="286" y1="145" x2="120" y2="200" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
            <line x1="300" y1="154" x2="300" y2="200" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
            <line x1="314" y1="145" x2="480" y2="200" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
            <line x1="120" y1="224" x2="120" y2="252" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
            <line x1="300" y1="224" x2="300" y2="252" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
            <line x1="480" y1="224" x2="480" y2="252" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
            <line x1="120" y1="268" x2="95" y2="295" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
            <line x1="120" y1="268" x2="145" y2="295" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
            <line x1="300" y1="268" x2="275" y2="295" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
            <line x1="300" y1="268" x2="325" y2="295" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
            <line x1="480" y1="268" x2="455" y2="295" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
            <line x1="480" y1="268" x2="505" y2="295" stroke="rgba(0,212,255,0.1)" strokeWidth="0.5" />
            
            {/* Data packets */}
            <circle r="3" fill="#00D4FF" opacity="0.7">
              <animateMotion dur="4s" repeatCount="indefinite" path="M300,40 L300,70 L300,126 L300,200 L300,252 L275,295" />
            </circle>
            <circle r="2.5" fill="#10B981" opacity="0.7">
              <animateMotion dur="5s" repeatCount="indefinite" path="M300,40 L300,70 L286,145 L120,200 L120,252 L145,295" />
            </circle>
            <circle r="2" fill="#00D4FF" opacity="0.5">
              <animateMotion dur="6s" repeatCount="indefinite" path="M314,145 L480,200 L480,252 L505,295" />
            </circle>
          </svg>

          {/* Status Indicators */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {statusItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0A0F14] border border-[#1E293B]/30"
              >
                <div className="w-2 h-2 rounded-full bg-[#10B981] pulse-green" />
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{item.label}</span>
                <span className="text-[9px] text-[#10B981] ml-auto font-medium">{item.status}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[10px] text-gray-600 mt-4 italic">
            Visual representation of enterprise network architecture
          </p>
        </motion.div>
      </div>
    </section>
  );
}
