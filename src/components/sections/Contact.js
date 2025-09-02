import React, { useState, useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiFacebook, FiInstagram } from 'react-icons/fi';

import { portfolioData } from '../../data/portfolioData';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        'service_0q7htwj',     // Replace with your EmailJS service ID
        'template_uyt0jcj',    // Replace with your EmailJS template ID
        formRef.current,
        'W82burDGy6YhDy9la'      // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: FiGithub, 
      url: 'https://github.com/Akitha123Ply',
      color: '#181717',
      hoverColor: '#6366f1'
    },
    { 
      name: 'LinkedIn', 
      icon: FiLinkedin, 
      url: 'https://www.linkedin.com/in/akitha-chanupama-478b4126b/',
      color: '#0077B5',
      hoverColor: '#0ea5e9'
    },
    { 
      name: 'Facebook', 
      icon: FiFacebook, 
      url: 'https://www.facebook.com/akitha.chanupama',
      color: '#1877F2',
      hoverColor: '#3b82f6'
    },
    { 
      name: 'Instagram', 
      icon: FiInstagram, 
      url: 'https://www.instagram.com/akitha_chanupama/',
      color: '#E4405F',
      hoverColor: '#ec4899'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
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

        {/* Floating elements - responsive positioning */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-green-400/30 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-400/30 rounded-full"></div>
        
        {/* Gradient orbs - responsive sizing */}
        <div className="absolute top-0 right-0 w-48 h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Custom CSS for styling */}
      <style jsx>{`
        .contact-card {
          opacity: 1;
        }
        
        .contact-card:hover {
          transform: translateY(-2px);
        }
        
        .form-input {
          position: relative;
          overflow: hidden;
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-2px) scale(1.1);
        }

        .contact-link {
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .contact-link:hover {
          transform: translateX(4px);
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            GET IN <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">TOUCH</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-mono">
            Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Contact Information Card */}
            <div className="contact-card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-500 relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 to-blue-600/20"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {/* Email - Clickable */}
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="contact-link flex items-start sm:items-center space-x-3 sm:space-x-4 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 rounded-lg flex items-center justify-center group-hover:border-cyan-400/50 transition-all duration-300 flex-shrink-0">
                      <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-white text-sm sm:text-base">Email</p>
                      <p className="text-gray-300 font-mono text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-300 break-all">
                        {portfolioData.personal.email}
                      </p>
                    </div>
                  </a>
                  
                  {/* Phone - Clickable */}
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="contact-link flex items-start sm:items-center space-x-3 sm:space-x-4 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400/20 to-blue-600/20 border border-green-400/30 rounded-lg flex items-center justify-center group-hover:border-green-400/50 transition-all duration-300 flex-shrink-0">
                      <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-white text-sm sm:text-base">Phone</p>
                      <p className="text-gray-300 font-mono text-xs sm:text-sm group-hover:text-green-400 transition-colors duration-300">
                        {portfolioData.personal.phone}
                      </p>
                    </div>
                  </a>
                  
                  {/* Location - Clickable */}
                  <a
                    href={`https://maps.google.com?q=${encodeURIComponent(portfolioData.personal.location2)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link flex items-start sm:items-center space-x-3 sm:space-x-4 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-pink-600/20 border border-purple-400/30 rounded-lg flex items-center justify-center group-hover:border-purple-400/50 transition-all duration-300 flex-shrink-0">
                      <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-white text-sm sm:text-base">Location</p>
                      <p className="text-gray-300 font-mono text-xs sm:text-sm group-hover:text-purple-400 transition-colors duration-300">
                        {portfolioData.personal.location2}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="contact-card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-500 relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-blue-400/20 to-purple-600/20"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Follow Me
                </h3>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="social-icon group bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-2 sm:p-3 hover:border-cyan-400/50 transition-all duration-300 flex items-center space-x-2 sm:space-x-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px ${social.hoverColor}30`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                        <social.icon 
                          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-all duration-300" 
                          style={{ color: social.color }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300 min-w-0 flex-1">
                        {social.name}
                      </span>
                      
                      {/* Hover sparkle effect */}
                      <div className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto hidden sm:block"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 hover:bg-gray-700/50 transition-all duration-500 relative overflow-hidden order-1 lg:order-2">
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/20 to-purple-600/20"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                Send Message
              </h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="form-input">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="form-input">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-gray-400 transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-input">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 text-white placeholder-gray-400 transition-all duration-300 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600'
                  }`}
                >
                  <FiSend className={`w-4 h-4 transition-transform duration-300 ${
                    isSubmitting ? '' : 'group-hover:translate-x-1'
                  }`} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 sm:p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-xs sm:text-sm font-medium">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 sm:p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-xs sm:text-sm font-medium">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-400 font-mono text-sm sm:text-base">
            Ready to bring your ideas to life? Let's connect!
          </p>
        </div>
      </div>
    </section>
  );
};