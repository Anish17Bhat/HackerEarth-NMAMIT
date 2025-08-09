import React from 'react';
import { Target, Eye, Heart, Users, MapPin, Clock, Mail, Phone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We strive to push the boundaries of technology and create solutions that matter."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Together we achieve more. We believe in the power of teamwork and collective intelligence."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We are driven by our love for technology and the desire to make a positive impact."
    },
    {
      icon: Eye,
      title: "Excellence",
      description: "We maintain high standards in everything we do, from code quality to project delivery."
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
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              About HackerEarth
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empowering the next generation of technologists through innovation, collaboration, and excellence at NMAMIT.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 animate-slide-in-left">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To create a vibrant community where NMAMIT students can learn, collaborate, and innovate 
              in the field of technology. We aim to bridge the gap between academic learning 
              and real-world application by providing hands-on experience and mentorship.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl hover:scale-105 transition-transform duration-300 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the leading technical club that produces skilled professionals who 
              contribute meaningfully to the tech industry. We envision a future where our 
              members lead innovation and drive positive change in society through technology.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl animate-bounce-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 mb-20 shadow-xl animate-scale-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-600 leading-relaxed">
                Room 301, Computer Science Building<br />
                NMAMIT, Nitte College<br />
                Karkala, Karnataka
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Meetings</h3>
              <p className="text-gray-600 leading-relaxed">
                Every Friday at 6:00 PM<br />
                All NMAMIT students welcome<br />
                Open discussions & workshops
              </p>
            </div>
            
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Office Hours</h3>
              <p className="text-gray-600 leading-relaxed">
                Monday - Friday<br />
                2:00 PM - 8:00 PM<br />
                Drop by anytime!
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-blue-600 font-medium">hackerearth@nmamit.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-green-600 font-medium">+91 76195 45988</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white text-center shadow-2xl animate-scale-in">
          <h2 className="text-4xl font-bold mb-6">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join HackerEarth at NMAMIT and help us write the next chapter of innovation and excellence.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
            Join Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;