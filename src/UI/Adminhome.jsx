import React, { useState, useEffect } from 'react';
import './Adminhome.css';  // Create a separate CSS file for ArtisanHome
import Adminnavbar from './Adminnavbar';

export default function Artisanhome() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  // Set the username from localStorage
    }
  }, []);

  return (
    <div className="admin-home-container">
      <Adminnavbar/>
      <div className="admin-home-content">
        <h1 className="admin-home-title">Welcome to Handloom Fashion, {username}</h1>
        <p className="admin-home-description">
          You are now logged in as an admin. Start selling your handmade products and showcase your talent to the world!
        </p>
        <div className="admin-home-action-buttons">
          <button className="admin-home-button">View our bussniess </button>
        </div>
      </div>
    </div>
  );
}
