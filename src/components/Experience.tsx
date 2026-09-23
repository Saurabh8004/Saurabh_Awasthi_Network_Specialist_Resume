import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Calendar, Building2, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
  {
    number: '01',
    client: 'CIRCOR',
    subtitle: 'Enterprise Network Operations',
    bullets: [
      'Provided 24×7 network support across enterprise locations, ensuring issues were investigated and services were restored with minimal business impact.',
      'Performed advanced Layer 2 and Layer 3 troubleshooting across Cisco routing and switching, including BGP, OSPF, VLAN, STP, DHCP and DNS-related issues.',
      'Troubleshot wireless, VPN and SD-WAN connectivity issues, isolating problems related to site connectivity, packet loss and network performance.',
      'Handled network configuration changes, firmware upgrades and infrastructure maintenance with appropriate pre-change and post-change validation.',
      'Monitored network infrastructure using SolarWinds, Zabbix, OP5 and Meraki Dashboard for fault identification and availability monitoring.',
    ],
    tech: ['Cisco', 'BGP', 'OSPF', 'VLAN', 'STP', 'VPN', 'SD-WAN', 'SolarWinds', 'Zabbix', 'OP5', 'Meraki'],
  },
  {
    number: '02',
    client: 'DCC',
    subtitle: 'Enterprise Routing & Switching',
    bullets: [
      'Managed and troubleshot enterprise Cisco routing and switching infrastructure, resolving connectivity and infrastructure-related network issues.',
      'Investigated VLAN, STP, DHCP, DNS, OSPF and BGP issues to identify the root cause of connectivity problems.',
      'Supported VPN and SD-WAN site connectivity, troubleshooting issues affecting communication between enterprise locations.',
      'Performed configuration changes, device upgrades and planned maintenance activities while validating network connectivity after implementation.',
    ],
    tech: ['Cisco', 'BGP', 'OSPF', 'VLAN', 'STP', 'DHCP', 'DNS', 'VPN', 'SD-WAN'],
  },
  {
    number: '03',
    client: 'FMC',
    subtitle: 'Network Infrastructure Operations',
    bullets: [
      'Supported enterprise routing, switching, wireless, firewall, VPN and SD-WAN infrastructure across the environment.',
      'Performed advanced Layer 2 and Layer 3 fault isolation, particularly for routing, VLAN, DHCP and DNS-related issues.',
      'Implemented network configuration changes and firmware upgrades while performing post-change validation to ensure services remained stable.',
      'Worked on network troubleshooting and validation across multiple infrastructure components to restore connectivity and maintain availability.',
    ],
    tech: ['Routing', 'Switching', 'Wireless', 'Firewall', 'VPN', 'SD-WAN', 'VLAN', 'DHCP', 'DNS'],
  },
  {
    number: '04',
    client: 'CAMBREX',
    subtitle: 'Multi-Site Network Operations',
    bullets: [
      'Provided multi-site network support across Cisco routing and switching, wireless, VPN and SD-WAN connectivity.',
      'Troubleshot routing, VLAN, STP, DHCP and DNS issues affecting enterprise site connectivity and network services.',
      'Performed device configuration changes and upgrades while carrying out fault isolation to identify and resolve network problems.',
      'Monitored network availability and infrastructure performance to help maintain reliable connectivity across sites.',
    ],
    tech: ['Cisco', 'Routing', 'Switching', 'Wireless', 'VPN', 'SD-WAN', 'VLAN', 'STP', 'DHCP', 'DNS'],
  },
  {
    number: '05',
    client: 'TAYLOR WIMPEY',
    subtitle: 'Enterprise Network Support',
    bullets: [
      'Provided hands-on support for enterprise routing, switching and site connectivity across multiple locations.',
      'Troubleshot VLAN, DHCP, DNS and routing-related issues to identify and restore affected network services.',
      'Performed configuration changes, device upgrades and planned maintenance activities across the network infrastructure.',
      'Isolated network faults and worked through connectivity issues to minimize service disruption across locations.',
    ],
    tech: ['Routing', 'Switching', 'VLAN', 'DHCP', 'DNS', 'Site Connectivity', 'Network Troubleshooting'],
  },
  {
    number: '06',
    client: 'IAC',
    subtitle: 'Fortinet & Network Security Operations',
    bullets: [
      'Provided hands-on support for FortiGate firewall infrastructure, working with firewall policies, NAT, routing and traffic-flow troubleshooting.',
      'Troubleshot IPSec site-to-site VPN and inter-site connectivity issues to restore communication between network locations.',
      'Used FortiManager for centralized policy management and FortiAnalyzer for log analysis and security event monitoring.',
      'Performed Fortinet configuration changes and firmware upgrades with post-implementation validation.',
      'Investigated traffic flows and firewall behavior to isolate connectivity and security-related network issues.',
    ],
    tech: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'Firewall', 'NAT', 'IPSec VPN', 'Routing', 'Network Security'],
  },
];

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      className="card-hover rounded-xl border border-[#1E293B]/50 bg-[#151F2E] overflow-hidden"
    >
      {/* Card Header - Always Visible */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            {/* Project Number */}
            <div className="text-[#3B82F6]/40 text-3xl font-black leading-none">
              {project.number}
            </div>

            {/* Client Info */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">{project.client}</h3>
              <p className="text-[#A8B3C2] text-sm">{project.subtitle}</p>
            </div>
          </div>

          {/* Expand/Collapse Icon */}
          <div className="text-[#3B82F6] shrink-0 mt-1">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>

        {/* Tech Tags Preview */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[10px] text-[#A8B3C2] bg-[#0B1220] border border-[#1E293B]/50 rounded font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-1 text-[10px] text-[#A8B3C2]/60 bg-[#0B1220] border border-[#1E293B]/50 rounded font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Expandable Details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-[#1E293B]/30 pt-5">
              {/* What I Worked On */}
              <p className="text-xs text-[#3B82F6] font-semibold tracking-wider uppercase mb-4">
                What I Worked On
              </p>

              {/* Bullet Points */}
              <div className="space-y-3 mb-5">
                {project.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-1 h-1 rounded-full bg-[#3B82F6] shrink-0" />
                    <p className="text-[#A8B3C2] text-sm leading-relaxed">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* All Tech Tags */}
              <div>
                <p className="text-xs text-[#A8B3C2]/60 font-medium mb-2 uppercase tracking-wider">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] text-[#A8B3C2] bg-[#0B1220] border border-[#1E293B]/50 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-[#A8B3C2] text-base sm:text-lg">4+ Years of Enterprise Network Operations</p>
        </motion.div>

        {/* Company Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="p-6 rounded-xl border border-[#1E293B]/50 bg-[#151F2E]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Building2 size={16} className="text-[#3B82F6]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">HCL TECHNOLOGIES</h3>
                </div>
                <p className="text-[#3B82F6] font-semibold text-sm sm:text-base">Network Specialist / NOC Engineer</p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-1">
                <div className="flex items-center gap-1.5 text-[#A8B3C2] text-sm">
                  <Calendar size={12} />
                  <span>May 2022 – Present</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#A8B3C2] text-sm">
                  <MapPin size={12} />
                  <span>Lucknow, India</span>
                </div>
              </div>
            </div>

            <p className="text-[#A8B3C2] text-sm sm:text-base leading-relaxed">
              Working in a <span className="text-white font-medium">24×7 Global Network Operations Center</span> supporting multiple global enterprise environments across routing, switching, wireless, firewall, VPN, SD-WAN and network infrastructure operations.
            </p>
          </div>
        </motion.div>

        {/* Project Cards Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-xs text-[#A8B3C2]/60 font-medium tracking-wider uppercase">
            Project Experience
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.client} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
