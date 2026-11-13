import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  Github,
  Atom,
  Sparkles,
  ArrowRight,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { ProjectModal } from './ProjectModal';
import { SpotlightCard } from './SpotlightCard';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const flagshipProject = projectsData[0];
  const regularProjects = projectsData.slice(1);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0D1017]/60">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected <span className="text-gradient-electric">Projects.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Flagship quantum machine learning research, collaborative AI applications, and full-stack software systems.
          </p>
        </motion.div>

        {/* ========================================================
            FLAGSHIP HERO PROJECT (Project 01: Quantum ML)
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <SpotlightCard
            className="p-6 sm:p-10 border-[#6285FF]/40 hover:border-[#6285FF]/80 shadow-2xl group"
            spotlightColor="rgba(98, 133, 255, 0.22)"
          >
            {/* Ambient Background Aura */}
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-to-bl from-[#6285FF]/20 via-[#00F0FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Visual Preview Left (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#08090D] shadow-xl group-hover:shadow-electric transition-all aspect-[16/10] relative">
                  <img
                    src={flagshipProject.image}
                    alt={flagshipProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#08090D]/90 backdrop-blur-md border border-[#6285FF]/40 text-xs font-mono font-bold text-[#00F0FF] flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{flagshipProject.badge}</span>
                  </div>
                </div>
              </div>

              {/* Content Details Right (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6285FF]">
                      {flagshipProject.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight group-hover:text-[#6285FF] transition-colors">
                    {flagshipProject.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Contribution Highlight */}
                  <div className="mt-4 p-4 rounded-xl bg-[#151820]/90 border border-white/[0.08] text-xs sm:text-sm text-[#A1A1AA]">
                    <span className="font-semibold text-white flex items-center gap-1.5 mb-1 text-xs uppercase tracking-wider text-[#6285FF]">
                      <Code2 className="w-3.5 h-3.5" />
                      My Direct Contribution:
                    </span>
                    <span>{flagshipProject.myContribution}</span>
                  </div>

                  {/* Tech Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {flagshipProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#151820] border border-white/10 text-xs font-mono text-[#E0E7FF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(flagshipProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6285FF] hover:bg-[#4F73EB] text-xs sm:text-sm font-semibold text-white transition-all shadow-electric-sm active:scale-95"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {flagshipProject.githubUrl && (
                    <a
                      href={flagshipProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-xs sm:text-sm font-medium text-white transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================
            PROJECTS 02, 03, 04 (Grid of 3 Cards with Staggered Scroll)
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <SpotlightCard className="h-full flex flex-col justify-between group hover:border-[#6285FF]/50">
                <div>
                  {/* Mockup Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0D1017] border-b border-white/[0.08]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0D1017]/85 backdrop-blur-md border border-white/10 text-[11px] font-mono font-semibold text-white">
                      {project.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#6285FF] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-[#A1A1AA] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* My Contribution callout */}
                    <div className="mt-4 p-3 rounded-lg bg-[#101218] border border-white/[0.06] text-xs text-[#D4D4D8]">
                      <span className="font-semibold text-white/90 block mb-0.5 text-[11px] uppercase tracking-wider text-[#6285FF]">
                        Contribution:
                      </span>
                      <span className="line-clamp-2">{project.myContribution}</span>
                    </div>

                    {/* Tech Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[11px] font-mono text-[#E0E7FF]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-1.5 py-0.5 text-[11px] text-[#71717A] font-mono">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Buttons */}
                <div className="p-6 pt-0 border-t border-white/[0.06] flex items-center justify-between gap-2 mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[#8CA6FF] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#101218] hover:bg-[#1B202D] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#101218] hover:bg-[#1B202D] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
                        title="Live Demo / View"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Modal for Deep Dive */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
