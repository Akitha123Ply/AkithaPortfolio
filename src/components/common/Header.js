import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { portfolioData } from '../../data/portfolioData';
import logo from '../../assets/logo.png';
import cvPdf from '../../assets/Akitha_Chanupama_Resume_.pdf';
import hoverLogo from '../../assets/logo-hover.png';

// You can replace this with your actual hover logo image

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // For now, using the same logo. Replace 'logo' with 'hoverLogo' when you have the hover image
  const currentLogo = isLogoHovered ? logo : logo;

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 100;

      for (let i = 0; i < navItems.length; i++) {
        const section = document.querySelector(navItems[i].href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveNav(navItems[i].href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'Akitha_Chanupama_Resume.pdf';
    link.click();
  };

  const handleLogoClick = () => {
    // First try to find #hero section
    const heroSection = document.querySelector('#hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
      setActiveNav('#hero');
    } else {
      // If #hero doesn't exist, scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveNav('');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/5 dark:bg-gray-900/5 backdrop-blur-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={handleLogoClick}
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
              className="focus:outline-none transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-3 hover:brightness-110"
              aria-label="Go to home"
            >
              <img 
                src={currentLogo} 
                alt="Logo" 
                className={`h-8 sm:h-10 w-auto transition-all duration-500 ease-in-out transform ${
                  isLogoHovered 
                    ? 'filter drop-shadow-lg brightness-110 saturate-150' 
                    : 'filter drop-shadow-sm'
                }`}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveNav(item.href)}
                className={`${
                  activeNav === item.href ? 'text-blue-500' : 'text-white'
                } hover:text-blue-500 transition-colors font-medium text-sm xl:text-base`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="primary"
              size="sm"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-primary-700 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium px-3 sm:px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 text-sm"
              onClick={handleDownloadCV}
            >
              <FiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">Download CV</span>
              <span className="md:hidden">CV</span>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-800/50 text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="w-5 h-5 sm:w-6 sm:h-6" /> : <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border-t border-white/10 dark:border-gray-800/30">
          <div className="px-3 sm:px-4 pt-2 pb-3 space-y-1 max-h-screen overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-3 py-3 text-base font-medium rounded-md transition-colors ${
                  activeNav === item.href 
                    ? 'text-blue-500 bg-blue-500/10' 
                    : 'text-white hover:text-blue-500'
                } hover:bg-white/10 dark:hover:bg-gray-800/50`}
                onClick={() => {
                  setActiveNav(item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2 sm:hidden">
              <Button
                variant="primary"
                size="sm"
                className="w-full justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                onClick={() => {
                  handleDownloadCV();
                  setIsMenuOpen(false);
                }}
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};