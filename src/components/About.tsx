import React from 'react';
import { FadeIn } from './FadeIn';
import { Sparkles, MapPin, Target, Cpu } from 'lucide-react';

const ABOUT_TEXT =
  "I’m a dedicated Computer Science Engineering student passionate about building practical software and continuously improving my skills in full-stack development, machine learning, and software engineering. I believe in working hard, staying consistent, and taking responsibility for every task I take on. Through hands-on projects, I’ve developed a strong interest in solving real-world problems and learning by building. I’m now looking forward to starting my professional journey, where I can contribute to a team, take on meaningful challenges, learn from experienced professionals, and grow into a dependable software engineer.";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Section Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
              01 // PHILOSOPHY & BACKGROUND
            </span>
          </div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            SANTHOSH M
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left column: Oversized Heading + Clear Text */}
        <div className="lg:col-span-8">
          <FadeIn delay={0.1}>
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase font-kanit tracking-tighter text-[#D7E2EA] mb-8 sm:mb-12">
              ABOUT <span className="metallic-text">ME</span>
            </h2>
          </FadeIn>

          {/* Clean Readable Text */}
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-[1.45] tracking-tight font-kanit text-[#D7E2EA]/90">
              {ABOUT_TEXT}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-12">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full border border-[#D7E2EA]/15 text-xs font-mono tracking-widest uppercase text-[#D7E2EA]/70">
                BUILDING REAL PRODUCTS
              </span>
              <span className="px-4 py-2 rounded-full border border-[#D7E2EA]/15 text-xs font-mono tracking-widest uppercase text-[#D7E2EA]/70">
                LEARNING EVERY DAY
              </span>
              <span className="px-4 py-2 rounded-full border border-[#D7E2EA]/15 text-xs font-mono tracking-widest uppercase text-[#D7E2EA]/70">
                SOLVING REAL PROBLEMS
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right column: Side Metadata Cards */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Metadata Card 1 - Currently */}
          <FadeIn delay={0.2} x={20} y={0}>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/50 uppercase tracking-widest mb-3">
                <Sparkles size={14} className="text-[#BBCCD7]" />
                <span>CURRENTLY</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-kanit uppercase tracking-tight text-[#D7E2EA]">
                Building + Learning
              </p>
              <p className="text-xs text-[#D7E2EA]/60 mt-2 leading-relaxed">
                Exploring real-world web architecture & machine learning workflows.
              </p>
            </div>
          </FadeIn>

          {/* Metadata Card 2 - Focus */}
          <FadeIn delay={0.3} x={20} y={0}>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/50 uppercase tracking-widest mb-3">
                <Target size={14} className="text-[#BBCCD7]" />
                <span>FOCUS</span>
              </div>
              <ul className="space-y-2 text-base sm:text-lg font-semibold font-kanit uppercase tracking-wide text-[#D7E2EA]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]" />
                  <span>Full-Stack Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]" />
                  <span>Machine Learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7E2EA]" />
                  <span>Software Engineering</span>
                </li>
              </ul>
            </div>
          </FadeIn>

          {/* Metadata Card 3 - Location */}
          <FadeIn delay={0.4} x={20} y={0}>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 transition-all duration-300">
              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/50 uppercase tracking-widest mb-3">
                <MapPin size={14} className="text-[#BBCCD7]" />
                <span>LOCATION</span>
              </div>
              <p className="text-xl sm:text-2xl font-bold font-kanit uppercase tracking-tight text-[#D7E2EA]">
                Chennai, India
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D7E2EA]/50 mt-2">
                <Cpu size={12} />
                <span>CIT B.E CSE (2025 — 2029)</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
