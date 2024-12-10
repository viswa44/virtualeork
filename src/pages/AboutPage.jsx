import React from 'react';
import TeamSection from '../components/TeamSection';

function AboutPage() {
  return (
    <div className="bg-gray-50">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a large team of specialized professionals dedicated to delivering exceptional results 
              across various fields and disciplines. Our commitment to excellence and innovation drives 
              everything we do.
            </p>
          </div>
        </div>
      </div>
      
      <TeamSection />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our diverse team of experts brings together years of experience and expertise across multiple 
              disciplines. We're committed to delivering high-quality work that meets your specific needs 
              and exceeds your expectations.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Whether you need academic writing, research assistance, programming help, or AI solutions, 
              our specialized team is here to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;