import React from 'react';
import DavidRay from '../assets/David Ray.jpg';
import Whitney from '../assets/whitney.jpg';
import Natalie from '../assets/Natalie.jpg';
import BenAdul from '../assets/ben adul.jpg';

const TeamSection = () => {
  const attorneys = [
    {
      id: 1,
      name: "Ben Adul",
      position: "Advocate",
      image: BenAdul
    },
    {
      id: 2,
      name: "Natalie",
      position: "Associate",
      image: Natalie
    },
    {
      id: 3,
      name: "Whitney",
      position: "Associate Trainee",
      image: Whitney
    },
    {
      id: 4,
      name: "David Ray",
      position: "Clerk",
      image: DavidRay
    }
  ];

  return (
    <section className="bg-white section-padding" id="team">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="section-subheading">Meet Our Team</p>
          <h2 className="section-heading">Our Expert Attorneys</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our team of experienced attorneys is dedicated to providing exceptional legal services and 
            fighting for the best interests of our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {attorneys.map((attorney) => (
            <AttorneyCard key={attorney.id} attorney={attorney} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AttorneyCard = ({ attorney }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4">
        <img 
          src={attorney.image} 
          alt={attorney.name}
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-attorna-darker bg-opacity-10 group-hover:bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100">
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-playfair font-bold">{attorney.name}</h3>
        <p className="text-attorna-gold mb-2">{attorney.position}</p>
      </div>
    </div>
  );
};

export default TeamSection;
