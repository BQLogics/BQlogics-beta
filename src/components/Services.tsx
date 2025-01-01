import React, { useState } from 'react';
import { ServiceGrid } from './services/ServiceGrid';
import { ServiceCarousel } from './services/ServiceCarousel';
import { ServiceDetail } from './services/ServiceDetail';
import { SectionTitle } from './common/SectionTitle';
import { servicesData, type ServiceKey } from '../data/servicesData';

export function Services() {
  const [selectedService, setSelectedService] = useState<ServiceKey | null>(null);

  return (
    <section id="services" className="py-24 bg-[#111] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive solutions for your digital transformation journey"
        />
        <div className="mt-12 mb-16">
          <ServiceCarousel onServiceSelect={setSelectedService} />
        </div>
        <ServiceGrid onServiceSelect={setSelectedService} />
        
        {selectedService && (
          <ServiceDetail 
            {...servicesData[selectedService]}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </section>
  );
}