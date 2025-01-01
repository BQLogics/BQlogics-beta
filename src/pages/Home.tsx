import React from 'react';
import { Hero } from '../components/Hero';
import { ParallaxSection } from '../components/home/ParallaxSection';
import { TechStack } from '../components/home/TechStack';

export function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ParallaxSection />
      <TechStack />
    </main>
  );
}