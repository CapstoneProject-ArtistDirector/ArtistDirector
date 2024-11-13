import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiPlusCircle } from 'react-icons/fi';

function DirectorHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/director/dashboard"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiUser className="mr-2" />
                Profile
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/add-talent-post"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiPlusCircle className="mr-2" />
                Add Talent Post
              </Link>
              <Link
                to="/logout"
                className="flex items-center text-white hover:text-red-400 transition-colors no-underline"
              >
                <FiLogOut className="mr-2" />
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Welcome to the Director's Portal
          </h1>
          
          <div className="space-y-8">
            {[
              {
                text: "Art is not what you see, but what you make others see.",
                author: "Edgar Degas"
              },
              {
                text: "Every artist was first an amateur.",
                author: "Ralph Waldo Emerson"
              },
              {
                text: "Creativity takes courage.",
                author: "Henri Matisse"
              }
            ].map((quote, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform"
              >
                <p className="text-xl md:text-2xl text-white italic mb-4">
                  "{quote.text}"
                </p>
                <p className="text-blue-400">— {quote.author}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Link
              to="/director/dashboard"
              className="inline-flex items-center px-6 py-3 text-lg text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors no-underline"
            >
              <FiHome className="mr-2" />
              View Your Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorHome;