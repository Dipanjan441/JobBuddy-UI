import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuthUser } from '../auth/state/authSelector';
import { logout } from '../auth/state/authSlicer';

export const ProfileMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectAuthUser);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Get initials for avatar
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const displayName = user?.name || 'User';
    const initials = getInitials(displayName);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleMenu}
                className="flex items-center gap-2 p-1 pr-3 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
                <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm shadow-md">
                    {initials}
                </div>
                <span className="font-medium text-sm text-slate-700 hidden sm:block">
                    {displayName}
                </span>
                <svg
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-2 border-b border-slate-50 mb-1">
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                            Signed in as
                        </p>
                        <p className="text-sm font-semibold text-slate-900 truncate">
                            {user?.email || displayName}
                        </p>
                    </div>

                    <a
                        href="#profile"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Your Profile
                    </a>
                    <a
                        href="#settings"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-brand-blue transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Settings
                    </a>

                    <div className="border-t border-slate-50 mt-1 pt-1">
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
