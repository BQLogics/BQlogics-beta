import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="relative">
        <Hexagon className="w-8 h-8 text-green-400/20" strokeWidth={1.5} />
        <Hexagon className="w-8 h-8 text-green-400/10 absolute top-0 left-0 animate-pulse" strokeWidth={1.5} />
      </div>
      <span className="text-xl font-bold font-orbitron text-white/90">
        BQ Logics
      </span>
    </Link>
  );
}