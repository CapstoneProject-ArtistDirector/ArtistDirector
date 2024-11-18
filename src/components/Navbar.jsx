import React, { useState } from "react";
import { Film, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center  space-x-3">
            <Film className="h-8 w-8 text-gray-300" />

            <span className="text-2xl font-bold text-white tracking-tight">
              Talent Hunt
            </span>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("home")}>Home</NavLink>

            <NavLink onClick={() => scrollToSection("about")}>About</NavLink>

            <NavLink onClick={() => scrollToSection("services")}>
              Services
            </NavLink>

            <NavLink onClick={() => scrollToSection("contact")}>
              Contact
            </NavLink>

            <button
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-gray-900 font-semibold rounded-full 

       transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink onClick={() => scrollToSection("home")}>
              Home
            </MobileNavLink>

            <MobileNavLink onClick={() => scrollToSection("about")}>
              About
            </MobileNavLink>

            <MobileNavLink onClick={() => scrollToSection("services")}>
              Services
            </MobileNavLink>

            <MobileNavLink onClick={() => scrollToSection("contact")}>
              Contact
            </MobileNavLink>

            <div className="pt-2">
              <button
                className="w-full px-6 py-2 bg-gray-200 hover:bg-white text-gray-900 

        font-semibold rounded-full transition-all duration-300"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </button>
);

const MobileNavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
  >
    {children}
  </button>
);
