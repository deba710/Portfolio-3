import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  Code2, 
  Terminal, 
  Copy, 
  Check, 
  Coffee, 
  GitBranch, 
  BrainCircuit, 
  User, 
  Github, 
  Linkedin, 
  Mail, 
  FolderGit2,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePhotoContext } from '../context/PhotoContext';

export const Hero: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<'photo' | 'java' | 'journey'>('photo');
  const { avatarUrl } = usePhotoContext();

  // Primary photo source: uploaded/stored avatar or local public image
  const heroPhotoSrc = avatarUrl || portfolioData.personal.heroPhotoUrl;

  const codeSnippets = {
    java: `// Student Developer Profile
public class Debangan {
    public static void main(String[] args) {
        String role = "Student & Beginner Programmer";
        String mainLanguage = "Java";
        String[] focus = {
            "Core Programming Fundamentals",
            "Object-Oriented Programming (OOP)",
            "Problem Solving & Logic",
            "Git & GitHub Version Control"
        };
        
        System.out.println("Status: Learning & Building Step by Step!");
    }
}`,
    journey: `// Learning Journey
public class DeveloperJourney {
    boolean isLearning = true;
    
    public void dailyPractice() {
        while (isLearning) {
            studyCoreConcepts();
            solveProblemsInJava();
            buildHandsOnProjects();
        }
    }
}`
  };

  const handleCopyCode = () => {
    const code = activeTab === 'journey' ? codeSnippets.journey : codeSnippets.java;
    navigator.clipboard.writeText(code);
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
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text Content & Introductory Photo Badge */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Top Row: Debangan Avatar + Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Photo Avatar Badge at First */}
              <div 
                id="hero-avatar-badge"
                className="inline-flex items-center gap-2.5 p-1 pr-3.5 rounded-full bg-[#141414] border border-neutral-800 shadow-md"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center text-white font-bold text-xs border border-blue-400/40 relative">
                  <img 
                    src={heroPhotoSrc} 
                    alt="Debangan Thumbnail" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <span className="font-mono">D</span>
                </div>
                <span className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-200">
                  Debangan
                </span>
              </div>

              <div 
                id="hero-tagline-badge"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-bold font-mono uppercase tracking-widest text-blue-400 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{portfolioData.personal.taglineLabel}</span>
              </div>

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

            {/* Main Heading */}
            <div className="space-y-2">
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

              {/* Supporting Heading */}
              <h2 
                id="hero-headline-subheading"
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-200 tracking-tight pt-1"
              >
                {portfolioData.personal.headline}
              </h2>
            </div>

            {/* Description */}
            <p 
              id="hero-intro-text"
              className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
            >
              I'm a student learning programming and building projects while growing my skills one step at a time.
            </p>

            {/* Focus Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold mr-1">Current Focus:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                <Coffee className="w-3.5 h-3.5 text-amber-400" /> Java
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-blue-500/30 text-blue-300 text-xs font-bold font-mono">
                <Terminal className="w-3.5 h-3.5 text-blue-400" /> Fundamentals
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-mono">
                <BrainCircuit className="w-3.5 h-3.5 text-emerald-400" /> Problem Solving
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-purple-500/30 text-purple-300 text-xs font-bold font-mono">
                <GitBranch className="w-3.5 h-3.5 text-purple-400" /> Git & GitHub
              </span>
            </div>

            {/* Action Buttons: View My Projects & About Me */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <button
                id="hero-view-work-btn"
                type="button"
                onClick={() => scrollToSection('#projects')}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 transition-all duration-200 active:scale-[0.98] group"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-about-me-btn"
                type="button"
                onClick={() => scrollToSection('#about')}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 active:scale-[0.98] hover:border-neutral-700"
              >
                <User className="w-4 h-4 text-blue-400" />
                <span>About Me</span>
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

          {/* Right Column: Prominent Photo Portrait Showcase & Java Code Tabs */}
          <div className="lg:col-span-5 relative flex justify-center w-full">
            
            {/* Floating Badges */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-20 items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-blue-500/40 text-blue-400 text-xs font-bold font-mono shadow-xl shadow-blue-950/30">
              <Coffee className="w-3.5 h-3.5 text-amber-400" />
              <span>Java Learner</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-white text-xs font-bold font-mono shadow-xl">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Always Learning</span>
            </div>

            {/* Container Card with Tabs */}
            <div 
              id="hero-showcase-card"
              className="w-full max-w-lg rounded-3xl bg-[#121212] border border-neutral-800 shadow-2xl shadow-black/80 overflow-hidden transition-all duration-300 hover:border-neutral-700"
            >
              {/* Card Window Header */}
              <div className="flex items-center justify-between px-4 py-3.5 bg-[#0D0D0D] border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-neutral-700 inline-block"></span>
                  <span className="text-xs font-mono text-neutral-400 ml-2 flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    debangan.portfolio
                  </span>
                </div>

                {/* Header Action: Copy button when code tab, or student badge when photo tab */}
                {activeTab !== 'photo' ? (
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
                ) : (
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded-lg font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3 h-3 text-blue-400" />
                    <span>Portrait Photo</span>
                  </span>
                )}
              </div>

              {/* Tabs */}
              <div className="flex items-center px-4 pt-2 gap-1.5 bg-[#0D0D0D]/60 border-b border-neutral-800 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('photo')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-t-lg transition-colors font-bold ${
                    activeTab === 'photo'
                      ? 'bg-[#181818] text-white border-t-2 border-blue-500'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>My Photo</span>
                </button>
                <button
                  onClick={() => setActiveTab('java')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-t-lg transition-colors font-bold ${
                    activeTab === 'java'
                      ? 'bg-[#181818] text-white border-t-2 border-amber-500'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <Coffee className="w-3.5 h-3.5 text-amber-400" />
                  <span>Debangan.java</span>
                </button>
                <button
                  onClick={() => setActiveTab('journey')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-t-lg transition-colors font-bold ${
                    activeTab === 'journey'
                      ? 'bg-[#181818] text-white border-t-2 border-emerald-500'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Journey.java</span>
                </button>
              </div>

              {/* Content Panel */}
              {activeTab === 'photo' ? (
                <div className="p-6 flex flex-col items-center justify-center bg-[#121212] min-h-[300px]">
                  
                  {/* Photo Frame with Subtle Border, Glow & Hover Transition */}
                  <div className="relative group/frame">
                    <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-amber-500 opacity-30 blur-lg group-hover/frame:opacity-60 transition duration-500"></div>
                    
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-neutral-900 border-2 border-neutral-700/80 overflow-hidden shadow-2xl flex items-center justify-center">
                      <img 
                        src={heroPhotoSrc}
                        alt="Debangan Profile Photo"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/frame:scale-105"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          // Graceful fallback if file fails to load
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.photo-fallback')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'photo-fallback flex flex-col items-center justify-center text-center p-4 text-neutral-400';
                            fallback.innerHTML = `
                              <div class="w-16 h-16 rounded-2xl bg-blue-600 text-white font-black text-2xl flex items-center justify-center mb-2 shadow-lg shadow-blue-600/30 font-mono">D</div>
                              <span class="text-xs font-mono font-bold text-neutral-300">Debangan</span>
                            `;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Photo Caption / Meta */}
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-tight">Debangan</h3>
                    <p className="text-xs text-neutral-400 font-mono mt-0.5">Student • Beginner Programmer • Java Learner</p>
                  </div>
                </div>
              ) : (
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-neutral-300 overflow-x-auto bg-[#121212] min-h-[300px]">
                  <pre className="text-neutral-300">
                    <code>{codeSnippets[activeTab]}</code>
                  </pre>
                </div>
              )}

              {/* Terminal Footer Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0D0D] border-t border-neutral-800 text-[11px] font-mono text-neutral-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Student Profile
                  </span>
                  <span>Java 17+</span>
                </div>
                <span className="font-semibold text-neutral-400">Debangan</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

