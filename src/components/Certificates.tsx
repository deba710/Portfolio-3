import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, CheckCircle, Eye, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { CertificateItem } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section 
      id="certificates" 
      className="py-24 relative bg-[#0A0A0A] border-t border-neutral-900"
      aria-label="Certificates Section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>CERTIFICATIONS & CREDENTIALS</span>
          </div>

          <h2 
            id="certificates-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            Verified <span className="text-blue-500">Certificates</span>
          </h2>

          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Course completions, developer assessments, and verified milestones in programming and web technologies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certificates.map((cert) => (
            <div
              key={cert.id}
              id={`certificate-card-${cert.id}`}
              className="rounded-3xl bg-[#121212] border border-neutral-800 p-7 flex flex-col justify-between hover:border-neutral-700 hover:bg-[#181818] transition-all duration-300 shadow-xl shadow-black/40 group"
            >
              <div>
                {/* Card Top: Icon & Verification Status */}
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="p-3.5 rounded-2xl bg-[#0D0D0D] border border-neutral-800 transition-transform duration-300 group-hover:scale-105"
                  >
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-base sm:text-lg font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="mt-2.5 space-y-1 text-xs text-neutral-400">
                  <p className="text-neutral-200 font-bold">{cert.issuer}</p>
                  <p className="flex items-center gap-1.5 font-mono text-neutral-500 font-semibold">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    Issued: {cert.issueDate}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="mt-5 pt-3.5 border-t border-neutral-800 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-[#0A0A0A] border border-neutral-800 text-[10px] font-mono font-bold text-neutral-300 uppercase tracking-wider"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-800">
                <button
                  id={`view-cert-btn-${cert.id}`}
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-800 hover:border-neutral-700 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>View Certificate</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
