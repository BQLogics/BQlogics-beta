import React from 'react';
import { motion } from 'framer-motion';
import { SplineViewer } from './animations/SplineViewer';

export function Hero() {
  return (
    <div className="relative min-h-screen flex">
      <SplineViewer />
      
      <div className="relative z-10 w-full self-end pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-6 leading-tight">
              Transforming Ideas into
              <span className="block bg-gradient-to-r from-green-400/80 to-emerald-500/80 text-transparent bg-clip-text">
                Digital Reality
              </span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-md font-light tracking-wide leading-relaxed">
              Your trusted partner in AI consultation, app development, web solutions, and IT support.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-white rounded-full font-medium hover:from-green-600/30 hover:to-emerald-700/30 transition-all text-sm"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 border border-green-500/20 text-green-400/80 rounded-full font-medium hover:bg-green-500/5 transition-all text-sm"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}