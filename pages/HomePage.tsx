import React from 'react';
import { Hero } from '../components/Hero';
import { Problems } from '../components/Problems';
import { Features } from '../components/Features';
import { Flow } from '../components/Flow';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Company } from '../components/Company';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Problems />
      <Features />
      <Flow />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Company />
    </main>
  );
};

export default HomePage;
