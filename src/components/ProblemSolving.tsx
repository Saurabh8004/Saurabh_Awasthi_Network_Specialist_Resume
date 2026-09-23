import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, GitBranch, Wrench, ShieldCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'DETECT',
    description: 'Identify symptoms through monitoring, alerts and user impact.',
    icon: Search,
  },
  {
    number: '02',
    title: 'ISOLATE',
    description: 'Trace the issue across Layer 1, Layer 2 and Layer 3.',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'RESOLVE',
    description: 'Implement configuration changes, restoration or corrective action.',
    icon: Wrench,
  },
  {
    number: '04',
    title: 'PREVENT',
    description: 'Perform RCA and implement preventive actions.',
    icon: ShieldCheck,
  },
];

export default function ProblemSolving() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">HOW I APPROACH NETWORK PROBLEMS</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Systematic Methodology</p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="p-6 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80 card-hover h-full">
                  {/* Step number */}
                  <div className="text-[#00D4FF]/30 text-4xl font-black mb-4">{step.number}</div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#00D4FF]/5 border border-[#00D4FF]/20 flex items-center justify-center">
                    <step.icon size={20} className="text-[#00D4FF]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg tracking-wide mb-2">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-px bg-[#00D4FF]/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
