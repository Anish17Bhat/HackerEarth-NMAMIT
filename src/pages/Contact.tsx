import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hackerearth@nmamit.in",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team members",
      contact: "+91 76195 45988",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office during office hours",
      contact: "Room 301, CS Building, NMAMIT",
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const officeHours = [
    { day: "Monday", hours: "2:00 PM - 8:00 PM" },
    { day: "Tuesday", hours: "2:00 PM - 8:00 PM" },
    { day: "Wednesday", hours: "2:00 PM - 8:00 PM" },
    { day: "Thursday", hours: "2:00 PM - 8:00 PM" },
    { day: "Friday", hours: "2:00 PM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
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
            <MessageCircle className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our club, events, or want to join us at NMAMIT? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-xl animate-bounce-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>
                <p className="text-blue-600 font-semibold text-lg">
                  {method.contact}
                </p>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl animate-slide-in-left">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/80"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/80"
                    placeholder="john@nmamit.in"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/80"
                  placeholder="What is this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-white/80"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Office Hours and Additional Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Office Hours</h2>
              </div>
              
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{schedule.day}</span>
                    <span className={`text-sm font-medium ${schedule.hours === 'Closed' ? 'text-red-500' : 'text-green-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-xl animate-slide-in-left" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Quick Information</h3>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                  <p className="text-gray-600 text-sm">We typically respond within 24 hours</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Meeting Location</h4>
                  <p className="text-gray-600 text-sm">Room 301, Computer Science Building, NMAMIT</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Weekly Meetings</h4>
                  <p className="text-gray-600 text-sm">Every Friday at 6:00 PM</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Membership</h4>
                  <p className="text-gray-600 text-sm">Open to all NMAMIT students, free registration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 mb-20 shadow-xl animate-scale-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">How do I join the club?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Simply attend one of our weekly meetings or contact us through this form. Membership is free and open to all NMAMIT students.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Do I need programming experience?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Not at all! We welcome students of all skill levels. We have programs for beginners and advanced learners.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">What events do you organize?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We organize workshops, hackathons, tech talks, coding competitions, and networking events throughout the year.
              </p>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Can I lead a workshop?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! We encourage members to share their knowledge. Contact us if you'd like to lead a workshop or give a tech talk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;