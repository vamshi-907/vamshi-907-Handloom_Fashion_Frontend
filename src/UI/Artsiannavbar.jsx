import React, { useEffect, useState } from 'react';
import './Artsiannavbar.css'; // Importing the artisan navbar CSS
import { Link } from 'react-router-dom';
import { FaHome, FaPlusSquare, FaEye, FaEdit, FaHeadset, FaSignOutAlt } from 'react-icons/fa';

export default function Artisannavbar() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username from localStorage
    }
  }, []);

  return (
    <div className="artisan-navbar-container">
      <div className="artisan-project-name">Handloom Fashion</div>
      
      <div className="artisan-nav-links">
        <Link to="/artsianhome">
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/addproducts">
          <FaPlusSquare className="nav-icon" /> Add Products
        </Link>
        <Link to="/viewproducts">
          <FaEye className="nav-icon" /> View Products
        </Link>
        <Link to="/editproducts">
          <FaEdit className="nav-icon" /> Update Products
        </Link>
        <Link to="/artisansupport">
          <FaHeadset className="nav-icon" /> Support
        </Link>
      </div>

      <div className="artisan-auth-buttons">
        {username ? (
          <span className="username-display">Welcome, {username}</span>
        ) : (
          <span className="username-display">Welcome, Guest</span>
        )}
        <Link to="/">
          <button className="artisan-userprofile-btn">
            <FaSignOutAlt className="nav-icon" /> Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}
