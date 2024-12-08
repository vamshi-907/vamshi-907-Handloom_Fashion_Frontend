import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Editproducts.css';
import Artisannavbar from './Artsiannavbar';

export default function Editproducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: '',
    cost: '',
    rating: '',
    features: '',
    imageUrl: ''
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2004/product/view');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Error fetching products');
      }
    };
    fetchProducts();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setUpdatedProduct({
      name: product.name,
      cost: product.cost,
      rating: product.rating,
      features: product.features,
      imageUrl: product.imageUrl
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2004/product/update/${selectedProduct.id}`,
        updatedProduct
      );
      alert(response.data);
      setSelectedProduct(null); // Close the update form
      setUpdatedProduct({
        name: '',
        cost: '',
        rating: '',
        features: '',
        imageUrl: ''
      });
      window.location.reload(); // Reload the page to fetch updated product list
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:2004/product/delete/${id}`);
      alert(response.data);
      window.location.reload(); // Reload the page to reflect the deletion
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    }
  };

  return (
    <div>
      <Artisannavbar />
      {/* Wrapper for background and centering content */}
      <div className="edit-products-container-wrapper">
        <div className="edit-products-container">
          <h2>Product List</h2>
          <div className="products-grid">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  <p className="price">₹{product.cost}</p>
                  <div className="rating">
                    {/* Display stars */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < product.rating ? 'filled' : ''}>
                        ⭐
                      </span>
                    ))}
                  </div>

                  {/* Key Features Section */}
                  <div className="key-features">
                    <h4>Key Features</h4>
                    <ul>
                      {product.features.split(',').map((feature, index) => (
                        <li key={index}>{feature.trim()}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="product-actions">
                    <button onClick={() => handleEdit(product)}>Update</button>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>

          {/* Update Product Form */}
          {selectedProduct && (
            <div className="update-form">
              <h3>Update Product</h3>
              <form>
                <label>Name</label>
                <input
                  type="text"
                  value={updatedProduct.name}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                />
                <label>Cost</label>
                <input
                  type="number"
                  value={updatedProduct.cost}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, cost: e.target.value })}
                />
                <label>Rating</label>
                <input
                  type="number"
                  value={updatedProduct.rating}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, rating: e.target.value })}
                  min="1"
                  max="5"
                />
                <label>Features</label>
                <input
                  type="text"
                  value={updatedProduct.features}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, features: e.target.value })}
                />
                <label>Image URL</label>
                <input
                  type="text"
                  value={updatedProduct.imageUrl}
                  onChange={(e) => setUpdatedProduct({ ...updatedProduct, imageUrl: e.target.value })}
                />
                <button type="button" onClick={handleUpdate}>Update Product</button>
                <button type="button" onClick={() => setSelectedProduct(null)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
