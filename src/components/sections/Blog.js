import React, { useState } from 'react';
import { FiEdit3, FiCalendar, FiTag, FiArrowRight, FiSearch } from 'react-icons/fi';

// Sample blog data - replace with your actual data
const blogData = [
  {
    id: 1,
    title: "College & Careers in the AI Revolution",
    excerpt: "Explore how AI transforms student success, from campus choices to career growth.",
    category: "AI & Careers",
    date: "Aug 11, 2025",
    readTime: "By Rob Enderle",
    link: "https://www.technewsworld.com/story/a-students-guide-to-college-and-career-in-the-age-of-ai-179860.html"
  },
  {
    id: 2,
    title: "Bluesky: The Decentralized Social Wave",
    excerpt: "Learn how Bluesky's open design, custom moderation, and protocol appeal resonate with users.",
    category: "Social Media",
    date: "Aug 14, 2025",
    readTime: "By Amanda Silberling and Cody Corrall",
    link: "https://techcrunch.com/2025/08/14/what-is-bluesky-everything-to-know-about-the-x-competitor/"
  },
  {
    id: 3,
    title: "Unlock App Potential with Open Source",
    excerpt: "Dive into frameworks like Ionic, NocoBase, and more for powerful, cost-free app development.",
    category: "Software Development",
    date: "Jun 24, 2025",
    readTime: "By Peter Herzog",
    link: "https://techreviewer.co/blog/best-free-open-source-app-development-software-solutions"
  },
  {
    id: 4,
    title: "Game Your Way to Prompt Mastery",
    excerpt: "Use game-like writing workouts to stay sharp and extract smarter, clearer output from AI.",
    category: "Propmpt Engineering",
    date: "Aug 01, 2025",
    readTime: "By Jonathan Terrasi",
    link: "https://www.technewsworld.com/story/gaming-your-way-to-sharper-ai-prompts-179852.html"
  }
];

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...new Set(blogData.map(post => post.category))];

  const filteredPosts = blogData.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
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
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            LATEST <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">ARTICLES</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-mono">
            Insights, tutorials, and thoughts on development
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          {/* Search */}
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400/50 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                    : 'bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              {/* Main card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FiEdit3 className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-mono text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <FiCalendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm font-mono">
                    {post.readTime}
                  </span>
                  
                  <a 
                    href={post.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-blue-400 font-semibold transition-colors group/btn"
                  >
                    <span>Read More</span>
                    <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </article>
          ))}
        </div>

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto">
              <FiSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <a 
            href="https://theconversation.com/topics/information-technology-3215" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-8 py-4 text-white font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 group"
          >
            <span className="relative z-10">View All Articles</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};