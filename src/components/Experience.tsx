import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const technologies = [
    'Cisco', 'Cisco Meraki', 'Cisco WLC', 'FortiGate',
    'VPN', 'SD-WAN', 'BGP', 'OSPF', 'VLAN', 'STP',
    'DHCP', 'DNS', 'SolarWinds', 'Zabbix', 'OP5'
  ];

  return (
    <section id="experience" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">PROFESSIONAL EXPERIENCE</h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative pl-8 border-l-2 border-[#3B82F6]/20"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#3B82F6] border-4 border-[#0B1220]" />

          <div className="p-6 sm:p-8 rounded-xl border border-[#1E293B]/50 bg-[#151F2E]">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Building2 size={16} className="text-[#3B82F6]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">HCL TECHNOLOGIES</h3>
                </div>
                <p className="text-[#3B82F6] font-semibold text-sm sm:text-base">NETWORK SPECIALIST / NOC ENGINEER</p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-1.5 text-[#A8B3C2] text-sm">
                  <Calendar size={12} />
                  <span>MAY 2022 — PRESENT</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#A8B3C2] text-sm">
                  <MapPin size={12} />
                  <span>LUCKNOW, INDIA</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#A8B3C2] text-sm sm:text-base mb-6 leading-relaxed">
              Working in a <span className="text-white font-medium">24×7 Global Network Operations Center</span> supporting a shared enterprise network environment for global clients.
            </p>

            {/* Key Responsibilities */}
            <div className="space-y-3 mb-6">
              {[
                'Provide 24×7 network infrastructure support across 50+ multi-site enterprise locations',
                'Perform advanced Layer 2 and Layer 3 troubleshooting',
                'Troubleshoot BGP, OSPF, VLAN, STP, DHCP and DNS issues',
                'Configure and troubleshoot Cisco switches, routers, Meraki devices, Cisco WLC and access points',
                'Troubleshoot VPN and SD-WAN connectivity',
                'Execute network configuration changes, firmware upgrades, device replacements and infrastructure maintenance',
                'Monitor infrastructure using SolarWinds, Zabbix, OP5 and Meraki Dashboard',
                'Lead major incident bridges with L1, L2 and L3 teams',
                'Maintain network diagrams, IP addressing records, SOPs, runbooks and RCA documentation',
              ].map((resp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-2 w-1 h-1 rounded-full bg-[#3B82F6] shrink-0" />
                  <p className="text-[#A8B3C2] text-sm leading-relaxed">{resp}</p>
                </motion.div>
              ))}
            </div>

            {/* Technologies */}
            <div>
              <p className="text-xs text-[#A8B3C2] font-medium mb-3 uppercase tracking-wider">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs text-[#A8B3C2] bg-[#0B1220] border border-[#1E293B]/50 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
