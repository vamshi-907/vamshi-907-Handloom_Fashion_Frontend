import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Addcart.css';
import Customernavbar from './Customernavbar';

export default function Addcart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();  // Use navigate to redirect to the payment page

  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantityChange = (itemId, operation) => {
    setQuantities((prevQuantities) => {
      const newQuantity =
        operation === 'increase'
          ? Math.min(prevQuantities[itemId] + 1, 6)
          : Math.max(prevQuantities[itemId] - 1, 1);
      return { ...prevQuantities, [itemId]: newQuantity };
    });
  };

  const totalCost = cartItems.reduce(
    (total, item) => total + item.cost * (quantities[item.id] || 1),
    0
  );

  const handleBuyNow = () => {
    // Redirect to the payment page
    navigate('/payment');
  };

  return (
    <div>
      <Customernavbar />
      <div className="add-cart-container-wrapper">
        <div className="add-cart-container">
          <h2>Cart</h2>
          <div className="cart-items">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div className="cart-item-card" key={item.id}>
                  <img src={item.imageUrl} alt={item.name} className="product-image" />
                  <div className="product-details">
                    <h3>{item.name}</h3>
                    <p className="price">₹{item.cost * (quantities[item.id] || 1)}</p>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < item.rating ? 'filled' : ''}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <div className="key-features">
                      <h4>Key Features</h4>
                      <ul>
                        {item.features.split(',').map((feature, index) => (
                          <li key={index}>{feature.trim()}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, 'decrease')}
                      >
                        -
                      </button>
                      <span className="quantity">{quantities[item.id]}</span>
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(item.id, 'increase')}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="remove-from-cart-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>

          {cartItems.length > 0 && (
            <>
              <div className="total-cost">
                <h3>Total Cost: ₹{totalCost}</h3>
              </div>
              <button className="buy-now-btn" onClick={handleBuyNow}>
                Buy Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
