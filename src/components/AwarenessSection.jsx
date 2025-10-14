import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function AwarenessSection() {
  const [ref, isVisible] = useScrollAnimation();

  const topics = [
    {
      title: "Anxiety Management",
      desc: "Simple breathing and mindfulness techniques to help calm your thoughts.",
      icon: "🧘",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Depression Awareness",
      desc: "Understanding the signs, causes, and how to reach out for help.",
      icon: "💙",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Community Support",
      desc: "You're not alone. We're all here to listen and support each other.",
      icon: "🤝",
      color: "from-green-500 to-green-600"
    },
  ];

  return (
    <section
      id="awareness"
      ref={ref}
      className="py-24 bg-gradient-to-b from-green-50 to-white px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h3 className={`text-4xl md:text-5xl font-bold text-green-700 mb-16 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          Let's Talk About Mental Health 💬
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((t, i) => (
            <div
              key={i}
              className={`bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 cursor-pointer border-t-4 border-green-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${i * 200}ms`,
                animation: isVisible ? `cardFloat 3s ease-in-out ${i * 0.5}s infinite` : 'none'
              }}
            >
              <div className={`text-6xl mb-4 inline-block bg-gradient-to-r ${t.color} text-transparent bg-clip-text`}>
                {t.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-green-800">{t.title}</h4>
              <p className="text-gray-600 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}