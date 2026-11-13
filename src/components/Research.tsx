import React from 'react';
import { motion } from 'framer-motion';
import {
  Atom,
  Sparkles,
  GitCompare,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Binary,
  Compass,
  FileCode2,
  BarChart2
} from 'lucide-react';
import { researchData } from '../data/research';
import { SpotlightCard } from './SpotlightCard';

export const Research: React.FC = () => {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-[#00F0FF]/30 text-xs font-semibold tracking-wider uppercase text-[#00F0FF] mb-4 shadow-sm">
            <Atom className="w-4 h-4 animate-spin-slow text-[#00F0FF]" />
            <span>Research &amp; Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {researchData.sectionHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            {researchData.sectionSubtitle}
          </p>

          {/* Research Interest Pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {researchData.interests.map((interest) => (
              <span
                key={interest}
                className="px-3.5 py-1 rounded-full bg-[#151820] border border-white/10 text-xs font-medium text-[#E0E7FF] hover:border-[#6285FF]/50 transition-colors"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Featured Research Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SpotlightCard
            className="p-6 sm:p-8 border-l-4 border-l-[#6285FF] border-white/10"
            spotlightColor="rgba(98, 133, 255, 0.2)"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6285FF]">
                  Featured Scientific Exploration
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {researchData.featuredTitle}
                </h3>
                <p className="text-sm text-[#A1A1AA] max-w-4xl leading-relaxed">
                  Investigating how Quantum Support Vector Machines (QSVM) and Variational Quantum Circuits (VQC) map complex transcriptomic profiles into Hilbert space to surpass classical linear separability barriers in immunotherapy patient cohorts.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-[#08090D] border border-white/10 text-center">
                  <span className="text-[10px] font-mono text-[#71717A] block">Toolkit</span>
                  <span className="text-xs font-mono font-bold text-[#00F0FF]">Qiskit &bull; PennyLane</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

        {/* Motivation & Quantum Advantage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* Card 1: Biomedical Motivation */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between" spotlightColor="rgba(98, 133, 255, 0.16)">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6285FF]/15 border border-[#6285FF]/30 flex items-center justify-center text-[#6285FF]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    The Biomedical Challenge
                  </h4>
                </div>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  {researchData.motivation.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs text-[#A1A1AA] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6285FF]" />
                <span>Target: Anti-PD-1 &amp; Anti-CTLA-4 Response Classification</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Quantum Advantage in Hilbert Space */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <SpotlightCard className="p-6 sm:p-7 h-full flex flex-col justify-between border-t-2 border-t-[#00F0FF]" spotlightColor="rgba(0, 240, 255, 0.16)">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    The Quantum Advantage
                  </h4>
                </div>
                <p className="text-sm text-[#D4D4D8] leading-relaxed mb-4">
                  {researchData.motivation.quantumAdvantage}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-[#00F0FF] flex items-center gap-2">
                <span>Mathematical Basis: |ψ(x)⟩ = U(x)|0⟩^⊗n</span>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Architectural 6-Stage Workflow Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                End-to-End Pipeline Architecture
              </h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-0.5">
                Multi-stage orchestration across classical hardware and quantum state simulation
              </p>
            </div>
            <span className="text-xs font-mono text-[#6285FF] font-semibold">6 Pipeline Stages</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchData.workflowStages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
              >
                <SpotlightCard className="p-5 h-full flex flex-col justify-between group hover:border-[#6285FF]/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#6285FF] px-2 py-0.5 rounded bg-[#6285FF]/10 border border-[#6285FF]/20">
                        STAGE {stage.step}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          stage.domain === 'Quantum'
                            ? 'bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30'
                            : stage.domain === 'Hybrid'
                            ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30'
                            : 'bg-white/[0.05] text-[#A1A1AA] border border-white/10'
                        }`}
                      >
                        {stage.domain} Domain
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-[#6285FF] transition-colors leading-snug">
                      {stage.title}
                    </h4>

                    <p className="mt-2 text-xs text-[#A1A1AA] leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {stage.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#101218] border border-white/5 text-[#E0E7FF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* QSVM vs Classical Machine Learning Comparison Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <SpotlightCard className="p-6 sm:p-8 bg-[#101218] border border-white/15" spotlightColor="rgba(98, 133, 255, 0.18)">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6285FF]/10 border border-[#6285FF]/30 flex items-center justify-center text-[#6285FF]">
                <GitCompare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Quantum vs. Classical ML Benchmarking Protocol
                </h4>
                <p className="text-xs text-[#A1A1AA]">
                  Empirical evaluation methodology adhering to scientific rigor
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Classical Baselines */}
              <div className="p-4 rounded-xl bg-[#08090D] border border-white/10 space-y-3">
                <span className="text-xs font-mono font-bold text-[#A1A1AA] uppercase tracking-wider block">
                  Classical Baseline Models
                </span>
                <ul className="space-y-2 text-xs text-[#D4D4D8]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#71717A] shrink-0 mt-0.5" />
                    <span><strong>Classical SVM (RBF &amp; Linear):</strong> Hyperplane optimization in Euclidean space.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#71717A] shrink-0 mt-0.5" />
                    <span><strong>Random Forest &amp; XGBoost:</strong> Ensembles of classical decision trees for feature ranking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#71717A] shrink-0 mt-0.5" />
                    <span><strong>Evaluation Metrics:</strong> ROC-AUC, Balanced Accuracy, Precision-Recall, F1-Score.</span>
                  </li>
                </ul>
              </div>

              {/* Right: Quantum Formulations */}
              <div className="p-4 rounded-xl bg-[#08090D] border border-[#6285FF]/30 space-y-3">
                <span className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-wider block">
                  Quantum Formulations (QSVM &amp; VQC)
                </span>
                <ul className="space-y-2 text-xs text-[#E0E7FF]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span><strong>Quantum Kernel Trick:</strong> Calculates K(x_i, x_j) = |⟨ψ(x_i)|ψ(x_j)⟩|² via quantum interference.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span><strong>Variational Circuit (VQC):</strong> Tunable parameterized rotation layers trained through hybrid gradient feedback.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF] shrink-0 mt-0.5" />
                    <span><strong>NISQ Feasibility:</strong> PCA dimensionality compression to fit current noisy intermediate-scale qubit bounds.</span>
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
};
