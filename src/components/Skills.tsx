import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { FadeIn } from './FadeIn';
import { Code2, Globe, Database, BrainCircuit, Cpu, Wrench } from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  LANGUAGES: <Code2 size={20} className="text-black/70" />,
  'WEB DEVELOPMENT': <Globe size={20} className="text-black/70" />,
  DATABASES: <Database size={20} className="text-black/70" />,
  'AI / MACHINE LEARNING': <BrainCircuit size={20} className="text-black/70" />,
  'CORE COMPUTER SCIENCE': <Cpu size={20} className="text-black/70" />,
  TOOLS: <Wrench size={20} className="text-black/70" />,
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] pt-20 sm:pt-28 pb-24 sm:pb-32 px-6 sm:px-8 md:px-12 transition-all duration-500 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Top Header */}
        <FadeIn>
          <div className="flex items-center justify-between border-b border-black/10 pb-6 mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-black/50">
              02 // TECHNICAL ARSENAL
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-black/40">
              ENGINEERING CAPABILITIES
            </span>
          </div>
        </FadeIn>

        {/* Huge Black Typography Heading */}
        <FadeIn delay={0.1}>
          <div className="mb-14 sm:mb-20">
            <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase font-kanit tracking-tighter text-[#0C0C0C]">
              SKILLS
            </h2>
            <p className="mt-4 text-base sm:text-lg text-black/60 max-w-xl font-normal">
              Solid foundations across frontend, backend, databases, machine learning, and core computer science fundamentals.
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => (
            <FadeIn key={category.title} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full p-6 sm:p-8 rounded-3xl bg-[#F4F6F8] border border-black/5 flex flex-col justify-between hover:border-black/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {CATEGORY_ICONS[category.title] || <Code2 size={20} />}
                      </div>
                      <h3 className="font-kanit font-extrabold text-base sm:text-lg uppercase tracking-wider text-[#0C0C0C]">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-black/30">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 rounded-full bg-white text-[#0C0C0C] text-xs sm:text-sm font-medium border border-black/5 shadow-sm group-hover:border-black/15 transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-3 border-t border-black/5 flex items-center justify-between text-[11px] font-mono text-black/40 uppercase tracking-wider">
                  <span>{category.skills.length} TECHNOLOGIES</span>
                  <span>VERIFIED STACK</span>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
