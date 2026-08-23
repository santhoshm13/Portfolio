import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';
import { GithubIcon } from './Icons';
import {
  ExternalLink,
  Volume2,
  Activity,
  MapPin,
  Camera,
  Compass,
  CheckCircle,
  Clock,
  Sparkles,
  Database,
  Layers,
  Zap,
  Bot,
  Heart,
  Truck,
  Wrench,
  Fuel,
  Navigation,
  FileSpreadsheet,
  Cpu,
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="relative lg:sticky lg:top-24 w-full mb-12 sm:mb-16 md:mb-20"
      style={{ zIndex: index + 10 }}
    >
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-[28px] sm:rounded-[36px] border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60 bg-[#0E0E0E] p-6 sm:p-8 md:p-10 transition-all duration-300 shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Ambient Glow */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none transition-opacity duration-500 group-hover:opacity-25"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Card Header: Number, Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black font-kanit text-[#D7E2EA]/50 group-hover:text-[#D7E2EA] transition-colors duration-300">
              {project.number}
            </span>
            <span className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#D7E2EA]/80 font-semibold">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#D7E2EA] hover:text-white underline underline-offset-4 decoration-[#D7E2EA]/40 hover:decoration-white transition-all cursor-pointer"
              >
                <span>OPEN LIVE APP</span>
                <ExternalLink size={13} />
              </a>
            )}

            {project.statusText ? (
              <span className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border ${
                project.number === '05'
                  ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
              }`}>
                {project.statusText}
              </span>
            ) : (
              <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE DEPLOYED
              </span>
            )}
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Title, Description, Highlights, Tech & Action Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-kanit uppercase tracking-tight text-[#D7E2EA] mb-3">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-[#D7E2EA]/85 font-normal leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 mb-6">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D7E2EA] shrink-0" />
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/70 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.05] text-[11px] font-mono text-[#D7E2EA] border border-[#D7E2EA]/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D7E2EA]/10">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-200 shadow-md shadow-white/10 active:scale-95 cursor-pointer"
                >
                  <span>LIVE PROJECT</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 text-[#D7E2EA]/40 border border-[#D7E2EA]/10 font-bold text-xs tracking-widest uppercase cursor-not-allowed"
                >
                  <span>LIVE PROJECT — COMING SOON</span>
                </button>
              )}

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] text-[#D7E2EA] border border-[#D7E2EA]/20 font-bold text-xs tracking-widest uppercase hover:border-[#D7E2EA]/60 hover:bg-white/[0.08] transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <GithubIcon size={14} />
                  <span>GITHUB REPO</span>
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-[#D7E2EA]/40 border border-[#D7E2EA]/10 font-bold text-xs tracking-widest uppercase cursor-not-allowed"
                >
                  <span>SOURCE — COMING SOON</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Abstract Interactive UI Preview Card */}
          <div className="lg:col-span-6 w-full rounded-2xl bg-[#141414] border border-[#D7E2EA]/15 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Project 01: DataGenie Abstract UI */}
            {project.number === '01' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <Zap size={14} className="animate-pulse" />
                    <span>AI DATA ASSISTANT & ANALYTICS</span>
                  </div>
                  <span className="text-indigo-400/80">LIVE ON VERCEL</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-indigo-500/30">
                  <div className="flex items-center justify-between text-[10px] text-indigo-400 uppercase tracking-wider mb-1">
                    <span className="flex items-center gap-1">
                      <Sparkles size={12} /> INTELLIGENT WORKFLOW ENGINE
                    </span>
                    <span className="text-emerald-400">READY</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-kanit text-white uppercase">
                    PROMPT-DRIVEN DATASET OPERATIONS
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/60 mt-1 font-mono">
                    Automated exploratory data analysis, visual summaries, and export tools.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-[11px]">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/80">
                      <Database size={13} className="text-indigo-400" />
                      DATASET IMPORT
                    </span>
                    <CheckCircle size={12} className="text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-[11px]">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/80">
                      <Layers size={13} className="text-indigo-400" />
                      INSIGHT GENERATION
                    </span>
                    <CheckCircle size={12} className="text-emerald-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <span>DEPLOYED: VERCEL APP</span>
                  <span>REACT + TAILWIND</span>
                </div>
              </div>
            )}

            {/* Project 02: Cognivue Abstract UI */}
            {project.number === '02' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold">
                    <Cpu size={14} className="animate-pulse" />
                    <span>AI CATALOG ENRICHMENT ENGINE</span>
                  </div>
                  <span className="text-purple-300/80">RENDER LIVE</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-purple-500/30">
                  <div className="text-[10px] text-purple-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>ATTRIBUTE EXTRACTION & LOV VALIDATION</span>
                    <span className="text-emerald-400">CONFIDENCE: 99.4%</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-kanit text-white uppercase">
                    "STANDARDIZED 252-COLUMN EXPORT PIPELINE"
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/60 mt-1 font-mono">
                    Automates brand/MFR matching, attribute parsing, and AI marketing copy generation.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2.5 rounded-lg bg-black/30 border border-[#D7E2EA]/10">
                    <div className="text-[#D7E2EA]/40 uppercase">MATCHING</div>
                    <div className="font-bold text-white mt-1">BRAND & MFR</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/30 border border-[#D7E2EA]/10">
                    <FileSpreadsheet size={13} className="text-purple-400 mx-auto mb-0.5" />
                    <div className="font-bold text-white">252 COLS</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/30 border border-[#D7E2EA]/10">
                    <div className="text-[#D7E2EA]/40 uppercase">DATABASE</div>
                    <div className="font-bold text-emerald-400 mt-1">SUPABASE</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <span>FASTAPI + PYTHON BACKEND</span>
                  <span>REACT + TYPESCRIPT</span>
                </div>
              </div>
            )}

            {/* Project 03: Queue Cure '26 Abstract UI */}
            {project.number === '03' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <Activity size={14} className="animate-pulse" />
                    <span>SOCKET.IO REAL-TIME OPD FEED</span>
                  </div>
                  <span className="text-[#D7E2EA]/40">SESSION: ACTIVE</span>
                </div>

                <div className="grid grid-cols-2 gap-3 my-2">
                  <div className="p-4 rounded-xl bg-black/40 border border-[#38bdf8]/30">
                    <div className="text-[10px] text-[#38bdf8] uppercase tracking-wider mb-1">
                      NOW SERVING
                    </div>
                    <div className="text-3xl sm:text-4xl font-black font-kanit text-white">
                      TOKEN #042
                    </div>
                    <div className="text-[11px] text-[#D7E2EA]/60 mt-1">
                      ROOM 302 • DR. SHARMA
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-[#D7E2EA]/10 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-wider mb-1">
                        ESTIMATED WAIT
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-kanit text-[#38bdf8]">
                        ~ 8 MINS
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                      <Clock size={11} />
                      <span>DYNAMIC CALCULATION</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#38bdf8]">
                    <Volume2 size={16} className="animate-bounce" />
                    <span className="font-semibold text-[11px]">
                      10-LANGUAGE PA ANNOUNCEMENT
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-[#D7E2EA]/80">
                      TAMIL
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-[#D7E2EA]/80">
                      HINDI
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-[#D7E2EA]/80">
                      TELUGU
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-black/40 text-[9px] text-[#D7E2EA]/80">
                      ENG
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <span>RECEPTION AUTH: SECURE</span>
                  <span>DAILY RESET: ENABLED</span>
                </div>
              </div>
            )}

            {/* Project 04: CiviConnect Abstract UI */}
            {project.number === '04' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <Sparkles size={14} />
                    <span>GEMINI VISION API • ISSUE CLASSIFICATION</span>
                  </div>
                  <span className="text-[#D7E2EA]/40">LEAFLET MAP</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <Camera size={13} />
                      IMAGE ANALYSIS RESULT
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                      CONFIDENCE: 98.4%
                    </span>
                  </div>
                  <p className="font-kanit text-lg sm:text-xl font-bold text-white uppercase">
                    POTHOLE DETECTED • HIGH SEVERITY
                  </p>
                  <p className="text-[11px] text-[#D7E2EA]/60 font-mono">
                    Auto-categorized & assigned to Ward 14 Road Maintenance Division
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                  <div className="p-2.5 rounded-lg bg-black/30 border border-[#D7E2EA]/10">
                    <div className="text-[#D7E2EA]/40 uppercase">COLLECTOR</div>
                    <div className="font-bold text-white mt-1">DISTRICT VIEW</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/30 border border-[#D7E2EA]/10">
                    <div className="text-[#D7E2EA]/40 uppercase">MAYOR</div>
                    <div className="font-bold text-white mt-1">CITY AUDIT</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/30 border border-[#D7E2EA]/10">
                    <div className="text-[#D7E2EA]/40 uppercase">MLA DASHBOARD</div>
                    <div className="font-bold text-white mt-1">CONSTITUENCY</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <div className="flex items-center gap-1 text-emerald-400">
                    <MapPin size={12} />
                    <span>OPENSTREETMAP GPS PINNED</span>
                  </div>
                  <span>MONGODB ATLAS SYNC</span>
                </div>
              </div>
            )}

            {/* Project 05: SAKHI Abstract UI */}
            {project.number === '05' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-rose-400 font-semibold">
                    <Bot size={14} className="animate-pulse" />
                    <span>AGENTIC GEMINI FUNCTION-CALLING</span>
                  </div>
                  <span className="text-rose-400/80">TEAM FAB4</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-rose-500/30">
                  <div className="text-[10px] text-rose-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>ACTION EXECUTION ENGINE</span>
                    <span className="text-emerald-400">STATUS: PROACTIVE</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-kanit text-white uppercase">
                    "MENSTRUAL HEALTH & PREGNANCY CARE COMPANION"
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/60 mt-1 font-mono">
                    Cycle tracking, symptom analysis, and pregnancy wellness guidance powered by agentic AI.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-[11px]">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/80">
                      <Heart size={13} className="text-rose-400" />
                      CYCLE TRACKING
                    </span>
                    <CheckCircle size={12} className="text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-[11px]">
                    <span className="flex items-center gap-1.5 text-[#D7E2EA]/80">
                      <Sparkles size={13} className="text-rose-400" />
                      PREGNANCY CARE
                    </span>
                    <CheckCircle size={12} className="text-emerald-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <span>VIBE2VISION HACKATHON</span>
                  <span>GEMINI 1.5 PRO / FLASH</span>
                </div>
              </div>
            )}

            {/* Project 06: FleetX Abstract UI */}
            {project.number === '06' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <Truck size={14} className="animate-pulse" />
                    <span>CENTRALIZED TRANSPORT OPERATIONS</span>
                  </div>
                  <span className="text-cyan-400/80">FULL-STACK SYSTEM</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/30">
                  <div className="text-[10px] text-cyan-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                    <span>FLEET TELEMATICS & DISPATCH</span>
                    <span className="text-emerald-400">ACTIVE TRIP: #FL-902</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-kanit text-white uppercase">
                    "VEHICLE, DRIVER & EXPENSE LOGS SYNCED"
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/60 mt-1 font-mono">
                    Real-time driver assignment, automated maintenance alerts, and fuel audits.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-center">
                    <Navigation size={13} className="text-cyan-400 mx-auto mb-1" />
                    <div className="text-[9px] text-[#D7E2EA]/50 uppercase">TRIPS</div>
                    <div className="font-bold text-white text-[11px]">DISPATCHED</div>
                  </div>
                  <div className="p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-center">
                    <Wrench size={13} className="text-cyan-400 mx-auto mb-1" />
                    <div className="text-[9px] text-[#D7E2EA]/50 uppercase">MAINTENANCE</div>
                    <div className="font-bold text-emerald-400 text-[11px]">ON SCHEDULE</div>
                  </div>
                  <div className="p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-center">
                    <Fuel size={13} className="text-cyan-400 mx-auto mb-1" />
                    <div className="text-[9px] text-[#D7E2EA]/50 uppercase">EXPENSES</div>
                    <div className="font-bold text-white text-[11px]">TRACKED</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <span>CENTRALIZED DB</span>
                  <span>REACT + NODE + EXPRESS</span>
                </div>
              </div>
            )}

            {/* Project 07: TN Tourism Abstract UI */}
            {project.number === '07' && (
              <div className="flex flex-col h-full justify-between gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-3">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold">
                    <Compass size={14} />
                    <span>JAVA FULL STACK • DESTINATION DISCOVERY</span>
                  </div>
                  <span className="text-amber-400/80">IN DEVELOPMENT</span>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-amber-500/30">
                  <div className="text-[10px] text-amber-400 uppercase tracking-wider mb-1">
                    ALL 38 DISTRICTS OF TAMIL NADU
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-kanit text-white uppercase">
                    HERITAGE, HILLS & COASTAL RETREATS
                  </div>
                  <p className="text-[11px] text-[#D7E2EA]/60 mt-1 font-mono">
                    Integrated district-wise tourist curation and localized lodging finder.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-[11px]">
                    <span className="text-[#D7E2EA]/80">HOTEL & ACCOMMODATION DISCOVERY</span>
                    <CheckCircle size={13} className="text-amber-400" />
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-[#D7E2EA]/10 text-[11px]">
                    <span className="text-[#D7E2EA]/80">JAVA BACKEND DATA MANAGEMENT</span>
                    <CheckCircle size={13} className="text-amber-400" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#D7E2EA]/50 pt-2 border-t border-[#D7E2EA]/10">
                  <span>JAVA • SPRING ARCHITECTURE</span>
                  <span>SCHEDULED RELEASE 2026</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
