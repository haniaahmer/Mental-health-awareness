import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import ksktlogo from '../assets/ksktlogo.jpeg';
import FEWYAlogo from '../assets/FEWYA.jpeg';
import shaheenlogo from '../assets/shaheen.jpeg';
import mindbloomlogo from '../assets/MINDBLOOM.jpeg';
import Peakperformersociety from '../assets/PPFLOGO.jpeg';
import Roohulquran from '../assets/RUQLOGO.jpeg';
import   StudentSocietyForum from '../assets/SSF.jpeg';
import PunjabLiterarySociety from '../assets/PLSLOGO.jpeg';
import LearningHubwithAreebaSarwar from '../assets/LearningHUB.jpeg';
import HopeHealingCenter from '../assets/HHCLOGO.jpeg';
import SocialPassionSociety from '../assets/spsLOGO.jpeg';
import AlIlmLearningSitePvtLtd from '../assets/al-ilmlogo.jpeg';
import  LearnifyHub  from '../assets/LEARNIFYHUBLOGO.jpeg';
import  MustaqbilFoundation  from '../assets/MFlogo.jpeg';
import  MindSpectrum  from '../assets/mswslogo.jpeg';
// Logos data
const logos = [
  { src: ksktlogo, alt: 'khud se khuda tak academy' },
  { src: FEWYAlogo, alt: ' Federal Empowerment for Youth and Women Alliance' },
  { src: shaheenlogo, alt: ' IGP Educational Services Private Limited' },
  { src: mindbloomlogo, alt: ' Mind Bloom Insights' },
  { src: Peakperformersociety, alt: ' Peak Performer Society' },
  { src: Roohulquran, alt: ' Rooh ul Quran Academy' },
  { src: StudentSocietyForum, alt: ' Student Societies Forum' },
  { src: PunjabLiterarySociety, alt: ' Punjab Literary Society' },
  { src: LearningHubwithAreebaSarwar, alt: ' Learning Hub with Areeba Sarwar' },
  { src: HopeHealingCenter, alt: ' Hope Healing Center' },
  { src: SocialPassionSociety, alt: ' Social Passion Society' },
  { src: AlIlmLearningSitePvtLtd, alt: ' Al-Ilm Learning Site Pvt Ltd' },
  { src: LearnifyHub, alt: ' Learnify Hub' },
  { src: MustaqbilFoundation, alt: ' Mustaqbil Foundation' },
  { src: MindSpectrum, alt: ' Mind Spectrum' }
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