import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Radio, Shield, Monitor, Settings, Server } from 'lucide-react';

const capabilities = [
  {
    icon: Network,
    title: 'ROUTING & SWITCHING',
    items: ['Cisco', 'HP', 'Dell', 'Ruckus', 'VLAN', 'STP', 'TCP/IP'],
  },
  {
    icon: Server,
    title: 'ROUTING PROTOCOLS',
    items: ['BGP', 'OSPF', 'LAN', 'WAN', 'SD-WAN', 'DHCP', 'DNS'],
  },
  {
    icon: Radio,
    title: 'WIRELESS',
    items: ['Cisco WLC', 'Cisco Meraki', 'Access Points', 'Wireless Monitoring', 'Wireless Troubleshooting'],
  },
  {
    icon: Shield,
    title: 'NETWORK SECURITY',
    items: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'Palo Alto', 'NAT', 'IPSec VPN'],
  },
  {
    icon: Monitor,
    title: 'NETWORK MONITORING',
    items: ['SolarWinds', 'Zabbix', 'OP5', 'Meraki Dashboard'],
  },
  {
    icon: Settings,
    title: 'NETWORK OPERATIONS',
    items: ['ServiceNow', 'TopDesk', 'ITIL', 'Incident Management', 'RCA', 'Change Management'],
  },
];

const techStack = [
  'CISCO', 'MERAKI', 'FORTIGATE', 'PALO ALTO', 'CISCO WLC',
  'FORTIMANAGER', 'FORTIANALYZER', 'SOLARWINDS', 'ZABBIX', 'OP5',
  'SERVICENOW', 'SD-WAN', 'BGP', 'OSPF', 'VPN'
];

export default function Capabilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="capabilities" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">NETWORK CAPABILITIES</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Enterprise Infrastructure Expertise</p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-hover group p-6 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#00D4FF]/5 border border-[#00D4FF]/20 group-hover:border-[#00D4FF]/40 transition-colors">
                  <cap.icon size={20} className="text-[#00D4FF]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">{cap.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cap.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs text-gray-400 bg-[#0A0F14] border border-[#1E293B]/50 rounded font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-center text-lg font-bold text-white mb-8 tracking-wide">TECHNOLOGY STACK</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                className="tech-badge px-4 py-2 text-xs sm:text-sm font-medium text-gray-400 border border-[#1E293B] rounded-lg cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
