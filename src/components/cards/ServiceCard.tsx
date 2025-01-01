import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
  };
  index: number;
  inView: boolean;
}

export function ServiceCard({ service, index, inView }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-[#0a0a0a]/50 backdrop-blur-sm border border-green-500/10 hover:border-green-500/20 transition-colors"
    >
      <div className="absolute inset-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/50" />
      </div>
      <div className="relative p-6">
        <div className="w-12 h-12 bg-green-500/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/15 transition-colors">
          {React.createElement(service.icon, { className: 'w-6 h-6 text-green-400/20' })}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400">{service.description}</p>
      </div>
    </motion.div>
  );
}