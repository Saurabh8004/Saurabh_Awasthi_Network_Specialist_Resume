import { motion } from 'framer-motion';
import { Download, ExternalLink, ChevronDown } from 'lucide-react';

const stats = [
  { value: '4+', label: 'YEARS EXPERIENCE' },
  { value: '50+', label: 'ENTERPRISE LOCATIONS' },
  { value: '6+', label: 'GLOBAL CLIENTS' },
  { value: '24×7', label: 'NETWORK OPERATIONS' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full py-20 lg:py-32">
        <div className="text-center">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4">
              SAURABH AWASTHI
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8"
          >
            <span className="text-[#00D4FF] font-semibold text-sm sm:text-base tracking-[0.3em] uppercase">
              Network Specialist
            </span>
            <span className="hidden sm:block w-2 h-2 rounded-full bg-[#00D4FF]/50"></span>
            <span className="text-[#00D4FF] font-semibold text-sm sm:text-base tracking-[0.3em] uppercase">
              NOC Engineer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Engineering Reliable Networks.<br />
            <span className="text-white font-normal">Troubleshooting Complex Infrastructure.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-12"
          >
            Network Specialist and NOC Engineer with 4+ years of experience supporting enterprise network infrastructure across global environments.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                className="text-center p-4 sm:p-6 rounded-lg border border-[#1E293B]/50 bg-[#0D141B]/50"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black counter-glow mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-500 font-medium tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#experience"
              className="px-8 py-3.5 bg-[#00D4FF] text-[#05070A] font-bold text-sm rounded tracking-wide hover:bg-[#00D4FF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              VIEW MY EXPERIENCE
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-[#00D4FF]/40 text-[#00D4FF] font-bold text-sm rounded tracking-wide hover:bg-[#00D4FF]/10 transition-all duration-200 flex items-center gap-2"
            >
              <Download size={14} />
              DOWNLOAD RESUME
            </a>
            <a
              href="https://linkedin.com/in/saurabh-awasthi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#00D4FF] text-sm font-medium flex items-center gap-1 transition-colors"
            >
              LinkedIn <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-gray-600 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
