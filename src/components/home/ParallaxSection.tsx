import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-orbitron">
            Innovate. Create. Transform.
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Building tomorrow's technology solutions today
          </p>
        </motion.div>
      </div>
    </section>
  );
}