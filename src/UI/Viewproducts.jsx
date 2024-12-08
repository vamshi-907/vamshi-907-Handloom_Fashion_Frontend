import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Viewproducts.css';
import Artisannavbar from './Artsiannavbar';

export default function Viewproducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:2004/product/view'); // Adjust endpoint if needed
        setProducts(response.data); // Assuming response.data is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Error fetching products');
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Artisannavbar />
      {/* Wrapper for background and centering content */}
      <div className="view-products-container-wrapper">
        <div className="view-products-container">
          <h2>Product List</h2>
          <div className="products-grid">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div className="product-card" key={index}>
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
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
