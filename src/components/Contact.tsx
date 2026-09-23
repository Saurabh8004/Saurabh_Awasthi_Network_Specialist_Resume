import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, ExternalLink, Download, Send, Linkedin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">LET'S CONNECT</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Have a network challenge, technical opportunity or just want to connect?
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 sm:p-12 rounded-xl border border-[#1E293B]/50 bg-[#0D141B]/80 glow-box-cyan text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">SAURABH AWASTHI</h3>
          <p className="text-[#00D4FF] text-sm font-medium tracking-wider mb-8">NETWORK SPECIALIST | NOC ENGINEER</p>

          {/* Contact Details */}
          <div className="space-y-4 mb-10">
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <MapPin size={16} className="text-[#00D4FF]/60" />
              <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Mail size={16} className="text-[#00D4FF]/60" />
              <a href="mailto:saurabhawasthi8765@gmail.com" className="text-sm hover:text-[#00D4FF] transition-colors">
                saurabhawasthi8765@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Linkedin size={16} className="text-[#00D4FF]/60" />
              <a
                href="https://linkedin.com/in/saurabh-awasthi01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#00D4FF] transition-colors flex items-center gap-1"
              >
                linkedin.com/in/saurabh-awasthi01 <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:saurabhawasthi8765@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00D4FF] text-[#05070A] font-bold text-sm rounded tracking-wide hover:bg-[#00D4FF]/90 transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              <Send size={14} />
              SEND MESSAGE
            </a>
            <a
              href="https://linkedin.com/in/saurabh-awasthi01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-[#00D4FF]/40 text-[#00D4FF] font-bold text-sm rounded tracking-wide hover:bg-[#00D4FF]/10 transition-all duration-200"
            >
              <Linkedin size={14} />
              LINKEDIN <ExternalLink size={12} />
            </a>
            <a
              href="#home"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-[#1E293B] text-gray-400 font-bold text-sm rounded tracking-wide hover:border-[#00D4FF]/30 hover:text-[#00D4FF] transition-all duration-200"
            >
              <Download size={14} />
              RESUME
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
