import React from 'react';
import Hero from '../../components/Hero';
import Companies from '../../components/HomeCompanies';
export default function HomePage() {
  return (
    <div>
      <div className="container mx-auto">
        <Hero />
        <Companies />
      </div>
    </div>
  )
}