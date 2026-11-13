import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Building2, CheckCircle2, BookOpen } from 'lucide-react';
import { profileData } from '../data/profile';

export const Education: React.FC = () => {
  const timeline = profileData.educationTimeline;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#101218]/40 border-y border-white/[0.04]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#6285FF] mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-gradient-electric">Timeline.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Rigorous foundation in computer science, machine intelligence, and analytical sciences.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center/Side Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#6285FF] via-white/10 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.institution}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-[#151820] border-2 border-[#6285FF] shadow-electric-sm flex items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
                  </div>

                  {/* Content Box (Alternating on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'
                    }`}
                  >
                    <div className="bento-card p-6 sm:p-7 hover:border-[#6285FF]/40 group text-left">
                      {/* Period Badge & Status */}
                      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6285FF]/10 border border-[#6285FF]/30 text-xs font-mono font-semibold text-[#8CA6FF]">
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>
                        <div className="flex items-center gap-2">
                          {item.score && (
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30 font-mono font-semibold">
                              {item.score}
                            </span>
                          )}
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[#A1A1AA] border border-white/5">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      {/* Degree and Major */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#6285FF] transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-sm font-semibold text-[#8CA6FF] mt-0.5">
                        {item.major}
                      </p>

                      {/* Institution & University */}
                      <div className="mt-3 flex flex-col gap-1 text-xs text-[#A1A1AA]">
                        <div className="flex items-center gap-1.5 font-medium text-white/90">
                          <Building2 className="w-3.5 h-3.5 text-[#6285FF] shrink-0" />
                          <span>{item.institution}</span>
                        </div>
                        {item.university && (
                          <div className="flex items-center gap-1.5 pl-5 text-[#A1A1AA]">
                            <span>Affiliated with <strong className="text-white/80">{item.university}</strong></span>
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1.5 pl-5 text-[#71717A]">
                            <MapPin className="w-3 h-3 shrink-0" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2">
                        {item.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#6285FF] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

