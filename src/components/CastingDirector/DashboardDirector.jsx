import React from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Users, Search } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    applicants: 45,
    posted: "2024-03-15",
  },

  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York",
    applicants: 32,
    posted: "2024-03-14",
  },

  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco",
    applicants: 28,
    posted: "2024-03-13",
  },
];

function DashboardDirector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Director Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Manage job postings and applications
          </p>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Active Job Postings
              </h2>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {posts.map((post) => (
              <div
                key={post.id}
                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {post.title}
                    </h3>

                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />

                        {post.department}
                      </span>

                      <span>{post.location}</span>

                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {post.applicants} applicants
                      </span>
                    </div>
                  </div>

                  <div className="text-sm text-gray-500">
                    Posted on {new Date(post.posted).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDirector;
