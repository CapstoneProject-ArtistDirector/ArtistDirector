import React from 'react';
import Navbar from './Navbar';

function LandingPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/movie-background-collage_23-2149876015.jpg?t=st=1731324394~exp=1731327994~hmac=d8a05faf4dc05c2095478619bf842710826ff93bab85f8a7617a73859f1c4def&w=740)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="flex flex-col items-end justify-center min-h-screen px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mx-auto">
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Connect with <br/> the Perfect Cast
            </h1>

            {/* Paragraph */}
            <p className="text-xl text-left text-gray-200 mb-12">
              Where talented artists meet <br/> visionary directors. Start your <br/> journey in the world of <br/> entertainment today.
            </p>

            {/* Get Started Button */}
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-200">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LandingPage;
