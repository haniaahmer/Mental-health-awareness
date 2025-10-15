import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function AboutSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 bg-gradient-to-b from-amber-50 to-green-50 text-center px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 inline-block border-b-4 border-green-600 pb-2">
          About the Movement
        </h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-500">
          <p className="text-xl leading-relaxed text-gray-800 mb-6">
            Thapki is a symbol of <span className="text-green-700 font-bold">kindness</span>, 
            <span className="text-green-700 font-bold"> empathy</span>, and 
            <span className="text-green-700 font-bold"> listening</span>.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            We aim to spread mental health awareness through stories, healing spaces,
            and emotional support. 🌿
          </p>
          <p className="text-2xl text-green-700 font-bold">
            ہم سب سننے، سمجھنے اور سہارا دینے کے لیے ہیں۔
          </p>
        </div>
      </div>
    </section>
  );
}