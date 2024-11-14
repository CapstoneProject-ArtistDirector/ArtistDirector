import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiPlusCircle, FiTrash2 } from 'react-icons/fi';
import PostDetails from './PostDetails';
import ApplicantsList from './ApplicantsList';

function DirectorDash() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [shortlistedApplicants, setShortlistedApplicants] = useState([]);

  const posts = [
    {
      id: 1,
      title: 'Lead Vocalist Needed',
      category: 'Music',
      description: 'Seeking a talented lead vocalist for an upcoming rock band album recording and tour.',
      location: 'Los Angeles, CA',
      date: 'Starting Sept 2023',
      duration: '6 months',
      compensation: '$5000/month',
      coverImage: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&h=400',
      applicants: 12
    },
    {
      id: 2,
      title: 'Contemporary Dancer',
      category: 'Dance',
      description: 'Professional dance company looking for contemporary dancers for upcoming performance season.',
      location: 'New York, NY',
      date: 'Starting Oct 2023',
      duration: '3 months',
      compensation: '$4000/month',
      coverImage: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&h=400',
      applicants: 8
    }
  ];

  const handleShortlistApplicant = (applicant) => {
    setShortlistedApplicants([...shortlistedApplicants, applicant]);
  };

  const handleDeletePost = (postId) => {
    // Ideally, make a call to API to delete post
    alert(`Post with ID ${postId} deleted.`);
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
          {!selectedPost ? (
            <>
              <h1 className="text-3xl font-bold text-white mb-8">Your Posted Opportunities</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all"
                  >
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl font-bold text-white">{post.title}</h2>
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{post.location}</span>
                        <span>{post.applicants} applicants</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex gap-8">
              {/* Left Sidebar - Post Details */}
              <div className="w-1/3">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-blue-400 hover:text-blue-300 mb-4"
                >
                  ← Back to all posts
                </button>
                <PostDetails post={selectedPost} />
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleDeletePost(selectedPost.id)}
                    className="text-red-500 hover:text-red-400"
                  >
                    <FiTrash2 className="inline mr-2" /> Delete
                  </button>
                </div>
                {/* Link to View Shortlisted Applicants */}
                <Link
                  to={`/view-shortlisted/${selectedPost.id}`} // This will redirect to view shortlisted page
                  className="mt-4 text-white bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded-full"
                >
                  View Shortlisted Applicants
                </Link>
              </div>

              {/* Right Side - Applicants List */}
              <div className="w-2/3 space-y-8">
                <ApplicantsList
                  postId={selectedPost.id}
                  onShortlist={handleShortlistApplicant}
                  shortlistedApplicants={shortlistedApplicants}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DirectorDash;
