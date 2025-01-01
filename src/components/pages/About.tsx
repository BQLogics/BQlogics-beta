import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../common/SectionTitle';
import { TeamSection } from './about/TeamSection';
import { MissionSection } from './about/MissionSection';

export function About() {
  return (
    <section id="about" className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title="About Us" 
          subtitle="Building the future of technology together"
        />
        <MissionSection />
        <TeamSection />
      </div>
    </section>
  );
}