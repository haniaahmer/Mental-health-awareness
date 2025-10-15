import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import ksktlogo from '../assets/ksktlogo.jpeg';
import FEWYAlogo from '../assets/FEWYA.jpeg';
import shaheenlogo from '../assets/shaheen.jpeg';

// Logos data
const logos = [
  { src: ksktlogo, alt: 'khud se khuda tak academy' },
  { src: FEWYAlogo, alt: ' Federal Empowerment for Youth and Women Alliance' },
  { src: shaheenlogo, alt: ' IGP Educational Services Private Limited' },
  { src: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Org4', alt: 'Collaborator 4' },
  { src: 'https://via.placeholder.com/150/E91E63/FFFFFF?text=Org5', alt: 'Collaborator 5' },
  { src: 'https://via.placeholder.com/150/F44336/FFFFFF?text=Org6', alt: 'Collaborator 6' },
  { src: 'https://via.placeholder.com/150/4CAF50/FFFFFF?text=Org1', alt: 'Collaborator 1' },
  { src: 'https://via.placeholder.com/150/2196F3/FFFFFF?text=Org2', alt: 'Collaborator 2' },
  { src: 'https://via.placeholder.com/150/FF9800/FFFFFF?text=Org3', alt: 'Collaborator 3' },
  { src: 'https://via.placeholder.com/150/9C27B0/FFFFFF?text=Org4', alt: 'Collaborator 4' },
  { src: 'https://via.placeholder.com/150/E91E63/FFFFFF?text=Org5', alt: 'Collaborator 5' },
  { src: 'https://via.placeholder.com/150/F44336/FFFFFF?text=Org6', alt: 'Collaborator 6' },
];

export default function CollaborativeOrganizations() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-green-50 px-6">
      <h3
        className={`text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        Our Collaborative Organizations 🌱
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 overflow-x-auto pb-4">
        {logos.map((logo, i) => (
          <div
            key={i}
            className={`w-24 h-24 md:w-32 md:h-32 rounded-full shadow-2xl border-4 border-green-200 flex items-center justify-center overflow-hidden transform hover:scale-110 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-cover"
              title={logo.alt} // Optional: Keep title for tooltip if desired
            />
          </div>
        ))}
      </div>
    </section>
  );
}