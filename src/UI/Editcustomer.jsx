import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Editcustomer.css';
import Adminnavbar from './Adminnavbar';

export default function Editcustomer() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    username: '',
    email: '',
    password: '',
    mobile: ''
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:2004/customer/view'); // Update with correct endpoint
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
        alert('Error fetching customers');
      }
    };
    fetchCustomers();
  }, []);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
    setUpdatedCustomer({
      username: customer.username,
      email: customer.email,
      password: customer.password,
      mobile: customer.mobile
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2004/customer/update/${selectedCustomer.username}`,
        updatedCustomer
      );
      alert(response.data);
      setSelectedCustomer(null); // Close the update form
      setUpdatedCustomer({
        username: '',
        email: '',
        password: '',
        mobile: ''
      });
      window.location.reload(); // Reload the page to fetch updated customer list
    } catch (error) {
      console.error('Error updating customer:', error);
      alert('Error updating customer');
    }
  };

  const handleDelete = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:2004/customer/delete/${username}`);
      alert(response.data);
      window.location.reload(); // Reload the page to reflect the deletion
    } catch (error) {
      console.error('Error deleting customer:', error);
      alert('Error deleting customer');
    }
  };

  return (
    <div>
      <Adminnavbar />
      {/* Wrapper for background and centering content */}
      <div className="edit-customer-container-wrapper">
        <div className="edit-customer-container">
          <h2>Customer List</h2>
          <div className="customers-grid">
            {customers.length > 0 ? (
              customers.map((customer) => (
                <div className="customer-card" key={customer.username}>
                  <h3>{customer.username}</h3>
                  <p>Email: {customer.email}</p>
                  <p>Mobile: {customer.mobile}</p>

                  <div className="customer-actions">
                    <button onClick={() => handleEdit(customer)}>Update</button>
                    <button onClick={() => handleDelete(customer.username)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No customers available.</p>
            )}
          </div>

          {/* Update Customer Form */}
          {selectedCustomer && (
            <div className="update-form">
              <h3>Update Customer</h3>
              <form>
                <label>Username</label>
                <input
                  type="text"
                  value={updatedCustomer.username}
                  disabled
                />

                <label>Email</label>
                <input
                  type="email"
                  value={updatedCustomer.email}
                  onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, email: e.target.value })}
                />
                <label>Password</label>
                <input
                  type="password"
                  value={updatedCustomer.password}
                  onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, password: e.target.value })}
                />
                <label>Mobile</label>
                <input
                  type="text"
                  value={updatedCustomer.mobile}
                  onChange={(e) => setUpdatedCustomer({ ...updatedCustomer, mobile: e.target.value })}
                />
                <button type="button" onClick={handleUpdate}>Update Customer</button>
                <button type="button" onClick={() => setSelectedCustomer(null)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
