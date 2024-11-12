import React from 'react';
import { FiCalendar, FiDollarSign, FiMapPin, FiClock } from 'react-icons/fi';

function TalentCard({ post, onApply }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.description}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-300">
            <FiMapPin className="mr-2" />
            <span>{post.location}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FiCalendar className="mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FiClock className="mr-2" />
            <span>{post.duration}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <FiDollarSign className="mr-2" />
            <span>{post.compensation}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => onApply(post.id)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default TalentCard;