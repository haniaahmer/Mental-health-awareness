import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import alkhidmat from '../assets/al_khidmat.jpeg';
import ksktlogo from '../assets/ksktlogo.jpeg';
import FEWYAlogo from '../assets/FEWYA.jpeg';
import shaheenlogo from '../assets/shaheen.jpeg';
import mindbloomlogo from '../assets/MINDBLOOM.jpeg';
import Peakperformersociety from '../assets/PPFLOGO.jpeg';
import Roohulquran from '../assets/RUQlogo.jpeg';
import StudentSocietyForum from '../assets/SSF.jpeg';
import PunjabLiterarySociety from '../assets/PLSLOGO.jpeg';
import LearningHubwithAreebaSarwar from '../assets/LearningHUBlogo.jpeg';
import HopeHealingCenter from '../assets/HHCLOGO.jpeg';
import SocialPassionSociety from '../assets/spslogo.jpeg';
import AlIlmLearningSitePvtLtd from '../assets/alilmlogo.jpeg';
import LearnifyHub from '../assets/LEARNIFYHUBLOGO.jpeg';
import MustaqbilFoundation from '../assets/MFlogo.jpeg';
import MindSpectrum from '../assets/mswslogo.jpeg';
import ThePHYSC from '../assets/physc_logo.jpeg';
import PHYSCOLOGICALHEALTHWELLBEINGSOCIETY from '../assets/PHYSCHEALTHLOGO.jpeg';
import SkillsStudio from '../assets/sklogo.jpeg';
import TheParentingReset from '../assets/TPRlogo.jpeg';
import TheYouthDevelopmentFoundation from '../assets/ydf logo.jpeg';
import ZohaAjmalMentalHealthConsultant from '../assets/ZALOGO.jpeg';

// Logos data
const logos = [
  { src: alkhidmat, alt: 'Al Khidmat Foundation' },
  { src: ksktlogo, alt: 'khud se khuda tak academy' },
  { src: FEWYAlogo, alt: 'Federal Empowerment for Youth and Women Alliance' },
  { src: shaheenlogo, alt: 'IGP Educational Services Private Limited' },
  { src: mindbloomlogo, alt: 'Mind Bloom Insights' },
  { src: Peakperformersociety, alt: 'Peak Performer Society' },
  { src: Roohulquran, alt: 'Rooh ul Quran Academy' },
  { src: StudentSocietyForum, alt: 'Student Societies Forum' },
  { src: PunjabLiterarySociety, alt: 'Punjab Literary Society' },
  { src: LearningHubwithAreebaSarwar, alt: 'Learning Hub with Areeba Sarwar' },
  { src: HopeHealingCenter, alt: 'Hope Healing Center' },
  { src: SocialPassionSociety, alt: 'Social Passion Society' },
  { src: AlIlmLearningSitePvtLtd, alt: 'Al-Ilm Learning Site Pvt Ltd' },
  { src: LearnifyHub, alt: 'Learnify Hub' },
  { src: MustaqbilFoundation, alt: 'Mustaqbil Foundation' },
  { src: MindSpectrum, alt: 'Mind Spectrum' },
  { src: ThePHYSC, alt: 'The PHYSC' },
  { src: PHYSCOLOGICALHEALTHWELLBEINGSOCIETY, alt: 'PHYSCOLOGICAL HEALTH & WELLBEING SOCIETY' },
  { src: SkillsStudio, alt: 'Skills Studio Online Academy' },
  { src: TheParentingReset, alt: 'The Parenting Reset' },
  { src: TheYouthDevelopmentFoundation, alt: 'The Youth Development Foundation' },
  { src: ZohaAjmalMentalHealthConsultant, alt: 'Zoha Ajmal Mental Health Consultant' },
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
      <div className="flex flex-col items-center">
        {/* Prominent First Logo */}
        <div
          className={`w-40 h-40 md:w-40 md:h-40  shadow-2xl border-4 border-green-400 flex items-center justify-center overflow-hidden transform hover:scale-110 transition-all duration-500 mb-12 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <img
            src={logos[0].src}
            alt={logos[0].alt}
            className="w-full h-full object-cover"
            title={logos[0].alt}
          />
        </div>
        {/* Other Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 overflow-x-auto pb-4">
          {logos.slice(1).map((logo, i) => (
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
                title={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}