import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#08090D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <a
              href="#home"
              className="text-lg font-black tracking-widest text-white hover:text-[#6285FF] transition-colors"
            >
              ZAIN<span className="text-[#6285FF]">.</span>
            </a>
            <p className="text-xs text-[#71717A]">
              Designed &amp; Developed by <strong className="text-white/90">Zainul Abideen N K P</strong>.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-[#A1A1AA] hover:text-[#6285FF] transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-[#A1A1AA] hover:text-[#0077B5] transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-[#A1A1AA] hover:text-white transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#71717A] font-mono">
              &copy; {currentYear} &bull; All Rights Reserved
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#151820] hover:bg-[#1B202D] border border-white/10 text-[#A1A1AA] hover:text-[#6285FF] hover:border-[#6285FF]/40 transition-all group"
              title="Back to Top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
