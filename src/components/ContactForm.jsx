import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function ContactForm() {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-green-50 to-amber-50">
      <h3 className={`text-4xl md:text-5xl font-bold text-green-800 mb-12 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        Reach Out to Us 📬
      </h3>
      <div
        ref={ref}
        className={`max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-2xl space-y-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {submitted && (
          <div className="bg-green-100 border-2 border-green-500 text-green-800 p-4 rounded-xl text-center font-semibold animate-fadeIn">
            Thank you for reaching out! We'll get back to you soon. 💚
          </div>
        )}
        
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full border-2 border-green-200 rounded-xl p-4 focus:ring-4 focus:ring-green-400 focus:border-green-600 transition-all duration-300 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full border-2 border-green-200 rounded-xl p-4 focus:ring-4 focus:ring-green-400 focus:border-green-600 transition-all duration-300 outline-none"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full border-2 border-green-200 rounded-xl p-4 focus:ring-4 focus:ring-green-400 focus:border-green-600 transition-all duration-300 outline-none resize-none"
        ></textarea>
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-500 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Send Message ✉️
        </button>
      </div>
    </section>
  );
}