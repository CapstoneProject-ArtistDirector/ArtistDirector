import React from "react";
import { Link } from "react-router-dom";
import {
  Clapperboard,
  Users,
  UserCircle,
  LogIn,
  Camera,
  Film,
  Star,
  Theater,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}

      <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}

            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <Clapperboard className="w-8 h-8 text-purple-500" />

                <span className="font-display text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  TalentHunt
                </span>
              </div>
            </div>

            {/* Center Navigation */}

            <div className="flex-grow flex justify-center">
              <div className="hidden md:flex items-center space-x-12">
                {/* Casting Directors Dropdown */}
                <div className="relative group">
                  <Link
                    to="/director-page" // The route you want to navigate to
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 font-medium tracking-wide no-underline"
                  >
                    <Users className="w-5 h-5" />
                    <span>Casting Directors</span>
                  </Link>
                </div>

                {/* Artists Dropdown */}

                <div className="relative group">
                  <Link
                    to="/artist-page" // The route you want to navigate to
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 font-medium tracking-wide no-underline"
                  >
                    <UserCircle className="w-5 h-5" />
                    <span>Artist</span>
                  </Link>

                  <div className="absolute left-0 mt-2 w-64 rounded-lg bg-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="p-4 space-y-3">
                      <a
                        href="#"
                        className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Star className="w-5 h-5" />

                        <span>Actor Profiles</span>
                      </a>

                      <a
                        href="#"
                        className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Film className="w-5 h-5" />

                        <span>Showreel Gallery</span>
                      </a>

                      <a
                        href="#"
                        className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        <Camera className="w-5 h-5" />

                        <span>Headshots</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Login Button */}

            <div className="flex-shrink-0">
              <button className="flex items-center space-x-2 bg-purple-600/90 hover:bg-purple-700 px-5 py-2.5 rounded-lg transition-all duration-300 font-medium">
                <LogIn className="w-4 h-4" />

                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Where Talent Meets</span>

                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Opportunity
                </span>
              </h1>

              <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400 font-serif text-lg">
                "Every great film begins with a vision and the right talent to
                bring it to life."
              </blockquote>

              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Connect with top casting directors, showcase your talent, and
                land your dream role in the entertainment industry.
              </p>

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 flex items-center space-x-2">
                <span>Get Started</span>

                <Clapperboard className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30"></div>

              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2069"
                  alt="Director with clapperboard"
                  className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
