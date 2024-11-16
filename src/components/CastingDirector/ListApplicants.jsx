import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Users, Star, FileCheck, ArrowLeft, Mail, Phone, Download } from 'lucide-react';

function ListApplicants() {
  const { id } = useParams();
  const navigate = useNavigate();

  const applicants = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 (555) 123-4567',
      experience: '6 years',
      status: 'Under Review',
      appliedDate: '2024-03-10',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      phone: '+1 (555) 234-5678',
      experience: '8 years',
      status: 'Shortlisted',
      appliedDate: '2024-03-11',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@example.com',
      phone: '+1 (555) 345-6789',
      experience: '5 years',
      status: 'Under Review',
      appliedDate: '2024-03-12',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex">
      {/* Sidebar */}
      <div className="w-64 sidebar bg-gray-800 text-white p-6 rounded-l-lg shadow-lg">
        <button
          onClick={() => navigate(`/post/${id}`)}
          className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Post Details
        </button>

        <nav className="space-y-4">
          <Link
            to={`/post/${id}/applicants`}
            className="flex items-center px-4 py-2 text-blue-400 hover:bg-blue-700 hover:text-white rounded-lg transition-colors"
          >
            <Users className="h-5 w-5 mr-3" />
            View Applicants
          </Link>
          <Link
            to="#"
            className="flex items-center px-4 py-2 text-gray-400 hover:bg-blue-700 hover:text-white rounded-lg transition-colors"
          >
            <Star className="h-5 w-5 mr-3" />
            Shortlisted
          </Link>
          <Link
            to="#"
            className="flex items-center px-4 py-2 text-gray-400 hover:bg-blue-700 hover:text-white rounded-lg transition-colors"
          >
            <FileCheck className="h-5 w-5 mr-3" />
            Selected
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070')" }}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Applicants List</h1>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  <Download className="h-4 w-4 mr-2" />
                  Export List
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>

                <tbody className="bg-gray-50 divide-y divide-gray-200">
                  {applicants.map((applicant) => (
                    <tr key={applicant.id} className="hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{applicant.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col text-sm text-gray-500">
                          <span className="flex items-center">
                            <Mail className="h-4 w-4 mr-1" />
                            {applicant.email}
                          </span>
                          <span className="flex items-center mt-1">
                            <Phone className="h-4 w-4 mr-1" />
                            {applicant.phone}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{applicant.experience}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            applicant.status === 'Shortlisted'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {applicant.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(applicant.appliedDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4 transition-colors">View Profile</button>
                        <button className="text-blue-600 hover:text-blue-900 transition-colors">Download CV</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListApplicants;
