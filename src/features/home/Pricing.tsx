import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">Simple, Honest Pricing</h2>
          <p className="text-lg text-slate-500 font-medium">Join 10,000+ job seekers who leveled up their career today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Tier */}
            <div className="pricing-card">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Hustler</h3>
                    <p className="text-slate-400 text-sm">Perfect for getting started.</p>
                </div>
                <div className="mb-8">
                    <span className="pricing-price">$0</span>
                    <span className="text-slate-400 font-bold ml-2">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 grow">
                    {['1 Resume Template', '3 AI Generations', 'ATS Scan', 'Public Share Link'].map((item) => (
                        <li key={item} className="pricing-list-item text-slate-600">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-4 rounded-2xl font-bold border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                    Start for Free
                </button>
            </div>

            {/* Pro Tier */}
            <div className="pricing-card-pro">
                <div className="absolute top-0 right-0 p-4">
                    <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Most Popular</span>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2">Career Pro</h3>
                    <p className="text-white/70 text-sm">For serious job hunters.</p>
                </div>
                <div className="mb-8">
                    <span className="pricing-price">$19</span>
                    <span className="text-white/60 font-bold ml-2">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 grow">
                    {['Unlimited Resumes', 'Advanced Gemini Insights', 'Custom Domain', 'Portfolio Website', 'LinkedIn Optimizer'].map((item) => (
                        <li key={item} className="pricing-list-item text-white/90">
                            <svg className="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                            {item}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-4 rounded-2xl font-bold bg-white text-brand-blue shadow-lg hover:shadow-white/20 transition-all cursor-pointer">
                    Get Lifetime Access
                </button>
            </div>
        </div>
       </div>
    </section>
  );
};