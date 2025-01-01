import React, { useState, useEffect } from 'react';
import { Logo } from './navigation/Logo';
import { NavLinks } from './navigation/NavLinks';
import { MobileMenu } from './navigation/MobileMenu';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300`}>
        <div className="relative">
          <div className={`absolute inset-0 bg-white/5 rounded-full ${isScrolled ? 'blur-sm' : 'blur-none'}`}></div>
          <div className={`relative flex items-center justify-between h-16 px-6 rounded-full backdrop-blur-[2px] ${
            isScrolled ? 'bg-white/10' : 'bg-transparent'
          }`}>
            <Logo />
            <div className="hidden md:flex flex-1 justify-center">
              <NavLinks />
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block px-4 py-2 bg-green-500/5 text-green-400/80 rounded-full text-sm font-medium hover:bg-green-500/10 transition-all duration-300">
                Get Started
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white/80 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}