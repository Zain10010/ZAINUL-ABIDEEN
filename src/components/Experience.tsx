import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Flag,
  Award,
  Flame
} from 'lucide-react';
import { experiencesData } from '../data/experience';
import { SpotlightCard } from './SpotlightCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0D1017]/50 border-y border-white/[0.04]">
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
            <Users className="w-3.5 h-3.5" />
            <span>Extracurricular Activities &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Leadership &amp; <span className="text-gradient-electric">Activities.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            National hackathon operations, technical symposium coordination, and departmental leadership initiatives.
          </p>
        </motion.div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencesData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard
                className={`p-6 sm:p-7 h-full flex flex-col justify-between group hover:border-[#6285FF]/50 transition-all ${
                  idx === 0 ? 'border-t-2 border-t-[#00F0FF]' : 'border-t-2 border-t-[#6285FF]'
                }`}
                spotlightColor={idx === 0 ? 'rgba(0, 240, 255, 0.18)' : 'rgba(98, 133, 255, 0.18)'}
              >
                <div>
                  {/* Top Category Badge & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-full ${
                        idx === 0
                          ? 'bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/30'
                          : 'bg-[#6285FF]/10 text-[#8CA6FF] border border-[#6285FF]/30'
                      }`}
                    >
                      {exp.category}
                    </span>
                    <span className="text-xs font-mono text-[#71717A] flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Role Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-[#6285FF] transition-colors leading-snug">
                    {exp.role}
                  </h3>

                  {/* Organization & Location */}
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-[#A1A1AA]">
                    <span className="font-medium text-white/90">{exp.organization}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 text-[#71717A]">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#D4D4D8] leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="mt-5 space-y-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-[#A1A1AA] flex items-start gap-2 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#6285FF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Competencies */}
                <div className="mt-6 pt-5 border-t border-white/[0.06]">
                  <p className="text-[10px] font-mono uppercase text-[#71717A] mb-2 font-semibold">
                    Key Competencies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-[#D4D4D8] border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
