import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, GitBranch, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'DETECT',
    description: 'Monitoring',
    icon: Search,
  },
  {
    number: '02',
    title: 'ISOLATE',
    description: 'Layer 1 / 2 / 3',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'RESOLVE',
    description: 'Service Restoration',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'PREVENT',
    description: 'RCA & Preventive Action',
    icon: ShieldCheck,
  },
];

export default function Approach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Methodology</span>
            <div className="w-8 h-px bg-[#3B82F6]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">HOW I APPROACH NETWORK PROBLEMS</h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - horizontal on desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-[#3B82F6]/20" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                {/* Icon circle */}
                <div className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-full bg-[#151F2E] border border-[#1E293B] flex items-center justify-center">
                  <step.icon size={20} className="text-[#3B82F6]" />
                </div>

                {/* Number */}
                <div className="text-[#3B82F6]/40 text-xs font-bold mb-2">{step.number}</div>

                {/* Title */}
                <h3 className="text-white font-bold text-sm tracking-wide mb-1">{step.title}</h3>

                {/* Description */}
                <p className="text-[#A8B3C2] text-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
