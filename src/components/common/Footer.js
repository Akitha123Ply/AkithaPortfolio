import React, { useState, useEffect } from 'react';
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiMail, FiTwitter, FiCode, FiCoffee } from 'react-icons/fi';
import { portfolioData } from '../../data/portfolioData';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [heartBeat, setHeartBeat] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartBeat(true);
      setTimeout(() => setHeartBeat(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { icon: FaWhatsapp, href: 'https://wa.me/94715566135', label: 'WhatsApp' },
    { icon: FiGithub, href: 'https://github.com/Akitha123Ply', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/akitha-chanupama-478b4126b/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:akithachanupama@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              animation: 'gridMove 20s linear infinite'
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full" style={{ 
          animation: 'float 4s ease-in-out infinite' 
        }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-400/20 rounded-full" style={{ 
          animation: 'twinkle 3s ease-in-out infinite' 
        }}></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/5 to-transparent"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-6 sm:py-8 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section - Social Links */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="flex space-x-3 sm:space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-2 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  style={{
                    animation: `slideInFromBottom 0.8s ease-out ${index * 0.1}s both`
                  }}
                  aria-label={link.label}
                >
                  {/* Glowing background */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-all duration-300 relative z-10" />
                  
                  {/* Tooltip - hidden on mobile */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none hidden sm:block">
                    {link.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700/50"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 px-4">
                <div className="w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"></div>
              </span>
            </div>
          </div>

          {/* Middle Section - Made with love */}
          <div className="text-center mb-4 sm:mb-6" style={{ animation: 'slideInFromBottom 1s ease-out 0.4s both' }}>
            <p className="text-gray-400 flex items-center justify-center space-x-1 sm:space-x-2 font-mono text-xs sm:text-sm mb-2 flex-wrap">
              <span>Made with</span>
              <FiHeart 
                className={`w-3 h-3 sm:w-4 sm:h-4 text-red-400 transition-all duration-300 ${
                  heartBeat ? 'animate-pulse scale-125' : ''
                }`}
                style={{
                  animation: heartBeat ? 'heartBeat 1s ease-in-out' : 'none'
                }}
              />
              <span>and</span>
              <FiCoffee className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
              <span>by</span>
              <span className="text-cyan-400 font-semibold break-all">{portfolioData.personal.name}</span>
            </p>
            <p className="text-gray-500 text-xs font-mono px-2 sm:px-0 leading-relaxed sm:leading-normal">
              Crafted with <span className="text-blue-400">React</span> • <span className="text-cyan-400">Tailwind</span> • <span className="text-purple-400">EmailJS</span> • <span className="text-green-400 hidden sm:inline">Modern Web Technologies</span>
              <span className="text-green-400 sm:hidden">Modern Tech</span>
            </p>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="text-center" style={{ animation: 'slideInFromBottom 1s ease-out 0.6s both' }}>
            <p className="text-gray-400 flex items-center justify-center space-x-1 sm:space-x-2 font-mono text-xs sm:text-sm px-2 sm:px-0 flex-wrap">
              <FiCode className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 hidden sm:inline" />
              <span className="text-center leading-relaxed">
                COPYRIGHT © 2025 ALL RIGHTS RESERVED. 
                <span className="block sm:inline">
                  <span className="hidden sm:inline"> CONCEPT & DESIGN BY </span>
                  <span className="sm:hidden"> BY </span>
                  AKITHA CHANUPAMA
                </span>
              </span>
              <FiCode className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 hidden sm:inline" />
            </p>
            <p className="text-gray-500 text-xs mt-2 opacity-0 hover:opacity-100 transition-opacity duration-300 hidden sm:block">
              "Code is poetry in motion"
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 p-2 sm:p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{
          animation: showScrollTop ? 'bounceIn 0.5s ease-out' : 'none'
        }}
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 animate-ping"></div>
      </button>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
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
            transform: translateY(-8px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes gridMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(40px);
          }
        }

        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1.1);
          }
          75% {
            transform: scale(1.3);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </footer>
  );
};