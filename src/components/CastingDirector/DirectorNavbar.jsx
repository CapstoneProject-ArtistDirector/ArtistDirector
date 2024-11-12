import React, { useState } from 'react';
import { Menu, X, ChevronDown,User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
 


function DirectorNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
   const navigate = useNavigate();

  const toggleForm = (type) => {
    if (activeForm?.type === type) {
      setActiveForm(null);
    } else {
      setActiveForm({ type, isOpen: true });
    }
  };

  const handleLoginClick = () => {
    navigate('/register-director');
  };

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="flex items-center text-white text-xl font-bold">
              <img
                src={logo}
                alt=""
                style={{
                  width: '30px',
                  height: '30px',
                  marginRight: '8px',
                }}
              />
              Talent Hunt
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">  
              {/* Login Button */}
              <button onClick={handleLoginClick} className="text-white hover:text-gray-300 flex items-center">
                <User className="mr-2 h-5 w-5" /> {/* Add User icon here */}
                Register
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/signup-artist"
              className="text-white block px-3 py-2 w-full text-left"
            >
              Artist
            </Link>
            <Link
              to="/signup-director"
              className="text-white block px-3 py-2 w-full text-left"
            >
              Casting Director
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default DirectorNavbar;