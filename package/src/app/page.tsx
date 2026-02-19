import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Counter from '@/components/Home/Counter'
import Progresswork from '@/components/Home/WorkProgress';
import HowWeWork from '@/components/Home/HowWeWork';
import Services from '@/components/Home/Services';
import ServicesPreview from '@/components/Home/ServicesPreview';
import ProfessionalProfile from '@/components/Home/ProfessionalProfile';
import Portfolio from '@/components/SharedComponent/portfollio'
import Testimonial from '@/components/SharedComponent/Testimonial' 
import Blog from '@/components/SharedComponent/Blog'
import Contactform from '@/components/Home/Contact';
export const metadata: Metadata = {
  title: "Upaya",
};

import PricingPage from './(site)/pricing/page';

export default function Home() {
  return (
    <main>
      <Hero />
      <Counter isColorMode={false} />
      <Progresswork isColorMode={false} />
      <HowWeWork />
      {/* <Services /> */}
      <ServicesPreview />
      <ProfessionalProfile />
      {/* Pricing section above this text */}
      {/* <div className="my-12">
        <PricingPage />
      </div> */} 
      {/* <Portfolio /> */}
      <Testimonial />
      {/* <Blog /> */}
      <Contactform />
    </main>
  )
}
