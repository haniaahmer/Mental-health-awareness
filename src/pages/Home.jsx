import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import AwarenessSection from '../components/AwarenessSection.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactSection from '../components/ContactForm.jsx';
import CollaborativeOrganizations from '../components/CollaborativeOrganizations.jsx';
import SingleCollaborators from '../components/SingleCollaborators.jsx';
import Footer from '../components/Footer.jsx';

export default function App() {
  return (
    <div className="font-sans">
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes cardFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out 3s infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
          opacity: 0;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AwarenessSection />
      <Testimonials />
      <ContactSection />
      <CollaborativeOrganizations/>
        <SingleCollaborators />
      <Footer />
    </div>
  );
}

