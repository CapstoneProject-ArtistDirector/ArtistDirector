import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiLogOut, FiArrowLeft, FiArrowRight } from 'react-icons/fi';

function CastingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    talentType: '',
    roleType: '',
    projectDetails: '',
    startDate: '',
    endDate: '',
    submissionDeadline: '',
    paymentInfo: '',
    workHours: '',
    location: '',
    gender: '',
    preScreenRequest: '',
    imageUrl: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  // Role options based on selected talent type
  const roleOptions = {
    Actor: ['Lead Role', 'Supporting Role', 'Extra', 'Villain'],
    Singer: ['Lead Singer', 'Backup Singer', 'Soloist', 'Chorus'],
    Dancer: ['Ballet Dancer', 'Hip-Hop Dancer', 'Contemporary Dancer', 'Breakdancer'],
    Model: ['Fashion Model', 'Commercial Model', 'Runway Model'],
    'Voice Artist': ['Narrator', 'Character Voice', 'Voice Over', 'Audio Book Reader'],
    Performer: ['Circus Performer', 'Street Performer', 'Variety Performer'],
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Talent Type</label>
              <select
                value={formData.talentType}
                onChange={(e) => handleInputChange('talentType', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select talent type</option>
                {['Actor', 'Singer', 'Dancer', 'Model', 'Voice Artist', 'Performer'].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Role Type</label>
              <select
                value={formData.roleType}
                onChange={(e) => handleInputChange('roleType', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!formData.talentType}
              >
                <option value="">Select role type</option>
                {formData.talentType &&
                  roleOptions[formData.talentType].map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Project Details</label>
              <textarea
                value={formData.projectDetails}
                onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                rows="4"
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your project..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Start Date</label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange('startDate', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project End Date</label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Application Deadline</label>
              <input
                type="date"
                value={formData.submissionDeadline}
                onChange={(e) => handleInputChange('submissionDeadline', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Payment Information</label>
              <input
                type="text"
                value={formData.paymentInfo}
                onChange={(e) => handleInputChange('paymentInfo', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., $500 per day, $5000 per month"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Work Hours</label>
              <input
                type="text"
                value={formData.workHours}
                onChange={(e) => handleInputChange('workHours', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 9 AM - 5 PM, Flexible hours"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Los Angeles, CA"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
              <select
                value={formData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="any">Any</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Pre-screen Request</label>
              <select
                value={formData.preScreenRequest}
                onChange={(e) => handleInputChange('preScreenRequest', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select pre-screen type</option>
                <option value="yes">YES</option>
                <option value="no">NO</option>
              </select>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Add Visual Reference(url)</label>
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter image URL"
              />
            </div>

            {formData.imageUrl && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Preview</label>
                <div className="mt-2 relative aspect-video rounded-lg overflow-hidden bg-gray-700">
                  <img
                    src={formData.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x400?text=Invalid+Image+URL';
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
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
                to="/director"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Home
              </Link>
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
            <h2 className="text-2xl text-center font-bold text-white mb-6">CREATE CASTING CALL</h2>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between">
                {['Project Info', 'Work Conditions', 'Role Requirements', 'Media'].map((step, index) => (
                  <div
                    key={index}
                    className={`flex-1 text-center ${
                      index + 1 === currentStep ? 'text-blue-400' : 'text-gray-400'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                        index + 1 === currentStep
                          ? 'bg-blue-600'
                          : index + 1 < currentStep
                          ? 'bg-green-600'
                          : 'bg-gray-700'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute left-0 top-1/2 h-0.5 w-full bg-gray-700" />
                <div
                  className="absolute left-0 top-1/2 h-0.5 bg-blue-600 transition-all"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit}>
              {renderStepContent()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <FiArrowLeft className="mr-2" />
                    Previous
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors ml-auto"
                  >
                    Next
                    <FiArrowRight className="ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors ml-auto"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CastingForm;
