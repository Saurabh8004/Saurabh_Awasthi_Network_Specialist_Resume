import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Building2 } from 'lucide-react';

const projects = [
  {
    number: '01',
    client: 'CIRCOR',
    title: 'Enterprise Network Operations',
    description:
      'Provided 24×7 network support across enterprise locations, ensuring issues were investigated and services were restored with minimal business impact.',
    bullets: [
      'Performed advanced Layer 2 and Layer 3 troubleshooting across Cisco routing and switching, including BGP, OSPF, VLAN, STP, DHCP and DNS-related issues.',
      'Troubleshot wireless, VPN and SD-WAN connectivity issues, isolating problems related to site connectivity, packet loss and network performance.',
      'Handled network configuration changes, firmware upgrades and infrastructure maintenance with appropriate pre-change and post-change validation.',
      'Monitored network infrastructure using SolarWinds, Zabbix, OP5 and Meraki Dashboard for fault identification and availability monitoring.',
    ],
    tech: [
      'Cisco', 'BGP', 'OSPF', 'VLAN', 'STP',
      'DHCP', 'DNS', 'Wireless', 'VPN', 'SD-WAN',
      'SolarWinds', 'Zabbix', 'OP5', 'Meraki Dashboard',
    ],
  },
  {
    number: '02',
    client: 'DCC',
    title: 'Enterprise Routing & Switching',
    description:
      'Managed and troubleshot enterprise Cisco routing and switching infrastructure, resolving connectivity and infrastructure-related network issues.',
    bullets: [
      'Investigated VLAN, STP, DHCP, DNS, OSPF and BGP issues to identify the root cause of connectivity problems.',
      'Supported VPN and SD-WAN site connectivity, troubleshooting issues affecting communication between enterprise locations.',
      'Performed configuration changes, device upgrades and planned maintenance activities while validating network connectivity after implementation.',
    ],
    tech: ['Cisco', 'BGP', 'OSPF', 'VLAN', 'STP', 'DHCP', 'DNS', 'VPN', 'SD-WAN'],
  },
  {
    number: '03',
    client: 'FMC',
    title: 'Network Infrastructure Operations',
    description:
      'Supported routing, switching, wireless, firewall, VPN and SD-WAN infrastructure across the environment.',
    bullets: [
      'Performed advanced Layer 2 and Layer 3 fault isolation, particularly for routing, VLAN, DHCP and DNS-related issues.',
      'Implemented network configuration changes and firmware upgrades while performing post-change validation to ensure services remained stable.',
      'Worked on network troubleshooting and validation across multiple infrastructure components to restore connectivity and maintain availability.',
    ],
    tech: ['Routing', 'Switching', 'Wireless', 'Firewall', 'VPN', 'SD-WAN', 'VLAN', 'DHCP', 'DNS'],
  },
  {
    number: '04',
    client: 'CAMBREX',
    title: 'Multi-Site Network Operations',
    description:
      'Provided multi-site network support across Cisco routing and switching, wireless, VPN and SD-WAN connectivity.',
    bullets: [
      'Troubleshot routing, VLAN, STP, DHCP and DNS issues affecting enterprise site connectivity and network services.',
      'Performed device configuration changes and upgrades while carrying out fault isolation to identify and resolve network problems.',
      'Monitored network availability and infrastructure performance to help maintain reliable connectivity across sites.',
    ],
    tech: ['Cisco', 'Routing', 'Switching', 'Wireless', 'VPN', 'SD-WAN', 'VLAN', 'STP', 'DHCP', 'DNS'],
  },
  {
    number: '05',
    client: 'TAYLOR WIMPEY',
    title: 'Enterprise Network Support',
    description:
      'Provided hands-on support for enterprise routing, switching and site connectivity across multiple locations.',
    bullets: [
      'Troubleshot VLAN, DHCP, DNS and routing-related issues to identify and restore affected network services.',
      'Performed configuration changes, device upgrades and planned maintenance activities across the network infrastructure.',
      'Isolated network faults and worked through connectivity issues to minimize service disruption across locations.',
    ],
    tech: ['Routing', 'Switching', 'VLAN', 'DHCP', 'DNS', 'Site Connectivity', 'Network Troubleshooting'],
  },
  {
    number: '06',
    client: 'IAC',
    title: 'Fortinet & Network Security Operations',
    description:
      'Worked primarily on Fortinet network security infrastructure and enterprise connectivity.',
    bullets: [
      'Provided hands-on support for FortiGate firewall infrastructure, working with firewall policies, NAT, routing and traffic-flow troubleshooting.',
      'Troubleshot IPSec site-to-site VPN and inter-site connectivity issues to restore communication between network locations.',
      'Used FortiManager for centralized policy management and FortiAnalyzer for log analysis and security event monitoring.',
      'Performed Fortinet configuration changes and firmware upgrades with post-implementation validation.',
      'Investigated traffic flows and firewall behavior to isolate connectivity and security-related network issues.',
    ],
    tech: ['FortiGate', 'FortiManager', 'FortiAnalyzer', 'Firewall', 'NAT', 'Routing', 'IPSec VPN', 'Network Security'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3">PROJECT EXPERIENCE</h2>
          <p className="text-[#A8B3C2] text-base sm:text-lg max-w-3xl">
            Client environments and network operations handled as part of my role at HCL Technologies.
          </p>
        </motion.div>

        {/* Company Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
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
          <p className="text-[#A8B3C2] text-sm sm:text-base leading-relaxed mt-4 max-w-4xl">
            Worked as a Network Specialist / NOC Engineer within HCL Technologies' <span className="text-white font-medium">24×7 Global Network Operations Center (GNOC)</span>, supporting a shared enterprise network environment for multiple global clients. The role involved managing and troubleshooting diverse network infrastructure across routing, switching, wireless, firewalls, VPN and SD-WAN, while handling network incidents, configuration changes, infrastructure upgrades, monitoring and service restoration across different client environments.
          </p>
        </motion.div>

        {/* Project Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#3B82F6]/40 via-[#3B82F6]/20 to-transparent origin-top"
          />

          <div className="space-y-14">
            {projects.map((project, index) => (
              <motion.div
                key={project.client}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline node */}
                <div className="absolute left-[9px] sm:left-[13px] top-1.5 w-[14px] h-[14px] rounded-full bg-[#0B1220] border-2 border-[#3B82F6] flex items-center justify-center">
                  <div className="w-[4px] h-[4px] rounded-full bg-[#3B82F6]" />
                </div>

                {/* Project Number */}
                <div className="text-[#3B82F6]/40 text-xs font-bold tracking-widest mb-2">
                  PROJECT {project.number}
                </div>

                {/* Desktop: 3-column layout / Mobile: stacked */}
                <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12">
                  {/* Main Content */}
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
                      {project.client}
                    </h3>
                    <p className="text-[#3B82F6] text-sm font-semibold tracking-wide mb-5">
                      {project.title}
                    </p>

                    {/* Description */}
                    <p className="text-[#A8B3C2] text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* What I Worked On */}
                    <div className="mb-2">
                      <p className="text-[10px] text-[#A8B3C2]/60 font-semibold tracking-wider uppercase mb-3">
                        What I Worked On
                      </p>
                      <div className="space-y-2.5">
                        {project.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="mt-[9px] w-1 h-1 rounded-full bg-[#3B82F6] shrink-0" />
                            <p className="text-[#A8B3C2] text-sm leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Technologies - Right column on desktop */}
                  <div className="lg:w-[280px] lg:pt-10">
                    <p className="text-[10px] text-[#A8B3C2]/60 font-semibold tracking-wider uppercase mb-3">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] text-[#A8B3C2] bg-[#151F2E] border border-[#1E293B]/60 rounded font-medium hover:border-[#3B82F6]/40 hover:text-[#F5F7FA] transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Divider between projects (except last) */}
                {index < projects.length - 1 && (
                  <div className="mt-14 h-px bg-gradient-to-r from-[#1E293B]/60 via-[#1E293B]/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
