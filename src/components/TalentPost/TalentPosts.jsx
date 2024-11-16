import React, { useState } from "react";
import TalentCard from "./TalentCard";
import TalentPostDetails from "./TalentPostDetails";
import { FiLogOut, FiUser, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function TalentPosts() {
  const [filter, setFilter] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  
  const navigate = useNavigate();

  const talentPosts = [
    {
      id: 1,
      title: "Lead Vocalist Needed",
      category: "Music",
      description:
        "Seeking a talented lead vocalist for an upcoming rock band album recording and tour.",
      location: "Los Angeles, CA",
      date: "Starting Sept 2023",
      duration: "6 months",
      compensation: "$5000/month",
      coverImage:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&h=400",
    },
    {
      id: 2,
      title: "Contemporary Dancer",
      category: "Dance",
      description:
        "Professional dance company looking for contemporary dancers for upcoming performance season.",
      location: "New York, NY",
      date: "Starting Oct 2023",
      duration: "3 months",
      compensation: "$4000/month",
      coverImage:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&h=400",
    },
    {
      id: 3,
      title: "Portrait Artist",
      category: "Visual Arts",
      description:
        "Gallery seeking portrait artist for commissioned works and exhibition opportunity.",
      location: "Chicago, IL",
      date: "Immediate Start",
      duration: "Ongoing",
      compensation: "Commission Based",
      coverImage:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&h=400",
    },
    {
      id: 4,
      title: "Theater Actor",
      category: "Acting",
      description:
        "Leading role available for upcoming Broadway production. Experience required.",
      location: "New York, NY",
      date: "Starting Nov 2023",
      duration: "12 months",
      compensation: "$6000/month",
      coverImage:
        "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&h=400",
    },
  ];

  const categories = ["all", "Music", "Dance", "Visual Arts", "Acting"];

  const handleApply = (postId) => {
    const post = talentPosts.find((p) => p.id === postId);
    setSelectedPost(post);
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

  const handleProfile = () => {
    console.log("Profile clicked");
    // Add profile navigation logic here
  };

  if (selectedPost) {
    return (
      <TalentPostDetails
        post={selectedPost}
        onBack={() => setSelectedPost(null)}
      />
    );
  }

  const filteredPosts =
    filter === "all"
      ? talentPosts
      : talentPosts.filter((post) => post.category === filter);

  return (
    <div className="min-h-screen bg-gray-900">
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

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Find Your Next Opportunity
            </h2>
            <p className="text-gray-400 text-lg">
              Discover and apply for exciting opportunities in the arts
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Talent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <TalentCard key={post.id} post={post} onApply={handleApply} />
            ))}
          </div>
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

export default TalentPosts;
