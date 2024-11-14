import React, { useState } from 'react';
import { FiEdit2, FiCalendar, FiDollarSign, FiMapPin, FiClock, FiSave, FiX } from 'react-icons/fi';

function PostDetails({ post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post);

  const handleSave = () => {
    // Add save logic here
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedPost(post);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-white">Post Details</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center px-3 py-1 text-sm text-blue-400 hover:text-blue-300"
          >
            <FiEdit2 className="mr-1" />
            Edit
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center px-3 py-1 text-sm text-green-400 hover:text-green-300"
            >
              <FiSave className="mr-1" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center px-3 py-1 text-sm text-red-400 hover:text-red-300"
            >
              <FiX className="mr-1" />
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {isEditing ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
              <input
                type="text"
                value={editedPost.title}
                onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Description</label>
              <textarea
                value={editedPost.description}
                onChange={(e) => setEditedPost({ ...editedPost, description: e.target.value })}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
                rows="4"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{post.title}</h3>
              <p className="text-gray-300">{post.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center text-gray-300">
                <FiMapPin className="mr-2 text-blue-400" />
                <span>Los Angeles, CA</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiCalendar className="mr-2 text-blue-400" />
                <span>Starting Sept 2023</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiClock className="mr-2 text-blue-400" />
                <span>6 months</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiDollarSign className="mr-2 text-blue-400" />
                <span>$5000/month</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PostDetails;