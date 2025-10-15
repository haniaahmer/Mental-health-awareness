import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.js';

// Detailed collaborators data
const collaborators = [
  {
    name: "Dr. Simin Jafri ",
    role: "FOUNDER OF SMILE BY SIMIN JAFRI",
    details: "  She holds a PhD in Clinical Psychology. She is the founder of Smile by Simin Jafri. Her organization is dedicated to the mental, emotional, and educational well-being of children and families since 2019.Together, ILM x Smile by Simin Jafri aim to promote holistic healing and mental health awareness across Pakistan.",

    color: "from-blue-500 to-blue-600"
  },
  {
    name: "MS. UZMA KHALIL",
    role: "PHD SCHOLAR | EDUCATIONIST | EARLY YEARS & WELL-BEING SPECIALIST",
    details: "With 18 years of experience in early childhood education, Ms. Uzma has served at leading institutions like The City School, Beaconhouse, and LGS. Currently the Academic Coordinator (Preschool) in a renowned Sargodha institution, her PhD focuses on empowering teachers to support children with ADHD in inclusive classrooms. A passionate advocate of teacher wellness and mindful learning, she continues to nurture empathy, balance, and holistic growth in education.",
  
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "MR. MUHAMMAD MUNTAHA ZAHID",
    role: "PSYCHOLOGIST|EDUCATIONIST|MENTAL HEALTH ADVOCATE",
    details: "With extensive experience in clinical psychology, education, and research, Mr. Muntaha has worked with leading institutions such as Cantonment General Hospital and Muhammadfin Fit Coaching Center. His expertise lies in psychological assessment, treatment planning, and mental health advocacy. A dedicated professional promoting empathy and mindful well-being, he continues to empower individuals through awareness, care, and resilience",
  
    color: "from-green-500 to-green-600"
  },
];

export default function SingleCollaborators() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-green-50 to-white px-6">
      <h3 className={`text-4xl md:text-5xl font-bold text-green-700 mb-16 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        Featured Collaborators 💚
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {collaborators.map((collab, i) => (
          <div
            key={i}
            className={`bg-white shadow-2xl rounded-3xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer border-t-4 border-green-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{
              transitionDelay: `${i * 200}ms`,
              animation: isVisible ? `cardFloat 3s ease-in-out ${i * 0.5}s infinite` : 'none'
            }}
          >
            <div className="flex items-center mb-4">
              
              <div>
                <h4 className="text-xl font-bold text-green-800">{collab.name}</h4>
                <p className="text-green-600 font-semibold">{collab.role}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{collab.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}