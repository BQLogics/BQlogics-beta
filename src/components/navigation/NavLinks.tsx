import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/services', label: 'Services' },
  // { to: '/products', label: 'Products' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

export function NavLinks() {
  return (
    <div className="flex items-center space-x-8">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}