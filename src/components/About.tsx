import React from 'react';
import { 
  User, 
  Sparkles, 
  MapPin, 
  BookOpen, 
  Code2, 
  Cpu, 
  Coffee, 
  Globe, 
  Palette, 
  Zap, 
  CheckCircle2,
  FolderGit2,
  Layers,
  Clock,
  Heart
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  // Icon mapper for interest cards
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-cyan-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-pink-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getStatIcon = (id: string) => {
    switch (id) {
      case 'projects': return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
      case 'technologies': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'learning': return <Clock className="w-5 h-5 text-purple-400" />;
      case 'dedication': return <Heart className="w-5 h-5 text-rose-400" />;
      default: return <Zap className="w-5 h-5 text-cyan-400" />;
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
            Driven by curiosity, fueled by code, and dedicated to continuous engineering growth.
          </p>
        </div>

        {/* Top Grid: Bio + Statistics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Story & Profile Card */}
          <div 
            id="about-bio-card"
            className="lg:col-span-7 rounded-3xl bg-[#121212] border border-neutral-800 p-6 sm:p-9 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 pb-5 border-b border-neutral-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl font-mono shadow-md shadow-blue-600/30">
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

              {/* Bio Paragraphs */}
              <div className="space-y-3.5 text-neutral-300 text-sm sm:text-base leading-relaxed pt-2">
                {portfolioData.personal.aboutBio.map((paragraph, index) => (
                  <p key={index} className="text-neutral-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Developer Principles */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Problem Solver & Clean Code Enthusiast</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Fast Learner of Modern Tech Stacks</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>Responsive & Accessible Web Design</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-neutral-200 bg-[#0D0D0D] p-3 rounded-xl border border-neutral-800/80 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>Disciplined Version Control with Git</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono font-semibold">
              <span>Status: <strong className="text-emerald-400">Student & Developer</strong></span>
              <span>Always exploring new horizons 🚀</span>
            </div>
          </div>

          {/* Statistics Grid (4 bold metric cards) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {portfolioData.stats.map((stat) => (
              <div
                key={stat.id}
                id={`stat-card-${stat.id}`}
                className="rounded-2xl bg-[#121212] border border-neutral-800 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:bg-[#181818] group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0D0D0D] border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                    {getStatIcon(stat.id)}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                    Metric
                  </span>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tighter">
                    {stat.value}
                  </div>
                  <h4 className="text-sm font-extrabold text-neutral-200 mt-1 uppercase tracking-tight">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Interests & Domains of Interest */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">Areas of Passion & Interest</h3>
              <p className="text-xs text-neutral-400 mt-0.5">Core topics and technologies that inspire my development journey</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.interests.map((interest, index) => (
              <div
                key={index}
                id={`interest-card-${interest.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="p-5 rounded-2xl bg-[#121212] border border-neutral-800 hover:border-neutral-700 hover:bg-[#181818] transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-[#0D0D0D] border border-neutral-800 group-hover:scale-105 transition-transform shrink-0">
                  {getInterestIcon(interest.icon)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-100 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {interest.name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {interest.description}
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
