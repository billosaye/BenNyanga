
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-attorna-darker bg-opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl text-center md:text-left">
          <p className="text-attorna-gold uppercase tracking-wider mb-4 text-sm md:text-base">Ben Nyanga & Co Advocates</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Providing Exceptional <br/> Legal Solutions
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-xl">
          We make our clients’ goals and challenges our own and strive to create a lasting impact on their business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button href="#consultation" className="w-full sm:w-auto">
              Free Consultation
            </Button>
            <Button href="#about-us" className="w-full sm:w-auto bg-transparent border border-attorna-gold hover:bg-attorna-gold/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
