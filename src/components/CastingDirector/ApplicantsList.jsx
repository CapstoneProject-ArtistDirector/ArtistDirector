import React from 'react';
import { FiMail, FiPhone, FiCheck, FiX, FiUser } from 'react-icons/fi';

function ApplicantsList({ postId, onShortlist, showShortlisted, shortlistedApplicants }) {
  const applicants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 (555) 123-4567',
      experience: '5 years',
      status: 'pending',
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Sarah'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      phone: '+1 (555) 234-5678',
      experience: '8 years',
      status: 'shortlisted',
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Michael'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      email: 'emma.w@example.com',
      phone: '+1 (555) 345-6789',
      experience: '3 years',
      status: 'rejected',
      avatar: 'https://api.dicebear.com/6.x/avataaars/svg?seed=Emma'
    }
  ];

  if (showShortlisted) {
    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-6">Shortlisted Applicants</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead className="text-sm text-gray-400 uppercase bg-gray-700/50">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Experience</th>
                <th className="px-4 py-3">Contact</th>
              </tr>
            </thead>
            <tbody>
              {shortlistedApplicants.map((applicant) => (
                <tr key={applicant.id} className="border-b border-gray-700">
                  <td className="px-4 py-3 flex items-center">
                    <img
                      src={applicant.avatar}
                      alt={applicant.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    {applicant.name}
                  </td>
                  <td className="px-4 py-3">{applicant.experience}</td>
                  <td className="px-4 py-3">{applicant.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-6">Applicants</h2>
      <div className="space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <img
                src={applicant.avatar}
                alt={applicant.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white">{applicant.name}</h3>
                <p className="text-sm text-gray-300">{applicant.experience} experience</p>
              </div>
              <div className="flex space-x-2">
                {applicant.status === 'pending' && (
                  <>
                    <button
                      onClick={() => onShortlist(applicant)}
                      className="p-2 text-green-400 hover:text-green-300 transition-colors"
                      title="Shortlist"
                    >
                      <FiCheck />
                    </button>
                    <button
                      className="p-2 text-red-400 hover:text-red-300 transition-colors"
                      title="Reject"
                    >
                      <FiX />
                    </button>
                  </>
                )}
                {applicant.status === 'shortlisted' && (
                  <span className="text-green-400">Shortlisted</span>
                )}
                {applicant.status === 'rejected' && (
                  <span className="text-red-400">Rejected</span>
                )}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center text-gray-300">
                <FiMail className="mr-2" />
                {applicant.email}
              </div>
              <div className="flex items-center text-gray-300">
                <FiPhone className="mr-2" />
                {applicant.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApplicantsList;