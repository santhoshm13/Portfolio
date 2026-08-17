import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { hackathonsList } from '../data/hackathons';
import { FadeIn } from './FadeIn';
import { Trophy, Award, Zap, Code2 } from 'lucide-react';

export const Hackathons: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'HACKATHON' | 'CHALLENGE' | 'SYMPOSIUM'>('ALL');

  const filteredItems = activeFilter === 'ALL'
    ? hackathonsList
    : hackathonsList.filter((item) => item.type === activeFilter);

  return (
    <section
      id="hackathons"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <Trophy size={16} className="text-[#BBCCD7]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
              05 // HACKATHONS & COMPETITIONS
            </span>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            20+ EVENTS ATTENDED
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1}>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase font-kanit tracking-tighter text-[#D7E2EA]">
              HACKATHONS <br />
              <span className="metallic-text">& COMPETITIONS</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#D7E2EA]/65 max-w-2xl font-normal">
              Active participant in high-intensity engineering hackathons, algorithm challenges, and national level symposiums.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'HACKATHON', 'CHALLENGE', 'SYMPOSIUM'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#D7E2EA] text-[#0C0C0C] font-bold shadow-md shadow-white/10'
                    : 'bg-white/[0.04] text-[#D7E2EA]/60 hover:text-white border border-[#D7E2EA]/15'
                }`}
              >
                {filter === 'ALL' ? 'ALL EVENTS (20)' : `${filter}S`}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Grid of Hackathons & Competitions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item, idx) => (
          <FadeIn key={item.name} delay={idx * 0.03}>
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="h-full p-6 sm:p-7 rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {item.type === 'SYMPOSIUM' ? (
                      <div className="p-2 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        <Award size={16} />
                      </div>
                    ) : item.type === 'CHALLENGE' ? (
                      <div className="p-2 rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        <Zap size={16} />
                      </div>
                    ) : (
                      <div className="p-2 rounded-xl bg-white/[0.05] text-[#D7E2EA] border border-[#D7E2EA]/10">
                        <Code2 size={16} />
                      </div>
                    )}
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#D7E2EA]/50">
                      {item.type}
                    </span>
                  </div>

                  {item.tag && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-[10px] font-mono text-[#D7E2EA]/70 border border-[#D7E2EA]/10">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-kanit uppercase tracking-tight text-[#D7E2EA] group-hover:text-white transition-colors mt-2">
                  {item.name}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-[11px] font-mono text-[#D7E2EA]/40 uppercase">
                <span>PARTICIPANT</span>
                <span className="group-hover:text-[#D7E2EA] transition-colors">ATTENDED</span>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
