import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, ExternalLink, Download, Linkedin } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs font-semibold tracking-[0.2em] uppercase">Contact</span>
            <div className="w-8 h-px bg-[#3B82F6]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">LET'S CONNECT</h2>
          <p className="text-[#A8B3C2] text-base sm:text-lg">
            Interested in networking, infrastructure or technical opportunities?
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 sm:p-10 rounded-xl border border-[#1E293B]/50 bg-[#151F2E] text-center"
        >
          <h3 className="text-xl font-bold text-white mb-1">SAURABH AWASTHI</h3>
          <p className="text-[#3B82F6] text-xs font-medium tracking-wider uppercase mb-8">
            Network Specialist | NOC Engineer
          </p>

          {/* Contact Details */}
          <div className="space-y-3 mb-10">
            <div className="flex items-center justify-center gap-3 text-[#A8B3C2]">
              <MapPin size={14} className="text-[#3B82F6]/60" />
              <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#A8B3C2]">
              <Mail size={14} className="text-[#3B82F6]/60" />
              <a href="mailto:saurabhawasthi8765@gmail.com" className="text-sm hover:text-[#3B82F6] transition-colors">
                saurabhawasthi8765@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#A8B3C2]">
              <Linkedin size={14} className="text-[#3B82F6]/60" />
              <a
                href="https://linkedin.com/in/saurabh-awasthi01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-[#3B82F6] transition-colors flex items-center gap-1"
              >
                linkedin.com/in/saurabh-awasthi01 <ExternalLink size={10} />
              </a>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:saurabhawasthi8765@gmail.com"
              className="w-full sm:w-auto px-7 py-3 bg-[#3B82F6] text-white font-semibold text-sm rounded btn-primary"
            >
              EMAIL ME
            </a>
            <a
              href="https://linkedin.com/in/saurabh-awasthi01"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 border border-[#3B82F6]/40 text-[#3B82F6] font-semibold text-sm rounded btn-outline"
            >
              LINKEDIN
            </a>
            <a
              href="#home"
              className="w-full sm:w-auto px-7 py-3 border border-[#1E293B] text-[#A8B3C2] font-semibold text-sm rounded btn-outline flex items-center justify-center gap-2"
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
