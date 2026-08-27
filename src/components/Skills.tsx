import React, { useState } from 'react';
import { 
  Code2, 
  Coffee, 
  Terminal, 
  BrainCircuit, 
  GitBranch, 
  Layers, 
  Sparkles,
  BookOpen,
  Check
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'fundamentals' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Focus Areas' },
    { id: 'core', label: 'Core Language (Java)' },
    { id: 'fundamentals', label: 'Programming & Logic' },
    { id: 'tools', label: 'Git & Tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? portfolioData.skills 
    : portfolioData.skills.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Coffee': return <Coffee className="w-6 h-6" style={{ color }} />;
      case 'Terminal': return <Terminal className="w-6 h-6" style={{ color }} />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" style={{ color }} />;
      case 'GitBranch': return <GitBranch className="w-6 h-6" style={{ color }} />;
      default: return <Code2 className="w-6 h-6" style={{ color }} />;
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
            <span>LEARNING & PRACTICE</span>
          </div>

          <h2 
            id="skills-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            My <span className="text-blue-500">Skills</span> & Focus
          </h2>

          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Technologies and programming fundamentals I am actively learning, practicing, and building with.
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

        {/* Skills Cards Grid - Beginner Friendly with Focus Badges & Concept Chips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="rounded-3xl bg-[#121212] border border-neutral-800 p-7 flex flex-col justify-between hover:border-neutral-700 hover:bg-[#181818] transition-all duration-300 group"
            >
              <div>
                {/* Header: Icon + Status Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <div 
                      className="p-3.5 rounded-2xl bg-[#0D0D0D] border border-neutral-800 transition-transform duration-300 group-hover:scale-105"
                    >
                      {getSkillIcon(skill.iconName, skill.color)}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                        {skill.name}
                      </h3>
                      <span className="text-xs font-mono text-neutral-400">
                        {skill.category.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <span 
                    className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border"
                    style={{
                      backgroundColor: `${skill.color}15`,
                      color: skill.color,
                      borderColor: `${skill.color}35`
                    }}
                  >
                    {skill.status}
                  </span>
                </div>

                {/* Skill Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                  {skill.description}
                </p>

                {/* Topics / Concepts Practiced */}
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-400 mb-2.5">
                    Concepts & Practice Topics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.topics.map((topic, i) => (
                      <span 
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#0D0D0D] border border-neutral-800 text-[11px] font-mono text-neutral-300"
                      >
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Honest Learning Status */}
              <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                  Active Learning
                </span>
                <span className="text-emerald-400 font-semibold">Continuous Practice</span>
              </div>

            </div>
          ))}
        </div>

        {/* Learning Commitment Footer Card */}
        <div className="mt-12 max-w-5xl mx-auto p-7 rounded-3xl bg-[#121212] border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-black text-white uppercase tracking-tight">Authentic Developer Path</h4>
              <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                Focused on writing real Java code, building strong foundational problem-solving abilities, and committing progress to GitHub.
              </p>
            </div>
          </div>
          
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition-all shrink-0"
          >
            View Projects →
          </a>
        </div>

      </div>
    </section>
  );
};

