import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">ABOUT ME</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Network Operations · Infrastructure · Problem Solving</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              I'm <span className="text-white font-semibold">Saurabh Awasthi</span>, a Network Specialist and NOC Engineer with 4+ years of hands-on experience supporting enterprise network infrastructure across global environments.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Currently working in a <span className="text-[#00D4FF]">24×7 Global Network Operations Center</span>, I work across routing, switching, wireless, firewalls, VPN, SD-WAN and network monitoring.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              My experience includes <span className="text-white">Cisco, Cisco Meraki, FortiGate, Palo Alto, Cisco WLC</span> and multi-vendor network infrastructure. I specialize in Layer 2 and Layer 3 troubleshooting, network operations, configuration changes, incident resolution and infrastructure maintenance.
            </p>
          </motion.div>

          {/* Network Diagram Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative p-8 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/50">
              {/* Abstract network diagram */}
              <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none">
                {/* Cloud */}
                <circle cx="200" cy="40" r="8" fill="rgba(0,212,255,0.6)" />
                <text x="200" y="25" textAnchor="middle" fill="rgba(0,212,255,0.4)" fontSize="9" fontFamily="Inter">CLOUD</text>
                
                {/* Core Router */}
                <circle cx="200" cy="100" r="10" fill="rgba(0,212,255,0.5)" />
                <text x="200" y="125" textAnchor="middle" fill="rgba(0,212,255,0.4)" fontSize="9" fontFamily="Inter">CORE ROUTER</text>
                
                {/* Firewall */}
                <circle cx="320" cy="100" r="8" fill="rgba(16,185,129,0.5)" />
                <text x="320" y="85" textAnchor="middle" fill="rgba(16,185,129,0.4)" fontSize="9" fontFamily="Inter">FIREWALL</text>
                
                {/* Switches */}
                <circle cx="100" cy="170" r="8" fill="rgba(0,212,255,0.4)" />
                <text x="100" y="195" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="8" fontFamily="Inter">SWITCH</text>
                
                <circle cx="200" cy="170" r="8" fill="rgba(0,212,255,0.4)" />
                <text x="200" y="195" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="8" fontFamily="Inter">SWITCH</text>
                
                <circle cx="300" cy="170" r="8" fill="rgba(0,212,255,0.4)" />
                <text x="300" y="195" textAnchor="middle" fill="rgba(0,212,255,0.3)" fontSize="8" fontFamily="Inter">SWITCH</text>
                
                {/* Endpoints */}
                <circle cx="70" cy="240" r="5" fill="rgba(0,212,255,0.3)" />
                <circle cx="130" cy="240" r="5" fill="rgba(0,212,255,0.3)" />
                <circle cx="170" cy="240" r="5" fill="rgba(0,212,255,0.3)" />
                <circle cx="230" cy="240" r="5" fill="rgba(0,212,255,0.3)" />
                <circle cx="270" cy="240" r="5" fill="rgba(0,212,255,0.3)" />
                <circle cx="330" cy="240" r="5" fill="rgba(0,212,255,0.3)" />
                
                <text x="70" y="260" textAnchor="middle" fill="rgba(0,212,255,0.25)" fontSize="7" fontFamily="Inter">AP</text>
                <text x="130" y="260" textAnchor="middle" fill="rgba(0,212,255,0.25)" fontSize="7" fontFamily="Inter">AP</text>
                <text x="170" y="260" textAnchor="middle" fill="rgba(0,212,255,0.25)" fontSize="7" fontFamily="Inter">AP</text>
                <text x="230" y="260" textAnchor="middle" fill="rgba(0,212,255,0.25)" fontSize="7" fontFamily="Inter">AP</text>
                <text x="270" y="260" textAnchor="middle" fill="rgba(0,212,255,0.25)" fontSize="7" fontFamily="Inter">AP</text>
                <text x="330" y="260" textAnchor="middle" fill="rgba(0,212,255,0.25)" fontSize="7" fontFamily="Inter">AP</text>
                
                {/* Connections */}
                <line x1="200" y1="48" x2="200" y2="90" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
                <line x1="210" y1="100" x2="312" y2="100" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
                <line x1="200" y1="110" x2="100" y2="162" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                <line x1="200" y1="110" x2="200" y2="162" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                <line x1="200" y1="110" x2="300" y2="162" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
                <line x1="100" y1="178" x2="70" y2="235" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
                <line x1="100" y1="178" x2="130" y2="235" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
                <line x1="200" y1="178" x2="170" y2="235" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
                <line x1="200" y1="178" x2="230" y2="235" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
                <line x1="300" y1="178" x2="270" y2="235" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
                <line x1="300" y1="178" x2="330" y2="235" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />
                
                {/* Animated data packet */}
                <circle r="3" fill="#00D4FF" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M200,48 L200,90 L100,162 L70,235" />
                </circle>
                <circle r="3" fill="#10B981" opacity="0.8">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M312,100 L210,100 L200,110 L200,162 L230,235" />
                </circle>
              </svg>
              
              {/* Status indicators */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] pulse-green"></div>
                  <span className="text-[10px] text-gray-500 font-medium">OPERATIONAL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
