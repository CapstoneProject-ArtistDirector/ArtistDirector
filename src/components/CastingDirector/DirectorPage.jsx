import React from 'react';
import DirectorNavbar from './DirectorNavbar';

function DirectorPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://img.freepik.com/free-photo/man-filming-with-professional-camera_23-2149066345.jpg?t=st=1731385100~exp=1731388700~hmac=fb3967a466980ffb666e692f5bb4a6b60f5459ed5b8caa7b107ee1ff87af30fe&w=740)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter:'none',
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <DirectorNavbar />
        
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
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-200">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DirectorPage;
