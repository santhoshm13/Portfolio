import React from 'react';
import { certifications } from '../data/certifications';
import { FadeIn } from './FadeIn';
import { Award, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="relative w-full py-20 sm:py-28 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
            07 // CREDENTIALS
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            VERIFIED CERTIFICATIONS
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1}>
        <div className="mb-12 sm:mb-16">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase font-kanit tracking-tighter text-[#D7E2EA]">
            CERTIFICATIONS
          </h2>
        </div>
      </FadeIn>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <FadeIn key={idx} delay={idx * 0.08}>
            <div className="h-full p-7 rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-[#D7E2EA]/10 group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheck size={18} className="text-[#BBCCD7]" />
                  </div>
                  {cert.category && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] text-[10px] font-mono text-[#D7E2EA]/70 border border-[#D7E2EA]/10">
                      {cert.category}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-kanit uppercase tracking-tight text-[#D7E2EA] mb-2 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm font-mono text-[#BBCCD7] uppercase tracking-wider mb-6">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs font-mono text-[#D7E2EA]/50 uppercase">
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Award size={13} />
                  <span>COMPLETED</span>
                </div>
                <span>CREDENTIAL VERIFIED</span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
