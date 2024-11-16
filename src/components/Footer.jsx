import React from 'react';
import { Film } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Film className="h-8 w-8 text-gray-300" />
              <span className="text-2xl font-bold text-white">CastCraft</span>
            </div>
            <p className="text-gray-400">
              Connecting exceptional talent with visionary productions since 2005.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#film">Film Casting</FooterLink>
              <FooterLink href="#tv">Television</FooterLink>
              <FooterLink href="#theater">Theater</FooterLink>
              <FooterLink href="#voice">Voice Over</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#cookies">Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CastCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">
      {children}
    </a>
  </li>
);
