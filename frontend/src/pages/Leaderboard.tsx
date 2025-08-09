import React, { useState } from 'react';
import { Trophy, Medal, Star, TrendingUp, Calendar, Target, Award, Crown, Zap, Users } from 'lucide-react';

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('overall');

  const periods = [
    { id: 'overall', label: 'Overall', icon: Trophy },
    { id: 'monthly', label: 'This Month', icon: Calendar },
    { id: 'weekly', label: 'This Week', icon: TrendingUp }
  ];

  const stats = [
    {
      title: "Total Participants",
      value: "0",
      icon: Target,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Problems Solved",
      value: "0",
      icon: Zap,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Active Streaks",
      value: "0",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Events Conducted",
      value: "0",
      icon: Star,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-700 font-medium">DSA Sprint Leaderboard</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Leaderboard
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track your progress and compete with fellow NMAMIT students in our year-long DSA sprint challenge.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300 shadow-xl animate-bounce-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.title}</div>
              </div>
            );
          })}
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-2 shadow-lg">
            <div className="flex space-x-2">
              {periods.map((period) => {
                const Icon = period.icon;
                return (
                  <button
                    key={period.id}
                    onClick={() => setSelectedPeriod(period.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedPeriod === period.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{period.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* No Events Message */}
        <div className="text-center mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-16 shadow-xl animate-scale-in">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-600 rounded-3xl flex items-center justify-center shadow-lg">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              No Events Conducted Yet
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We haven't started our DSA sprint events yet. Once we begin conducting coding competitions 
              and challenges, this leaderboard will be updated with participant rankings and scores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Upcoming Competitions</h3>
                <p className="text-sm text-gray-600">Weekly coding challenges and contests</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Problem Solving</h3>
                <p className="text-sm text-gray-600">Daily DSA problems and solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
                <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Skill Tracking</h3>
                <p className="text-sm text-gray-600">Monitor progress and achievements</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Real-time ranking updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Points-based scoring system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Streak tracking and badges</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Monthly and weekly leaderboards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Problem difficulty levels</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Achievement recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Challenge CTA */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white text-center shadow-2xl animate-scale-in">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Join the Challenge?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Stay tuned for our upcoming DSA sprint events. Be the first to participate and climb to the top!
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;