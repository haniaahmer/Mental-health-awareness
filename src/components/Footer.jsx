import React from 'react';
import ILMlogo from '../assets/ILMlogo.jpeg';
import dareechalogo from '../assets/dareechalogo.jpeg';
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-gray-900 to-black text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-transparent to-teal-600/10"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16">
          <div className="w-45 h-45 rounded-full bg-white flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={ILMlogo}
        alt="ILM Logo"
        className="w-32 h-32 object-contain"
      />
    </div>
          {/* Center Content */}
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              Thapki Movement
            </h2>
            <p className="text-emerald-300 text-sm mb-3">© {new Date().getFullYear()}</p>
            <p className="text-gray-200 text-lg font-light">Zehni Sehat Ehm Hai | ذہنی صحت اہم ہے</p>
          </div>
          
          {/* Right Logo */}
          <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img
        src={dareechalogo}
        alt="Dareecha Logo"
        className="w-35 h-35 object-cover"
      />
    </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-10 mb-8">
          <h3 className="text-white text-2xl font-semibold text-center mb-8">Connect With Us</h3>
          <div className="flex justify-center gap-10 flex-wrap">
            <a
              href="https://www.instagram.com/inspiredlearningmedia?igsh=MTNrbHpmM3Btbm43aA=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
              title="Follow ILM on Instagram"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-pink-500/40 transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.02.049 1.717.21 2.326.444a4.683 4.683 0 011.686 1.098 4.683 4.683 0 011.098 1.686c.234.609.395 1.306.444 2.326.047 1.024.06 1.378.06 3.808s-.013 2.784-.06 3.808c-.049 1.02-.21 1.717-.444 2.326a4.683 4.683 0 01-1.098 1.686 4.683 4.683 0 01-1.686 1.098c-.609.234-1.306.395-2.326.444-1.024.047-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.02-.049-1.717-.21-2.326-.444a4.683 4.683 0 01-1.686-1.098 4.683 4.683 0 01-1.098-1.686c-.234-.609-.395-1.306-.444-2.326-.047-1.024-.06-1.378-.06-3.808s.013-2.784.06-3.808c.049-1.02.21-1.717.444-2.326a4.683 4.683 0 011.098-1.686 4.683 4.683 0 011.686-1.098c.609-.234 1.306-.395 2.326-.444C9.53 2.013 9.885 2 12.315 2zM12 3.5c-2.405 0-2.727.01-3.677.053-.95.043-1.598.195-2.166.413a3.183 3.183 0 00-1.15.747 3.183 3.183 0 00-.747 1.15c-.218.568-.37 1.216-.413 2.166C3.51 9.273 3.5 9.595 3.5 12s.01 2.727.053 3.677c.043.95.195 1.598.413 2.166.22.573.578 1.06 1.15 1.632.572.572 1.06.93 1.632 1.15.568.218 1.216.37 2.166.413.95.043 1.272.053 3.677.053s2.727-.01 3.677-.053c.95-.043 1.598-.195 2.166-.413a3.183 3.183 0 001.632-1.15 3.183 3.183 0 00.747-1.632c.218-.568.37-1.216.413-2.166.043-.95.053-1.272.053-3.677s-.01-2.727-.053-3.677c-.043-.95-.195-1.598-.413-2.166a3.183 3.183 0 00-.747-1.632 3.183 3.183 0 00-1.632-.747c-.568-.218-1.216-.37-2.166-.413C14.727 3.51 14.405 3.5 12 3.5zm0 2.141c-3.418 0-6.182 2.764-6.182 6.182 0 3.418 2.764 6.182 6.182 6.182 3.418 0 6.182-2.764 6.182-6.182 0-3.418-2.764-6.182-6.182-6.182zm0 10.182a4.041 4.041 0 110-8.082 4.041 4.041 0 010 8.082zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-emerald-200 text-sm font-medium">ILM</span>
            </a>
            <a
              href="https://www.instagram.com/dareechabynoor?igsh=YnN3cDJhenFhZmJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
              title="Follow Dareecha on Instagram"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-md group-hover:shadow-pink-500/40 transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.02.049 1.717.21 2.326.444a4.683 4.683 0 011.686 1.098 4.683 4.683 0 011.098 1.686c.234.609.395 1.306.444 2.326.047 1.024.06 1.378.06 3.808s-.013 2.784-.06 3.808c-.049 1.02-.21 1.717-.444 2.326a4.683 4.683 0 01-1.098 1.686 4.683 4.683 0 01-1.686 1.098c-.609.234-1.306.395-2.326.444-1.024.047-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.02-.049-1.717-.21-2.326-.444a4.683 4.683 0 01-1.686-1.098 4.683 4.683 0 01-1.098-1.686c-.234-.609-.395-1.306-.444-2.326-.047-1.024-.06-1.378-.06-3.808s.013-2.784.06-3.808c.049-1.02.21-1.717.444-2.326a4.683 4.683 0 011.098-1.686 4.683 4.683 0 011.686-1.098c.609-.234 1.306-.395 2.326-.444C9.53 2.013 9.885 2 12.315 2zM12 3.5c-2.405 0-2.727.01-3.677.053-.95.043-1.598.195-2.166.413a3.183 3.183 0 00-1.15.747 3.183 3.183 0 00-.747 1.15c-.218.568-.37 1.216-.413 2.166C3.51 9.273 3.5 9.595 3.5 12s.01 2.727.053 3.677c.043.95.195 1.598.413 2.166.22.573.578 1.06 1.15 1.632.572.572 1.06.93 1.632 1.15.568.218 1.216.37 2.166.413.95.043 1.272.053 3.677.053s2.727-.01 3.677-.053c.95-.043 1.598-.195 2.166-.413a3.183 3.183 0 001.632-1.15 3.183 3.183 0 00.747-1.632c.218-.568.37-1.216.413-2.166.043-.95.053-1.272.053-3.677s-.01-2.727-.053-3.677c-.043-.95-.195-1.598-.413-2.166a3.183 3.183 0 00-.747-1.632 3.183 3.183 0 00-1.632-.747c-.568-.218-1.216-.37-2.166-.413C14.727 3.51 14.405 3.5 12 3.5zm0 2.141c-3.418 0-6.182 2.764-6.182 6.182 0 3.418 2.764 6.182 6.182 6.182 3.418 0 6.182-2.764 6.182-6.182 0-3.418-2.764-6.182-6.182-6.182zm0 10.182a4.041 4.041 0 110-8.082 4.041 4.041 0 010 8.082zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-emerald-200 text-sm font-medium">Dareecha</span>
            </a>
            <a
              href="https://chat.whatsapp.com/Ftl0PFBc500LeOihiqZbfg?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
              title="Join ILM Official Announcement Group"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-emerald-500/40 transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 2.143.557 4.256 1.615 6.104L0 24l5.896-1.573c1.783.99 3.897 1.51 6.104 1.51 6.627 0 12-5.373 12-12S18.627 0 12 0zm5.028 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.297-.298.497-.44.197-.142.349-.247.499-.34.15-.093.297-.297.347-.497.049-.198.099-.398-.099-.696-.197-.297-.889-.747-1.214-.998-.324-.251-.628-.374-.889-.374-.26 0-.492.074-.691.223-.198.149-1.04.647-1.04 1.578 0 .93.671 1.825 1.566 2.723.895.898 2.015 1.413 3.36 1.413.879 0 1.482-.248 2.127-.742.644-.495 1.04-.992 1.188-1.34.149-.347.149-.645.025-.744z"
                  />
                </svg>
              </div>
              <span className="text-emerald-200 text-sm font-medium">ILM Group</span>
            </a>
            <a
              href="https://chat.whatsapp.com/ImIjD1hoTg6Ix2UOVHCs3X?mode=ac_t"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3"
              title="Join Dareecha (Women Only)"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md group-hover:shadow-emerald-500/40 transform group-hover:scale-110 transition-all duration-300">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 2.143.557 4.256 1.615 6.104L0 24l5.896-1.573c1.783.99 3.897 1.51 6.104 1.51 6.627 0 12-5.373 12-12S18.627 0 12 0zm5.028 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.297-.298.497-.44.197-.142.349-.247.499-.34.15-.093.297-.297.347-.497.049-.198.099-.398-.099-.696-.197-.297-.889-.747-1.214-.998-.324-.251-.628-.374-.889-.374-.26 0-.492.074-.691.223-.198.149-1.04.647-1.04 1.578 0 .93.671 1.825 1.566 2.723.895.898 2.015 1.413 3.36 1.413.879 0 1.482-.248 2.127-.742.644-.495 1.04-.992 1.188-1.34.149-.347.149-.645.025-.744z"
                  />
                </svg>
              </div>
              <span className="text-emerald-200 text-sm font-medium">Dareecha</span>
            </a>
          </div>
          <p className="text-emerald-300 text-sm text-center mt-8 font-light">Dareecha WhatsApp Group is for Women Only</p>
        </div>
      </div>
      
      {/* WhatsApp Contact Button - Fixed Position */}
      <a
        href="https://wa.me/923407399124"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 group z-50"
        title="Contact us on WhatsApp: +92 340 7399124"
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transform group-hover:scale-110 transition-all duration-300">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.143.557 4.256 1.615 6.104L0 24l5.896-1.573c1.783.99 3.897 1.51 6.104 1.51 6.627 0 12-5.373 12-12S18.627 0 12 0zm5.028 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.134.297-.347.446-.52.149-.174.297-.298.497-.44.197-.142.349-.247.499-.34.15-.093.297-.297.347-.497.049-.198.099-.398-.099-.696-.197-.297-.889-.747-1.214-.998-.324-.251-.628-.374-.889-.374-.26 0-.492.074-.691.223-.198.149-1.04.647-1.04 1.578 0 .93.671 1.825 1.566 2.723.895.898 2.015 1.413 3.36 1.413.879 0 1.482-.248 2.127-.742.644-.495 1.04-.992 1.188-1.34.149-.347.149-.645.025-.744z"
              />
            </svg>
          </div>
          <div className="absolute -bottom-0.5 -right-0.5 bg-white text-emerald-600 text-xs rounded-full px-2 py-0.5 font-semibold shadow-md whitespace-nowrap">
            Contact
          </div>
        </div>
      </a>
    </footer>
  );
}