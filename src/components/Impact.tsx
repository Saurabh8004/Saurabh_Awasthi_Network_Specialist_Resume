import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
  { value: '40%', label: 'REDUCTION IN REPEAT INCIDENTS' },
  { value: '30%', label: 'IMPROVED CROSS-TEAM RESOLUTION' },
  { value: '50+', label: 'ENTERPRISE LOCATIONS' },
  { value: '6+', label: 'GLOBAL CLIENTS' },
  { value: '0', label: 'MAJOR SLA BREACHES' },
];

export default function Impact() {
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Results</span>
            <div className="w-8 h-px bg-[#3B82F6]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">NETWORK IMPACT</h2>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl border border-[#1E293B]/50 bg-[#151F2E]"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#3B82F6] mb-3">
                {metric.value}
              </div>
              <p className="text-[10px] sm:text-xs text-[#A8B3C2] font-medium tracking-wider leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
