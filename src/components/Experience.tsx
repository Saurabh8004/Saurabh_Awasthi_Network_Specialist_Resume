import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const responsibilities = [
  'Provide 24×7 network infrastructure support across 50+ multi-site enterprise locations.',
  'Perform advanced Layer 2 and Layer 3 troubleshooting.',
  'Troubleshoot BGP, OSPF, VLAN, STP, DHCP and DNS issues.',
  'Configure and troubleshoot Cisco switches, routers, Meraki devices, Cisco WLC and access points.',
  'Troubleshoot VPN and SD-WAN connectivity.',
  'Execute network configuration changes, firmware upgrades, device replacements and infrastructure maintenance.',
  'Monitor infrastructure using SolarWinds, Zabbix, OP5 and Meraki Dashboard.',
  'Lead major incident bridges with L1, L2 and L3 teams.',
  'Maintain network diagrams, IP addressing records, SOPs, runbooks and RCA documentation.',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Enterprise Network Operations</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/50 via-[#00D4FF]/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative pl-12 sm:pl-20"
          >
            {/* Timeline node */}
            <div className="absolute left-2.5 sm:left-6.5 top-2 w-3 h-3 rounded-full bg-[#00D4FF] pulse-cyan" />

            {/* Company card */}
            <div className="p-6 sm:p-8 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80 glow-box-cyan">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">HCL TECHNOLOGIES</h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <MapPin size={12} />
                    <span>Lucknow, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] pulse-green" />
                    <span className="text-[#10B981] text-xs font-semibold">ACTIVE</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-[#00D4FF] font-semibold text-base sm:text-lg">NETWORK SPECIALIST / NOC ENGINEER</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                  <Calendar size={12} />
                  <span>May 2022 – Present</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm sm:text-base mb-6">
                Working in a 24×7 Global Network Operations Center supporting a shared enterprise network environment for global clients.
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                {responsibilities.map((resp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00D4FF]/60 shrink-0" />
                    <p className="text-gray-400 text-sm leading-relaxed">{resp}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
