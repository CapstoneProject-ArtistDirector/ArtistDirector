import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiLogOut } from 'react-icons/fi';
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  // State to hold form input values
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    directorId: sessionStorage.getItem("id"),
    directorName: "",
    directorDesignation: "",
    directorProfilePictureUrl: "",
    directorPhoneNumber: "",
    directorEmailAddress: "",
    directorCompanyName: "",
    directorIndustryExperience: "",
    directorIndustrySpecialization: "",
  });

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:8888/api/directors/${formData.directorId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Director profile created successfully!");
        navigate("/director/dashboard");
      } else {
        alert("Failed to create director profile. Please try again.");
      }
    } catch (error) {
      console.error("Error creating director profile:", error);
      alert("An error occurred while creating the profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/home"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/dashboard"
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
            <Link
              to="/logout"
              className="flex items-center text-white hover:text-red-400 transition-colors no-underline"
            >
              <FiLogOut className="mr-2" />
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl text-center font-bold text-white mb-6 font-serif">
              CREATE DIRECTOR PROFILE
            </h2>

            {/* Form Section */}
            <form onSubmit={handleSubmit}>

              {/* Director Name & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-base font-semibold text-gray-300">Director Name</label>
                  <input
                    type="text"
                    name="directorName"
                    value={formData.directorName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-300">Director Designation</label>
                  <input
                    type="text"
                    name="directorDesignation"
                    value={formData.directorDesignation}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Director Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-base font-semibold text-gray-300">Email ID</label>
                  <input
                    type="email"
                    name="directorEmailAddress"
                    value={formData.directorEmailAddress}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-300">Phone Number</label>
                  <input
                    type="text"
                    name="directorPhoneNumber"
                    value={formData.directorPhoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Director Company Name & Profile Picture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-base font-semibold text-gray-300">Company Name</label>
                  <input
                    type="text"
                    name="directorCompanyName"
                    value={formData.directorCompanyName}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-300">Profile Picture URL</label>
                  <input
                    type="text"
                    name="directorProfilePictureUrl"
                    value={formData.directorProfilePictureUrl}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Director Industry Specialization */}
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-300">Industry Specialization</label>
                <input
                  type="text"
                  name="directorIndustrySpecialization"
                  value={formData.directorIndustrySpecialization}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Director Industry Experience */}
              <div className="mb-4">
                <label className="block text-base font-semibold text-gray-300">Industry Experience</label>
                <textarea
                  rows={3}
                  name="directorIndustryExperience"
                  value={formData.directorIndustryExperience}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
