import React from 'react';
import { educationList } from '../data/education';
import { FadeIn } from './FadeIn';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full py-24 sm:py-32 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
            06 // ACADEMIC BACKGROUND
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            DEGREES & QUALIFICATIONS
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1}>
        <div className="mb-14 sm:mb-16">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase font-kanit tracking-tighter text-[#D7E2EA]">
            EDUCATION
          </h2>
        </div>
      </FadeIn>

      {/* Education Cards Grid */}
      <div className="space-y-8">
        {educationList.map((edu, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="p-8 sm:p-10 md:p-12 rounded-[32px] sm:rounded-[36px] bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-all duration-300 relative overflow-hidden shadow-2xl">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className={edu.cgpa ? "lg:col-span-8" : "lg:col-span-12"}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 text-xs font-mono text-[#BBCCD7] uppercase tracking-widest">
                      <GraduationCap size={16} />
                      <span>{edu.degree}</span>
                    </div>

                    {edu.statusText && (
                      <span className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border ${
                        edu.statusText === 'COMPLETED'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-white/[0.05] text-[#D7E2EA] border-white/10'
                      }`}>
                        {edu.statusText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-kanit uppercase tracking-tight text-[#D7E2EA] mb-3">
                    {edu.major}
                  </h3>

                  <div className="flex items-center gap-2 text-base sm:text-lg font-medium text-[#D7E2EA]/85 mb-4">
                    <MapPin size={16} className="text-[#BBCCD7]" />
                    <span>{edu.institution}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#D7E2EA]/60">
                    <Calendar size={14} />
                    <span>TIMELINE: {edu.period}</span>
                  </div>
                </div>

                {/* CGPA Badge (if available) */}
                {edu.cgpa && (
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
                    <div className="w-full sm:w-auto p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/20 flex flex-col items-center text-center">
                      <div className="flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#BBCCD7] uppercase mb-1">
                        <Award size={14} />
                        <span>CUMULATIVE GPA</span>
                      </div>
                      <div className="text-5xl sm:text-6xl font-black font-kanit tracking-tighter metallic-text-bright">
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
