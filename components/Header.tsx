
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    const NavLinkItems = ({ isMobile }: { isMobile?: boolean }) => (
        <>
            {navLinks.map(({ href, label }) => (
                <a key={href} href={href} onClick={() => isMobile && setIsMenuOpen(false)} className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-300">
                    {label}
                </a>
            ))}
        </>
    );

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="#" className="text-2xl font-bold text-white tracking-wider">
                        <span className="text-blue-400">A</span>B
                    </a>
                    <div className="hidden md:flex items-center space-x-2">
                        <NavLinkItems />
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden pb-4 flex flex-col items-center">
                       <NavLinkItems isMobile={true} />
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
