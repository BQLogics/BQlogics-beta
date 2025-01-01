import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
];

export function QuickLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
      <ul className="space-y-3">
        {links.map(({ to, label }) => (
          <li key={label}>
            <Link
              to={to}
              className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/60 mr-3 group-hover:w-3 transition-all duration-300" />
              <span className="text-gray-400 group-hover:text-white transition-colors">
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}