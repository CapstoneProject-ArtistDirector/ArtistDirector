import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import {
  FiCalendar,
  FiDollarSign,
  FiMapPin,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiArrowLeft,
  FiUser,
  FiLogOut,
  FiHome,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function AppliedPosts() {
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const navigate = useNavigate();

  // Mock data for applied posts
  const appliedPosts = [
    {
      id: 1,
      title: "Lead Vocalist Needed",
      category: "Music",
      location: "Los Angeles, CA",
      date: "Starting Sept 2023",
      duration: "6 months",
      compensation: "$5000/month",
      coverImage:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&h=400",
      status: "Under Review",
      appliedDate: "2023-08-15",
    },
    {
      id: 2,
      title: "Contemporary Dancer",
      category: "Dance",
      location: "New York, NY",
      date: "Starting Oct 2023",
      duration: "3 months",
      compensation: "$4000/month",
      coverImage:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&h=400",
      status: "Accepted",
      appliedDate: "2023-08-10",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Accepted":
        return "text-green-400";
      case "Rejected":
        return "text-red-400";
      default:
        return "text-yellow-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Accepted":
        return <FiCheckCircle className="w-5 h-5 text-green-400" />;
      case "Rejected":
        return <FiXCircle className="w-5 h-5 text-red-400" />;
      default:
        return <FiClock className="w-5 h-5 text-yellow-400" />;
    }
  };

  const handleSignOutConfirmation = () => {
    setShowSignOutModal(true);
  };

  const handleSignOut = () => {
    console.log("User signed out");
    // Simulate sign-out logic here (e.g., clearing localStorage or cookies)
    // Redirect to home page after sign-out
    setShowSignOutModal(false);  // Close the modal
    navigate("/home-page");  // Redirect to home page
  };

  const handleCancelSignOut = () => {
    setShowSignOutModal(false);  // Close the modal without signing out
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/applied-posts"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <RxDashboard className="mr-2" />
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
              <button
                onClick={handleSignOutConfirmation}
                className="flex items-center text-white hover:text-red-400 transition-colors"
              >
                <FiLogOut className="mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Applied Opportunities</h1>
          <p className="text-gray-400 mt-2">Track the status of your applications</p>
        </div>
        <div className="space-y-6">
          {appliedPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-2">
                        {post.title}
                      </h2>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(post.status)}
                      <span
                        className={`font-medium ${getStatusColor(post.status)}`}
                      >
                        {post.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-gray-300">
                      <FiMapPin className="mr-2" />
                      <span>{post.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiCalendar className="mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiClock className="mr-2" />
                      <span>{post.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <FiDollarSign className="mr-2" />
                      <span>{post.compensation}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">
                      Applied on:{" "}
                      {new Date(post.appliedDate).toLocaleDateString()}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign Out Confirmation Modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="bg-gray-800 rounded-lg p-6 w-96 text-center">
            <h2 className="text-lg text-white mb-4">Are you sure you want to sign out?</h2>
            <div className="space-x-4">
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Yes, Sign Out
              </button>
              <button
                onClick={handleCancelSignOut}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppliedPosts;
