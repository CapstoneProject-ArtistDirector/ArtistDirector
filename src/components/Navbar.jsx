import React, { useState } from 'react';
import { Clapperboard, Film, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Clapperboard className="h-8 w-8 text-gray-300" />
            <span className="text-2xl font-bold text-white tracking-tight">TalentHunt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link to="/" className='text-white no-underline'>Home</Link>
            <Link to="/about" className='text-white no-underline'>About</Link>
            <Link to="/services" className='text-white no-underline'>Services</Link>
            <Link to="/portfolio" className='text-white no-underline'>Portfolio</Link>
            <Link to="/contact" className='text-white no-underline'>Contact</Link>
            <button className="px-6 py-2 bg-gray-200 hover:bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#portfolio">Portfolio</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <div className="pt-2">
              <button className="w-full px-6 py-2 bg-gray-200 hover:bg-white text-gray-900 font-semibold rounded-full transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a href={href} className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);
