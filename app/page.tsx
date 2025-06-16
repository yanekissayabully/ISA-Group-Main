'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Advantages from '@/components/Advantages';
import ScreensList from '@/components/ScreensList';
import CaseStudies from '@/components/CaseStudies';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PricingPackages from '@/components/PricingPackages';
import YandexMap from '@/components/YandexMap';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="rounded-3xl overflow-hidden">
        <Header />
        <HeroSection />
      </div>

      <Advantages />
      


      <ScreensList />
      <PricingPackages/>
      {/* <CaseStudies /> */}
      <ContactForm />
      <YandexMap/>
      <Footer />
    </div>
  );
}