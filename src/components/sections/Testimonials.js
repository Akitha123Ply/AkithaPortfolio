import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiStar, FiHeart, FiThumbsUp, FiUsers, FiCheckCircle } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';

export const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 animate-pulse" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              animation: 'gridPulse 4s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Enhanced floating elements with different animations */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full" style={{ 
          animation: 'float 3s ease-in-out infinite',
          animationDelay: '1s' 
        }}></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-400/30 rounded-full" style={{ 
          animation: 'twinkle 2s ease-in-out infinite',
          animationDelay: '2s' 
        }}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-purple-400/30 rounded-full" style={{ 
          animation: 'pulse 2.5s ease-in-out infinite',
          animationDelay: '3s' 
        }}></div>
        
        {/* Moving gradient orbs - responsive sizing */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl" style={{ 
          animation: 'slowSpin 20s linear infinite' 
        }}></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl" style={{ 
          animation: 'slowSpin 25s linear infinite reverse' 
        }}></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-green-400/5 to-cyan-600/5 rounded-full blur-3xl" style={{ 
          animation: 'float 15s ease-in-out infinite' 
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 opacity-0 animate-slideInFromTop px-4" style={{ 
            animation: 'slideInFromTop 1s ease-out 0.2s both' 
          }}>
            CLIENT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">TESTIMONIALS</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-mono opacity-0 px-4" style={{ 
            animation: 'slideInFromBottom 1s ease-out 0.4s both' 
          }}>
            Voices of satisfaction from collaborative partnerships
          </p>
        </div>

        {/* Testimonials Grid - responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card group relative transition-all duration-700 ${
                visibleCards.has(index) ? 'animate-slideInFromBottom' : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Enhanced glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-2xl blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" style={{
                animation: hoveredCard === index ? 'borderGlow 2s ease-in-out infinite' : 'none'
              }}></div>
              
              {/* Main testimonial card - responsive padding */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Animated quote icon - responsive positioning */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <FiMessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                </div>
                
                {/* User profile with enhanced animations - responsive layout */}
                <div className="flex items-center mb-4 pr-8 sm:pr-10">
                  <div className="relative flex-shrink-0">
                    {/* Avatar with gradient background and hover effect - responsive sizing */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-cyan-500/30 text-sm sm:text-base" style={{
                      animation: hoveredCard === index ? 'avatarPulse 1.5s ease-in-out infinite' : 'none'
                    }}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    {/* Online indicator - responsive sizing */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{
                      animation: hoveredCard === index ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none'
                    }}></div>
                  </div>
                  
                  <div className="ml-3 sm:ml-4 min-w-0 flex-1">
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-all duration-300 group-hover:translate-x-1 text-sm sm:text-base truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-all duration-300 truncate">
                      {testimonial.role} at{' '}
                      <span className="text-blue-400 font-semibold group-hover:text-cyan-400 transition-colors duration-300">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
                
                {/* Testimonial text with typewriter effect simulation - responsive padding */}
                <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-xl p-3 sm:p-4 mb-4 group-hover:bg-gray-900/50 transition-all duration-300">
                  <blockquote className="text-gray-300 leading-relaxed italic group-hover:text-white transition-all duration-300 text-sm sm:text-base">
                    "{testimonial.text}"
                  </blockquote>
                </div>
                
                {/* Enhanced rating stars with staggered animation - responsive layout */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current transition-all duration-300 hover:scale-125" 
                        style={{
                          animation: hoveredCard === index ? `starTwinkle 0.8s ease-in-out infinite ${i * 0.1}s` : 'none'
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Enhanced verified badge - responsive sizing */}
                  <div className="flex items-center space-x-1 text-green-400 group-hover:text-green-300 transition-all duration-300">
                    <FiCheckCircle className="w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 group-hover:rotate-12" />
                    <span className="text-xs sm:text-sm font-mono">Verified</span>
                  </div>
                </div>
                
                {/* Enhanced bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" style={{
                  animation: hoveredCard === index ? 'shimmer 1.5s ease-in-out infinite' : 'none'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
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
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes gridPulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
          }
        }

        @keyframes avatarPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes starTwinkle {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
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
      `}</style>
    </section>
  );
};