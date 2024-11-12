import React from 'react';
import { FiCalendar, FiDollarSign, FiMapPin, FiClock, FiArrowLeft, FiBriefcase, FiCheckCircle, FiAward } from 'react-icons/fi';

function TalentPostDetails({ post, onBack }) {
  const requirements = [
    'Minimum 5 years of professional experience',
    'Strong portfolio of previous work',
    'Excellent communication skills',
    'Ability to work in a team environment',
    'Flexible schedule for rehearsals and performances'
  ];

  const benefits = [
    'Health insurance coverage',
    'Travel allowance',
    'Professional development opportunities',
    'Performance bonuses',
    'Industry networking events'
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-400 hover:text-blue-300 mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to Opportunities
        </button>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
            <p className="text-xl text-gray-300">{post.description}</p>
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Position Details</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FiMapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">{post.location}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiCalendar className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Start Date</p>
                    <p className="text-white">{post.date}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiClock className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-white">{post.duration}</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiDollarSign className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Compensation</p>
                    <p className="text-white">{post.compensation}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Application Timeline</h2>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <FiBriefcase className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Application Deadline</p>
                    <p className="text-white">August 31, 2023</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiCheckCircle className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Interview Process</p>
                    <p className="text-white">September 1-15, 2023</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-300">
                  <FiAward className="w-5 h-5 mr-3 text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-400">Final Selection</p>
                    <p className="text-white">September 20, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Requirements</h2>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <FiCheckCircle className="w-5 h-5 mr-3 text-blue-400 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Benefits</h2>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <FiCheckCircle className="w-5 h-5 mr-3 text-blue-400 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentPostDetails;