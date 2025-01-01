import React from 'react';
import { motion } from 'framer-motion';

export function ParallaxBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 absolute inset-0 opacity-[0.02]">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="bg-green-500/10 backdrop-blur-sm" />
        ))}
      </div>
    </div>
  );
}