import React from "react";
import { Clapperboard, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function DirectorHomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Full-screen background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80")',

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}

      <div className="relative z-10">
        {/* Navbar */}

        {/* <nav className="px-6 py-4 flex items-center justify-between bg-black/30 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <Clapperboard className="h-8 w-8 text-gray-300" />

            <span className="text-2xl font-bold text-white tracking-tight">
              TalentHunt
            </span>
          </div>

          <Link
            to="/register-director"
            className="px-6 py-2 bg-gray-300 hover:bg-white text-gray-900 font-semibold rounded-full 
                transition-all duration-300 transform hover:scale-105 no-underline"
          >
            Register Now
          </Link>
        </nav> */}

        {/* Hero Section */}

        <main className="container mx-auto px-6 pt-20 lg:pt-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Tomorrow's
              <span className="block text-gray-300">Stars Today</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over two decades of industry experience, we connect
              exceptional talent with groundbreaking productions. Your next
              breakthrough role awaits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-gray-200 hover:bg-white text-gray-900 font-bold 

        rounded-full flex items-center justify-center space-x-2 transition-all duration-300 

        transform hover:scale-105"
              >
                <span>Submit Your Portfolio</span>

                <ChevronRight className="h-5 w-5" />
              </button>

              <button
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold 

        rounded-full backdrop-blur-sm transition-all duration-300"
              >
                View Recent Castings
              </button>
            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">
                  500+
                </div>

                <div className="text-gray-400">Successful Castings</div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-gray-200 mb-2">50+</div>

                <div className="text-gray-400">Partner Studios</div>
              </div>

              <div className="text-center md:col-span-1 col-span-2">
                <div className="text-4xl font-bold text-gray-200 mb-2">15+</div>

                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DirectorHomePage;
