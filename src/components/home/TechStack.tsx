import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Shield, Cpu, Globe } from 'lucide-react';

const technologies = [
  { icon: Code2, name: 'Full Stack Development', color: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Database, name: 'Database Solutions', color: 'from-purple-500/20 to-pink-500/20' },
  { icon: Cloud, name: 'Cloud Computing', color: 'from-sky-500/20 to-indigo-500/20' },
  { icon: Shield, name: 'Cybersecurity', color: 'from-red-500/20 to-orange-500/20' },
  { icon: Cpu, name: 'AI & Machine Learning', color: 'from-green-500/20 to-emerald-500/20' },
  { icon: Globe, name: 'Web Services', color: 'from-yellow-500/20 to-amber-500/20' }
];

export function TechStack() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
            Our Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative bg-[#111] rounded-xl p-6 backdrop-blur-sm border border-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6 text-white/60" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}