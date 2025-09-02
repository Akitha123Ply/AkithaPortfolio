import React, { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiCode, FiStar, FiEye, FiArrowUpRight } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle image error
  const handleImageError = (projectIndex) => {
    setImageErrors(prev => ({
      ...prev,
      [projectIndex]: true
    }));
  };

  const projectColors = [
    'from-cyan-500/80 to-blue-600/80',
    'from-purple-500/80 to-pink-600/80',
    'from-green-500/80 to-teal-600/80',
    'from-orange-500/80 to-red-600/80',
    'from-indigo-500/80 to-purple-600/80'
  ];

  const handleViewAllProjects = () => {
    window.open('https://github.com/Akitha123Ply', '_blank');
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black py-12 sm:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating code elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 opacity-20">
            <FiCode className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-pulse" />
          </div>
          <div className="absolute top-1/2 right-1/6 opacity-15" style={{ animationDelay: '1s' }}>
            <span className="text-green-400 font-mono text-sm sm:text-lg animate-pulse">{'<Project/>'}</span>
          </div>
          <div className="absolute bottom-1/4 left-1/3 opacity-20" style={{ animationDelay: '2s' }}>
            <FiStar className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
        </div>

        {/* Enhanced gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-400/15 to-blue-600/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-purple-400/15 to-pink-600/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Enhanced mouse follower effect */}
        <div 
          className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-400/8 to-blue-400/8 rounded-full blur-3xl transition-all duration-500 ease-out pointer-events-none hidden sm:block"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            FEATURED{' '}
            <span className="gradient-text-advanced bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              PROJECTS
            </span>
          </h2>
          
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my latest work, built with using modern technologies and creative solutions
          </p>
        </div>

        {/* Projects Grid - 2x2 Layout with Modern Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-12 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {portfolioData.projects.slice(0, 4).map((project, index) => (
            <div 
              key={index}
              className="group relative max-w-2xl mx-auto w-full"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Modern Project Card */}
              <div className={`relative h-[240px] sm:h-[280px] transition-all duration-500 ease-out ${
                hoveredProject === index ? 'scale-[1.02]' : ''
              }`}>
                
                {/* Hover Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${projectColors[index % projectColors.length]} opacity-0 group-hover:opacity-20 transition-all duration-500 blur-lg`}></div>

                {/* Split Card Layout with Glass Background and Border */}
                <div className="relative z-10 h-full flex overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-slate-700/30">
                  {/* Subtle inner glow */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                  
                  {/* Left Side - Image (40%) */}
                  <div className="w-2/5 relative overflow-hidden p-2">
                    {/* Image Container */}
                    <div className="relative w-full h-full rounded overflow-hidden">
                      {project.image && !imageErrors[index] ? (
                        <div className="relative w-full h-full">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={() => handleImageError(index)}
                            style={{ objectFit: 'cover' }}
                          />
                          {/* Image Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/20"></div>
                        </div>
                      ) : (
                        <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${projectColors[index % projectColors.length]}`}>
                          <div className="text-white text-3xl font-bold">
                            {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                          </div>
                        </div>
                      )}
                      
                      {/* Hover Actions */}
                      <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex gap-2">
                          <button
                            onClick={() => window.open(project.github, '_blank')}
                            className="w-8 h-8 bg-slate-900/80 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-600/80 transition-all duration-200"
                          >
                            <FiGithub className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => window.open(project.demo, '_blank')}
                            className="w-8 h-8 bg-slate-900/80 backdrop-blur-sm border border-slate-600/50 flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-600/80 transition-all duration-200"
                          >
                            <FiExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Side - Content (60%) */}
                  <div className="w-3/5 p-4 sm:p-6 flex flex-col justify-between">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Title & Arrow */}
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>
                        <div className="w-6 h-6 bg-slate-800/80 border border-slate-600/50 flex items-center justify-center group-hover:bg-cyan-600 group-hover:border-cyan-500 transition-all duration-300 ml-2">
                          <FiArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-slate-800/60 backdrop-blur-sm text-cyan-300 text-xs border border-slate-600/30 hover:border-cyan-400/50 hover:bg-slate-700/60 transition-all duration-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-slate-800/40 text-slate-400 text-xs border border-slate-600/20">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="space-y-3">
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, '_blank')}
                          className="flex items-center space-x-1 flex-1 justify-center bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 text-gray-300 hover:bg-slate-700/60 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 py-1.5 text-xs font-medium hover:scale-[1.02]"
                        >
                          <FiGithub className="w-3 h-3" />
                          <span>Code</span>
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => window.open(project.demo, '_blank')}
                          className="flex items-center space-x-1 flex-1 justify-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white transition-all duration-300 py-1.5 text-xs font-medium hover:scale-[1.02]"
                        >
                          <FiExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </Button>
                      </div>
                      
                      {/* Project Stats */}
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <FiStar className="w-3 h-3" />
                            <span>Featured</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiEye className="w-3 h-3" />
                            <span>Public</span>
                          </div>
                        </div>
                        <div className="font-mono text-cyan-400/60">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            onClick={handleViewAllProjects}
            className="bg-transparent border border-slate-600/50 hover:border-cyan-400/50 text-white hover:bg-slate-800/30 px-8 py-4 text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <FiGithub className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(1deg);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .gradient-text-advanced {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};