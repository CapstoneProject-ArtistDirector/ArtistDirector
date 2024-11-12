import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ArtistProfileNavbar() {
  const handleSignOut = () => {
    console.log('Sign out clicked');
    // Add sign out logic here
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">Dashboard</h1>
          </div>
           {/* <Link
            to="/dashboard"  // Update with your desired route
            className="flex items-center no-underline text-indigo-400 hover:text-purple-300 mb-6"
          >
          <FiArrowLeft className="mr-2" />
          Dashboard
        </Link> */}
          <button
            onClick={handleSignOut}
            className="flex items-center px-4 py-2 text-sm text-white bg-red-500/80 hover:bg-red-600/80 rounded-lg transition-colors"
          >
            <FiLogOut className="mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
}

export default ArtistProfileNavbar;