import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';

const posts = [
  {
    title: 'The Future of AI in Business',
    excerpt: 'Exploring how artificial intelligence is reshaping modern business landscapes...',
    author: 'John Smith',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'AI & Technology'
  },
  {
    title: 'Web Development Trends 2024',
    excerpt: 'Latest trends and technologies shaping the future of web development...',
    author: 'Sarah Johnson',
    date: 'Mar 12, 2024',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479',
    category: 'Development'
  },
  // Add more blog posts as needed
];

export function Blog() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4 font-orbitron">Our Blog</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Insights and updates from our team of experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#111] rounded-xl overflow-hidden group hover:bg-[#161616] transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400/80 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}