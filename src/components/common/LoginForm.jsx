import React, { useState } from 'react';
import { Mail, Lock,User } from 'lucide-react'; // Importing Mail and Lock icons from Lucide

export default function LoginForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('token', result.token);
        window.location.href = '/dashboard';
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email Field with Icon inside */}
            <div className="relative">
              <input
                name="name"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User name"
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Password Field with Icon inside */}
            <div className="relative">
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          <div className="flex justify-between items-center text-center">
            <a href="/signup-artist" className="text-indigo-400 hover:text-indigo-500">
              Sign up as Artist
            </a>
            <a href="/signup-director" className="text-indigo-400 hover:text-indigo-500">
              Sign up as Director
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
