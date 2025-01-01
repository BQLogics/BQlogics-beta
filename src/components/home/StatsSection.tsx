import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Countries Reached', value: '20+' }
];

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    initialInView: false
  });

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.span
                className="block text-4xl md:text-5xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ type: 'spring', delay: index * 0.1 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}