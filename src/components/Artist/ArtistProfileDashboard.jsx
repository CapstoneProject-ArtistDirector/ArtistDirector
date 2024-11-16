import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiUser, FiLogOut, FiHome } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

function ArtistProfileDashboard() {
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("User signed out");
    // Simulate sign-out logic here (e.g., clearing localStorage or cookies)
    // Redirect to home page after sign-out
    navigate("/home-page");
  };

  const handleSignOutConfirmation = () => {
    setShowSignOutModal(true);
  };

  const handleCloseModal = () => {
    setShowSignOutModal(false);
  };

  const userProfile = {
    name: "John Doe",
    age: 28,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    avatar: "https://api.dicebear.com/6.x/avataaars/svg?seed=John",
    about:
      "Passionate software engineer with a love for creating innovative solutions. Always eager to learn new technologies and tackle challenging problems.",
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"],
    experience: [
      {
        role: "Senior Software Engineer",
        company: "Tech Corp",
        duration: "2020 - Present",
        description:
          "Leading frontend development team and architecting scalable solutions.",
      },
      {
        role: "Software Engineer",
        company: "StartUp Inc",
        duration: "2018 - 2020",
        description:
          "Developed and maintained multiple client-facing applications.",
      },
    ],
    education: {
      degree: "Master of Computer Science",
      institution: "Tech University",
      year: "2018",
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
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

      {/* Main Content */}
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar - Personal Details */}
            <div className="md:w-1/3 space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                {/* Profile Picture */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-700 mb-4">
                    <img
                      src={userProfile.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-white text-center">
                    {userProfile.name}
                  </h2>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="border-b border-gray-700 pb-4">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Personal Details
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <FiUser className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-400">Age</p>
                          <p className="text-white">{userProfile.age} years</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FiUser className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-400">Gender</p>
                          <p className="text-white">{userProfile.gender}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FiMail className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white">{userProfile.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FiPhone className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="text-white">{userProfile.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-5 h-5 text-gray-400 mr-3" />
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="text-white">{userProfile.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      About Me
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {userProfile.about}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Professional Details */}
            <div className="md:w-2/3 space-y-6">
              {/* Skills Section */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Special Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {userProfile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience Section */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {userProfile.experience.map((exp, index) => (
                    <div
                      key={index}
                      className="border-l-2 border-blue-500 pl-4"
                    >
                      <h4 className="text-lg font-medium text-white">
                        {exp.role}
                      </h4>
                      <p className="text-blue-400">{exp.company}</p>
                      <p className="text-sm text-gray-400 mt-1">
                        {exp.duration}
                      </p>
                      <p className="text-gray-300 mt-2">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Education
                </h3>
                <div className="border-l-2 border-blue-500 pl-4">
                  <h4 className="text-lg font-medium text-white">
                    {userProfile.education.degree}
                  </h4>
                  <p className="text-blue-400">
                    {userProfile.education.institution}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Graduated {userProfile.education.year}
                  </p>
                </div>
              </div>
            </div>
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
                onClick={handleCloseModal}
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

export default ArtistProfileDashboard;
