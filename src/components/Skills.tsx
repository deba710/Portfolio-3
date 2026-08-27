import React, { useState } from 'react';
import { 
  Code, 
  Coffee, 
  Atom, 
  FileCode, 
  FileCode2, 
  Layout, 
  Smartphone, 
  GitBranch, 
  Github, 
  Check, 
  Layers, 
  Terminal, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'languages' | 'frontend' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'tools', label: 'Tools & Version Control' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-6 h-6" style={{ color }} />;
      case 'FileCode': return <FileCode className="w-6 h-6" style={{ color }} />;
      case 'Atom': return <Atom className="w-6 h-6" style={{ color }} />;
      case 'FileCode2': return <FileCode2 className="w-6 h-6" style={{ color }} />;
      case 'Layout': return <Layout className="w-6 h-6" style={{ color }} />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" style={{ color }} />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" style={{ color }} />;
      case 'Github': return <Github className="w-6 h-6" style={{ color }} />;
      default: return <Code className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section 
      id="skills" 
      className="py-24 relative bg-[#0A0A0A] border-t border-neutral-900"
      aria-label="Skills Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>

          <h2 
            id="skills-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            My <span className="text-blue-500">Tech Stack</span> & Skills
          </h2>

          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Technologies and developer tools I actively practice, study, and leverage to build software.
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-[#141414] border border-neutral-800 gap-1.5">
            {categories.map((category) => (
              <button
                key={category.id}
                id={`skill-filter-${category.id}`}
                type="button"
                onClick={() => setActiveCategory(category.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="rounded-2xl bg-[#121212] border border-neutral-800 p-6 flex flex-col justify-between hover:border-neutral-700 hover:bg-[#181818] transition-all duration-300 group"
            >
              <div>
                {/* Header: Icon + Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="p-3.5 rounded-xl bg-[#0D0D0D] border border-neutral-800 transition-transform duration-300 group-hover:scale-105"
                  >
                    {getSkillIcon(skill.iconName, skill.color)}
                  </div>

                  <span 
                    className="px-3 py-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                      borderColor: `${skill.color}30`
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name & Description */}
                <h3 className="text-base font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                  {skill.name}
                </h3>
                
                {skill.description && (
                  <p className="text-xs text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {skill.description}
                  </p>
                )}
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-neutral-400 font-semibold uppercase text-[10px] tracking-wider">Proficiency</span>
                  <span className="font-bold text-white">{skill.proficiency}%</span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-2.5 rounded-full bg-[#0D0D0D] border border-neutral-800 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.color,
                      boxShadow: `0 0 12px ${skill.color}80`
                    }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Learning Mindset Footer Card */}
        <div className="mt-12 p-7 rounded-3xl bg-[#121212] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black text-white uppercase tracking-tight">Continuous Growth & Practice</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Always actively learning advanced concepts in Java algorithms, full-stack architectures, and modern web APIs.
              </p>
            </div>
          </div>
          
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider text-white border border-neutral-800 hover:border-neutral-700 transition-all shrink-0"
          >
            Explore Projects →
          </a>
        </div>

      </div>
    </section>
  );
};
