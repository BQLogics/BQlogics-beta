import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth and success.'
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    description: 'To be the leading force in digital transformation, setting new standards in technological excellence.'
  },
  {
    icon: Users,
    title: 'Our Values',
    description: 'Innovation, integrity, and customer success are at the heart of everything we do.'
  }
];

export function MissionSection() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#111] p-6 rounded-xl"
          >
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <item.icon className="w-6 h-6 text-green-400/60" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}