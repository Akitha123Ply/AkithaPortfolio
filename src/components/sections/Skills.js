import React, { useState, useEffect } from 'react';
import { 
  SiFlutter, 
  SiReact, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiPhp, 
  SiFirebase, 
  SiNodedotjs, 
  SiMongodb, 
  SiGithub, 
  SiDocker, 
  SiPostgresql
} from 'react-icons/si';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const technologies = [
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' }
  ];

  return (
    <section id="skills" className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating elements - responsive positioning */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Gradient orbs - responsive sizes */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInUp {
          0% { 
            opacity: 0; 
            transform: translateY(60px) scale(0.8);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes slideInFromLeft {
          0% { 
            opacity: 0; 
            transform: translateX(-100px) rotate(-10deg);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotate(0deg);
          }
        }
        
        @keyframes slideInFromRight {
          0% { 
            opacity: 0; 
            transform: translateX(100px) rotate(10deg);
          }
          100% { 
            opacity: 1; 
            transform: translateX(0) rotate(0deg);
          }
        }
        
        @keyframes fadeInScale {
          0% { 
            opacity: 0; 
            transform: scale(0.3) rotate(180deg);
          }
          50% { 
            opacity: 0.5; 
            transform: scale(1.1) rotate(90deg);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes shimmer {
          0% { 
            background-position: -200% 0;
          }
          100% { 
            background-position: 200% 0;
          }
        }
        
        @keyframes subtleGlow {
          0%, 100% { 
            filter: drop-shadow(0 0 8px var(--tech-color)) brightness(1);
          }
          50% { 
            filter: drop-shadow(0 0 16px var(--tech-color)) brightness(1.1);
          }
        }
        
        .tech-card {
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          transform: translateY(0) scale(1);
        }
        
        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            transparent 40%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 60%
          );
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tech-card:hover::before {
          opacity: 1;
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .tech-card.animate-entrance {
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .tech-card.animate-entrance:nth-child(1) { animation-name: slideInFromLeft; animation-delay: 0.1s; }
        .tech-card.animate-entrance:nth-child(2) { animation-name: slideInUp; animation-delay: 0.2s; }
        .tech-card.animate-entrance:nth-child(3) { animation-name: slideInFromRight; animation-delay: 0.3s; }
        .tech-card.animate-entrance:nth-child(4) { animation-name: fadeInScale; animation-delay: 0.4s; }
        .tech-card.animate-entrance:nth-child(5) { animation-name: slideInFromLeft; animation-delay: 0.5s; }
        .tech-card.animate-entrance:nth-child(6) { animation-name: slideInUp; animation-delay: 0.6s; }
        .tech-card.animate-entrance:nth-child(7) { animation-name: slideInFromRight; animation-delay: 0.7s; }
        .tech-card.animate-entrance:nth-child(8) { animation-name: fadeInScale; animation-delay: 0.8s; }
        .tech-card.animate-entrance:nth-child(9) { animation-name: slideInFromLeft; animation-delay: 0.9s; }
        .tech-card.animate-entrance:nth-child(10) { animation-name: slideInUp; animation-delay: 1.0s; }
        .tech-card.animate-entrance:nth-child(11) { animation-name: slideInFromRight; animation-delay: 1.1s; }
        .tech-card.animate-entrance:nth-child(12) { animation-name: fadeInScale; animation-delay: 1.2s; }
        
        /* Smooth hover effects */
        .tech-card:hover {
          transform: translateY(-8px) scale(1.05);
          backdrop-filter: blur(10px);
        }
        
        .tech-card:hover .tech-icon {
          animation: subtleGlow 3s ease-in-out infinite;
        }
        
        .tech-card:hover .tech-name {
          color: rgb(165, 243, 252);
          text-shadow: 0 0 10px var(--tech-color);
        }
        
        .tech-card:hover .glow-effect {
          opacity: 1;
        }
        
        .tech-card:hover .particle {
          opacity: 1;
        }
        
        .header-text {
          opacity: 0;
          animation: slideInUp 1s ease-out forwards;
        }
        
        .header-text.visible {
          animation-delay: 0.2s;
        }
        
        .subtitle-text {
          opacity: 0;
          animation: slideInUp 1s ease-out forwards;
          animation-delay: 0.4s;
        }
        
        .bottom-text {
          opacity: 0;
          animation: slideInUp 1s ease-out forwards;
          animation-delay: 1.5s;
        }
        
        .glow-effect {
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        
        .particle {
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .particle:nth-child(1) { animation-delay: 0s; }
        .particle:nth-child(2) { animation-delay: 0.2s; }
        .particle:nth-child(3) { animation-delay: 0.4s; }
        .particle:nth-child(4) { animation-delay: 0.6s; }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 header-text ${isVisible ? 'visible' : ''}`}>
            WHAT I <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">DO</span>
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg text-gray-300 font-mono px-4 subtitle-text ${isVisible ? 'visible' : ''}`}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`tech-card bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 sm:p-4 lg:p-6 hover:border-cyan-400/50 hover:bg-gray-700/20 transition-all duration-400 group cursor-pointer relative overflow-hidden ${isVisible ? 'animate-entrance' : ''}`}
                style={{ 
                  '--tech-color': tech.color
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 40px ${tech.color}25, 0 0 20px ${tech.color}15`;
                  e.currentTarget.style.borderColor = `${tech.color}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(55, 65, 81, 0.5)';
                }}
              >
                {/* Animated background gradient */}
                <div 
                  className="glow-effect absolute inset-0 opacity-0 transition-all duration-600"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}15 0%, ${tech.color}08 40%, transparent 70%)`
                  }}
                ></div>
                
                {/* Subtle particle effect */}
                <div className="absolute inset-0">
                  <div className="particle absolute top-2 left-2 w-1 h-1 bg-current rounded-full animate-ping opacity-0" style={{ color: tech.color, animationDuration: '2s' }}></div>
                  <div className="particle absolute top-4 right-3 w-0.5 h-0.5 bg-current rounded-full animate-ping opacity-0" style={{ color: tech.color, animationDuration: '2.5s' }}></div>
                  <div className="particle absolute bottom-3 left-3 w-0.5 h-0.5 bg-current rounded-full animate-ping opacity-0" style={{ color: tech.color, animationDuration: '3s' }}></div>
                  <div className="particle absolute bottom-2 right-2 w-1 h-1 bg-current rounded-full animate-ping opacity-0" style={{ color: tech.color, animationDuration: '2.2s' }}></div>
                </div>
                
                <div className="flex flex-col items-center space-y-2 lg:space-y-3 relative z-10">
                  {/* Icon */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                    <tech.icon 
                      className="tech-icon w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-all duration-300" 
                      style={{ color: tech.color }}
                    />
                  </div>
                  
                  {/* Technology Name */}
                  <span className="tech-name text-white font-medium text-center text-xs sm:text-sm lg:text-base transition-all duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className={`text-gray-400 font-mono animate-pulse text-sm sm:text-base px-4 bottom-text ${isVisible ? 'visible' : ''}`}>
            Constantly learning and adapting to new technologies
          </p>
        </div>
      </div>
    </section>
  );
};