import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const easeCurve: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

  // Normalized (0..1) Organic Blob Path for clipPathUnits="objectBoundingBox"
  const blobPathNormalized =
    'M 0.22,0.06 C 0.46,0.01 0.76,0.03 0.88,0.18 C 0.99,0.32 0.98,0.64 0.92,0.82 C 0.85,0.96 0.65,0.99 0.44,0.98 C 0.24,0.97 0.08,0.90 0.04,0.72 C -0.01,0.52 0.02,0.30 0.07,0.18 C 0.11,0.09 0.15,0.07 0.22,0.06 Z';

  // Corresponding 0..100 viewBox path for the SVG Outline Overlay
  const blobPathViewBox =
    'M 22,6 C 46,1 76,3 88,18 C 99,32 98,64 92,82 C 85,96 65,99 44,98 C 24,97 8,90 4,72 C -1,52 2,30 7,18 C 11,9 15,7 22,6 Z';

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* SVG ClipPath Definition (Hidden / Defs Only) */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-blob-clip" clipPathUnits="objectBoundingBox">
            <path d={blobPathNormalized} />
          </clipPath>
        </defs>
      </svg>

      {/* Background atmospheric ambient glows */}
      <div className="absolute top-16 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#BBCCD7]/10 via-[#646973]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-[#646973]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top micro metadata header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: easeCurve }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-5 text-xs sm:text-sm font-mono tracking-widest text-[#D7E2EA]/60 uppercase z-10"
      >
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#D7E2EA]" />
          <span>COMPUTER SCIENCE ENGINEERING • FULL-STACK • ML</span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>2025 — 2029</span>
        </div>
      </motion.div>

      {/* Central Hero Content */}
      <div className="my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
        {/* Left Column: Heading, Subheading & CTAs */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-10 pt-2 lg:pt-4">
          {/* Main Massive Metallic Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: easeCurve }}
            className="select-none"
          >
            <h1 className="font-kanit font-black tracking-[-0.03em] leading-[0.9] uppercase text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[4.4vw] xl:text-[4.6vw]">
              <span className="metallic-text block">I TURN DATA</span>
              <span className="metallic-text block">INTO DECISIONS,</span>
              <span className="metallic-text block">CODE INTO</span>
              <span className="metallic-text block">SOLUTIONS.</span>
            </h1>
          </motion.div>

          {/* Subheading and description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: easeCurve }}
            className="mt-6 sm:mt-8 max-w-xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight text-[#D7E2EA]">
              Full-Stack Developer & Machine Learning Enthusiast
            </p>
            <p className="mt-2.5 text-sm sm:text-base text-[#D7E2EA]/65 font-light leading-relaxed">
              I build practical software, explore machine learning, and turn real-world problems into working products.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeCurve }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-3 px-7 py-4 bg-[#D7E2EA] text-[#0C0C0C] font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-white/5 active:scale-95 cursor-pointer"
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-3 px-7 py-4 bg-transparent text-[#D7E2EA] border border-[#D7E2EA]/20 font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:border-[#D7E2EA]/60 hover:bg-white/[0.03] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>CONTACT ME</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Hand-Drawn SVG Blob Container (Enlarged 650-700px) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: easeCurve }}
          className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-end justify-center relative w-full"
        >
          {/* Subtle Ambient Radial Backlight behind portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] lg:w-[580px] xl:w-[680px] h-[380px] sm:h-[480px] lg:h-[580px] xl:h-[680px] bg-gradient-to-tr from-[#646973]/25 via-[#BBCCD7]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

          {/* SVG Blob Image Container: 1:1 Square aspect-ratio with 650-700px max-width */}
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[650px] 2xl:max-w-[700px] aspect-square flex items-center justify-center">
            {/* Clipped Image: 100% width/height, object-fit: cover, object-position: top center */}
            <img
              src="/santhosh.png"
              alt="Santhosh M"
              className="w-full h-full object-cover object-top select-none pointer-events-none"
              style={{
                clipPath: 'url(#hero-blob-clip)',
                WebkitClipPath: 'url(#hero-blob-clip)',
              }}
            />

            {/* Layered White Outline SVG Overlay: Exactly traces the 1:1 clipped boundary */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none z-10 drop-shadow-[0_0_16px_rgba(255,255,255,0.3)]"
              aria-hidden="true"
            >
              <path
                d={blobPathViewBox}
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom Footer / Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: easeCurve }}
        className="pt-5 border-t border-[#D7E2EA]/10 flex items-center justify-between text-xs font-mono tracking-widest text-[#D7E2EA]/50 uppercase z-10"
      >
        <div className="hidden sm:flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="group mx-auto sm:mx-0 flex items-center gap-2 text-[#D7E2EA]/60 hover:text-white transition-colors cursor-pointer"
          aria-label="Scroll to explore"
        >
          <span>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-[#D7E2EA]" />
          </motion.div>
        </button>

        <div className="hidden md:flex items-center gap-2">
          <span>BUILD</span>
          <span>•</span>
          <span>LEARN</span>
          <span>•</span>
          <span>SOLVE</span>
        </div>
      </motion.div>
    </section>
  );
};
