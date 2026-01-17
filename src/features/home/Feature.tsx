import React from 'react';

const FEATURE_LIST = [
  { title: "ATS Optimization", description: "Our AI ensures your resume passes through Applicant Tracking Systems with a 99% success rate.", icon: "🎯" },
  { title: "Instant Tailoring", description: "Automatically adjust your resume for specific job descriptions with one click.", icon: "⚡" },
  { title: "AI Intelligence", description: "Built on the latest advanced intelligence models for superior writing and analysis.", icon: "🧠" },
  { title: "Modern Templates", description: "Choose from dozens of designer-crafted templates that recruiters actually love.", icon: "🎨" },
  { title: "Smart Cover Letters", description: "Generate persuasive cover letters that match your resume style and job tone.", icon: "✍️" },
  { title: "Skill Gap Analysis", description: "Get insights on what skills you're missing for your target career paths.", icon: "📊" }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Built for the Modern Job Market</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Traditional resumes are dead. Use JobBuddy to stand out in a world of AI-filtered applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_LIST.map((feature, i) => (
            <div key={i} className="feature-card group">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{feature.title}</h3>
              <p className="text-slate-500 font-body leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};