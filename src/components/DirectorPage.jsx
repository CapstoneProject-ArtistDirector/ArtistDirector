import React from "react";
import { ChevronRight, Star, Users, Video, Zap } from "lucide-react";
import Navbar from "./Navbar";

function DirectorPage() {
  return (
    <div className="min-h-screen relative bg-black">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <main className="container mx-auto px-4 pt-32 pb-12">
          <div className="flex flex-col items-center justify-center min-h-[80vh] gap-12">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto space-y-8">
              <h1 className="text-7xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent text-white   animate-gradient"> 
                  Revolutionize
                </span>
                <br />
                <span className="text-white">Your Casting Process</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Discover and connect with exceptional talent through our
                innovative platform designed for modern casting professionals.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                <a
                  href="/register"
                  className="group relative px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>

                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                {/* <a
                  href="/demo"
                  className="px-8 py-4 text-lg font-semibold text-gray-300 hover:text-white rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  Watch Demo
                </a> */}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto pt-16">
              {[
                {
                  icon: <Star className="h-6 w-6 text-purple-400" />,
                  title: "AI-Powered Matching",
                  description: "Smart algorithms find your perfect cast",
                },
                {
                  icon: <Video className="h-6 w-6 text-pink-400" />,
                  title: "Virtual Auditions",
                  description: "Streamlined remote casting process",
                },
                {
                  icon: <Users className="h-6 w-6 text-purple-400" />,
                  title: "Team Collaboration",
                  description: "Real-time feedback & communication",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="glass-card gradient-border p-8 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-white/5">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-12 mt-20">
              {[
                { value: "10K+", label: "Casting Calls" },
                { value: "50K+", label: "Talents" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DirectorPage;
// bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400
