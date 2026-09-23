import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

const clients = [
  {
    name: 'CIRCOR',
    subtitle: 'Enterprise Network Operations',
    tech: ['Cisco', 'Routing', 'Switching', 'Wireless', 'VPN', 'SD-WAN'],
  },
  {
    name: 'DCC',
    subtitle: 'Enterprise Network Operations',
    tech: ['Cisco', 'BGP', 'OSPF', 'VLAN', 'STP', 'DHCP', 'DNS'],
  },
  {
    name: 'FMC',
    subtitle: 'Network Infrastructure Operations',
    tech: ['Routing', 'Switching', 'Wireless', 'Firewall', 'VPN', 'SD-WAN'],
  },
  {
    name: 'CAMBREX',
    subtitle: 'Multi-Site Network Operations',
    tech: ['Cisco', 'Wireless', 'VPN', 'SD-WAN', 'Monitoring'],
  },
  {
    name: 'TAYLOR WIMPEY',
    subtitle: 'Enterprise Network Support',
    tech: ['Routing', 'Switching', 'DHCP', 'DNS', 'Site Connectivity'],
  },
  {
    name: 'IAC',
    subtitle: 'Fortinet & Network Security Operations',
    tech: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'IPSec VPN', 'NAT', 'Traffic Analysis'],
  },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe size={24} className="text-[#00D4FF]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">GLOBAL CLIENT ENVIRONMENTS</h2>
          </div>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Enterprise network operations across multiple global environments</p>
        </motion.div>

        {/* Client Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group relative p-6 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80 overflow-hidden"
            >
              {/* Subtle network node decoration */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]/50" />
                  <div className="w-6 h-px bg-[#00D4FF]/30" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]/30" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 tracking-wide">{client.name}</h3>
              <p className="text-gray-500 text-xs mb-4 font-medium">{client.subtitle}</p>
              <div className="flex flex-wrap gap-1.5">
                {client.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] text-gray-400 bg-[#0A0F14] border border-[#1E293B]/50 rounded font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
