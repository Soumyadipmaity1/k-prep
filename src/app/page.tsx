import React from 'react';
import FeatureSection from "@/components/landingpage/Feature/FeatureSection";
import Team from "@/components/landingpage/Team/team";
import Testimonials from "@/components/landingpage/Testimonial/testinomial";
import { denkOne } from './font';

export default function Home() {
  return (
    <div className={denkOne.className}>
      <FeatureSection />
      <Testimonials />
      <Team />
    </div>
  );
}
