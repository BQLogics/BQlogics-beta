import React from 'react';
import { Brain, Code, Server, Smartphone } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Brain,
    title: 'AI Consultation',
    description: 'Expert guidance in implementing AI solutions to transform your business processes.',
    link: '#ai-consultation'
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Custom mobile applications that deliver exceptional user experiences.',
    link: '#app-development'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    link: '#web-development'
  },
  {
    icon: Server,
    title: 'IT Support',
    description: '24/7 technical support and maintenance to keep your systems running smoothly.',
    link: '#it-support'
  }
];

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}