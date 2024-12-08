import React from 'react';
import './Artisanprofiles.css';
import banarasiImage from '../assets/artisan_banarasi.jpg';
import chanderiImage from '../assets/artisan_chanderi.jpg';
import Customernavbar from './Customernavbar';

export default function Artisanprofiles() {
  return (
    <div>
        <Customernavbar/>
    <div className="artisanprofiles-container">
      <h1 className="page-title">Artisan Profiles</h1>

      <div className="artisan-card">
        <h2 className="artisan-title">Banarasi Silk Sarees Artisan</h2>
        <p className="artisan-description">
          Our skilled artisans from Varanasi craft exquisite Banarasi Silk Sarees with intricate zari work and traditional patterns inspired by Mughal architecture.
        </p>
        <img src={banarasiImage} alt="Banarasi Artisan" className="artisan-image" />
      </div>

      <div className="artisan-card">
        <h2 className="artisan-title">Chanderi Fabric Artisan</h2>
        <p className="artisan-description">
          Artisans from Chanderi, Madhya Pradesh, produce lightweight, sheer fabrics with delicate handwoven motifs that exude elegance and grace.
        </p>
        <img src={chanderiImage} alt="Chanderi Artisan" className="artisan-image" />
      </div>
    </div>
    </div>
  );
}
