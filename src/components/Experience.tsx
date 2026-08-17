import React from 'react';
import { experiences } from '../data/experience';
import { FadeIn } from './FadeIn';
import { Briefcase, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
            03 // INDUSTRY EXPERIENCE
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            TIMELINE
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1}>
        <div className="mb-14 sm:mb-20">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase font-kanit tracking-tighter text-[#D7E2EA]">
            EXPERIENCE
          </h2>
        </div>
      </FadeIn>

      {/* Timeline Layout */}
      <div className="relative">
        {/* Timeline subtle vertical guideline on desktop */}
        <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D7E2EA]/30 via-[#D7E2EA]/10 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <FadeIn key={idx} delay={0.2}>
              <div className="relative md:pl-20 group">
                {/* Timeline node icon on desktop */}
                <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0C0C0C] border-2 border-[#D7E2EA] items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-white/10 z-10">
                  <div className="w-2 h-2 rounded-full bg-[#D7E2EA]" />
                </div>

                {/* Experience Content Box */}
                <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-all duration-300 relative overflow-hidden shadow-2xl">
                  {/* Atmospheric gradient overlay */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-full pointer-events-none" />

                  {/* Header Row */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#BBCCD7] uppercase tracking-widest mb-1">
                        <Briefcase size={14} />
                        <span>{exp.organization}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-kanit uppercase tracking-tight text-[#D7E2EA]">
                        {exp.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#D7E2EA]/70">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-[#D7E2EA]/10">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.05] border border-[#D7E2EA]/10">
                        <Clock size={13} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Domain Tag */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#BBCCD7]">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      Domain: {exp.domain}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-[#D7E2EA]/70 font-light leading-relaxed mb-8 max-w-4xl">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="pt-4 border-t border-[#D7E2EA]/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40 mr-2">
                      TECH:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-white/[0.04] text-xs font-mono text-[#D7E2EA] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
