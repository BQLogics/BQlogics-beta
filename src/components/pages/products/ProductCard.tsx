import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Product } from './productData';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-[#111] rounded-xl overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-green-400/80 font-medium">{product.price}</span>
          <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}