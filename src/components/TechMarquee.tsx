import React from 'react';
import { motion } from 'framer-motion';

const TECH_ROW_1 = [
  'C++',
  'PYTHON',
  'REACT',
  'NODE.JS',
  'EXPRESS',
  'MYSQL',
  'MONGODB',
  'TENSORFLOW',
  'GEMINI',
  'GIT',
  'DSA',
];

const TECH_ROW_2 = [
  'JAVASCRIPT',
  'C',
  'REST APIS',
  'OPENCV',
  'LEAFLET',
  'SQL',
  'FULL-STACK',
  'MACHINE LEARNING',
  'VS CODE',
  'SOCKET.IO',
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-16 bg-[#0C0C0C] border-y border-[#D7E2EA]/10 overflow-hidden select-none relative">
      {/* Side gradient fades for smooth marquee blending */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Leftward */}
      <div className="flex overflow-hidden py-2">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
          className="flex whitespace-nowrap items-center shrink-0"
        >
          {[...TECH_ROW_1, ...TECH_ROW_1].map((item, idx) => (
            <div key={`r1-${idx}`} className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-kanit font-extrabold uppercase tracking-widest text-[#D7E2EA]/40 hover:text-[#D7E2EA] transition-colors duration-300 px-4 sm:px-8 cursor-default">
                {item}
              </span>
              <span className="text-sm sm:text-lg font-light text-[#D7E2EA]/20 px-2 select-none">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Rightward */}
      <div className="flex overflow-hidden py-2 mt-2">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 28 }}
          className="flex whitespace-nowrap items-center shrink-0"
        >
          {[...TECH_ROW_2, ...TECH_ROW_2].map((item, idx) => (
            <div key={`r2-${idx}`} className="flex items-center">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-kanit font-extrabold uppercase tracking-widest text-[#D7E2EA]/30 hover:text-[#D7E2EA] transition-colors duration-300 px-4 sm:px-8 cursor-default">
                {item}
              </span>
              <span className="text-sm sm:text-lg font-light text-[#D7E2EA]/20 px-2 select-none">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
