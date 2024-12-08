import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditArtisan.css';
import Adminnavbar from './Adminnavbar';

export default function Editartisan() {
  const [artisans, setArtisans] = useState([]);
  const [selectedArtisan, setSelectedArtisan] = useState(null);
  const [updatedArtisan, setUpdatedArtisan] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const fetchArtisans = async () => {
      try {
        const response = await axios.get('http://localhost:2004/artsian/view'); // Update with correct endpoint
        setArtisans(response.data);
      } catch (error) {
        console.error('Error fetching artisans:', error);
        alert('Error fetching artisans');
      }
    };
    fetchArtisans();
  }, []);

  const handleEdit = (artisan) => {
    setSelectedArtisan(artisan);
    setUpdatedArtisan({
      username: artisan.username,
      name: artisan.name,
      email: artisan.email,
      password: artisan.password
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2004/artsian/update/${selectedArtisan.username}`,
        updatedArtisan
      );
      alert(response.data);
      setSelectedArtisan(null); // Close the update form
      setUpdatedArtisan({
        username: '',
        name: '',
        email: '',
        password: ''
      });
      window.location.reload(); // Reload the page to fetch updated artisan list
    } catch (error) {
      console.error('Error updating artisan:', error);
      alert('Error updating artisan');
    }
  };

  const handleDelete = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:2004/artsian/delete/${username}`);
      alert(response.data);
      window.location.reload(); // Reload the page to reflect the deletion
    } catch (error) {
      console.error('Error deleting artisan:', error);
      alert('Error deleting artisan');
    }
  };

  return (
    <div>
        <Adminnavbar/>
      {/* Wrapper for background and centering content */}
      <div className="edit-artisan-container-wrapper">
        <div className="edit-artisan-container">
          <h2>Artisan List</h2>
          <div className="artisans-grid">
            {artisans.length > 0 ? (
              artisans.map((artisan) => (
                <div className="artisan-card" key={artisan.username}>
                  <h3>{artisan.name}</h3>
                  
                  <p>username: {artisan.username}</p>
                  <p>Email: {artisan.email}</p>
               

                  <div className="artisan-actions">
                    <button onClick={() => handleEdit(artisan)}>Update</button>
                    <button onClick={() => handleDelete(artisan.username)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No artisans available.</p>
            )}
          </div>

          {/* Update Artisan Form */}
          {selectedArtisan && (
            <div className="update-form">
              <h3>Update Artisan</h3>
              <form>
                <label>Username</label>
                <input
                  type="text"
                  value={updatedArtisan.username}
                  disabled
                />
              
                <label>Email</label>
                <input
                  type="email"
                  value={updatedArtisan.email}
                  onChange={(e) => setUpdatedArtisan({ ...updatedArtisan, email: e.target.value })}
                />
                <label>Password</label>
                <input
                  type="password"
                  value={updatedArtisan.password}
                  onChange={(e) => setUpdatedArtisan({ ...updatedArtisan, password: e.target.value })}
                />
                <button type="button" onClick={handleUpdate}>Update Artisan</button>
                <button type="button" onClick={() => setSelectedArtisan(null)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
