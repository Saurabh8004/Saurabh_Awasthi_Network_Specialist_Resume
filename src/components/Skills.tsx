import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Network, Server, Radio, Shield, Monitor, Settings } from 'lucide-react';

const skills = [
  {
    icon: Network,
    title: 'ROUTING & SWITCHING',
    items: ['Cisco', 'HP', 'Dell', 'Ruckus', 'VLAN', 'STP'],
  },
  {
    icon: Server,
    title: 'ROUTING & WAN',
    items: ['BGP', 'OSPF', 'TCP/IP', 'DHCP', 'DNS', 'SD-WAN'],
  },
  {
    icon: Radio,
    title: 'WIRELESS',
    items: ['Cisco WLC', 'Cisco Meraki', 'Access Points', 'Wireless Troubleshooting'],
  },
  {
    icon: Shield,
    title: 'NETWORK SECURITY',
    items: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'Palo Alto', 'NAT', 'IPSec VPN'],
  },
  {
    icon: Monitor,
    title: 'MONITORING',
    items: ['SolarWinds', 'Zabbix', 'OP5', 'Meraki Dashboard'],
  },
  {
    icon: Settings,
    title: 'OPERATIONS',
    items: ['ServiceNow', 'TopDesk', 'ITIL', 'Incident Management', 'RCA', 'Change Management'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-24 lg:py-32 px-6 lg:px-8">
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
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">NETWORK ENGINEERING</h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover p-6 rounded-xl border border-[#1E293B]/50 bg-[#151F2E]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-[#3B82F6]/5 border border-[#3B82F6]/20">
                  <skill.icon size={18} className="text-[#3B82F6]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-wide">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs text-[#A8B3C2] bg-[#0B1220] border border-[#1E293B]/50 rounded font-medium"
                  >
                    {item}
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
