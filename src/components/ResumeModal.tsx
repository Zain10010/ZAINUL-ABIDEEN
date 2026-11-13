import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/Zainul_Abideen_Resume.pdf';
    link.download = 'Zainul_Abideen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#101218] border border-white/20 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#6285FF]/20 border border-[#6285FF]/40 flex items-center justify-center text-[#6285FF]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Curriculum Vitae</h3>
                <p className="text-[11px] text-[#A1A1AA] font-mono">Zainul Abideen N K P &bull; Resume Document</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/[0.05]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Resume Summary Card */}
          <div className="p-6 rounded-2xl bg-[#151820] border border-white/10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
              <div>
                <h4 className="text-lg font-bold text-white">{profileData.fullName}</h4>
                <p className="text-xs text-[#8CA6FF] font-medium">
                  Kannur, Kerala | 9074567918 | zain05@gmail.com
                </p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30 w-fit font-semibold">
                CGPA: 8.43 &bull; Class of 2027
              </span>
            </div>

            <div className="space-y-3 text-xs text-[#D4D4D8]">
              <div>
                <span className="text-[#A1A1AA] font-semibold block mb-1">Career Objective:</span>
                <p className="text-white/90 italic text-[11px]">
                  "{profileData.careerObjective}"
                </p>
              </div>

              <div>
                <span className="text-[#A1A1AA] font-semibold block mb-1">Education:</span>
                <p className="text-white font-medium">
                  B.E. Artificial Intelligence &amp; Machine Learning — Yenepoya Institute of Technology, Mangalore (CGPA: 8.43)
                </p>
                <p className="text-[#71717A] text-[11px]">Class 12th: MASS GHSS Ettikulam (88.98%) &bull; Class 10th: MASS GHSS Ettikulam (93.85%)</p>
              </div>

              <div>
                <span className="text-[#A1A1AA] font-semibold block mb-1">Featured Projects:</span>
                <p className="text-white">
                  &bull; <strong>NEXUS:</strong> Multi-Agent AI Orchestration Framework (LangGraph, FastAPI, Redis, Tavily)<br />
                  &bull; <strong>Quantum ML:</strong> Cancer Immunotherapy Prediction (PennyLane, Qiskit, Scikit-learn)<br />
                  &bull; <strong>Legal AI Platform:</strong> IPC Guidance Chatbot (Llama 3.1, Groq API, LangChain)
                </p>
              </div>

              <div>
                <span className="text-[#A1A1AA] font-semibold block mb-1">Technical Stack:</span>
                <p className="text-[#8CA6FF] font-mono text-[11px]">
                  Python, LangGraph, FastAPI, Scikit-learn, Hugging Face, Redis, MySQL, C, R, Julia, Power BI
                </p>
              </div>

              <div>
                <span className="text-[#A1A1AA] font-semibold block mb-1">Leadership &amp; Extracurricular:</span>
                <p className="text-[#D4D4D8]">
                  Volunteer — Matrix Fusion 4.0 National Level Hackathon (2026) &bull; PINNACLE Coordinator (2024)
                </p>
              </div>
            </div>
          </div>

          {/* Verified Document Badge */}
          <div className="p-3.5 rounded-xl bg-[#0D1017] border border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold text-white/90 block">Official Verified Curriculum Vitae</span>
                <span className="text-[11px] text-[#71717A]">Complete academic &amp; project record</span>
              </div>
            </div>
            <span className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#6285FF]/10 text-[#8CA6FF] border border-[#6285FF]/30 font-semibold">
              PDF &bull; 2 Pages
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-[#151820] text-xs font-semibold text-white hover:bg-[#1B202D] transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6285FF] to-[#4F73EB] hover:from-[#4F73EB] hover:to-[#3858CC] text-xs font-semibold text-white transition-all shadow-electric active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
