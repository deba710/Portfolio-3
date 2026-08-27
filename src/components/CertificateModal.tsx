import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, Calendar, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { CertificateItem } from '../types/portfolio';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      id="certificate-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg rounded-3xl bg-[#121212] border border-neutral-800 shadow-2xl shadow-black/80 overflow-hidden z-10">
        
        {/* Certificate Decorative Header */}
        <div className="p-6 sm:p-8 bg-[#0D0D0D] border-b border-neutral-800 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
          
          <button
            id="close-cert-modal-btn"
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex p-3.5 rounded-2xl bg-[#0A0A0A] border border-neutral-800 text-blue-400 mb-3 shadow-lg">
            <Award className="w-8 h-8" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{certificate.status}</span>
            </div>

            <h3 id="cert-modal-title" className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              {certificate.title}
            </h3>
            <p className="text-xs font-mono text-neutral-400 mt-1 font-semibold">{certificate.issuer}</p>
          </div>
        </div>

        {/* Certificate Details */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="grid grid-cols-2 gap-3 text-xs font-mono bg-[#0A0A0A] p-4 rounded-2xl border border-neutral-800">
            <div>
              <span className="text-neutral-500 block uppercase tracking-wider text-[10px] font-bold">Issue Date</span>
              <span className="text-neutral-200 font-bold mt-1 block">{certificate.issueDate}</span>
            </div>
            <div>
              <span className="text-neutral-500 block uppercase tracking-wider text-[10px] font-bold">Credential ID</span>
              <span className="text-blue-400 font-bold mt-1 block">{certificate.credentialId || 'N/A'}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-widest mb-2.5 font-bold">
              Verified Competencies & Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg bg-[#0A0A0A] border border-neutral-800 text-xs font-mono font-bold text-neutral-200 uppercase tracking-wider flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-neutral-800 text-xs text-neutral-400 leading-relaxed font-medium">
            <p>
              This certificate affirms foundational proficiency and completion of rigorous coursework, problem sets, and practical developer assignments.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-[#0D0D0D] border-t border-neutral-800 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            Close
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-blue-600/30 transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
