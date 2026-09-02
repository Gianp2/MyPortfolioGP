import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { siteConfig } from '../data/site';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<'work' | 'about' | 'contact' | ''>('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracking
      const sections = ['work', 'about', 'contact'] as const;
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/30 backdrop-blur-md border-b border-white/[0.05] py-3.5 sm:py-4 shadow-sm shadow-black/20'
          : 'bg-transparent border-b border-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center focus:outline-none"
          aria-label="Ir al inicio"
        >
          <span className="font-display font-bold tracking-wider text-xs sm:text-base uppercase text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
            {siteConfig.shortName}
          </span>
        </a>

        {/* Navigation Links - Desktop & Clean Mobile bar */}
        <nav className="flex items-center gap-2.5 sm:gap-6 md:gap-8 text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm font-medium tracking-wide uppercase font-mono">
          <button
            onClick={() => scrollTo('work')}
            className={`transition-colors duration-200 py-1 hover:text-white relative cursor-pointer whitespace-nowrap ${
              activeSection === 'work' ? 'text-white font-semibold' : 'text-[#8e8e88]'
            }`}
          >
            PROYECTOS
            {activeSection === 'work' && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white"
              />
            )}
          </button>

          <button
            onClick={() => scrollTo('about')}
            className={`transition-colors duration-200 py-1 hover:text-white relative cursor-pointer whitespace-nowrap ${
              activeSection === 'about' ? 'text-white font-semibold' : 'text-[#8e8e88]'
            }`}
          >
            SOBRE MÍ
            {activeSection === 'about' && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white"
              />
            )}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className={`transition-colors duration-200 py-1 hover:text-white relative cursor-pointer whitespace-nowrap ${
              activeSection === 'contact' ? 'text-white font-semibold' : 'text-[#8e8e88]'
            }`}
          >
            CONTACTO
            {activeSection === 'contact' && (
              <motion.span
                layoutId="nav-underline"
                className="absolute left-0 bottom-0 w-full h-[1.5px] bg-white"
              />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
