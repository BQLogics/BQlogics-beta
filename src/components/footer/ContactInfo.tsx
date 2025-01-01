import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: Mail, text: 'nafih_Abdul@proton.me', href: 'mailto:nafih_Abdul@proton.me' },
  { icon: Phone, text: '+91 9778027114', href: 'tel:+919778027114' },
  { icon: MapPin, text: '123 Tech Street, Digital City', href: 'https://maps.google.com' },
];

export function ContactInfo() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
      <div className="space-y-4">
        {contactInfo.map(({ icon: Icon, text, href }) => (
          <a
            key={text}
            href={href}
            className="flex items-center group hover:bg-white/5 p-2 rounded-lg transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 mr-3">
              <Icon className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors">
              {text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}