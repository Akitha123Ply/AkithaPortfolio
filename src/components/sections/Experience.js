import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp, FiAward } from 'react-icons/fi';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-slate-800 via-gray-900 to-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hexagonal pattern */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px, 75px 75px, 100px 100px'
          }}></div>
        </div>

        {/* Enhanced tech elements with complex animations */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-cyan-400/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-blue-400/25 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/6 right-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated diagonal lines */}
        <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/8 to-transparent transform rotate-12 animate-shimmer"></div>
        <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-blue-400/8 to-transparent transform -rotate-12 animate-shimmer" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Gradient orbs with breathing animation */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/4 to-blue-600/4 rounded-full blur-3xl animate-breathe"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/4 to-purple-600/4 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Enhanced CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-50px) rotate(-5deg);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotate(0deg);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-10px) rotate(180deg);
          }
        }
        
        @keyframes shimmer {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes breathe {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: scale(1.1);
            opacity: 0.6;
          }
        }
        
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 5px rgba(6, 182, 212, 0.3);
          }
          50% { 
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.6), 0 0 30px rgba(6, 182, 212, 0.4);
          }
        }
        
        @keyframes slideInScale {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) scale(0.8);
          }
          60% { 
            opacity: 0.8; 
            transform: translateX(10px) scale(1.05);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% { 
            opacity: 0; 
            transform: scale(0.3) rotate(-10deg);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05) rotate(5deg);
          }
          70% { 
            opacity: 0.9; 
            transform: scale(0.95) rotate(-2deg);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes ripple {
          0% { 
            transform: scale(0);
            opacity: 0.8;
          }
          100% { 
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .experience-card {
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .experience-card:nth-child(even) {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .experience-card:hover .icon-container {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .experience-card:hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple 1s ease-out infinite;
        }
        
        .title-animation {
          animation: slideInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        
        .subtitle-animation {
          animation: fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .cta-animation {
          animation: bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Header with staggered animations */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 title-animation">
            PROFESSIONAL <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-mono px-4 sm:px-0 subtitle-animation">
            Professional milestones and career progression
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Cards Container */}
          <div className="space-y-6 sm:space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={index} 
                className="experience-card relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content Card */}
                <div className="w-full">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-500 group relative overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl">
                    {/* Enhanced animated background gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-500 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 animate-gradient-shift"></div>
                    
                    {/* Header */}
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                          <div className="icon-container w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0 animate-glow">
                            <FiBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-400 transition-all duration-500 break-words transform group-hover:translate-x-2">
                              {exp.title}
                            </h3>
                            <p className="text-cyan-400 font-medium text-sm break-words transform group-hover:translate-x-2 transition-all duration-500">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        {/* Enhanced Duration Badge */}
                        <div className="flex items-center space-x-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-full px-3 py-1 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-500 self-start sm:self-auto flex-shrink-0 transform group-hover:scale-105">
                          <FiCalendar className="w-3 h-3 text-cyan-400 group-hover:rotate-12 transition-transform duration-500" />
                          <span className="text-xs text-gray-300 font-mono whitespace-nowrap group-hover:text-white transition-colors duration-500">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description with enhanced hover effects */}
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1">
                        {exp.description}
                      </p>
                    </div>

                    {/* Enhanced sparkle effects */}
                    <div className="absolute top-3 right-3 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute top-1/2 right-6 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500" style={{ animationDelay: '0.4s' }}></div>
                    
                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
          <div className="cta-animation bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 max-w-md mx-auto hover:border-cyan-400/30 hover:bg-gray-700/30 transition-all duration-500 group transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-500 text-sm sm:text-base transform group-hover:scale-110">Ready for New Challenges</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-mono group-hover:text-gray-300 transition-colors duration-500">
              Always excited to take on innovative projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};