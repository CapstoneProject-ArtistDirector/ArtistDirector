import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiPlusCircle, FiList, FiCheck } from 'react-icons/fi';
import DirectorPostList from './DirectorPostList';
import PostDetails from './PostDetails';
import ApplicantsList from './ApplicantsList';

function DirectorDashboard() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showApplicants, setShowApplicants] = useState(false);
  const [showShortlisted, setShowShortlisted] = useState(false);
  const [shortlistedApplicants, setShortlistedApplicants] = useState([]);

  const handleShortlistApplicant = (applicant) => {
    setShortlistedApplicants([...shortlistedApplicants, applicant]);
  };

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
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => setShowApplicants(!showApplicants)}
                    className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <FiList className="mr-2" />
                    {showApplicants ? 'Hide Applicants' : 'View Applicants'}
                  </button>
                  <button
                    onClick={() => setShowShortlisted(!showShortlisted)}
                    className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                  >
                    <FiCheck className="mr-2" />
                    {showShortlisted ? 'Hide Shortlisted' : 'View Shortlisted'}
                  </button>
                </div>
              </div>
            )}

            {/* Right Column - Applicants or Shortlisted */}
            {selectedPost && showApplicants && (
              <div className="lg:w-1/3">
                <ApplicantsList
                  postId={selectedPost.id}
                  onShortlist={handleShortlistApplicant}
                  showShortlisted={showShortlisted}
                  shortlistedApplicants={shortlistedApplicants}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorDashboard;