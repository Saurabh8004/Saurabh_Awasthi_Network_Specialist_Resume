import { motion } from 'framer-motion';
import { Download, ExternalLink, ChevronDown } from 'lucide-react';

const stats = [
  { value: '4+', label: 'YEARS EXPERIENCE' },
  { value: '50+', label: 'ENTERPRISE LOCATIONS' },
  { value: '6+', label: 'GLOBAL CLIENTS' },
  { value: '24×7', label: 'NETWORK OPERATIONS' },
];

const PROFILE_IMAGE = 'https://image.qwenlm.ai/generated-images/aab3ef18-865c-46c1-82f6-9a37600dba4f/_result.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full py-12 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* LEFT - Text Content (3/5 width on desktop) */}
          <div className="lg:col-span-3">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-3">
                SAURABH<br />AWASTHI
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-5"
            >
              <span className="text-[#00D4FF] font-semibold text-sm tracking-[0.3em] uppercase">
                Network Specialist
              </span>
              <span className="hidden sm:block w-2 h-2 rounded-full bg-[#00D4FF]/50"></span>
              <span className="text-[#00D4FF] font-semibold text-sm tracking-[0.3em] uppercase">
                NOC Engineer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-3 leading-relaxed"
            >
              Engineering Reliable<br />
              <span className="text-white font-normal">Network Infrastructure.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-500 text-sm sm:text-base max-w-xl mb-8"
            >
              Network Specialist and NOC Engineer with 4+ years of experience supporting enterprise network infrastructure across global environments.
            </motion.p>

            {/* Mobile Photo - shown only on small screens, between text and CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="lg:hidden flex justify-center mb-8"
            >
              <ProfilePanel />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
            >
              <a
                href="#experience"
                className="px-8 py-3.5 bg-[#00D4FF] text-[#05070A] font-bold text-sm rounded tracking-wide hover:bg-[#00D4FF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                VIEW EXPERIENCE
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-[#00D4FF]/40 text-[#00D4FF] font-bold text-sm rounded tracking-wide hover:bg-[#00D4FF]/10 transition-all duration-200 flex items-center gap-2"
              >
                <Download size={14} />
                DOWNLOAD RESUME
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.1 }}
                  className="text-center p-3 rounded-lg border border-[#1E293B]/50 bg-[#0D141B]/50"
                >
                  <div className="text-2xl sm:text-3xl font-black counter-glow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-gray-500 font-medium tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-5"
            >
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

          {/* RIGHT - Professional Photo Panel (2/5 width on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex lg:col-span-2 justify-center lg:justify-end"
          >
            <ProfilePanel />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-gray-600 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
}

function ProfilePanel() {
  return (
    <div className="relative">
      {/* Background network rack silhouette */}
      <div className="absolute inset-0 -m-6 opacity-[0.04] pointer-events-none">
        <svg viewBox="0 0 400 500" className="w-full h-full" fill="none">
          {/* Rack frame */}
          <rect x="80" y="20" width="240" height="460" rx="4" stroke="#00D4FF" strokeWidth="1" />
          {/* Rack units */}
          <rect x="90" y="40" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="80" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="120" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="160" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="200" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="240" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="280" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="320" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="360" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="400" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          <rect x="90" y="440" width="220" height="30" rx="2" stroke="#00D4FF" strokeWidth="0.5" />
          {/* LEDs */}
          <circle cx="100" cy="55" r="2" fill="#00D4FF" />
          <circle cx="108" cy="55" r="2" fill="#10B981" />
          <circle cx="100" cy="95" r="2" fill="#00D4FF" />
          <circle cx="108" cy="95" r="2" fill="#10B981" />
          <circle cx="100" cy="135" r="2" fill="#00D4FF" />
          <circle cx="100" cy="175" r="2" fill="#10B981" />
          <circle cx="100" cy="215" r="2" fill="#00D4FF" />
          <circle cx="100" cy="255" r="2" fill="#10B981" />
          {/* Cables */}
          <path d="M310 55 Q340 55 340 100 Q340 150 310 150" stroke="#00D4FF" strokeWidth="0.5" />
          <path d="M310 95 Q350 95 350 140 Q350 200 310 200" stroke="#00D4FF" strokeWidth="0.5" />
          <path d="M310 135 Q360 135 360 190 Q360 250 310 250" stroke="#00D4FF" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Photo frame */}
      <div className="relative rounded-xl overflow-hidden border border-[#00D4FF]/20 bg-[#0B1117] shadow-[0_0_30px_rgba(0,212,255,0.08)]">
        {/* Top status bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 bg-[#0B1117]/90 backdrop-blur-sm border-b border-[#1E293B]/30">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-green" />
            <span className="text-[9px] text-gray-500 font-medium tracking-wider">NETWORK OPERATIONS</span>
          </div>
          <span className="text-[9px] text-[#00D4FF]/60 font-mono">GNOC</span>
        </div>

        {/* Image */}
        <img
          src={PROFILE_IMAGE}
          alt="Saurabh Awasthi - Network Specialist"
          className="w-[260px] sm:w-[280px] lg:w-[300px] h-[340px] sm:h-[370px] lg:h-[400px] object-cover object-top"
        />

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0B1117] to-transparent" />

        {/* Bottom labels */}
        <div className="absolute bottom-3 left-0 right-0 px-4 flex items-center justify-between">
          <div className="px-2 py-0.5 rounded bg-[#00D4FF]/10 border border-[#00D4FF]/20">
            <span className="text-[8px] text-[#00D4FF] font-bold tracking-wider">NETWORK SPECIALIST</span>
          </div>
          <div className="px-2 py-0.5 rounded bg-[#0D141B] border border-[#1E293B]/50">
            <span className="text-[8px] text-gray-500 font-medium tracking-wider">4+ YEARS</span>
          </div>
        </div>
      </div>

      {/* Floating labels around the photo */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -top-3 -right-2 sm:-right-4 px-2.5 py-1 rounded-lg bg-[#0D141B] border border-[#1E293B]/50"
      >
        <span className="text-[8px] sm:text-[9px] text-[#00D4FF] font-bold tracking-wider">NOC ENGINEER</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute -bottom-3 -left-2 sm:-left-4 px-2.5 py-1 rounded-lg bg-[#0D141B] border border-[#1E293B]/50"
      >
        <span className="text-[8px] sm:text-[9px] text-gray-400 font-bold tracking-wider">LUCKNOW • INDIA</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute top-1/2 -left-2 sm:-left-6 -translate-y-1/2 px-2 py-1 rounded bg-[#0D141B] border border-[#1E293B]/50"
      >
        <span className="text-[7px] sm:text-[8px] text-gray-500 font-medium tracking-wider">GNOC</span>
      </motion.div>

      {/* Decorative network nodes - top */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-30">
        <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
        <div className="w-6 h-px bg-[#00D4FF]/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
        <div className="w-6 h-px bg-[#00D4FF]/50" />
        <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
      </div>

      {/* Decorative network nodes - bottom */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-30">
        <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
        <div className="w-6 h-px bg-[#00D4FF]/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
        <div className="w-6 h-px bg-[#00D4FF]/50" />
        <div className="w-1 h-1 rounded-full bg-[#00D4FF]" />
      </div>
    </div>
  );
}
