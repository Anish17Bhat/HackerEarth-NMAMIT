import React from 'react';
import { Trophy, Star, Sparkles, ArrowRight } from 'lucide-react';

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center py-20">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl mb-8 shadow-2xl animate-bounce-in">
            <Trophy className="w-12 h-12 text-white" />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>

          {/* Coming Soon Message */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 shadow-xl animate-scale-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Coming Soon</h2>
              <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              We're working hard to showcase our incredible achievements and milestones. 
              This section will feature our awards, competitions, and success stories.
            </p>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Awards & Recognition</h3>
                <p className="text-sm text-gray-600">National and international accolades</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
                <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Competition Results</h3>
                <p className="text-sm text-gray-600">Hackathons and coding contests</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
                <Sparkles className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Project Showcases</h3>
                <p className="text-sm text-gray-600">Award-winning innovations</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2">
                <span>Stay Tuned</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:scale-105">
                Notify Me
              </button>
            </div>
          </div>

          {/* Timeline Preview */}
          <div className="mt-16 text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Coming</h3>
            <div className="space-y-4">
              {[
                { phase: "Phase 1", title: "Award Gallery", description: "Showcase of all our achievements and recognitions" },
                { phase: "Phase 2", title: "Competition Timeline", description: "Interactive timeline of our competition journey" },
                { phase: "Phase 3", title: "Success Stories", description: "Member spotlights and project case studies" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-sm font-medium text-blue-600">{item.phase}</span>
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;