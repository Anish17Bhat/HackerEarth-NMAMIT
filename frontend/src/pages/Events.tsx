import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Web Development Workshop",
      description: "Learn modern web development with React, Node.js, and MongoDB",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab A",
      capacity: 30,
      registered: 23,
      type: "Workshop",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "AI/ML Hackathon",
      description: "48-hour hackathon focused on artificial intelligence and machine learning solutions",
      date: "2024-02-20",
      time: "9:00 AM - 9:00 AM (+2 days)",
      location: "Main Auditorium",
      capacity: 100,
      registered: 87,
      type: "Hackathon",
      tags: ["AI", "ML", "Python", "TensorFlow"]
    },
    {
      id: 3,
      title: "Cybersecurity Seminar",
      description: "Understanding modern cybersecurity threats and prevention strategies",
      date: "2024-02-25",
      time: "2:00 PM - 5:00 PM",
      location: "Conference Room B",
      capacity: 50,
      registered: 42,
      type: "Seminar",
      tags: ["Cybersecurity", "Ethical Hacking", "Network Security"]
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build cross-platform mobile apps with React Native and Flutter",
      date: "2024-03-01",
      time: "10:00 AM - 6:00 PM",
      location: "Computer Lab B",
      capacity: 25,
      registered: 18,
      type: "Workshop",
      tags: ["React Native", "Flutter", "Mobile Development"]
    },
    {
      id: 5,
      title: "Open Source Contribution",
      description: "Learn how to contribute to open source projects and build your portfolio",
      date: "2024-03-05",
      time: "11:00 AM - 3:00 PM",
      location: "Library Hall",
      capacity: 40,
      registered: 31,
      type: "Workshop",
      tags: ["Git", "GitHub", "Open Source"]
    },
    {
      id: 6,
      title: "Tech Talk: Industry Insights",
      description: "Senior developers from top tech companies share their experiences",
      date: "2024-03-10",
      time: "3:00 PM - 5:00 PM",
      location: "Main Auditorium",
      capacity: 200,
      registered: 156,
      type: "Talk",
      tags: ["Industry", "Career", "Networking"]
    }
  ];

  const handleRegister = (eventId) => {
    setSelectedEvent(eventId);
    // In a real app, this would open a registration form or modal
    alert(`Registration for event ${eventId} would be processed here!`);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Workshop':
        return 'bg-blue-100 text-blue-800';
      case 'Hackathon':
        return 'bg-green-100 text-green-800';
      case 'Seminar':
        return 'bg-purple-100 text-purple-800';
      case 'Talk':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our workshops, hackathons, and seminars to enhance your skills and network with fellow developers.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.registered}/{event.capacity}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleRegister(event.id)}
                  disabled={event.registered >= event.capacity}
                  className={`w-full py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                    event.registered >= event.capacity
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <span>
                    {event.registered >= event.capacity ? 'Event Full' : 'Register Now'}
                  </span>
                  {event.registered < event.capacity && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Event Registration Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Register</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• Click "Register Now" on any event</li>
                <li>• Fill out the registration form</li>
                <li>• Receive confirmation email</li>
                <li>• Attend the event on time</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Notes</h3>
              <ul className="space-y-1 text-gray-700">
                <li>• All events are free for members</li>
                <li>• Bring your student ID</li>
                <li>• Laptops required for workshops</li>
                <li>• Certificates will be provided</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;