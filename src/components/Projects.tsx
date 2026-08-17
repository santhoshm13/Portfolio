import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from './FadeIn';

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full py-24 sm:py-32 md:py-40 px-6 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* Top Header */}
      <FadeIn>
        <div className="flex items-center justify-between border-b border-[#D7E2EA]/10 pb-6 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D7E2EA]/50">
            04 // FEATURED WORKS
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/40">
            ENGINEERING PORTFOLIO
          </span>
        </div>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.1}>
        <div className="mb-14 sm:mb-20">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase font-kanit tracking-tighter text-[#D7E2EA]">
            <span className="metallic-text">PROJECTS</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D7E2EA]/60 max-w-xl font-normal">
            Real-world systems with robust backend architecture, real-time protocols, and practical AI integrations.
          </p>
        </div>
      </FadeIn>

      {/* Stacking Cards Container */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </section>
  );
};
