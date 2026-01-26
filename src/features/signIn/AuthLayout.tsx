import React from 'react';
import { Logo } from '../../components/logo/Logo';

interface Props {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export const AuthLayout: React.FC<Props> = ({ children, title, subtitle }) => {
    return (
        <div className="flex min-h-screen w-full overflow-hidden bg-white">
            {/* Left Side: Branding & Visuals */}
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-brand-blue to-brand-deep p-16 flex-col justify-between relative overflow-hidden">
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 blur-[100px] rounded-full -mr-20 -mt-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -ml-20 -mb-20"></div>

                <div className="z-10 cursor-pointer" onClick={() => console.log('landing')}>
                    <Logo className="!text-white" />
                </div>

                <div className="z-10">
                    <h2 className="text-5xl font-display font-black text-white leading-tight mb-8">
                        Empowering your<br />career with intelligence.
                    </h2>
                    <div className="glass-panel !bg-white/10 !border-white/20 p-8 rounded-[2rem] max-w-lg">
                        <p className="text-white/80 italic text-lg mb-6">
                            "JobBuddy completely changed how I approach my job search. Within a week, I landed three interviews at top-tier tech companies."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-brand-accent/20 border border-white/30 flex items-center justify-center font-bold text-white">JS</div>
                            <div>
                                <p className="text-white font-bold">Jason Smith</p>
                                <p className="text-white/60 text-sm">Product Manager at Meta</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="z-10 flex gap-8 text-white/40 text-sm font-bold tracking-widest uppercase">
                    <span>Reliable</span>
                    <span>Fast</span>
                    <span>Secure</span>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16 lg:p-24 relative overflow-y-auto">
                <div className="lg:hidden mb-12 flex justify-between items-center">
                    <div className="cursor-pointer" onClick={() => console.log('landing')}>
                        <Logo />
                    </div>
                    <button
                        onClick={() => console.log('landing')}
                        className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-brand-blue transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="max-w-md mx-auto w-full flex-grow flex flex-col justify-center">
                    <div className="mb-10">
                        <h1 className="text-3xl font-display font-black text-slate-900 mb-3">{title}</h1>
                        <p className="text-slate-500 font-medium">{subtitle}</p>
                    </div>

                    {children}
                </div>

                <div className="mt-12 text-center text-slate-400 text-xs font-medium">
                    © {new Date().getFullYear()} JobBuddy AI. All rights reserved.
                </div>
            </div>
        </div>
    );
};