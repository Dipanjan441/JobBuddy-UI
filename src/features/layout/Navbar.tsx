
import React, { useState, useEffect } from 'react';
import { Logo } from '../../components/logo/Logo';
import { ProfileMenu } from './ProfileMenu';
import { SIGNIN_ROUTE, NAVIGATION_ROUTES } from '../routes/routes';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  isLoggedIn?: boolean
}

export const Navbar: React.FC<Props> = ({ isLoggedIn = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ease-in-out ${scrolled
        ? 'py-3 mx-4 mt-4 rounded-2xl glass-panel bg-white/70! shadow-xl'
        : 'py-6 bg-transparent px-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo icon={true} className="text-xl" />

        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION_ROUTES.map((navRoute) => (
            <Link key={navRoute.name} to={navRoute.path} className="nav-item">
              {navRoute.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <>
              <button onClick={() => navigate(SIGNIN_ROUTE.path)} className="btn-ghost">Sign In</button>
            </>
          )}
          <button className="btn-primary">Build My Resume</button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl text-brand-blue"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      <div className={`
        absolute top-full left-0 right-0 mt-2 mx-4 glass-panel rounded-3xl overflow-hidden transition-all duration-300 md:hidden
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}>
        <div className="p-6 flex flex-col gap-4">
          {NAVIGATION_ROUTES.map((navRoute) => (
            <Link key={navRoute.name} to={navRoute.path} onClick={() => setIsOpen(false)} className="text-lg font-semibold px-4 py-2 hover:bg-brand-blue/5 rounded-xl">
              {navRoute.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {isLoggedIn ? (
              <div className="col-span-2 flex justify-center">
                <ProfileMenu />
              </div>
            ) : (
              <>
                <button onClick={() => navigate(SIGNIN_ROUTE.path)} className="btn-ghost py-4!">Sign In</button>
              </>
            )}
            <button className="btn-primary py-4!">Build My Resume</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
