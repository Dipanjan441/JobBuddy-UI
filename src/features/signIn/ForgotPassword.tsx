import React, { useState } from 'react';
import { AuthLayout } from './AuthLayout';
import { useNavigate } from 'react-router-dom';
import { SIGNIN_ROUTE } from '../routes/routes';
import { ArrowLeft } from 'lucide-react';

export const ForgotPassword: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    return (
        <AuthLayout
            title={submitted ? "Check your inbox" : "Reset Password"}
            subtitle={submitted
                ? "We've sent reset instructions to your email address."
                : "No worries! It happens. Enter your email to recover your account."
            }
        >
            {!submitted ? (
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                    <div>
                        <label className="auth-label">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="auth-input"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary w-full !py-4 text-base mt-2">
                        Send Recovery Link
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate(SIGNIN_ROUTE.path)}
                        className="w-full flex items-center justify-center gap-2 text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors mt-4 cursor-pointer"
                    >
                        <ArrowLeft strokeWidth={2.5} />
                        Back to Sign In
                    </button>
                </form>
            ) : (
                <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p className="text-slate-500 font-medium mb-10 leading-relaxed">
                        If an account exists for that email, you will receive a password reset link shortly.
                    </p>
                    <button
                        onClick={() => console.log('signin')}
                        className="btn-primary w-full !py-4"
                    >
                        Return to Login
                    </button>
                    <p className="mt-8 text-sm text-slate-400 font-medium">
                        Didn't receive the email? <button onClick={() => setSubmitted(false)} className="text-brand-blue font-bold hover:underline">Try again</button>
                    </p>
                </div>
            )}
        </AuthLayout>
    );
};