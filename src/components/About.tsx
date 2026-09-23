import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">ABOUT ME</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-[#F5F7FA] text-base sm:text-lg leading-relaxed mb-6">
              I'm <span className="font-semibold">Saurabh Awasthi</span>, a Network Specialist and NOC Engineer with 4+ years of hands-on experience supporting enterprise network infrastructure across global environments.
            </p>
            <p className="text-[#A8B3C2] text-base leading-relaxed">
              Currently working in a <span className="text-[#3B82F6]">24×7 Global Network Operations Center</span>, I work across routing, switching, wireless, firewalls, VPN, SD-WAN and network monitoring.
            </p>
          </motion.div>

          {/* Right - Technical Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xs">
              <div className="space-y-0">
                {[
                  { label: 'INTERNET', icon: '🌐' },
                  { label: 'FIREWALL', icon: '🛡️' },
                  { label: 'ROUTING', icon: '🔀' },
                  { label: 'SWITCHING', icon: '🔌' },
                  { label: 'WIRELESS', icon: '📡' },
                  { label: 'ENDPOINTS', icon: '💻' },
                ].map((item, i) => (
                  <div key={item.label}>
                    <div className="flex items-center gap-4 px-4 py-3 rounded-lg bg-[#151F2E] border border-[#1E293B]/50">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-semibold text-[#F5F7FA] tracking-wide">{item.label}</span>
                    </div>
                    {i < 5 && (
                      <div className="flex justify-center py-1">
                        <div className="w-px h-4 bg-[#3B82F6]/30" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
