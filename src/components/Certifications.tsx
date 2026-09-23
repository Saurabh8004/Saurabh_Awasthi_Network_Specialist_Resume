import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, Sparkles } from 'lucide-react';

const certifications = [
  {
    title: 'Cisco CCNA',
    description: 'Networking, Routing & Switching, Wireless Essentials',
    icon: '🏆',
  },
  {
    title: 'Fortinet FCF',
    description: 'Technical Introduction to Cybersecurity 1.0',
    icon: '🛡️',
  },
  {
    title: 'Fortinet FCF',
    description: 'Introduction to the Threat Landscape 2.0',
    icon: '🔒',
  },
];

const currentFocus = [
  'Network Automation',
  'AI + Network Operations',
  'SD-WAN',
  'Network Security',
  'Infrastructure Monitoring',
  'Network Troubleshooting Automation',
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">CERTIFICATIONS & EDUCATION</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Continuous Learning</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-[#00D4FF]" />
              <h3 className="text-lg font-bold text-white tracking-wide">EDUCATION</h3>
            </div>
            <div className="p-6 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80">
              <h4 className="text-white font-bold text-base mb-1">BACHELOR OF COMPUTER APPLICATION</h4>
              <p className="text-gray-400 text-sm mb-1">Sacred Heart Degree College, Lucknow</p>
              <p className="text-gray-500 text-xs">2018 – 2021</p>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-[#00D4FF]" />
              <h3 className="text-lg font-bold text-white tracking-wide">CERTIFICATIONS</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={`${cert.title}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="p-4 rounded-lg border border-[#1E293B]/50 bg-[#0D141B]/80 card-hover"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg">{cert.icon}</span>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{cert.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles size={18} className="text-[#00D4FF]" />
            <h3 className="text-lg font-bold text-white tracking-wide">CURRENTLY EXPLORING</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {currentFocus.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                className="px-4 py-2 text-sm text-gray-400 border border-[#1E293B]/50 rounded-lg bg-[#0D141B]/50 hover:border-[#00D4FF]/30 hover:text-[#00D4FF] transition-all duration-200"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
