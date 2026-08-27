import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Code2, Sparkles, Layers, Terminal } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#121212] border border-neutral-800 shadow-2xl shadow-black/80 overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0D0D0D] border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-widest">Project Details</span>
          </div>
          <button
            id="close-project-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Title & Tagline */}
          <div>
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest">
              {project.subtitle}
            </span>
            <h2 id="project-modal-title" className="text-2xl sm:text-3xl font-black text-white mt-1 uppercase tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Simulated Code / Preview Snippet */}
          {project.visualStyle.codeSnippet && (
            <div className="rounded-2xl bg-[#0A0A0A] border border-neutral-800 overflow-hidden">
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0D0D0D] border-b border-neutral-800 text-[11px] font-mono text-neutral-400 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  preview.code
                </span>
                <span className="text-neutral-500">{project.visualStyle.tagline}</span>
              </div>
              <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto">
                <code>{project.visualStyle.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Key Features & Architectural Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 bg-[#0A0A0A] p-3.5 rounded-xl border border-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2 font-bold">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#0A0A0A] border border-neutral-800 text-neutral-200 text-xs font-mono font-bold uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-[#0D0D0D] border-t border-neutral-800 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
