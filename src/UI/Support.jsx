import React from 'react';
import Mainnavbar from './Mainnavbar';
import './support.css'; // Import the CSS file

export default function Support() {
  return (
    <div className="support-container">
      <Mainnavbar />
      <iframe 
        src="https://forms.visme.co/formsPlayer/mx0q16p3-client-contact-form"
        className="support-form"
        title="Support Contact Form"
      ></iframe>
    </div>
  );
}
