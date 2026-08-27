import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  ExternalLink,
  Clock,
  ArrowRight,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('submitted');
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Debangan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative bg-[#0A0A0A] border-t border-neutral-900 overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 
            id="contact-section-heading"
            className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase"
          >
            Let's <span className="text-blue-500">Connect</span> & Build
          </h2>

          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Have a project in mind, an internship opportunity, or want to discuss technology? My inbox is always open.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="rounded-3xl bg-[#121212] border border-neutral-800 p-6 sm:p-8 space-y-6 shadow-xl shadow-black/40">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                Contact Information
              </h3>
              
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Feel free to reach out directly via email, connect on professional networks, or check out my code repositories.
              </p>

              {/* Email with 1-Click Copy */}
              <div 
                id="contact-email-box"
                className="p-4 rounded-2xl bg-[#0A0A0A] border border-neutral-800 flex items-center justify-between gap-3 group hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/30 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">Primary Email</span>
                    <a 
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs sm:text-sm font-bold text-neutral-200 hover:text-blue-400 transition-colors truncate block"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors shrink-0"
                  aria-label="Copy Email Address"
                  title="Copy to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0A0A0A] border border-neutral-800 text-xs text-neutral-300">
                <div className="p-3 rounded-xl bg-neutral-900 text-blue-400 border border-neutral-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">Location</span>
                  <span className="font-bold text-white">{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0A0A0A] border border-neutral-800 text-xs text-neutral-300">
                <div className="p-3 rounded-xl bg-neutral-900 text-emerald-400 border border-neutral-800 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-neutral-500 block uppercase tracking-wider">Response Time</span>
                  <span className="font-bold text-emerald-400">Usually within 24 hours</span>
                </div>
              </div>

              {/* Social Channels Buttons */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-widest block">
                  Profiles & Handles
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    id="contact-github-btn"
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A0A0A] hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </a>

                  <a
                    id="contact-linkedin-btn"
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A0A0A] hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form UI */}
          <div className="lg:col-span-7">
            <div 
              id="contact-form-container"
              className="rounded-3xl bg-[#121212] border border-neutral-800 p-6 sm:p-8 shadow-xl shadow-black/40"
            >
              <div className="mb-6">
                <h3 className="text-xl font-black text-white flex items-center gap-2 uppercase tracking-tight">
                  <MessageSquare className="w-5 h-5 text-blue-400" />
                  Send a Message
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill out the form below to initiate an inquiry or draft an email.
                </p>
              </div>

              {formStatus === 'submitted' ? (
                <div 
                  id="contact-form-success-alert"
                  className="p-7 rounded-2xl bg-[#0A0A0A] border border-blue-500/30 text-center space-y-4 animate-in fade-in duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white uppercase tracking-tight">Message Drafted Successfully!</h4>
                    <p className="text-xs text-neutral-400 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-neutral-200">{formData.name}</strong>! Since this is a static developer portfolio without a backend server, you can launch your default mail client to deliver this message directly to <strong className="text-blue-400">{portfolioData.personal.email}</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      id="launch-email-client-btn"
                      type="button"
                      onClick={handleOpenMailClient}
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                    >
                      <span>Open in Mail Client</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider border border-neutral-800 transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                        Your Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Inquiry / Tech Discussion / Internship"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Debangan, I came across your portfolio and would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-white text-xs placeholder:text-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium"
                    />
                  </div>

                  {/* Static notice note */}
                  <div className="flex items-start gap-2 p-3 rounded-xl bg-[#0A0A0A] border border-neutral-800 text-[11px] text-neutral-400">
                    <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      Portfolio contact interface with one-click direct email fallback.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition-all duration-200 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
