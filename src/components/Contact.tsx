import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './Icons';
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('santhoshmohan1323@gmail.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    });
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+91 8438130823').then(() => {
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2500);
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
            08 // CONNECT & COLLABORATE
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            OPEN TO ROLES
          </span>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Dramatic Heading & Pitch */}
        <div className="lg:col-span-7">
          <FadeIn delay={0.1}>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase font-kanit tracking-tighter leading-[0.88] text-[#D7E2EA] mb-8">
              <span className="block">LET'S</span>
              <span className="metallic-text block">BUILD</span>
              <span className="block">SOMETHING.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-[#D7E2EA]/75 font-light leading-relaxed max-w-xl mb-10">
              Have an idea, opportunity, or project worth building? Let's connect.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D7E2EA] text-[#0C0C0C] font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-white/5 active:scale-95 cursor-pointer"
              >
                <span>{emailCopied ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY EMAIL ADDRESS'}</span>
                {emailCopied ? (
                  <Check size={16} className="text-emerald-700" />
                ) : (
                  <Copy size={16} className="group-hover:scale-110 transition-transform duration-300" />
                )}
              </button>

              <a
                href="https://linkedin.com/in/santhosh-m-332962381"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/[0.04] text-[#D7E2EA] border border-[#D7E2EA]/20 font-semibold text-xs sm:text-sm tracking-widest uppercase hover:border-[#D7E2EA]/60 hover:bg-white/[0.08] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <LinkedinIcon size={16} />
                <span>LINKEDIN</span>
              </a>

              <a
                href="https://leetcode.com/u/SANTHOSH_M13/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/[0.04] text-[#D7E2EA] border border-[#D7E2EA]/20 font-semibold text-xs sm:text-sm tracking-widest uppercase hover:border-[#FFA116]/60 hover:text-[#FFA116] hover:bg-white/[0.08] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <LeetcodeIcon size={16} />
                <span>LEETCODE</span>
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Direct Contact Cards (No external app launch) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Email Display Card */}
          <FadeIn delay={0.2} x={20} y={0}>
            <div
              onClick={handleCopyEmail}
              className="group p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/50 transition-all duration-300 block relative overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#BBCCD7] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <span>DIRECT EMAIL</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/60 group-hover:text-white">
                  {emailCopied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>CLICK TO COPY</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold font-kanit tracking-tight text-[#D7E2EA] group-hover:text-white break-all transition-colors">
                santhoshmohan1323@gmail.com
              </p>
            </div>
          </FadeIn>

          {/* Phone Display Card */}
          <FadeIn delay={0.3} x={20} y={0}>
            <div
              onClick={handleCopyPhone}
              className="group p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 hover:border-[#D7E2EA]/50 transition-all duration-300 block relative overflow-hidden shadow-xl cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#BBCCD7] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>PHONE / WHATSAPP</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/60 group-hover:text-white">
                  {phoneCopied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>CLICK TO COPY</span>
                    </>
                  )}
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl font-bold font-kanit tracking-tight text-[#D7E2EA] group-hover:text-white transition-colors">
                +91 8438130823
              </p>
            </div>
          </FadeIn>

          {/* Location & Social Grid */}
          <FadeIn delay={0.4} x={20} y={0}>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#121212] border border-[#D7E2EA]/15 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-[#BBCCD7] uppercase tracking-widest mb-3">
                <MapPin size={14} />
                <span>LOCATION</span>
              </div>
              <p className="text-lg sm:text-xl font-bold font-kanit uppercase tracking-tight text-[#D7E2EA] mb-6">
                Chennai, Tamil Nadu, India
              </p>

              <div className="pt-4 border-t border-[#D7E2EA]/10 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/santhoshm13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:text-white hover:bg-white/[0.08] transition-colors border border-[#D7E2EA]/10 cursor-pointer"
                >
                  <GithubIcon size={14} />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com/in/santhosh-m-332962381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:text-white hover:bg-white/[0.08] transition-colors border border-[#D7E2EA]/10 cursor-pointer"
                >
                  <LinkedinIcon size={14} />
                  <span>LINKEDIN</span>
                </a>

                <a
                  href="https://leetcode.com/u/SANTHOSH_M13/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] text-xs font-mono uppercase tracking-wider text-[#D7E2EA] hover:text-[#FFA116] hover:bg-white/[0.08] transition-colors border border-[#D7E2EA]/10 cursor-pointer"
                >
                  <LeetcodeIcon size={14} />
                  <span>LEETCODE</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
