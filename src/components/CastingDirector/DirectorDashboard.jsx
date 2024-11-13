import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import DirectorPostList from './DirectorPostList';
import PostDetails from '../TalentPost/PostDetails';
import ApplicantsList from '../TalentPost/ApplicantsList';

function DirectorDashboard() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/director"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Home
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
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Posts List */}
            <div className="lg:w-1/4">
              <DirectorPostList onSelectPost={setSelectedPost} selectedPost={selectedPost} />
            </div>

            {/* Middle Column - Post Details */}
            {selectedPost && (
              <div className="lg:w-2/5">
                <PostDetails post={selectedPost} />
              </div>
            )}

            {/* Right Column - Applicants */}
            {selectedPost && (
              <div className="lg:w-1/3">
                <ApplicantsList postId={selectedPost.id} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorDashboard;