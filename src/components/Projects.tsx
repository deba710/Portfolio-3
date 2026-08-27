import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  Coffee, 
  Atom, 
  Layout, 
  Eye
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'java'>('all');

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'java', label: 'Java & Algorithms' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  const getAccentGradient = (color: string) => {
    switch (color) {
      case 'cyan': return 'from-cyan-500/20 via-blue-600/10 to-transparent border-cyan-500/30';
      case 'amber': return 'from-amber-500/20 via-orange-600/10 to-transparent border-amber-500/30';
      case 'emerald': return 'from-emerald-500/20 via-teal-600/10 to-transparent border-emerald-500/30';
      default: return 'from-cyan-500/20 via-blue-600/10 to-transparent border-cyan-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'java': return <Coffee className="w-3.5 h-3.5 text-amber-400" />;
      case 'web': return <Atom className="w-3.5 h-3.5 text-cyan-400" />;
      default: return <Layout className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 relative bg-[#0A0A0A] border-t border-neutral-900"
      aria-label="Projects Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
            <span>FEATURED PORTFOLIO WORK</span>
          </div>

          <h2 
            id="projects-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            Curated <span className="text-blue-500">Developer Projects</span>
          </h2>

          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Real projects, learning repositories, and responsive web experiments built with clean code and modern tooling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-[#141414] border border-neutral-800 gap-1.5">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                id={`project-filter-${filter.id}`}
                type="button"
                onClick={() => setActiveFilter(filter.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="rounded-3xl bg-[#121212] border border-neutral-800 flex flex-col overflow-hidden hover:border-neutral-700 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 group"
            >
              {/* Visual Project Preview / CSS Mockup Canvas */}
              <div className="relative h-48 sm:h-52 bg-gradient-to-br from-neutral-900 to-[#0D0D0D] p-5 flex flex-col justify-between overflow-hidden border-b border-neutral-800">
                
                {/* Simulated Browser Bar */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A0A0A] border border-neutral-800">
                    <span className="w-2 h-2 rounded-full bg-neutral-600 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-neutral-600 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-neutral-600 inline-block"></span>
                    <span className="text-[10px] font-mono text-neutral-400 ml-1 font-semibold">
                      {project.id}.app
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0A0A0A] border border-neutral-800 text-[11px] font-mono font-bold text-neutral-300 uppercase tracking-wider">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Simulated Code preview overlay */}
                <div className="my-auto py-2 z-10">
                  <div className="bg-[#0A0A0A] rounded-xl p-3.5 border border-neutral-800 text-[11px] font-mono text-neutral-300 shadow-lg">
                    <div className="text-blue-400 font-bold mb-1 flex items-center justify-between uppercase tracking-wider">
                      <span>{project.subtitle}</span>
                      <Sparkles className="w-3 h-3 text-blue-400" />
                    </div>
                    <p className="text-neutral-400 text-[11px] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Visual tagline bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 z-10 font-medium">
                  <span>{project.visualStyle.tagline}</span>
                  <span className="text-blue-400 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="text-xs text-neutral-300 flex items-start gap-2">
                        <span className="text-blue-400 font-bold">›</span>
                        <span className="line-clamp-1 font-medium">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-4 pt-2 border-t border-neutral-800">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#0A0A0A] border border-neutral-800 text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <a
                      id={`project-github-link-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs font-bold uppercase tracking-wider text-neutral-200 transition-all duration-200"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <button
                      id={`project-details-btn-${project.id}`}
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/25 transition-all duration-200"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Overview</span>
                    </button>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* GitHub Repos CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-[#121212] border border-neutral-800">
            <p className="text-xs sm:text-sm text-neutral-300 font-medium">
              Want to see more code experiments, Java exercises, and algorithms?
            </p>
            <a
              id="projects-github-cta-btn"
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider border border-neutral-800 hover:border-neutral-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repositories</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
