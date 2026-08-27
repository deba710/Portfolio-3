import React from 'react';
import { 
  User, 
  Sparkles, 
  MapPin, 
  BookOpen, 
  Code2, 
  Coffee, 
  FolderGit2, 
  GitBranch,
  Camera,
  CheckCircle2,
  BrainCircuit,
  Compass,
  GraduationCap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { usePhotoContext } from '../context/PhotoContext';

export const About: React.FC = () => {
  const { avatarUrl } = usePhotoContext();
  const aboutPhotoSrc = avatarUrl || portfolioData.personal.aboutPhotoUrl;

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderGit2': return <FolderGit2 className="w-5 h-5 text-blue-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section 
      id="about" 
      className="py-24 relative bg-[#0A0A0A] border-t border-neutral-900 overflow-hidden"
      aria-label="About Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5 text-blue-400" />
            <span>GET TO KNOW ME</span>
          </div>
          
          <h2 
            id="about-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            About <span className="text-blue-500">Debangan</span>
          </h2>
          
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Student • Beginner Programmer • Aspiring Developer
          </p>
        </div>

        {/* Top Grid: Bio Card + Photo 2 Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story & Profile Card */}
          <div 
            id="about-bio-card"
            className="lg:col-span-8 rounded-3xl bg-[#121212] border border-neutral-800 p-6 sm:p-9 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl font-mono shadow-md shadow-blue-600/30 overflow-hidden border border-blue-500/40">
                    D
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{portfolioData.personal.name}</h3>
                    <p className="text-xs text-neutral-400 font-mono flex items-center gap-1.5 mt-0.5 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 bg-neutral-900 px-3 py-1.5 rounded-xl border border-neutral-800">
                  Student Journey
                </span>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
                {portfolioData.personal.aboutBio.map((paragraph, index) => (
                  <p key={index} className="text-neutral-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Developer Commitments */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Main Focus: Core Java & OOP Concepts</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Practical Problem Solving & Logic Exercises</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Building Small, Honest Projects From Scratch</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Code Versioning with Git & GitHub</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono font-semibold">
              <span>Identity: <strong className="text-blue-400">Student & Beginner Programmer</strong></span>
              <span>Growth • Curiosity • Practice</span>
            </div>
          </div>

          {/* Photo 2 Showcase Portrait Card */}
          <div className="lg:col-span-4 rounded-3xl bg-[#121212] border border-neutral-800 p-6 flex flex-col items-center justify-between text-center relative overflow-hidden group">
            <div className="w-full flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
                Photo 2 • About Frame
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Profile</span>
              </span>
            </div>

            <div className="relative my-auto py-2 group/portrait">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600/40 to-emerald-500/30 opacity-40 blur-md group-hover/portrait:opacity-70 transition duration-300"></div>
              
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl bg-neutral-900 border-2 border-neutral-700/80 overflow-hidden shadow-xl flex items-center justify-center">
                <img 
                  src={aboutPhotoSrc}
                  alt="Debangan Second Portrait"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/portrait:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.photo-fallback-2')) {
                      const fallback = document.createElement('div');
                      fallback.className = 'photo-fallback-2 flex flex-col items-center justify-center text-center p-3 text-neutral-400';
                      fallback.innerHTML = `
                        <div class="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-lg font-bold flex items-center justify-center mb-1">
                          ☕
                        </div>
                        <span class="text-xs font-mono font-bold text-neutral-300">Debangan</span>
                      `;
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            </div>

            <div className="w-full mt-4 pt-4 border-t border-neutral-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-tight">Debangan</h4>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5">West Bengal, India</p>
            </div>
          </div>

        </div>

        {/* Honest Pillars / Simple Honest Metrics (NO exaggerated stats) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Honest Progress & Focus</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Authentic representation of my current learning stage</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.honestPillars.map((pillar) => (
              <div
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                className="rounded-2xl bg-[#121212] border border-neutral-800 p-5 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 hover:bg-[#181818] group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-[#0D0D0D] border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950/40 border border-blue-500/20 px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                    {pillar.title}
                  </div>
                  <h4 className="text-xs font-extrabold text-neutral-300 mt-1 uppercase tracking-tight">
                    {pillar.subtitle}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Values & Core Approach */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Learning Principles</h3>
              <p className="text-xs text-neutral-400 mt-0.5">The approach guiding my step-by-step developer journey</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioData.learningValues.map((value, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-neutral-700 hover:bg-[#181818] transition-all duration-200 flex flex-col gap-3 group"
              >
                <div className="p-3 rounded-xl bg-[#0D0D0D] border border-neutral-800 group-hover:scale-105 transition-transform w-fit">
                  {getValueIcon(value.icon)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {value.title}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

