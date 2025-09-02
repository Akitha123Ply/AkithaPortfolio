import React, { useState } from "react";
import { FiEdit3, FiCalendar, FiArrowRight, FiSearch } from "react-icons/fi";

// Use the same blogData from Blog.js or import it
import { blogData } from "./blogData"; // or keep inline if needed

export const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...new Set(blogData.map((post) => post.category))];

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ALL <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">BLOGS</span>
          </h1>
          <p className="text-gray-300 text-lg font-mono">
            Browse all articles, tutorials, and insights
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-4xl mx-auto">
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

          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                    : "bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/15 to-blue-500/15 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>

              {/* Card */}
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FiEdit3 className="w-5 h-5 text-cyan-400" />
                      <span className="text-cyan-400 font-mono text-sm font-semibold">{post.category}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <FiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-gray-400 text-sm font-mono">{post.readTime}</span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-blue-400 font-semibold transition-colors"
                  >
                    <span>Read More</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto">
              <FiSearch className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
