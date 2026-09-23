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
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Globe size={14} className="text-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Clients</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">GLOBAL CLIENT ENVIRONMENTS</h2>
        </motion.div>

        {/* Client Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover p-6 rounded-xl border border-[#1E293B]/50 bg-[#151F2E]"
            >
              <h3 className="text-base font-bold text-white mb-1">{client.name}</h3>
              <p className="text-[#A8B3C2] text-xs mb-4">{client.subtitle}</p>
              <div className="flex flex-wrap gap-1.5">
                {client.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[10px] text-[#A8B3C2] bg-[#0B1220] border border-[#1E293B]/50 rounded font-medium"
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
