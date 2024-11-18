import React, { useState } from "react";
import { Clapperboard, ChevronRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function DirectorHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the "signup" page
  };
  const handleDirector = () => {
    navigate('/director-page'); // Navigate to the "signup" page
  };
  const handleArtist = () => {
    navigate('/artist-page'); // Navigate to the "signup" page
  };

  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Clapperboard className="h-8 w-8 text-gray-300" />
              <span className="text-2xl font-bold text-white tracking-tight">Talent Hunt</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white no-underline">Home</Link>
              <Link to="/about" className="text-white no-underline">About</Link>
              <Link to="/services" className="text-white no-underline">Services</Link>
              <Link to="/contact" className="text-white no-underline">Contact</Link>
              <button onClick={handleSignUp} className="px-4 py-2 bg-gray-200 hover:bg-white text-gray-900 font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Sign Up
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

      {/* Full-screen background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-6 pt-20 lg:pt-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Tomorrow's
              <span className="block text-gray-300">Stars Today</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over two decades of industry experience, we connect
              exceptional talent with groundbreaking productions. Your next
              breakthrough role awaits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
              onClick={handleDirector}
                className="px-6 py-2  bg-black hover:bg-white text-white font-bold 
                rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 
                transform hover:scale-105"
              >
                <span>CASTING <br/> DIRECTOR</span>
                <ChevronRight className="h-7 w-7" />
              </button>

              <button
              onClick={handleArtist}
                className="px-6 py-2 bg-black hover:bg-white text-white font-bold 
                rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 
                transform hover:scale-105"
              >
                <span>ARTIST</span>
                <ChevronRight className="h-7 w-7" />
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">500+</div>
                <div className="text-gray-400">Successful Castings</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">50+</div>
                <div className="text-gray-400">Partner Studios</div>
              </div>

              <div className="text-center md:col-span-1 col-span-2">
                <div className="text-4xl font-bold text-gray-200 mb-2">15+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const MobileNavLink = ({ href, children }) => (
  <a href={href} className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

export default DirectorHomePage;
