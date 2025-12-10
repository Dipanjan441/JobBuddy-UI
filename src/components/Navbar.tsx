import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Logo } from './logo/Logo';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Templates', href: '#templates' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/60 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="shrink-0 cursor-pointer">
                        <Logo icon={true} className="text-2xl" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-600 hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-600 hover:text-[var(--color-primary)] font-medium text-sm px-4 py-2 transition-colors">
                                Log in
                            </button>
                            <button className="bg-[image:var(--gradient-primary)] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:-translate-y-0.5 cursor-pointer">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[var(--color-primary)] hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)] transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <CloseIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isOpen && (
                <div className="md:hidden bg-white/90 backdrop-blur-xl border-b border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top-5 duration-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 hover:text-[var(--color-primary)] hover:bg-blue-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 pb-2 border-t border-gray-100 mt-4 space-y-2 px-3">
                            <button className="w-full text-left text-gray-600 hover:text-[var(--color-primary)] font-medium px-3 py-2 rounded-md hover:bg-blue-50">
                                Log in
                            </button>
                            <button className="w-full bg-[image:var(--gradient-primary)] text-white px-5 py-3 rounded-full text-base font-bold shadow-md hover:shadow-lg text-center mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
