import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap } from 'lucide-react';

const certifications = [
  {
    title: 'Cisco CCNA',
    description: 'Networking, Routing & Switching, Wireless Essentials',
  },
  {
    title: 'Fortinet FCF',
    description: 'Technical Introduction to Cybersecurity 1.0',
  },
  {
    title: 'Fortinet FCF',
    description: 'Introduction to the Threat Landscape 2.0',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="relative py-24 lg:py-32 px-6 lg:px-8">
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
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">CERTIFICATIONS & EDUCATION</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-[#3B82F6]" />
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={`${cert.title}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  className="p-4 rounded-lg border border-[#1E293B]/50 bg-[#151F2E] card-hover"
                >
                  <h4 className="text-white font-semibold text-sm mb-1">{cert.title}</h4>
                  <p className="text-[#A8B3C2] text-xs">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={16} className="text-[#3B82F6]" />
              <h3 className="text-sm font-bold text-white tracking-wide uppercase">Education</h3>
            </div>
            <div className="p-5 rounded-lg border border-[#1E293B]/50 bg-[#151F2E]">
              <h4 className="text-white font-semibold text-sm mb-1">Bachelor of Computer Application</h4>
              <p className="text-[#A8B3C2] text-sm mb-1">Sacred Heart Degree College, Lucknow</p>
              <p className="text-[#A8B3C2] text-xs">2018 – 2021</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
