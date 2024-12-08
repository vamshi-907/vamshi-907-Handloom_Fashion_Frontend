import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Artsiansignup.css';

export default function Artisansignup() {
  const [artisan, setArtisan] = useState({
    username: "",
    email: "",
    password: "",
    mobile: ""
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setArtisan({ ...artisan, [e.target.name]: e.target.value });
  };

  // Validation functions
  const validateUsername = (username) => /^(?=.*\d)[a-zA-Z\d]{8,}$/.test(username);
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Perform validations
    if (!validateUsername(artisan.username)) {
      toast.error("Username must be at least 8 characters long and contain at least 1 number.");
      setLoading(false);
      return;
    }

    if (!validateEmail(artisan.email)) {
      toast.error("Please enter a valid email address with '@'.");
      setLoading(false);
      return;
    }

    if (!validatePassword(artisan.password)) {
      toast.error("Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number.");
      setLoading(false);
      return;
    }

    if (!validateMobile(artisan.mobile)) {
      toast.error("Mobile number must be exactly 10 digits.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:2004/artsian/signup",
        artisan,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        toast.success("Signup successful! Redirecting to login...");
        setTimeout(() => navigate('/artsianlogin'), 2000);
      }
    } catch (error) {
      toast.error("Signup failed: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="artsianSignup-container">
      <div className="container">
        <h3>Artisan Signup</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <label className="label">Username</label>
          <input
            type="text"
            name="username"
            value={artisan.username}
            onChange={handleChange}
            className="input"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={artisan.email}
            onChange={handleChange}
            className="input"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            value={artisan.password}
            onChange={handleChange}
            className="input"
            required
          />

          <label className="label">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={artisan.mobile}
            onChange={handleChange}
            className="input"
            required
          />

          <div className="button-container">
            <button type="submit" className="button submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </button>
            <button
              type="reset"
              className="button clear"
              onClick={() =>
                setArtisan({
                  username: "",
                  email: "",
                  password: "",
                  mobile: ""
                })
              }
            >
              Clear
            </button>
          </div>
        </form>
        <p className="redirect-message">
          Already have an account? <Link to="/artsianlogin">Login here</Link>
        </p>
      </div>
      <ToastContainer /> {/* Ensure ToastContainer is included */}
    </div>
  );
}
