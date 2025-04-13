
import React from 'react';
import Button from './Button';

const AboutSection = () => {
  return (
    <section className="bg-white section-padding" id="about-us">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-full">
              <img 
                src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" 
                alt="About Attorna Law Firm" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 hidden lg:block">
              <div className="bg-attorna-gold p-6 text-white">
                <p className="text-3xl font-playfair font-bold">25+</p>
                <p className="uppercase tracking-wider text-sm">Years Experience</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="flex flex-col justify-center">
            <div className="section-subheading">About Our Firm</div>
            <h2 className="section-heading">We Have 25 Years Experience In Law Success</h2>
            
            <p className="text-gray-700 mb-6">
              Founded in 1995, Attorna has grown to become one of Boston's most respected law firms. 
              Our attorneys bring decades of combined experience across a wide range of practice areas.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="text-attorna-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Expert Attorneys</h3>
                  <p className="text-gray-700">Our team consists of highly qualified lawyers with specialized expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-attorna-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">High Success Rate</h3>
                  <p className="text-gray-700">We have consistently delivered favorable outcomes for our clients.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-attorna-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Client Focused</h3>
                  <p className="text-gray-700">We prioritize our clients' needs and provide personalized attention.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-attorna-gold mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Affordable Fees</h3>
                  <p className="text-gray-700">We offer transparent and competitive pricing for our services.</p>
                </div>
              </div>
            </div>
            
            <Button href="#services">Explore Our Services</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
