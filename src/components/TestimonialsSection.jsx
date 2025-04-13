
import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amanda Carter",
      position: "Business Owner",
      quote: "Attorna provided exceptional legal guidance for my business. Their expertise in corporate law saved us from potential legal issues and helped our company grow.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Robert Johnson",
      position: "Construction Manager",
      quote: "After my workplace injury, Attorna's personal injury team fought relentlessly for my rights. They secured a settlement that covered all my medical expenses and lost wages.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Michelle Thompson",
      position: "Real Estate Developer",
      quote: "The real estate attorneys at Attorna are second to none. Their attention to detail during complex property transactions has saved our company both time and money.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding relative bg-attorna-dark">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#quote-pattern)" />
        </svg>
        <defs>
          <pattern id="quote-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <text x="5" y="15" fontSize="20" fill="#ffffff10">❝</text>
          </pattern>
        </defs>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="section-subheading">Testimonials</p>
          <h2 className="section-heading text-white">What Our Clients Say</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-attorna-gold p-1">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <blockquote className="text-white text-xl md:text-2xl font-playfair italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-attorna-gold font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-white/70">{testimonial.position}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-attorna-gold text-white p-2 rounded-full hover:bg-opacity-90"
            onClick={prevSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-attorna-gold text-white p-2 rounded-full hover:bg-opacity-90"
            onClick={nextSlide}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-attorna-gold' : 'bg-white/30'}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
