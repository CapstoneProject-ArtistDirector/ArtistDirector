import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock,Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-gray-800 p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Create an account</h1>
            <p className="text-gray-400 mb-8">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Log in
              </Link>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <div className="flex items-center">
                  <User className="absolute left-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="username"
                    className="w-full px-10 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email address
                </label>
                <div className="flex items-center">
                  <Mail className="absolute left-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    className="w-full px-10 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="flex items-center">
                  <Lock className="absolute left-3 text-gray-400" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="w-full px-10 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Sign Up
              </button>

              <p className="text-sm text-gray-400 mt-4">
                By signing up, you agree to our{' '}
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-400 hover:text-indigo-300">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Artistic Section */}
        <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <img
              src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80"
              alt="Artistic Visualization"
              className="object-cover rounded-xl opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="absolute bottom-8 left-8 flex items-center text-white">
            <Palette className="w-6 h-6 mr-2 text-indigo-400" />
            <span className="text-sm font-medium">Where creativity meets technology</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
