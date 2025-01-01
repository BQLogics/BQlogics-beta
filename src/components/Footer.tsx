import React from 'react';
import { SocialLinks } from './footer/SocialLinks';
import { ContactInfo } from './footer/ContactInfo';
import { QuickLinks } from './footer/QuickLinks';
import { Copyright } from './footer/Copyright';

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/40 pointer-events-none" />
      
      {/* Glassmorphism container */}
      <div className="relative backdrop-blur-md bg-black/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                  BQ Logics
                </span>
              </h3>
              <p className="text-gray-400 mb-6">
                Transforming ideas into digital reality with cutting-edge solutions.
              </p>
              <SocialLinks />
            </div>

            {/* Contact Info */}
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
              <ContactInfo />
            </div>

            {/* Quick Links */}
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10">
              <QuickLinks />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
}