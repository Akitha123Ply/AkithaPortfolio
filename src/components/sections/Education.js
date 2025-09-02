import React from 'react';
import { FiBook, FiAward, FiCalendar, FiMapPin, FiStar, FiTrendingUp, FiTarget, FiUsers } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

export const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Gradient orbs - responsive sizing */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-green-400/5 to-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            EDUCATION <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">JOURNEY</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-mono px-4">
            Building the foundation for technological excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line - responsive positioning */}
            <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/20 via-blue-400/20 to-purple-400/20"></div>
            
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot - responsive positioning */}
                  <div className="absolute left-2 sm:left-4 lg:left-6 top-6 sm:top-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Content card - responsive margins */}
                  <div className="ml-8 sm:ml-12 lg:ml-16 relative" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Glowing border effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Main card - responsive padding */}
                    <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col space-y-4 lg:flex-row lg:items-start lg:justify-between lg:space-y-0 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <FiBook className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                              {edu.degree}
                            </h3>
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                            <p className="text-base sm:text-lg text-blue-400 font-semibold">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        
                        {/* Year badge - responsive */}
                        <div className="flex items-center space-x-2 bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-xl px-3 py-2 sm:px-4 self-start lg:mt-0">
                          <FiCalendar className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-cyan-400 font-mono font-semibold text-sm sm:text-base">
                            {edu.year}
                          </span>
                        </div>
                      </div>
                      
                      {/* Description - responsive padding */}
                      <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 sm:p-4">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {edu.description}
                        </p>
                      </div>

                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};