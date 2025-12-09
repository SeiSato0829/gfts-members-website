import React from 'react';
import { motion } from 'framer-motion';
import { INSTRUCTORS } from '../constants';

const instructorImages = [
  "https://images.pexels.com/photos/4100670/pexels-photo-4100670.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=800"
];

export const Instructors: React.FC = () => {
  const motionProps = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.8, ease: 'easeOut', delay },
  });

  return (
    <section id="instructors" className="py-24 bg-brand-gray">
      <div className="container mx-auto px-4 lg:px-12">
        <motion.div className="text-center mb-12" {...motionProps()}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">
            {INSTRUCTORS.title}
          </h2>
          <p className="text-lg text-gray-600 mt-4">{INSTRUCTORS.subtitle}</p>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.p 
          className="max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed mb-16"
          {...motionProps(0.2)}
        >
          {INSTRUCTORS.description}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {INSTRUCTORS.profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              className="flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-md"
              {...motionProps(0.4 + index * 0.2)}
            >
              <img
                src={instructorImages[index]}
                alt={profile.name}
                className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl font-bold text-brand-dark">{profile.name}</h3>
              <p className="text-brand-blue font-semibold mb-4">{profile.role}</p>
              <p className="text-gray-600 text-sm mb-4">{profile.bio}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {profile.specialties.map(spec => (
                  <span key={spec} className="bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
