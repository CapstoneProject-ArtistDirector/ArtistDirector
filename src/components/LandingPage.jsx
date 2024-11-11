import React from 'react';
import Navbar from './Navbar';

function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552599886-88ac8cc9e2bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Replace Film icon with a different element (e.g., an image or a placeholder div) */}
            {/* <div className="mx-auto h-16 w-16 bg-white rounded-full mb-8"></div> Placeholder */}
            
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Connect with the Perfect Cast
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              Where talented artists meet visionary directors. Start your journey in the world of entertainment today.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
