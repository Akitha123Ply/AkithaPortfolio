import React from 'react';
import { FiCode, FiZap, FiTarget, FiCpu, FiGlobe, FiDatabase, FiSmartphone, FiMonitor, FiPenTool, FiMessageCircle, FiSettings, FiUsers, FiStar, FiAward, FiShield } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import akitha2Image from '../../assets/akitha_3.jpg';

export const About = () => {
  const techStack = [
    { icon: FiCode, name: 'Frontend', color: 'text-cyan-400' },
    { icon: FiDatabase, name: 'Backend', color: 'text-blue-400' },
    { icon: FiSmartphone, name: 'Mobile', color: 'text-green-400' },
    { icon: FiMonitor, name: 'Desktop', color: 'text-purple-400' },
    { icon: FiGlobe, name: 'Web', color: 'text-orange-400' },
    { icon: FiPenTool, name: 'UI/UX', color: 'text-red-400' }
  ];

  const skills = [
    { name: 'Problem Solving', color: 'text-cyan-400', icon: FiZap },
    { name: 'Clean Code', color: 'text-cyan-400', icon: FiCode },
    { name: 'Team Leadership', color: 'text-cyan-400', icon: FiUsers },
    { name: 'Innovation', color: 'text-cyan-400', icon: FiAward }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px sm:60px sm:60px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            ABOUT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ME</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-300 font-mono">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Glowing border effect - reduced shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
              
              {/* Image container */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-3 lg:p-4 hover:border-cyan-400/50 transition-all duration-300">
                <img
                  src={akitha2Image}
                  alt="Portfolio Project: By Akitha Chanupama"
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Tech Stack Icons - Responsive grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-4 lg:mt-6">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-2 sm:p-3 hover:border-cyan-400/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                    <tech.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Title and Description */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center space-x-2 sm:space-x-3">
                <FiTarget className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 flex-shrink-0" />
                <span>{portfolioData.personal.title}</span>
              </h3>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg" style={{ textAlign: 'justify' }}>
                    I'm a passionate software engineer who transforms complex problems into elegant solutions. 
                    With expertise spanning full-stack development, mobile applications, and modern web technologies, 
                    I create digital experiences that not only look stunning but perform flawlessly.
                </p>
              </div>
            </div>

            {/* Core Strengths and Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300">
                <h4 className="font-semibold text-white mb-3 sm:mb-4 flex justify-center items-center space-x-2 text-sm sm:text-base">
                  <FiZap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span>Core Strengths</span>
                </h4>
                <div className="space-y-2 sm:space-y-3 text-sm text-gray-300">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="flex items-center space-x-2">
                      <skill.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${skill.color} flex-shrink-0`} />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300">
                <h4 className="font-semibold text-white mb-3 sm:mb-4 flex justify-center items-center space-x-2 text-sm sm:text-base">
                  <FiMessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span>Languages</span>
                </h4>
                <div className="space-y-2 sm:space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <span className="text-green-400 font-mono text-xs sm:text-sm">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sinhala</span>
                    <span className="text-green-400 font-mono text-xs sm:text-sm">Native</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PROGRAMMING</span>
                    <span className="text-blue-400 font-mono text-xs sm:text-sm">Proficient</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};