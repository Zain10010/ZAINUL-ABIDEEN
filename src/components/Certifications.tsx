import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  FileBadge,
  Eye,
  X
} from 'lucide-react';
import { certificationsData, CertificationItem } from '../data/certifications';
import { SpotlightCard } from './SpotlightCard';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedCert(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#6285FF] mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Validations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Earned <span className="text-gradient-electric">Certifications.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Industry-recognized training in cloud architectures, AI systems, version control, and data science.
          </p>
        </motion.div>

        {/* Certifications Gallery Grid with Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:border-[#6285FF]/50">
                <div>
                  {/* Header: Issuer Badge & Status */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cert.badgeColor} p-0.5 flex items-center justify-center shadow-sm`}
                      >
                        <div className="w-full h-full bg-[#0D1017] rounded-[10px] flex items-center justify-center font-black font-mono text-xs text-white">
                          {cert.issuerLogoBadge}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-[#8CA6FF] block">
                          {cert.issuer}
                        </span>
                        <span className="text-[11px] text-[#71717A] flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-400" />
                          {cert.credentialStatus}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#A1A1AA] border border-white/5">
                      {cert.year}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-[#6285FF] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-[10px] font-mono text-[#D4D4D8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-semibold text-[#8CA6FF] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview Entry</span>
                  </button>

                  <a
                    href="#contact"
                    className="text-[11px] font-mono text-[#71717A] hover:text-[#6285FF] transition-colors"
                  >
                    Request Verification &rarr;
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Note on Verification */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#71717A] max-w-xl mx-auto">
            All certification records are authentic and maintained in physical and digital formats. Digital credential hashes or certificates can be verified upon request.
          </p>
        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert &&
        createPortal(
          <AnimatePresence>
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCert(null)}
                className="fixed inset-0 bg-black/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-lg bg-[#101218] border border-white/20 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl my-8"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <FileBadge className="w-5 h-5 text-[#6285FF]" />
                    <span className="text-xs font-mono font-bold uppercase text-[#6285FF]">
                      Credential Verification
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1 rounded-lg text-[#A1A1AA] hover:text-white"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#0D1017] border border-white/10 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedCert.badgeColor} p-1 flex items-center justify-center shrink-0`}>
                      <div className="w-full h-full bg-[#151820] rounded-lg flex items-center justify-center font-black text-sm text-white">
                        {selectedCert.issuerLogoBadge}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {selectedCert.title}
                      </h4>
                      <p className="text-xs text-[#8CA6FF] font-mono mt-0.5">
                        Issued by {selectedCert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-[#D4D4D8] space-y-2">
                    <p><strong>Status:</strong> {selectedCert.credentialStatus}</p>
                    <p><strong>Description:</strong> {selectedCert.description}</p>
                    <p><strong>Skills Validated:</strong> {selectedCert.skillsCovered.join(', ')}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-[#A1A1AA]">
                    Official certificate documentation or verification URL is available upon request through the contact form or LinkedIn profile.
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 rounded-xl bg-[#1B202D] text-xs font-semibold text-white hover:bg-white/10 transition-colors"
                    >
                      Close
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setSelectedCert(null)}
                      className="px-4 py-2 rounded-xl bg-[#6285FF] text-xs font-semibold text-white hover:bg-[#4F73EB] transition-colors"
                    >
                      Contact Zain
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};
