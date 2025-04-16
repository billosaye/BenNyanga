import React from 'react';
import { Scale, Home, Briefcase, Building, HeartPulse, Car } from 'lucide-react';

const PracticeAreas = () => {
  return (
    <section className="bg-attorna-dark section-padding" id="services">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="section-subheading">Our Expertise</p>
          <h2 className="section-heading text-white">Our Practice Areas</h2>
        </div>
        
        {/* Practice areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PracticeCard 
            icon={<Scale className="h-10 w-10" />}
            title="Family Law"
            description="We handle divorces, child custody and support, adoptions, and all domestic matters with compassion and expertise."
          />
          
          <PracticeCard 
            icon={<Briefcase className="h-10 w-10" />}
            title="Business Law"
            description="From startups to established corporations, we provide comprehensive legal services for all business needs."
          />
          
          <PracticeCard 
            icon={<Home className="h-10 w-10" />}
            title="Real Estate Law"
            description="Our attorneys can assist with property transactions, landlord-tenant disputes, and zoning matters."
          />
          
          <PracticeCard 
            icon={<Building className="h-10 w-10" />}
            title="Corporate Law"
            description="We offer strategic advice on corporate governance, mergers and acquisitions, and regulatory compliance."
          />
          
          <PracticeCard 
            icon={<HeartPulse className="h-10 w-10" />}
            title="Medical Malpractice"
            description="Get the compensation you deserve for injuries caused by medical negligence or errors."
          />
          
          <PracticeCard 
            icon={<Car className="h-10 w-10" />}
            title="Personal Injury"
            description="If you've been injured due to someone else's negligence, our team will fight for your rights."
          />
        </div>
      </div>
    </section>
  );
};

const PracticeCard = ({ icon, title, description }) => {
  return (
    <div className="bg-attorna-darker p-8 group transition-transform hover:-translate-y-2 duration-300">
      <div className="text-attorna-gold mb-6 transition-transform group-hover:scale-110 duration-300">
        {icon}
      </div>
      <h3 className="text-white text-xl font-playfair font-bold mb-4">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default PracticeAreas;
