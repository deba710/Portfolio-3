import React, { useState } from 'react';
import { 
  ArrowRight, 
  Send, 
  MapPin, 
  Sparkles, 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  Coffee, 
  Atom, 
  FileCode2, 
  GitBranch, 
  Download,
  Github,
  Linkedin,
  Mail
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'skills' | 'goals'>('profile');

  const codeSnippets = {
    profile: `// Developer Profile
const developer = {
  name: "${portfolioData.personal.name}",
  role: "${portfolioData.personal.role}",
  location: "${portfolioData.personal.location}",
  status: "Available for internships & projects",
  passions: ["Java", "React", "Web Dev", "Clean Code"],
  getGreeting: () => "Let's build something extraordinary together!"
};`,
    skills: `// Core Stack
const technicalSkills = {
  languages: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3"],
  frontend: ["React", "Responsive UI", "Tailwind CSS"],
  tools: ["Git", "GitHub", "VS Code"],
  focus: "Building robust & accessible software"
};`,
    goals: `// Aspirations
async function developCareer() {
  while (isCurious) {
    await learnNewTechnologies();
    await buildImpactfulProjects();
    collaborateWithGlobalDevs();
  }
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollToSection = (href: string) => {
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
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern bg-[#0A0A0A]"
      aria-label="Hero Section"
    >
      {/* Glowing Ambient Radial Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div 
                id="hero-availability-pill"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold uppercase tracking-wider text-neutral-200 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{portfolioData.personal.availabilityStatus}</span>
              </div>

              <div 
                id="hero-location-pill"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-semibold text-neutral-400"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{portfolioData.personal.location}</span>
              </div>
            </div>

            {/* Main Greeting & Headline with Bold Impactful Typography */}
            <div className="space-y-3">
              <h1 
                id="hero-greeting-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] uppercase"
              >
                Hi, I'm{' '}
                <span className="text-blue-500 underline decoration-blue-500/40 decoration-4 underline-offset-8">
                  {portfolioData.personal.name}
                </span>
                <span className="inline-block ml-3 animate-bounce origin-bottom text-3xl sm:text-5xl">👋</span>
              </h1>

              <h2 
                id="hero-headline-subheading"
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-300 tracking-tight"
              >
                {portfolioData.personal.headline}
              </h2>
            </div>

            {/* Short Bio */}
            <p 
              id="hero-intro-text"
              className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
            >
              {portfolioData.personal.aboutBio[0]} {portfolioData.personal.aboutBio[1]}
            </p>

            {/* Quick Skills Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mr-1">Focus Stack:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold font-mono">
                <Coffee className="w-3.5 h-3.5 text-blue-400" /> Java
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold font-mono">
                <Atom className="w-3.5 h-3.5 text-blue-400" /> React
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold font-mono">
                <FileCode2 className="w-3.5 h-3.5 text-blue-400" /> JavaScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold font-mono">
                <GitBranch className="w-3.5 h-3.5 text-blue-400" /> Git & GitHub
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                id="hero-view-work-btn"
                type="button"
                onClick={() => scrollToSection('#projects')}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 transition-all duration-200 active:scale-[0.98] group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-contact-me-btn"
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98] hover:border-neutral-700"
              >
                <Send className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-3 text-neutral-400">
              <span className="text-xs text-neutral-500 font-mono font-bold uppercase tracking-wider">Connect:</span>
              <a
                id="hero-social-github"
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="hero-social-linkedin"
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="hero-social-email"
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:text-blue-400 transition-colors"
                aria-label="Email Debangan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Visual */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            
            {/* Floating Tech Badges around the terminal */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-blue-500/40 text-blue-400 text-xs font-bold font-mono shadow-xl shadow-blue-950/30">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Full-Stack Ready</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold font-mono shadow-xl">
              <Coffee className="w-3.5 h-3.5 text-blue-400" />
              <span>Java + React Dev</span>
            </div>

            {/* The Code Editor Window */}
            <div 
              id="hero-code-editor-card"
              className="w-full max-w-lg rounded-2xl bg-[#121212] border border-neutral-800 shadow-2xl shadow-black/80 overflow-hidden transition-all duration-300 hover:border-neutral-700"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3.5 bg-[#0D0D0D] border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                  <span className="text-xs font-mono text-neutral-400 ml-2 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    debangan.config.ts
                  </span>
                </div>

                {/* Copy Button */}
                <button
                  id="hero-copy-code-btn"
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Copy Code Snippet"
                  title="Copy code"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tabs */}
              <div className="flex items-center px-4 pt-2 gap-1.5 bg-[#0D0D0D]/60 border-b border-neutral-800 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3.5 py-2 rounded-t-lg transition-colors font-bold ${
                    activeTab === 'profile'
                      ? 'bg-[#181818] text-white border-t-2 border-blue-500'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  developer.ts
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-3.5 py-2 rounded-t-lg transition-colors font-bold ${
                    activeTab === 'skills'
                      ? 'bg-[#181818] text-white border-t-2 border-blue-500'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  stack.ts
                </button>
                <button
                  onClick={() => setActiveTab('goals')}
                  className={`px-3.5 py-2 rounded-t-lg transition-colors font-bold ${
                    activeTab === 'goals'
                      ? 'bg-[#181818] text-white border-t-2 border-blue-500'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  career.ts
                </button>
              </div>

              {/* Code Body */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-neutral-300 overflow-x-auto bg-[#121212] min-h-[220px]">
                <pre className="text-neutral-300">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0D0D] border-t border-neutral-800 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Ready
                  </span>
                  <span>TypeScript 5.8</span>
                </div>
                <span className="font-semibold">UTF-8</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
