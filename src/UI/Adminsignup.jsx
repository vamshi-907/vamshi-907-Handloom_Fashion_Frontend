import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure this import is added
import './Adminsignup.css'; 

export default function Adminsignup() {
    const [admin, setAdmin] = useState({
        username: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    // Validation functions
    const validateUsername = (username) => /^[a-zA-Z0-9]{6,}$/.test(username); // at least 6 characters
    const validatePassword = (password) =>
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password); // 8 characters, 1 uppercase, 1 number, 1 special character

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Perform validations
        if (!validateUsername(admin.username)) {
            toast.error("Username must be at least 6 characters long and can only contain letters and numbers.");
            setLoading(false);
            return;
        }

        if (!validatePassword(admin.password)) {
            toast.error("Password must be at least 8 characters long, contain 1 uppercase letter, 1 number, and 1 special character.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:2004/admin/signup",
                admin,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true, 
                }
            );
            if (response.status === 200) {
                toast.success("Signup successful! Redirecting to login...");
                setTimeout(() => navigate('/adminlogin'), 2000);
            }
        } catch (error) {
            if (error.response) {
                console.error("Response Error:", error.response.data);
                toast.error("Signup failed: " + error.response.data.message);
            } else if (error.request) {
                console.error("Request Error:", error.request);
                toast.error("Signup failed: No response from server.");
            } else {
                console.error("Error:", error.message);
                toast.error("Signup failed: " + error.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="adminSignup-container">
            <div className="container">
                <h3>Admin Signup</h3>
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="label">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={admin.username}
                        onChange={handleChange}
                        className="input"
                        required
                    />

                    <label className="label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={admin.password}
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
                                setAdmin({
                                    username: "",
                                    password: ""
                                })
                            }
                        >
                            Clear
                        </button>
                    </div>
                </form>
                <p className="redirect-message">
                    Already have an account? <Link to="/adminlogin">Login here</Link>
                </p>
            </div>
            <ToastContainer /> {/* Make sure ToastContainer is included */}
        </div>
    );
}
