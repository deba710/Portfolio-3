import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      id="main-footer"
      className="bg-[#0A0A0A] border-t border-neutral-900 py-12 text-neutral-400 relative"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-neutral-900">
          
          {/* Logo and Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm font-mono shadow-md shadow-blue-600/30">
                D
              </div>
              <span className="text-lg font-black text-white uppercase tracking-tight">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-medium">
              {portfolioData.personal.role} based in {portfolioData.personal.location}. Dedicated to crafting responsive web applications and mastering computer science fundamentals.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center md:justify-end gap-3">
            <a
              id="footer-github-link"
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121212] border border-neutral-800 hover:border-neutral-700 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#121212] border border-neutral-800 hover:border-neutral-700 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2.5 rounded-xl bg-[#121212] border border-neutral-800 hover:border-neutral-700 hover:text-blue-400 transition-colors"
              aria-label="Email Debangan"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/30 ml-2"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright and Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Crafted with React & TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
