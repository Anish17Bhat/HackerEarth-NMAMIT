import React, { useState } from 'react';
import { Code, Database, Brain, ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

const Domains = () => {
  const [hoveredDomain, setHoveredDomain] = useState(null);

  const domains = [
    {
      icon: Code,
      title: "Web Development",
      description: "Master modern web technologies and build stunning, responsive applications that shape the digital world.",
      longDescription: "Dive deep into the world of web development with cutting-edge frameworks and technologies. Learn React, Node.js, TypeScript, and modern CSS to create beautiful, performant web applications.",
      technologies: ["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS", "MongoDB"],
      projects: "25+ Projects",
      members: "180 Members",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderGradient: "from-blue-200 to-cyan-200",
      features: [
        "Full-stack development mastery",
        "Modern framework expertise",
        "Responsive design principles",
        "API development & integration"
      ]
    },
    {
      icon: Database,
      title: "Data Structures & Algorithms",
      description: "Build a rock-solid foundation in computer science fundamentals and competitive programming excellence.",
      longDescription: "Master the art of problem-solving with comprehensive training in data structures and algorithms. Prepare for technical interviews and competitive programming challenges.",
      technologies: ["C++", "Python", "Java", "LeetCode", "Codeforces", "AtCoder"],
      projects: "500+ Problems Solved",
      members: "220 Members",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderGradient: "from-purple-200 to-pink-200",
      features: [
        "Competitive programming training",
        "Technical interview preparation",
        "Algorithm optimization techniques",
        "Complex problem-solving skills"
      ]
    },
    {
      icon: Brain,
      title: "Aptitude & Reasoning",
      description: "Sharpen your analytical thinking and logical reasoning skills for academic and professional success.",
      longDescription: "Develop critical thinking abilities through comprehensive aptitude training. Excel in placement tests, competitive exams, and logical reasoning challenges.",
      technologies: ["Quantitative Aptitude", "Logical Reasoning", "Verbal Ability", "Analytical Skills"],
      projects: "1000+ Questions Practiced",
      members: "150 Members",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      bgGradient: "from-orange-50 to-amber-50",
      borderGradient: "from-orange-200 to-amber-200",
      features: [
        "Placement test preparation",
        "Logical reasoning mastery",
        "Quick calculation techniques",
        "Pattern recognition skills"
      ]
    }
  ];

  const learningPaths = [
    {
      level: "Beginner",
      description: "Start your journey with foundational concepts",
      steps: [
        "Choose your domain of interest",
        "Attend introductory workshops",
        "Complete guided practice sessions",
        "Join study groups and peer learning"
      ],
      gradient: "from-green-500 to-emerald-500",
      icon: Target
    },
    {
      level: "Intermediate",
      description: "Build practical skills through hands-on projects",
      steps: [
        "Work on real-world projects",
        "Participate in coding challenges",
        "Collaborate with team members",
        "Mentor junior members"
      ],
      gradient: "from-blue-500 to-purple-500",
      icon: Zap
    },
    {
      level: "Advanced",
      description: "Lead initiatives and drive innovation",
      steps: [
        "Lead project teams",
        "Organize domain workshops",
        "Represent in competitions",
        "Contribute to open source"
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: Sparkles
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
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Code className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Technical Domains</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Our Domains
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our three specialized domains designed to build comprehensive technical expertise 
            and prepare you for the challenges of tomorrow.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const isHovered = hoveredDomain === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer shadow-xl hover:shadow-2xl animate-bounce-in`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredDomain(index)}
                onMouseLeave={() => setHoveredDomain(null)}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${domain.borderGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${domain.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 font-medium">{domain.projects}</div>
                      <div className="text-sm text-gray-500 font-medium">{domain.members}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {domain.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {isHovered ? domain.longDescription : domain.description}
                  </p>

                  {/* Features */}
                  {isHovered && (
                    <div className="mb-6 animate-fade-in">
                      <h4 className="text-sm font-semibold text-blue-600 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {domain.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {domain.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${domain.gradient} text-white shadow-md hover:shadow-lg transition-shadow`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${domain.gradient} px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group shadow-md`}>
                    <span>Explore Domain</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Paths */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700 font-medium">Learning Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                Your Path to Mastery
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow our structured learning paths designed to take you from beginner to expert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 hover:border-gray-300 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 animate-slide-in-left"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${path.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{path.level}</h3>
                      <p className="text-sm text-gray-600">{path.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {path.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 bg-gradient-to-r ${path.gradient} rounded-full flex items-center justify-center shadow-md`}>
                          <span className="text-white text-xs font-bold">{stepIndex + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-20 animate-scale-in">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-12 shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Dive Deep?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose your domain and start building amazing projects with our expert mentors and passionate community.
            </p>
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 px-10 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg">
              <span className="relative z-10 flex items-center space-x-2">
                <span>Join a Domain</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domains;