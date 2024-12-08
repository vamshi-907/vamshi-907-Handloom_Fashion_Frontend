import React from 'react'
import Customernavbar from './Customernavbar';
import './Customersupport.css';

export default function Customersupport() {
  return (
    <div className="support-container">
      <Customernavbar/>
    <iframe 
      src="https://forms.visme.co/formsPlayer/mx0q16p3-client-contact-form"
      className="support-form"
      title="Support Contact Form"
    ></iframe>
  </div>
  )
}
