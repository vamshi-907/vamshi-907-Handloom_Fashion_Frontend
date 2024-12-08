import React from 'react';
import './Mainhome.css';
import image1  from '../assets/sare.jpg';
import image2 from '../assets/pashmina_shawl.jpg';
import image3 from '../assets/dupatta.jpg';
import image4 from '../assets/stoles.jpg';
import image5 from '../assets/bags.jpg';
import p1 from '../assets/product1.jpg';
import p2 from '../assets/cushion.jpg';
import p3 from '../assets/shirt.jpeg';
import p4 from '../assets/place-mats.jpg';
import Mainnavbar from './Mainnavbar';

export default function Mainhome() {
  return (
    <div className="main-container">
      <Mainnavbar />
      <div className="search-bar">
        <input type="text" placeholder="Search for handloom products..." />
      </div>

      <div className="categories">
        <h2>Categories</h2>
        <div className="category-items">
          <div className="category-item">
            <img src={image1} alt="Sarees" />
            <span className="category-name">Sarees</span>
          </div>
          <div className="category-item">
            <img src={image2} alt="Shawls" />
            <span className="category-name">Shawls</span>
          </div>
          <div className="category-item">
            <img src={image3} alt="Dupattas" />
            <span className="category-name">Dupattas</span>
          </div>
          <div className="category-item">
            <img src={image4} alt="Stoles" />
            <span className="category-name">Stoles</span>
          </div>
          <div className="category-item">
            <img src={image5} alt="Bags" />
            <span className="category-name">Bags</span>
          </div>
        </div>
      </div>

      <div className="mainhome-container">
        <div className="mainhome-overlay"></div>
        <div className="mainhome-content">
          <h1 className="mainhome-heading">Discover Unique Artisanal Treasures</h1>
          <p className="mainhome-subheading">
            Connect directly with skilled artisans and bring their handcrafted masterpieces to your doorstep.
          </p>
          <div className="mainhome-buttons">
            <button className="mainhome-button">Shop Now</button>
            <button className="mainhome-button">Explore More</button>
          </div>
        </div>
      </div>

      <div className="best-sellers">
        <h2>Best Sellers</h2>
        <div className="product-items">
          <div className="product-card">
            <img src={p1} alt="Product 1" />
            <div className="product-name">Handwoven Silk Saree</div>
            <div className="product-price">₹3,500</div>
            <div className="product-rating">⭐⭐⭐⭐⭐</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={p2} alt="Product 2" />
            <div className="product-name">Handmade Cushion</div>
            <div className="product-price">₹1,200</div>
            <div className="product-rating">⭐⭐⭐⭐</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="specials">
        <h2>Special Offers</h2>
        <div className="product-items">
          <div className="product-card">
            <img src={p3} alt="Product 3" />
            <div className="product-name">Cotton Shirt</div>
            <div className="product-price">₹1,000</div>
            <div className="product-rating">⭐⭐⭐⭐</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src={p4} alt="Product 4" />
            <div className="product-name">Handwoven Place Mats</div>
            <div className="product-price">₹750</div>
            <div className="product-rating">⭐⭐⭐⭐</div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="about">
        <h2>About Us</h2>
        <p>We bring you the finest handloom products, created by skilled artisans. Explore our collection and support sustainable craft.</p>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Handloom Fashion. All rights reserved.</p>
      </footer>
    </div>
  );
}
