import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Sparkles,
  ArrowDown,
  Download,
  FolderGit2,
  Atom,
  Terminal,
  Cpu,
  Layers,
  Camera,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data/profile';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography, Badges, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Top Status & Location Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Salutation Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#E0E7FF] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#6285FF] animate-pulse" />
                <span>HELLO, I'M ZAINUL ABIDEEN</span>
              </div>

              {/* Location Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#101218] border border-white/[0.08] text-xs text-[#A1A1AA]">
                <MapPin className="w-3.5 h-3.5 text-[#6285FF]" />
                <span>{profileData.location}</span>
              </div>

              {/* Open to Opportunities */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open to Opportunities</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Engineering <span className="text-gradient-electric">Intelligence.</span>
                <br />
                Building What's Next<span className="text-[#6285FF]">.</span>
              </h1>
            </div>

            {/* Role Title Sub-badge */}
            <div className="flex items-center gap-3 py-1">
              <div className="h-6 w-1 rounded-full bg-[#6285FF]" />
              <p className="text-base sm:text-lg md:text-xl font-medium text-[#E0E7FF] flex items-center gap-2 flex-wrap">
                <span className="text-[#6285FF] font-semibold">AI/ML Engineer</span>
                <span className="text-[#71717A]">&bull;</span>
                <span>Python Developer</span>
                <span className="text-[#71717A]">&bull;</span>
                <span className="text-[#A1A1AA]">Software Development Enthusiast</span>
              </p>
            </div>

            {/* Supporting Introduction */}
            <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
              {profileData.heroIntroduction}
            </p>

            {/* Academic Credential Pill */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#101218]/90 border border-white/[0.08] text-xs sm:text-sm text-[#A1A1AA]">
              <Cpu className="w-4 h-4 text-[#6285FF] shrink-0" />
              <span>
                B.E. AIML &bull; <strong className="text-white font-medium">Yenepoya Institute of Technology</strong> &bull; CGPA: <strong className="text-[#00F0FF]">8.43</strong> &bull; Batch 2023-27
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Explore My Work CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-[#6285FF] to-[#4F73EB] hover:from-[#4F73EB] hover:to-[#3858CC] transition-all duration-300 shadow-electric hover:shadow-[0_0_35px_rgba(98,133,255,0.6)] active:scale-95"
              >
                <FolderGit2 className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Explore My Work</span>
                <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>

              {/* Download Resume CTA */}
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#151820] hover:bg-[#1B202D] border border-white/10 hover:border-[#6285FF]/50 transition-all duration-300 hover:shadow-electric-sm active:scale-95"
              >
                <Download className="w-4 h-4 text-[#6285FF] transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Quick Tech Highlights Banner */}
            <div className="pt-4 flex items-center gap-3 text-xs text-[#71717A] flex-wrap">
              <span className="uppercase tracking-widest text-[#A1A1AA] font-semibold text-[11px]">Core Stack:</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#E0E7FF] border border-white/5 font-mono">Python</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#E0E7FF] border border-white/5 font-mono">LangGraph</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#E0E7FF] border border-white/5 font-mono">FastAPI</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#E0E7FF] border border-white/5 font-mono">Llama 3.1</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#E0E7FF] border border-white/5 font-mono">Qiskit</span>
              <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#E0E7FF] border border-white/5 font-mono">Redis</span>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Frame with Ambient Light */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Ambient Background Aura behind photo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#6285FF]/20 via-[#00F0FF]/15 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

            {/* Main Portrait Card Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-white/[0.02] border border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80">

              {/* Inner container with subtle lighting and rounded border */}
              <div className="relative rounded-[1.35rem] overflow-hidden bg-[#0D1017] border border-white/10 aspect-[4/5] flex items-center justify-center group">

                {/* Fallback & Portrait Rendering */}
                {!imageError ? (
                  <img
                    src="/images/zain-profile.jpeg"
                    alt="Zainul Abideen N K P"
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      // Fallback to .jpg if .jpeg fails
                      const img = document.getElementById('hero-portrait-img') as HTMLImageElement;
                      if (img && img.src.endsWith('.jpeg')) {
                        img.src = '/images/zain-profile.jpg';
                      } else {
                        setImageError(true);
                      }
                    }}
                    id="hero-portrait-img"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}

                {/* Styled Placeholder Overlay if image is default/error */}
                {(imageError || !imageLoaded) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#151822] via-[#0D1017] to-[#08090D]">
                    {/* Glowing circular avatar ring */}
                    <div className="relative w-36 h-36 mb-6 rounded-full flex items-center justify-center bg-[#151820] border-2 border-[#6285FF]/40 shadow-electric">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#6285FF]/20 to-[#00F0FF]/10 flex items-center justify-center">
                        <span className="text-5xl font-black text-gradient-electric tracking-wider">Z</span>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#101218] border border-[#6285FF] flex items-center justify-center text-[#6285FF]">
                        <Camera className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">Zainul Abideen N K P</h3>
                    <p className="text-xs font-semibold tracking-wider uppercase text-[#6285FF] mb-4">
                      AI/ML Engineer &bull; Developer
                    </p>

                    {/* High-Tech Profile Telemetry Card */}
                    <div className="w-full max-w-xs p-3.5 rounded-2xl bg-[#101218]/95 border border-white/[0.1] text-xs text-[#A1A1AA] space-y-2 text-left">
                      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06]">
                        <span className="text-[11px] text-[#71717A] font-mono">Affiliation</span>
                        <span className="text-[11px] font-medium text-white">Yenepoya Inst. of Tech</span>
                      </div>
                      <div className="flex items-center justify-between pb-1.5 border-b border-white/[0.06]">
                        <span className="text-[11px] text-[#71717A] font-mono">Academic CGPA</span>
                        <span className="text-[11px] font-mono font-bold text-[#00F0FF]">8.43 / 10.0</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-[#71717A] font-mono">Core Specialization</span>
                        <span className="text-[11px] font-medium text-[#8CA6FF]">GenAI &bull; Quantum ML</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-60" />

                {/* Bottom Frame Badge */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#0D1017]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">Zainul Abideen N K P</p>
                      <p className="text-[10px] text-[#A1A1AA] leading-tight">AI &amp; Machine Learning Eng.</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6285FF]/20 text-[#8CA6FF] border border-[#6285FF]/30">
                    VTU '27
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Top-Left "Quantum ML" */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#151820]/95 backdrop-blur-xl border border-white/15 shadow-xl flex items-center gap-2 text-xs font-semibold text-white"
              >
               
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-[#A1A1AA] font-normal leading-tight">Core Proficiency</p>
                  <p className="text-xs font-bold text-white leading-tight">AI &amp; ML</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 sm:pt-20 flex justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-xs text-[#71717A] hover:text-[#6285FF] transition-colors"
          >
            <span className="tracking-widest uppercase text-[10px] font-semibold">Scroll to Discover</span>
            <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-1.5 group-hover:border-[#6285FF]/60 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-[#6285FF]"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

