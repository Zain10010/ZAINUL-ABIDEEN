import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (project) {
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
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Full-screen Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Card - Solid Background & High Stacking Order */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#101218] border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151820] shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6285FF] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#6285FF] font-semibold">
                Project Deep Dive // {project.badge}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Project Image Preview */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D1017] aspect-[16/9] sm:aspect-[21/9]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0D1017]/90 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                {project.category}
              </div>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base font-medium text-[#8CA6FF] mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* My Contribution Callout Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#6285FF]/10 via-[#151820] to-[#00F0FF]/10 border border-[#6285FF]/30">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold tracking-wider text-[#6285FF] uppercase">
                <Code2 className="w-4 h-4" />
                <span>My Direct Contribution</span>
              </div>
              <p className="text-sm text-[#F5F5F5] leading-relaxed">
                {project.myContribution}
              </p>
            </div>

            {/* Comprehensive Overview */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA]">
                Architectural Overview
              </h3>
              <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                {project.fullOverview}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA]">
                Key Technical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#151820] border border-white/[0.06] flex items-start gap-2.5 text-xs sm:text-sm text-[#D4D4D8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#A1A1AA]">
                Technologies &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-[#151820] border border-white/10 text-xs font-mono font-medium text-white shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links and Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-xs sm:text-sm font-semibold text-white transition-all hover:border-[#6285FF]/50"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3 h-3 text-[#A1A1AA]" />
                  </a>
                )}
                {project.liveDemoUrl && project.liveDemoUrl.startsWith('#') && (
                  <a
                    href={project.liveDemoUrl}
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6285FF] hover:bg-[#4F73EB] text-xs sm:text-sm font-semibold text-white transition-all shadow-electric-sm"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Research Section</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <span className="text-xs text-[#71717A] font-mono">
                Zainul Abideen N K P &bull; Portfolio
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};
