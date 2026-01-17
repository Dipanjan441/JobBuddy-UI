import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-24 px-6 overflow-visible min-h-[80vh] flex items-center">
      {/* Decorative Elements */}
      <div className="decoration-blob top-0 left-1/4 w-96 h-96 bg-brand-blue/20"></div>
      <div className="decoration-blob bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/20"></div>

      <div className="max-w-7xl mx-auto text-center z-10">
        <div className="hero-badge">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
          </span>
          Next-Gen Career Platform
        </div>

        <h1 className="hero-title">
          Build <span className="text-brand-blue">Resumes</span><br />that actually work.
        </h1>

        <p className="hero-description">
          Leverage JobBuddy, an AI-powered application to craft high-impact resumes that bypass ATS filters and catch human eyes. Join 10k+ professionals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-primary px-12! py-5! text-lg">
            Create Free Account
          </button>
          <button className="btn-ghost px-12! py-5! text-lg group">
            See Examples
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        <div className="hero-mockup-container mt-20">
          <div className="absolute -inset-4 bg-linear-to-r from-brand-blue to-brand-accent rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="hero-mockup-frame">
            <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float">
              <div className="glass-panel bg-white/90! p-8 rounded-3xl shadow-2xl max-w-xs text-left">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">AI Optimization Active</h4>
                <p className="text-xs text-slate-400">JobBuddy is re-writing your "Experience" section to match suitable job description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};