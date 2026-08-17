import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'HACKATHONS', href: '#hackathons' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['about', 'skills', 'experience', 'projects', 'hackathons', 'education', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0C0C0C]/85 backdrop-blur-md border-b border-[#D7E2EA]/10 shadow-2xl shadow-black/50'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 text-lg sm:text-xl font-extrabold tracking-wider text-[#D7E2EA] hover:text-white transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#D7E2EA] group-hover:scale-125 transition-transform duration-300" />
            <span className="font-kanit uppercase font-black tracking-widest text-[#D7E2EA]">
              SANTHOSH M
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs lg:text-sm font-medium tracking-[0.2em] transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#D7E2EA]/60 hover:text-[#D7E2EA]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D7E2EA]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#D7E2EA] hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-30 bg-[#0C0C0C]/95 backdrop-blur-xl pt-28 px-8 pb-12 flex flex-col justify-between md:hidden border-b border-[#D7E2EA]/15"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D7E2EA]/40 font-mono">
                NAVIGATION
              </span>
              <div className="flex flex-col gap-5">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    className="text-2xl font-bold tracking-widest text-[#D7E2EA] hover:text-white flex items-center justify-between border-b border-[#D7E2EA]/10 pb-4"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={20} className="text-[#D7E2EA]/40" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-[#D7E2EA]/10 pt-6 flex flex-col gap-2 text-xs font-mono text-[#D7E2EA]/50">
              <p>CHENNAI INSTITUTE OF TECHNOLOGY</p>
              <p>SANTHOSHMOHAN1323@GMAIL.COM</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
