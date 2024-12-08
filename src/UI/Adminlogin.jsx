import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure Toastify CSS is included
import './Adminlogin.css';

export default function Adminlogin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input change for username and password
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    // Validate username (at least 6 characters long)
    const validateUsername = (username) => /^[a-zA-Z0-9]{6,}$/.test(username);

    // Validate password (minimum 8 characters, including uppercase, number, and special character)
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validation checks
        if (!validateUsername(credentials.username)) {
            toast.error("Username must be at least 6 characters long and contain only letters and numbers.");
            setLoading(false);
            return;
        }

        if (!validatePassword(credentials.password)) {
            toast.error("Password must be at least 8 characters long, with 1 uppercase letter, 1 number, and 1 special character.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("http://localhost:2004/admin/login", credentials);
            if (response.status === 200) {
                toast.success("Login successful!");
                localStorage.setItem("adminUsername", credentials.username);
                setTimeout(() => navigate('/adminhome'), 2000); // Redirect after a short delay
            }
        } catch (error) {
            toast.error("Login failed: " + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="adminlogin-container">
            <div className="login-container">
                <h3>Admin Login</h3>
                <form onSubmit={handleLogin} className="form-container">
                    <label className="label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                    <button type="submit" className="button submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="redirect-message">
                    Not an admin? <Link to="/adminsignup">Sign up here</Link>
                </p>
                <ToastContainer /> {/* Ensure ToastContainer is included to show toast messages */}
            </div>
        </div>
    );
}
