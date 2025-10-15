import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  const reviews = [
    {
      name: "Sara",
      text: "I found peace through Thapki's words. It helped me open up about my emotions.",
      avatar: "S"
    },
    {
      name: "Ali",
      text: "The awareness section changed how I see my mental health journey.",
      avatar: "A"
    },
      {
      name: "Asiya",
      text: "This helps alot.",
      avatar: "A"
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-black to-green-900 text-white"
    >
      <h3 className={`text-4xl md:text-5xl font-bold text-green-400 mb-16 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        Voices of Hope 🌟
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-10 px-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br from-green-800 to-green-900 p-8 rounded-3xl w-full md:w-96 mx-auto shadow-2xl border border-green-600/30 transform hover:scale-105 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${i === 0 ? '-translate-x-20' : 'translate-x-20'}`
            }`}
            style={{ transitionDelay: `${i * 300}ms` }}
          >
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl font-bold mr-4">
                {r.avatar}
              </div>
              <span className="text-green-300 font-bold text-xl">{r.name}</span>
            </div>
            <p className="italic text-gray-200 text-lg leading-relaxed">"{r.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}