import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Open Source', href: '#github' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname !== '/') return;

        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            let current = 'home';
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 250 && rect.bottom >= 250) {
                        current = section;
                    }
                }
            }
            if (current) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        setTimeout(handleScroll, 100); 
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location]);

    return (
      <nav className="fixed top-0 left-0 right-0 z-[100] glass py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src="/b_d_logo.png" alt="Brillo Digitals" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
              const isActive = location.pathname === '/' && activeSection === link.href.substring(1);
              return (
                <a 
                    key={link.name}
                    href={location.pathname === '/' ? link.href : `/${link.href}`} 
                    className={`transition-all duration-300 ${
                        isActive 
                            ? 'text-brand font-bold drop-shadow-[0_0_8px_rgba(218,175,111,0.5)]' 
                            : 'text-text/80 hover:text-brand'
                    }`}
                >
                    {link.name}
                </a>
              );
          })}
        </div>
      </nav>
    );
};

export default Navbar;
