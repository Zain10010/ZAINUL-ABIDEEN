import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Target,
  Lightbulb,
  Sparkles,
  Award,
  Layers,
  Code2,
  Atom,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { profileData } from '../data/profile';
import { SpotlightCard } from './SpotlightCard';
import { AnimatedCounter } from './AnimatedCounter';

export const About: React.FC = () => {
  const cards = profileData.educationHighlights;

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Staggered Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#6285FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biography &amp; Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A Little About <span className="text-gradient-electric">Me.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
            Bridging theoretical artificial intelligence with software engineering, quantum experiments, and team leadership.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Story Narrative Card (Left 7 cols) with Spotlight Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#6285FF] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#6285FF] animate-pulse" />
                    Professional Profile
                  </span>
                  <span className="text-xs text-[#71717A] font-mono">B.E. AIML &bull; 2023–2027</span>
                </div>

                {/* Exact Provided Content Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base text-[#D4D4D8] leading-relaxed font-normal">
                  <p>
                    I'm currently pursuing my Bachelor's degree in Artificial Intelligence and Machine Learning at{' '}
                    <strong className="text-white font-medium">Yenepoya Institute of Technology</strong>.
                  </p>
                  <p>
                    I am passionate about understanding how intelligent systems work and how technology can solve real-world challenges.
                  </p>
                  <p>
                    My technical journey includes working with <span className="text-[#8CA6FF] font-medium">Python</span>,{' '}
                    <span className="text-[#8CA6FF] font-medium">machine learning frameworks</span>, database systems, web technologies, and{' '}
                    <span className="text-[#00F0FF] font-medium">quantum computing libraries</span>.
                  </p>
                  <p>
                    Beyond academics, I enjoy collaborating on projects, participating in technical events, coordinating activities, and continuously improving my technical and professional skills.
                  </p>
                </div>

                {/* Belief Banner */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#6285FF]/10 via-[#151820] to-[#00F0FF]/10 border border-[#6285FF]/25 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6285FF]/20 border border-[#6285FF]/40 flex items-center justify-center text-[#6285FF] shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white uppercase tracking-wider">Core Belief</p>
                    <p className="text-sm font-medium text-[#E0E7FF] mt-0.5 italic">
                      "I believe in learning by building, experimenting, and improving."
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Counters Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-white/[0.08]">
                <div>
                  <p className="text-2xl font-bold text-white font-mono">
                    <AnimatedCounter value={3} suffix="+" />
                  </p>
                  <p className="text-xs text-[#A1A1AA]">Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#6285FF] font-mono">
                    8.43
                  </p>
                  <p className="text-xs text-[#A1A1AA]">Engineering CGPA</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#00F0FF] font-mono">
                    <AnimatedCounter value={10} suffix="+"/>
                  </p>
                  <p className="text-xs text-[#A1A1AA]">Certifications &amp; Workshops</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400 font-mono">
                    <AnimatedCounter value={3} suffix="+" />
                  </p>
                  <p className="text-xs text-[#A1A1AA]">Hackathon &amp; Leadership</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column (5 cols): The 3 Elegant Information Cards with Staggered Reveal */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Card 01 - Education */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SpotlightCard className="p-5 group hover:border-[#6285FF]/50" spotlightColor="rgba(98, 133, 255, 0.2)">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#6285FF]/10 border border-[#6285FF]/30 flex items-center justify-center text-[#6285FF] group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#6285FF] font-bold tracking-wider">
                        CARD {cards[0].number}
                      </span>
                      <h3 className="text-base font-bold text-white">{cards[0].title}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#71717A]">2023–2027</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#E0E7FF]">{cards[0].description}</p>
                <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed">{cards[0].detail}</p>
              </SpotlightCard>
            </motion.div>

            {/* Card 02 - Technical Focus */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SpotlightCard className="p-5 group hover:border-[#00F0FF]/50" spotlightColor="rgba(0, 240, 255, 0.18)">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 flex items-center justify-center text-[#00F0FF] group-hover:scale-110 transition-transform">
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#00F0FF] font-bold tracking-wider">
                        CARD {cards[1].number}
                      </span>
                      <h3 className="text-base font-bold text-white">{cards[1].title}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#71717A]">Specialization</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#E0E7FF]">{cards[1].description}</p>
                <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed">{cards[1].detail}</p>
              </SpotlightCard>
            </motion.div>

            {/* Card 03 - Mindset */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SpotlightCard className="p-5 group hover:border-emerald-500/50" spotlightColor="rgba(16, 185, 129, 0.18)">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold tracking-wider">
                        CARD {cards[2].number}
                      </span>
                      <h3 className="text-base font-bold text-white">{cards[2].title}</h3>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#71717A]">Philosophy</span>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#E0E7FF]">{cards[2].description}</p>
                <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed">{cards[2].detail}</p>
              </SpotlightCard>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
