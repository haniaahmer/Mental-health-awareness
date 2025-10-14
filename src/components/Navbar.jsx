import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'
      }`}
      style={{ animation: 'slideDown 0.8s ease-out' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-green-400 hover:text-green-300 transition-colors duration-300">
          Thpki Movement
        </h1>
        <div className="space-x-4 md:space-x-8">
          <a href="#about" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">About</a>
          <a href="#awareness" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">Awareness</a>
          <a href="#contact" className="text-white hover:text-green-400 transition-all duration-300 hover:scale-110 inline-block">Contact</a>
        </div>
      </div>
    </nav>
  );
}