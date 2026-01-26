import React from 'react';
import { AuthLayout } from './AuthLayout';

export const SignIn: React.FC = () => {
    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Log in to continue your journey to your dream job."
        >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="auth-label">Email Address</label>
                    <input
                        type="email"
                        placeholder="name@company.com"
                        className="auth-input"
                    />
                </div>

                <div>
                    <div className="flex justify-between items-center">
                        <label className="auth-label">Password</label>
                        <button
                            type="button"
                            className="text-xs font-bold text-brand-blue hover:text-brand-deep transition-colors mb-2 mr-1"
                        >
                            Forgot Password?
                        </button>
                    </div>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="auth-input"
                    />
                </div>

                <div className="flex items-center gap-3 py-2">
                    <input
                        type="checkbox"
                        id="remember"
                        className="w-5 h-5 rounded-lg border-slate-300 text-brand-blue focus:ring-brand-blue/20"
                    />
                    <label htmlFor="remember" className="text-sm font-semibold text-slate-500 cursor-pointer">
                        Remember this device
                    </label>
                </div>

                <button type="submit" className="btn-primary w-full !py-4 text-base mt-2">
                    Sign In
                </button>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-4 text-slate-400 font-bold tracking-widest">Or continue with</span></div>
                </div>

                <button type="button" className="w-full py-4 border border-slate-200 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-600 hover:bg-slate-50 transition-all active:scale-[0.98]">
                    <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                    Sign in with Google
                </button>

                <p className="text-center text-slate-500 font-medium text-sm mt-8">
                    Don't have an account?{' '}
                    <button
                        type="button"
                        onClick={() => console.log('signup')}
                        className="text-brand-blue font-bold hover:underline"
                    >
                        Create one for free
                    </button>
                </p>
            </form>
        </AuthLayout>
    );
};