import React from 'react';
import { Logo } from './../../components/logo/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <Logo className="mb-6 scale-90 origin-left" />
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Revolutionizing the job market with JobBuddy, an AI-powered application. Helping professionals tell their story better.
          </p>
        </div>
        <div>
          <h4 className="footer-heading">Product</h4>
          <ul className="space-y-4">
            <li><a href="#" className="footer-link">Resume Builder</a></li>
            <li><a href="#" className="footer-link">Cover Letters</a></li>
            <li><a href="#" className="footer-link">Career Advice</a></li>
            <li><a href="#" className="footer-link">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Stay Updated</h4>
          <p className="text-xs text-slate-400 mb-4 font-medium">Get the latest career hacks in your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="grow px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 text-sm"
            />
            <button className="btn-primary p-3! rounded-xl!">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-100 text-center text-slate-400 text-xs font-bold tracking-widest uppercase">
        © {new Date().getFullYear()} AI JobBuddy. Powered by Gemini.
      </div>
    </footer>
  );
};