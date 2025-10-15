import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

export default function ContactForm() {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleWhatsAppMessage = () => {
    if (formData.name && formData.message) {
      const phoneNumber = '923407399124';
      const text = encodeURIComponent(
        `Hello! My name is ${formData.name}.\n\n${formData.message}`
      );
      window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
      setFormData({ name: '', message: '' });
    }
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/KYiMuzbfpyxE8I40BV6KOz?mode=wwt', '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-emerald-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className={`text-5xl font-extrabold text-emerald-900 mb-6 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Connect With Us 📬
        </h3>
        <p className={`text-center text-gray-700 text-xl mb-16 transition-all duration-1000 delay-150 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Drop us a message or join our vibrant community
        </p>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Send Message Card */}
          <div
            ref={ref}
            className={`bg-white p-10 rounded-2xl shadow-xl space-y-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.557 4.256 1.615 6.104L0 24l5.896-1.573c1.783.99 3.897 1.51 6.104 1.51 6.627 0 12-5.373 12-12S18.627 0 12 0zm5.028 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.297-.298.497-.44.197-.142.349-.247.499-.34.15-.093.297-.297.347-.497.049-.198.099-.398-.099-.696-.197-.297-.889-.747-1.214-.998-.324-.251-.628-.374-.889-.374-.26 0-.492.074-.691.223-.198.149-1.04.647-1.04 1.578 0 .93.671 1.825 1.566 2.723.895.898 2.015 1.413 3.36 1.413.879 0 1.482-.248 2.127-.742.644-.495 1.04-.992 1.188-1.34.149-.347.149-.645.025-.744z"/>
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-emerald-900 mb-3">Send a Message</h4>
              <p className="text-gray-600">Reach out directly via WhatsApp</p>
            </div>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border-2 border-emerald-300 rounded-lg p-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-600 transition-all duration-300 outline-none placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border-2 border-emerald-300 rounded-lg p-4 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-600 transition-all duration-300 outline-none placeholder-gray-400 resize-none"
            ></textarea>
            <button
              onClick={handleWhatsAppMessage}
              disabled={!formData.name || !formData.message}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-emerald-500 hover:to-emerald-400 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              Send via WhatsApp 💬
            </button>
          </div>

          {/* Join Community Card */}
          <div
            className={`bg-gradient-to-br from-emerald-600 to-teal-700 p-10 rounded-2xl shadow-xl text-white space-y-8 transition-all duration-1000 delay-200 ease-out flex flex-col justify-center ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 shadow-md">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-3xl font-semibold mb-4">Join Our Community 🌟</h4>
              <p className="text-teal-100 text-lg mb-6 leading-relaxed">
                Connect with a community dedicated to mental health and wellness
              </p>

              <div className="bg-white/10 rounded-xl p-6 mb-6 space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-teal-50">Daily mental health tips</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-teal-50">Connect with supportive peers</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-teal-50">Engage in wellness discussions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">✅</span>
                  <span className="text-teal-50">Access exclusive events</span>
                </div>
              </div>

              <button
                onClick={handleJoinCommunity}
                className="w-full bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.143.557 4.256 1.615 6.104L0 24l5.896-1.573c1.783.99 3.897 1.51 6.104 1.51 6.627 0 12-5.373 12-12S18.627 0 12 0zm5.028 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.297-.298.497-.44.197-.142.349-.247.499-.34.15-.093.297-.297.347-.497.049-.198.099-.398-.099-.696-.197-.297-.889-.747-1.214-.998-.324-.251-.628-.374-.889-.374-.26 0-.492.074-.691.223-.198.149-1.04.647-1.04 1.578 0 .93.671 1.825 1.566 2.723.895.898 2.015 1.413 3.36 1.413.879 0 1.482-.248 2.127-.742.644-.495 1.04-.992 1.188-1.34.149-.347.149-.645.025-.744z"/>
                </svg>
                Join WhatsApp Community
              </button>

              <p className="text-teal-100 text-sm mt-4">
                Become part of our supportive network today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}