import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section 
      id="education" 
      className="py-24 relative bg-[#0A0A0A] border-t border-neutral-900"
      aria-label="Education Section"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>

          <h2 
            id="education-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            Education & <span className="text-blue-500">Learning Journey</span>
          </h2>

          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Formal education foundation in Computer Science, analytical thinking, and engineering principles.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-neutral-800 ml-4 sm:ml-8 space-y-12">
          {portfolioData.education.map((item) => (
            <div 
              key={item.id} 
              id={`education-item-${item.id}`}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-blue-500 group-hover:scale-125 group-hover:border-blue-400 transition-all duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 m-auto mt-0.5" />
              </div>

              {/* Education Card */}
              <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-6 sm:p-8 hover:border-neutral-700 hover:bg-[#181818] transition-all duration-300 shadow-xl shadow-black/40">
                
                {/* Header: Degree & Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-neutral-800">
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                      {item.field}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-white mt-1 uppercase tracking-tight">
                      {item.degree}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-3 py-1 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider border ${
                      item.status === 'In Progress'
                        ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                        : 'bg-blue-950/60 text-blue-400 border-blue-500/30'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Institution and Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 mt-4 mb-4">
                  <span className="flex items-center gap-1.5 text-neutral-200 font-bold">
                    <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                    {item.institution}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    {item.period}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    {item.location}
                  </span>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5 mt-4 pt-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
