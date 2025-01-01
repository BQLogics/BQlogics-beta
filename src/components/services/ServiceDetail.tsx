import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Technology {
  name: string;
  icon: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  icon: LucideIcon;
  technologies: Technology[];
  image: string;
  features: string[];
  process: { title: string; description: string }[];
}

export function ServiceDetail({ title, description, icon: Icon, technologies, image, features, process }: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm"
    >
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden">
          <div className="relative h-64">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold text-white">{title}</h2>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-gray-300 mb-8">{description}</p>

            <h3 className="text-xl font-semibold text-white mb-4">Technologies We Use</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {technologies.map((tech) => (
                <div key={tech.name} className="p-4 bg-white/5 rounded-lg">
                  <img src={tech.icon} alt={tech.name} className="w-8 h-8 mb-2" />
                  <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                  <p className="text-sm text-gray-400">{tech.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-white mb-4">Our Process</h3>
            <div className="space-y-4">
              {process.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}