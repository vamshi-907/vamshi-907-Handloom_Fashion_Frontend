import React, { useEffect, useState } from 'react';
import './Adminnavbar.css'; // Importing the admin navbar CSS
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaUserCog, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Adminnavbar() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username from localStorage
    }
  }, []);

  return (
    <div className="admin-navbar-container">
      <div className="admin-project-name">Handloom Fashion</div>

      <div className="admin-nav-links">
        <Link to="/adminhome">
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/viewcustomers">
          <FaUsers className="nav-icon" /> View Customer Details
        </Link>
        <Link to="/viewartisan">
          <FaUserCog className="nav-icon" /> View Artisan Details
        </Link>
        <Link to="/aboutus">
          <FaInfoCircle className="nav-icon" /> About Us
        </Link>
      </div>

      <div className="admin-auth-buttons">
        {username ? (
          <span className="username-display">Welcome, {username}</span>
        ) : (
          <span className="username-display">Welcome, Guest</span>
        )}
        <Link to="/">
          <button className="admin-userprofile-btn">
            <FaSignOutAlt className="nav-icon" /> Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}
