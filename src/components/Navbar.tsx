import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Leadership', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'education', 'skills', 'projects', 'research', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#08090D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-4">
            {/* Logo - Single Line, Never Wraps */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 shrink-0 whitespace-nowrap text-white hover:text-[#6285FF] transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#151820] border border-white/10 flex items-center justify-center text-sm font-bold text-white group-hover:border-[#6285FF]/50 group-hover:shadow-[0_0_15px_rgba(98,133,255,0.4)] transition-all">
                <span className="text-gradient-electric">Z</span>
              </div>
              <span className="tracking-wider font-extrabold text-sm sm:text-base lg:text-lg whitespace-nowrap">
                ZAINUL ABIDEEN<span className="text-[#6285FF]">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links Pill */}
            <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-2.5 py-1 rounded-full bg-[#101218]/90 border border-white/[0.08] backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`relative px-2.5 xl:px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-full whitespace-nowrap ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-[#6285FF]/20 border border-[#6285FF]/50 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Action: Clean Resume Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenResume}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#151820] hover:bg-[#1B202D] border border-white/10 hover:border-[#6285FF]/50 text-white transition-all duration-200 hover:shadow-electric-sm active:scale-95 whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-[#6285FF] group-hover:scale-110 transition-transform" />
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile / Tablet Controls (< 1024px) */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                onClick={onOpenResume}
                className="px-3 py-1.5 rounded-xl bg-[#151820] border border-white/10 text-xs font-semibold text-white flex items-center gap-1.5 hover:border-[#6285FF]/40 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#6285FF]" />
                <span>Resume</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-[#151820] border border-white/10 text-white hover:text-[#6285FF] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#0D1017]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 lg:hidden shadow-2xl max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-white/80 font-mono">Open to Opportunities &bull; Kannur, Kerala</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#6285FF]/15 text-[#6285FF] border border-[#6285FF]/30 font-semibold'
                      : 'text-[#A1A1AA] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-[#6285FF] text-white hover:bg-[#4F73EB] transition-colors shadow-electric-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download / View Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
