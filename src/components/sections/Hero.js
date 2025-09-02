import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload, FiMapPin, FiPhone, FiCode, FiTerminal, FiCpu } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';
import akithaImage from '../../assets/akiitha_new.jpg';
import cvPdf from '../../assets/Akitha_Chanupama_Resume_.pdf';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState({ experience: 0, projects: 0, clients: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Show stats after a delay
    const statsTimer = setTimeout(() => {
      setShowStats(true);
    }, 1500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(statsTimer);
    };
  }, []);

  // Counter animation for stats
  useEffect(() => {
    if (showStats) {
      const targetStats = { experience: 2, projects: 10, clients: 12 };
      const duration = 1500;
      const intervals = 50;
      const steps = duration / intervals;

      let currentStep = 0;
      const counter = setInterval(() => {
        currentStep++;
        const progress = Math.min(currentStep / steps, 1);
        
        setStats({
          experience: Math.floor(targetStats.experience * progress),
          projects: Math.floor(targetStats.projects * progress),
          clients: Math.floor(targetStats.clients * progress)
        });

        if (progress >= 1) {
          clearInterval(counter);
          setStats(targetStats);
        }
      }, intervals);

      return () => clearInterval(counter);
    }
  }, [showStats]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Akitha_Chanupama_Resume.pdf';
    link.click();
  };

  return (
<section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">      {/* Futuristic coding background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Matrix-like grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating code symbols */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 opacity-30">
            <FiCode className="w-4 h-4 md:w-6 md:h-6 text-cyan-400 animate-pulse" />
          </div>
          <div className="absolute top-1/2 right-1/4 opacity-20" style={{ animationDelay: '0.5s' }}>
            <FiTerminal className="w-3 h-3 md:w-4 md:h-4 text-green-400 animate-pulse" />
          </div>
          <div className="absolute bottom-1/4 left-1/2 opacity-25" style={{ animationDelay: '1s' }}>
            <FiCpu className="w-4 h-4 md:w-5 md:h-5 text-blue-400 animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-1/3 opacity-15" style={{ animationDelay: '1.5s' }}>
            <span className="text-cyan-400 font-mono text-xs md:text-sm animate-pulse">{'</>'}</span>
          </div>
          <div className="absolute bottom-1/3 left-1/3 opacity-20" style={{ animationDelay: '2s' }}>
            <span className="text-green-400 font-mono text-xs animate-pulse">{'{ }'}</span>
          </div>
        </div>

        {/* Subtle gradient orbs */}
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-tr from-green-400/10 to-cyan-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Mouse follower effect - hidden on mobile */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-2xl transition-all duration-300 ease-out pointer-events-none hidden md:block"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className={`space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            {/* Greeting */}
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <span className="w-8 lg:w-12 h-px bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                <p className="text-base lg:text-lg text-cyan-300 font-medium font-mono">Hello World!</p>
              </div>
              
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  I'M{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-500 bg-clip-text text-transparent animate-gradient">
                    {portfolioData.personal.name}
                  </span>
                </h1>
              </div>
              
              <div className="space-y-2 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-semibold">
                  {portfolioData.personal.title}
                </h2>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400 text-sm lg:text-base animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <FiMapPin className="w-4 h-4 flex-shrink-0" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                    <span>Available for work</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <p
              className="text-base lg:text-lg text-gray-300 leading-relaxed animate-fadeInUp text-center lg:text-justify"
              style={{ animationDelay: '1s' }}
            >
              {portfolioData.personal.bio}
            </p>

            {/* Stats with counter animation */}
            <div className={`grid grid-cols-3 gap-3 lg:gap-4 py-4 lg:py-6 transition-all duration-1000 ${showStats ? 'animate-statsReveal' : 'opacity-0'}`}>
              <div className="text-center p-3 lg:p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 group cursor-pointer">
                <div className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                  {stats.experience}+
                </div>
                <div className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years Experience</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-green-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 group cursor-pointer">
                <div className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300 font-mono">
                  {stats.projects}+
                </div>
                <div className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Projects Done</div>
              </div>
              <div className="text-center p-3 lg:p-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20 group cursor-pointer">
                <div className="text-xl lg:text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 font-mono">
                  {stats.clients}+
                </div>
                <div className="text-xs lg:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Buttons */}
          <div className={`flex flex-col items-center lg:items-end space-y-6 order-1 lg:order-2 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            {/* Profile Image */}
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-3 lg:-inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl blur-xl opacity-60"></div>
              
              {/* Image container */}
              <div className="relative">
                <img
                  src={akithaImage}
                  alt="Portfolio Project by Akitha Chanupama"
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl object-cover border-2 border-gray-700/50 shadow-2xl transform hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Action Buttons Below Image */}
            <div className="flex flex-col w-full max-w-xs sm:max-w-sm space-y-3 lg:space-y-4 px-4 sm:px-0">
              <Button
                size="lg"
                onClick={() => scrollToSection('#contact')}
                className="w-full bg-gradient-to-r from-cyan-800 to-blue-700 hover:from-cyan-600 hover:to-blue-900 text-white px-6 lg:px-8 py-4 lg:py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/25 group relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '1.2s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <FiMail className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span className="font-semibold text-sm lg:text-base">Get In Touch</span>
                </span>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                className="w-full border-2 border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:border-cyan-400/50 hover:text-cyan-400 px-6 lg:px-8 py-4 lg:py-4 rounded-xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-400/15 animate-fadeInUp" style={{ animationDelay: '1.4s' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <FiDownload className="w-4 h-4 lg:w-5 lg:h-5 group-hover:animate-bounce transition-colors duration-300" />
                  <span className="font-semibold text-sm lg:text-base">Download CV</span>
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity font-mono">Explore More</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-cyan-400 transition-colors">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-cyan-400 transition-colors"></div>
              </div>
              <FiArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Streamlined Custom Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

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

        @keyframes statsReveal {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-statsReveal {
          animation: statsReveal 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};