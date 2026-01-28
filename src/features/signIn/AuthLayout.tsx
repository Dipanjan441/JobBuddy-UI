import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { AUTH_APP_FEATURES, HIRED_BY_BRAND_LOGO } from './constant';

interface Props {
    children: React.ReactNode;
    title: string;
    subtitle: string;
}

export const AuthLayout: React.FC<Props> = ({ children, title, subtitle }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
            <div className="w-full max-w-[800px] h-[85vh] lg:h-[90vh] min-h-[450px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex">
                {/* Left Side: Branding & Value Proposition */}
                <div className="hidden md:flex md:w-1/2 bg-linear-to-br from-brand-deep via-brand-blue to-brand-accent p-6 flex-col gap-6 relative overflow-y-auto no-scrollbar">
                    {/* Abstract Background Shapes */}
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full animate-pulse"></div>
                    <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-brand-accent/20 blur-[100px] rounded-full"></div>

                    <div className="z-10 cursor-pointer inline-block" onClick={() => console.log('landing')}>
                        <Logo className="!text-white" />
                    </div>

                    <div className="z-10 max-w-lg">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest mb-6">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            System Live: AI Optimizer Active
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-display font-black text-white leading-[1.1] mb-6">
                            The smartest way to <span className="text-brand-accent">land your next role.</span>
                        </h2>

                        <div className="space-y-4">
                            {
                                AUTH_APP_FEATURES.map((feature) => (
                                    <div key={feature.id} className="flex gap-4 items-center">
                                        <div className="w-10 h-10 shrink-0 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-lg shadow-inner">{feature.icon}</div>
                                        <h4 className="text-white font-bold text-base mb-1">{feature.title}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="z-10">
                        <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mt-5 mb-2">Trusted by users at</p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-5">
                            {HIRED_BY_BRAND_LOGO.map((brand) => (
                                <div key={brand.name} className='auth-brand-logo'>
                                    <img
                                        src={brand.logo}
                                        className="h-4"
                                        alt={brand.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 relative overflow-y-auto no-scrollbar">
                    <div className="lg:hidden mb-6 flex justify-between items-center">
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
                        <div className="mb-5 lg:mb-6">
                            <h1 className="text-xl lg:text-2xl font-display font-black text-brand-blue mb-2">{title}</h1>
                            <p className="text-brand-accent font-medium text-xs lg:text-sm">{subtitle}</p>
                        </div>

                        {children}
                    </div>

                    <div className="mt-8 text-center text-slate-400 text-xs font-medium">
                        © {new Date().getFullYear()} JobBuddy AI. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};