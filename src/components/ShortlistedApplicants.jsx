import React, { useState } from 'react';
import { Mail, Trash2, ExternalLink, User2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ShortlistedApplicants = () => {
  // Initial list of shortlisted applicants, managed by state
  const [shortlistedApplicants, setShortlistedApplicants] = useState([
    {
      id: '1',
      name: 'Emma Thompson',
      role: 'Lead Actor',
      experience: '5 years',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
      email: 'emma@example.com',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Supporting Actor',
      experience: '3 years',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      email: 'michael@example.com',
    },
    {
      id: '3',
      name: 'Sarah Williams',
      role: 'Voice Actor',
      experience: '4 years',
      photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
      email: 'sarah@example.com',
    },
  ]);

  // State for managing modal visibility and deletion message
  const [showModal, setShowModal] = useState(false);
  const [deletedApplicant, setDeletedApplicant] = useState(null);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Find the applicant by ID and set the deleted applicant's info
    const applicantToDelete = shortlistedApplicants.find((applicant) => applicant.id === id);
    setDeletedApplicant(applicantToDelete);
    setShowModal(true);

    // Remove the applicant from the list
    const updatedApplicants = shortlistedApplicants.filter((applicant) => applicant.id !== id);
    setShortlistedApplicants(updatedApplicants);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDeletedApplicant(null); // Clear the deleted applicant's information
  };

  const handleEmailAll = () => {
    console.log('Email all shortlisted applicants');
    // Implement email functionality
  };

  const handleViewProfile = (id) => {
    console.log('View profile:', id);
    // Implement profile view functionality
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-display font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent font-serif">
              Shortlisted Applicants
            </h1>
            <p className="text-gray-400 mt-2">Manage your selected candidates</p>
            <button
                  onClick={() => navigate(-1)}
                  className="text-blue-400 hover:text-blue-300 mb-4"
                >
                  ← Back 
                </button>
          </div>

          <button
            onClick={handleEmailAll}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-3 py-2 rounded-full transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
            <span>Email Notify</span>
          </button>
        </div>

        {/* Applicants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shortlistedApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={applicant.photo}
                    alt={applicant.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{applicant.name}</h3>
                    <p className="text-purple-400">{applicant.role}</p>
                    <p className="text-sm text-gray-400">{applicant.experience}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(applicant.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  title="Remove from shortlist"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-700">
                <button
                  onClick={() => handleViewProfile(applicant.id)}
                  className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  <User2 className="w-4 h-4" />
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${applicant.email}`}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {shortlistedApplicants.length === 0 && (
          <div className="text-center py-12">
            <User2 className="w-16 h-16 mx-auto text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-400">No Shortlisted Applicants</h3>
            <p className="text-gray-500 mt-2">Start shortlisting candidates to see them here.</p>
          </div>
        )}
      </div>

      {/* Modal for delete confirmation */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-xl font-semibold text-white mb-4">Applicant Removed</h2>
            <p className="text-gray-400 mb-4">
              {deletedApplicant ? `${deletedApplicant.name} has been removed from the shortlist.` : ''}
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortlistedApplicants;
