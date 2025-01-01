import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Nafih Zain',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1600878459108-617a253537e9?fit=crop&w=800&q=80', // Professional photo similar to the provided image
    bio: 'Tech innovator and community leader, passionate about transforming businesses through cutting-edge solutions. Speaker at DevFest .'
  },
  {
    name: 'Emily Chen',
    role: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80',
    bio: 'Expert in AI and cloud architecture with a focus on scalable solutions.'
  },
  {
    name: 'David Kumar',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=800&q=80',
    bio: 'Full-stack developer specializing in modern web technologies and cloud infrastructure.'
  }
];

export function TeamSection() {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-white mb-12 text-center font-orbitron">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="relative bg-[#111] rounded-xl overflow-hidden backdrop-blur-sm border border-white/5">
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-green-400/80 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-green-400 transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-green-400 transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a 
                    href="#" 
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-green-400 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}