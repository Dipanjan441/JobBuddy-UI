import React from 'react';
import { AuthLayout } from './AuthLayout';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../routes/routes';

export const SignUp: React.FC = () => {
    const navigate = useNavigate();
    return (
        <AuthLayout
            title="Create Account"
            subtitle="Start building your stunning, AI-powered resume today."
        >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="auth-label">First Name</label>
                        <input type="text" placeholder="Dip" className="auth-input" />
                    </div>
                    <div>
                        <label className="auth-label">Last Name</label>
                        <input type="text" placeholder="Sen" className="auth-input" />
                    </div>
                </div>

                <div>
                    <label className="auth-label">Email Address</label>
                    <input type="email" placeholder="name@company.com" className="auth-input" />
                </div>

                <div>
                    <label className="auth-label">Create Password</label>
                    <input type="password" placeholder="••••••••" className="auth-input" />
                    <p className="mt-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-1">
                        Minimum 8 characters with at least 1 number
                    </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                    <input
                        type="checkbox"
                        id="terms"
                        className="auth-input-checkbox"
                    />
                    <label htmlFor="terms" className="text-xs font-semibold text-slate-500 leading-relaxed">
                        I agree to the <a href="#" className="text-brand-blue hover:underline">Terms of Service</a> and <a href="#" className="text-brand-blue hover:underline">Privacy Policy</a>.
                    </label>
                </div>

                <button type="submit" className="btn-primary w-full !py-4 text-base mt-2">
                    Create Free Account
                </button>

                <button type="button" className="w-full py-4 border border-slate-200 rounded-2xl flex items-center justify-center gap-3 font-bold text-slate-600 hover:bg-slate-50 transition-all active:scale-[0.98]">
                    <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                    Sign up with Google
                </button>

                <p className="text-center text-slate-500 font-medium text-sm mt-8">
                    Already have an account?{' '}
                    <button
                        type="button"
                        onClick={() => navigate(SIGNIN_ROUTE.path)}
                        className="cursor-pointer text-brand-blue font-bold hover:underline"
                    >
                        Sign in here
                    </button>
                </p>
            </form>
        </AuthLayout>
    );
};