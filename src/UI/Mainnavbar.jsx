import React from 'react';
import './Mainnavbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUserCircle, FaUserPlus, FaHeadset, FaUserTie, FaSignInAlt, FaShoppingBag } from 'react-icons/fa';

export default function Mainnavbar() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/customerlogin'); 
  };

  const handleSignupClick = () => {
    navigate('/customersignup'); 
  };

  return (
    <div className="navbar-container">
      <div className="project-name">Handloom Fashion</div>
      <div className="nav-links">
        <Link to="/"><FaHome /> Home</Link>
        <Link to="/customerlogin"><FaShoppingBag /> Buy Products</Link>
        <Link to="/support"><FaHeadset /> Support</Link>
        <Link to="/customerlogin"><FaShoppingCart /> Cart</Link>
        <Link to="/artisansignup"><FaUserTie /> Become Weave Seller</Link>
        <Link to="/adminsignup"><FaSignInAlt /> Admin Login</Link>
      </div>
      <div className="auth-buttons">
        <button className="signup-btn" onClick={handleSignupClick}>
          <FaUserPlus /> Sign Up
        </button>
        <button className="login-btn" onClick={handleLoginClick}>
          <FaSignInAlt /> Log In
        </button> 
      </div>
    </div>
  );
}
