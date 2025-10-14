import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-black text-white flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10" style={{ animation: 'fadeInUp 1.2s ease-out' }}>
        <h2 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="inline-block animate-fadeIn">ذہنی صحت اہم ہے</span>
          <br />
          <span className="inline-block animate-fadeIn" style={{ animationDelay: '0.3s' }}>کیونکہ آپ اہم ہیں</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-8 leading-relaxed" style={{ animation: 'fadeInUp 1s ease-out 0.5s backwards' }}>
          Your peace matters. Mental health isn't a luxury — it's your right.<br />
          <span className="text-green-300 font-semibold">Let's break the silence, together 💚</span>
        </p>
        <a
          href="#awareness"
          className="inline-block bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transform hover:scale-110 transition-all duration-300"
          style={{ animation: 'fadeInUp 1s ease-out 0.8s backwards' }}
        >
          Learn More ✨
        </a>
      </div>
    </section>
  );
}