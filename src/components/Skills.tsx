import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  BrainCircuit,
  Binary,
  Layers,
  Database,
  BarChart3,
  Wrench,
  Sparkles,
  Terminal,
  Cpu,
  Atom,
  Check,
  Search
} from 'lucide-react';
import { skillCategories, SkillCategory } from '../data/skills';
import { SpotlightCard } from './SpotlightCard';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    programming: <Terminal className="w-5 h-5 text-[#6285FF]" />,
    'genai-aiml': <BrainCircuit className="w-5 h-5 text-[#00F0FF]" />,
    'core-engineering': <Layers className="w-5 h-5 text-[#8CA6FF]" />,
    'web-db': <Database className="w-5 h-5 text-emerald-400" />,
    tools: <Wrench className="w-5 h-5 text-amber-400" />,
    'soft-skills': <Sparkles className="w-5 h-5 text-purple-400" />
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151820] border border-white/10 text-xs font-semibold tracking-wider uppercase text-[#6285FF] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-electric">Skills.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA]">
            Categorized competence across algorithms, machine intelligence, quantum toolkits, and software development.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#6285FF] text-white shadow-electric-sm font-semibold'
                  : 'bg-[#151820] text-[#A1A1AA] hover:text-white border border-white/[0.06] hover:bg-[#1B202D]'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#6285FF] text-white shadow-electric-sm font-semibold'
                    : 'bg-[#151820] text-[#A1A1AA] hover:text-white border border-white/[0.06] hover:bg-[#1B202D]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Skill Grid with Staggered Scroll & Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 25 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: catIndex * 0.07 }}
              >
                <SpotlightCard className="p-6 h-full flex flex-col justify-between group hover:border-[#6285FF]/50">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#101218] border border-white/10 flex items-center justify-center group-hover:border-[#6285FF]/40 transition-colors">
                          {categoryIcons[category.id] || <Code className="w-5 h-5 text-[#6285FF]" />}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white group-hover:text-[#6285FF] transition-colors">
                            {category.title}
                          </h3>
                          <span className="text-[11px] font-mono text-[#71717A]">{category.badge}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#A1A1AA] mb-5 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Skills Badges Pill Grid */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`group/skill relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 cursor-default ${
                            skill.featured
                              ? 'bg-[#6285FF]/10 text-white border border-[#6285FF]/30 hover:bg-[#6285FF]/20 hover:border-[#6285FF]/60 hover:shadow-electric-sm'
                              : 'bg-[#101218] text-[#D4D4D8] border border-white/[0.06] hover:border-white/20 hover:text-white'
                          }`}
                          title={skill.description}
                        >
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6285FF] animate-pulse" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Info */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-[#71717A]">
                    <span>{category.skills.length} Technical Skills</span>
                    <span className="text-[#8CA6FF] font-mono">100% Authentic</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#71717A] max-w-xl mx-auto">
            Skills reflect active coursework, ongoing research implementations, and verified software project deliverables without inflated percentage bars.
          </p>
        </div>
      </div>
    </section>
  );
};
