import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  { value: 40, suffix: '%', label: 'REDUCTION IN REPEAT INCIDENTS' },
  { value: 30, suffix: '%', label: 'FASTER CROSS-TEAM RESOLUTION' },
  { value: 50, suffix: '+', label: 'MULTI-SITE LOCATIONS' },
  { value: 6, suffix: '+', label: 'GLOBAL CLIENTS' },
  { value: 0, suffix: '', label: 'MAJOR SLA BREACHES' },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="counter-glow">
      {count}{suffix}
    </span>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="impact" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">NETWORK IMPACT</h2>
          <p className="text-gray-500 text-sm tracking-widest uppercase">Measurable Results</p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/50"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} isInView={isInView} />
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider leading-relaxed">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
