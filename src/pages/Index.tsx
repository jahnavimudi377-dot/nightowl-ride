import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PreBooking from '@/components/PreBooking';
import SafetyFeatures from '@/components/SafetyFeatures';
import UniqueFeatures from '@/components/UniqueFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PreBooking />
      <UniqueFeatures />
      <SafetyFeatures />
    </div>
  );
};

export default Index;
