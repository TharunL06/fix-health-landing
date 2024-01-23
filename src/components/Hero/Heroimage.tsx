import React from 'react';
import "../Hero/Heroimage.css"
import heroimage from "../assets/medical-appointment-doctor-healthcare-40568.jpeg"

const HeroImage: React.FC = () => {
  return (
    <div className="hero-container">
      <img src={heroimage} alt="Hero" />
    </div>
  );
};

export default HeroImage;
