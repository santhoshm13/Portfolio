import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#090909] border-t border-[#D7E2EA]/10 pt-16 pb-12 px-6 sm:px-8 md:px-12 text-[#D7E2EA]">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[#D7E2EA]/10">
          <div>
            <span className="font-kanit font-black text-2xl sm:text-3xl uppercase tracking-widest block text-[#D7E2EA]">
              SANTHOSH M
            </span>
            <p className="text-xs font-mono text-[#D7E2EA]/50 uppercase tracking-widest mt-1">
              FULL-STACK DEVELOPER & ML ENTHUSIAST
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/70">
            <a
              href="https://github.com/santhoshm13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/santhosh-m-332962381"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://leetcode.com/u/SANTHOSH_M13/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFA116] transition-colors"
            >
              LEETCODE
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText('santhoshmohan1323@gmail.com');
              }}
              className="hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
            >
              EMAIL
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#D7E2EA]/40 hover:text-white transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#D7E2EA]/40 uppercase tracking-wider">
          <p>© 2026 Santhosh M. All rights reserved.</p>
          <p className="tracking-widest">
            BUILT WITH REACT • TYPESCRIPT • TAILWIND • FRAMER MOTION
          </p>
        </div>
      </div>
    </footer>
  );
};
