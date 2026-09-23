import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';

const PROFILE_IMAGE = '/profile.png';

const stats = [
  { value: '4+', label: 'YEARS EXPERIENCE' },
  { value: '50+', label: 'ENTERPRISE LOCATIONS' },
  { value: '6+', label: 'GLOBAL CLIENTS' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">
                Network Specialist • NOC Engineer
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              SAURABH<br />AWASTHI
            </h1>

            {/* Headline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-[#F5F7FA] font-light mb-5 leading-relaxed">
              Engineering Reliable<br />
              <span className="font-normal">Network Infrastructure.</span>
            </p>

            {/* Description */}
            <p className="text-[#A8B3C2] text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
              Network Specialist and NOC Engineer with 4+ years of experience supporting enterprise network infrastructure across global environments.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mb-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl font-black text-[#3B82F6] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#A8B3C2] font-medium tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a
                href="#experience"
                className="px-7 py-3 bg-[#3B82F6] text-white font-semibold text-sm rounded btn-primary"
              >
                VIEW EXPERIENCE
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-[#3B82F6]/40 text-[#3B82F6] font-semibold text-sm rounded btn-outline flex items-center gap-2"
              >
                <Download size={14} />
                DOWNLOAD RESUME
              </a>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/saurabh-awasthi01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#A8B3C2] hover:text-[#3B82F6] text-sm font-medium transition-colors"
            >
              LinkedIn <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* RIGHT COLUMN - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 -m-4 opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 400 500" className="w-full h-full" fill="none">
                  {/* Router */}
                  <rect x="40" y="60" width="100" height="50" rx="6" stroke="#3B82F6" strokeWidth="1" />
                  <circle cx="60" cy="85" r="3" stroke="#3B82F6" strokeWidth="0.5" />
                  <circle cx="75" cy="85" r="3" stroke="#3B82F6" strokeWidth="0.5" />
                  <circle cx="90" cy="85" r="3" stroke="#3B82F6" strokeWidth="0.5" />
                  <circle cx="105" cy="85" r="3" stroke="#3B82F6" strokeWidth="0.5" />
                  <line x1="50" y1="100" x2="130" y2="100" stroke="#3B82F6" strokeWidth="0.5" />
                  
                  {/* Switch */}
                  <rect x="250" y="150" width="130" height="35" rx="3" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="258" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="273" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="288" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="303" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="318" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="333" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="348" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="363" y="158" width="10" height="7" rx="1" stroke="#3B82F6" strokeWidth="0.5" />
                  
                  {/* Cables */}
                  <path d="M140 85 Q180 85 180 130 Q180 170 250 167" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3 3" />
                  <path d="M140 95 Q190 95 190 140 Q190 180 250 175" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3 3" />
                  
                  {/* Rack */}
                  <rect x="60" y="350" width="80" height="130" rx="4" stroke="#3B82F6" strokeWidth="1" />
                  <rect x="68" y="360" width="64" height="16" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="68" y="382" width="64" height="16" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="68" y="404" width="64" height="16" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="68" y="426" width="64" height="16" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
                  <rect x="68" y="448" width="64" height="16" rx="2" stroke="#3B82F6" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Photo Card */}
              <div className="relative w-[300px] sm:w-[340px] lg:w-[360px] rounded-xl overflow-hidden border border-[#1E293B] bg-[#111827]">
                {/* Blue accent line at top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-60" />
                
                {/* Image */}
                <img
                  src={PROFILE_IMAGE}
                  alt="Saurabh Awasthi - Network Specialist"
                  className="w-full h-[380px] sm:h-[420px] lg:h-[440px] object-cover object-top"
                />

                {/* Bottom info strip */}
                <div className="bg-[#111827] border-t border-[#1E293B] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">SAURABH AWASTHI</p>
                      <p className="text-[#3B82F6] text-[10px] font-medium tracking-wider uppercase mt-0.5">Network Specialist</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#A8B3C2] text-[10px] font-medium tracking-wider">LUCKNOW • INDIA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
