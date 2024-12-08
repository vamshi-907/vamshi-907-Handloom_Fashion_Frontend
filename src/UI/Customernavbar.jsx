import React, { useEffect, useState } from 'react';
import './Customernavbar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingBag, FaUserFriends, FaShoppingCart, FaHeadset, FaSignOutAlt, FaBox } from 'react-icons/fa';

export default function Customernavbar() {
  const [username, setUsername] = useState("");

  // Retrieve the username from localStorage when the component mounts
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);  // Set the username from localStorage
    }
  }, []);

  return (
    <div className="customer-navbar-container">
      <div className="customer-project-name">Handloom Fashion</div>
      
      <div className="customer-nav-links">
        <Link to="/customerhome">
          <FaHome className="nav-icon" /> Home
        </Link>
        <Link to="/buyproducts">
          <FaShoppingBag className="nav-icon" /> Buy Products
        </Link>
        <Link to="/artisanprofiles">
          <FaUserFriends className="nav-icon" /> Artisan Profiles
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="nav-icon" /> Cart
        </Link>
        <Link to="/customersupport">
          <FaHeadset className="nav-icon" /> Support
        </Link>
        <Link to="/myorders">
          <FaBox className="nav-icon" /> My Orders
        </Link>
      </div>
      
      <div className="customer-auth-buttons">
        {username ? (
          <span className="username-display">Welcome, {username}</span>
        ) : (
          <span className="username-display">Welcome, Guest</span>
        )}
        <Link to="/">
          <button className="customer-userprofile-btn">
            <FaSignOutAlt className="nav-icon" /> Log Out
          </button>
        </Link>
      </div>
    </div>
  );
}
