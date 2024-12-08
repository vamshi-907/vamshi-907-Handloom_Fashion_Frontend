import React from 'react';
import './AboutUs.css';
import Adminnavbar from './Adminnavbar';

export default function AboutUs() {
  return (
    <div>
        <Adminnavbar/>
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h1 className="aboutus-title">About Handloom Fashion</h1>
        <p className="aboutus-description">
          Handloom Fashion is a revolutionary initiative that brings traditional Indian handlooms to the global stage, blending age-old techniques with modern fashion trends. Our mission is to empower artisans, support sustainable fashion, and provide you with exquisite handwoven garments that tell a story.
        </p>
        
        <h2 className="aboutus-subtitle">Our Mission</h2>
        <p className="aboutus-description">
          We aim to promote the rich cultural heritage of India by supporting artisans and weavers across rural communities. By showcasing handwoven fabrics, we want to help preserve the art of handloom weaving and make these timeless creations accessible to a global audience.
        </p>

        <h2 className="aboutus-subtitle">Our Vision</h2>
        <p className="aboutus-description">
          Our vision is to create a sustainable fashion ecosystem where handloom fabrics are not just a fashion statement but a symbol of craftsmanship, heritage, and sustainability. We are committed to empowering local artisans, promoting fair trade, and making handloom fashion a part of your everyday wardrobe.
        </p>

        <h2 className="aboutus-subtitle">Why Choose Us?</h2>
        <ul className="aboutus-list">
          <li>Ethical Sourcing: We work directly with artisans, ensuring fair wages and good working conditions.</li>
          <li>Eco-Friendly Materials: Our fabrics are made with natural fibers, reducing the impact on the environment.</li>
          <li>Quality Craftsmanship: Every piece is meticulously handwoven by skilled artisans.</li>
          <li>Global Impact: By purchasing from us, you are helping to support rural communities and sustain traditional handloom practices.</li>
        </ul>

        <div className="aboutus-action">
          <button className="aboutus-button">Shop Handloom Fashion</button>
        </div>
      </div>
    </div>
    </div>
  );
}
