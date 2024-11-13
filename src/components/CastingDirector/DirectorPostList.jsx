import React from 'react';
import { FiClock, FiUsers } from 'react-icons/fi';

function DirectorPostList({ onSelectPost, selectedPost }) {
  const posts = [
    {
      id: 1,
      title: 'Lead Vocalist Needed',
      category: 'Music',
      description: 'Seeking a talented lead vocalist for an upcoming rock band album recording and tour.',
      applicants: 12,
      status: 'Active',
      deadline: '2023-09-30'
    },
    {
      id: 2,
      title: 'Contemporary Dancer',
      category: 'Dance',
      description: 'Professional dance company looking for contemporary dancers for upcoming performance season.',
      applicants: 8,
      status: 'Active',
      deadline: '2023-10-15'
    },
    {
      id: 3,
      title: 'Theater Actor',
      category: 'Acting',
      description: 'Leading role available for upcoming Broadway production. Experience required.',
      applicants: 15,
      status: 'Active',
      deadline: '2023-09-25'
    }
  ];

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
      <h2 className="text-xl font-bold text-white mb-4">Your Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => onSelectPost(post)}
            className={`cursor-pointer rounded-lg p-4 transition-colors ${
              selectedPost?.id === post.id
                ? 'bg-blue-600/20 border border-blue-500/50'
                : 'bg-gray-700/50 hover:bg-gray-700/70'
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
            <p className="text-sm text-gray-300 mb-3 line-clamp-2">{post.description}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="inline-flex items-center text-blue-400">
                <FiUsers className="mr-1" />
                {post.applicants} applicants
              </span>
              <span className="inline-flex items-center text-yellow-400">
                <FiClock className="mr-1" />
                {new Date(post.deadline).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DirectorPostList;