import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Assuming CartContext is used to manage cart data
import './PaymentPage.css'; // Ensure the styles are properly applied

export default function PaymentPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardDetails, setCardDetails] = useState({ cardNumber: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const [bank, setBank] = useState('');
  
  const totalCost = cartItems.reduce((total, item) => total + item.cost * 1, 0);

  const handlePayment = () => {
    // Simulate payment success and navigate with the cart details
    setTimeout(() => {
      navigate('/myorders', {
        state: {
          orderStatus: 'orderPlaced',
          paymentStatus: 'successful',
          orderId: '12345', // Example Order ID
          totalCost: totalCost,
          cartItems: cartItems, // Passing the cart items (product details)
        },
      });
    }, 2000); // Simulate a delay before redirecting
  };

  return (
    <div className="payment-container-wrapper">
      <div className="payment-container">
        <h2>Complete Your Payment</h2>

        <div className="product-summary">
          {cartItems.map((item) => (
            <div className="product-summary-card" key={item.id}>
              <img
                src={item.imageUrl}
                alt={item.name}
                className="payment-product-image"
              />
              <div className="payment-product-details">
                <h4>{item.name}</h4>
                <p className="payment-price">₹{item.cost}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="payment-total-cost">Total Cost: ₹{totalCost}</div>

        <div className="payment-method">
          <h4>Select Payment Method</h4>
          <div className="payment-method-options">
            {/* Payment method radio buttons */}
            <div>
              <input
                type="radio"
                id="creditCard"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={() => setPaymentMethod('creditCard')}
              />
              <label htmlFor="creditCard">
                <i className="fas fa-credit-card"></i> Credit Card
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="debitCard"
                value="debitCard"
                checked={paymentMethod === 'debitCard'}
                onChange={() => setPaymentMethod('debitCard')}
              />
              <label htmlFor="debitCard">
                <i className="fas fa-credit-card"></i> Debit Card
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="netBanking"
                value="netBanking"
                checked={paymentMethod === 'netBanking'}
                onChange={() => setPaymentMethod('netBanking')}
              />
              <label htmlFor="netBanking">
                <i className="fas fa-university"></i> Net Banking
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="upi"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              <label htmlFor="upi">
                <i className="fas fa-mobile-alt"></i> UPI
              </label>
            </div>
          </div>
        </div>

        {/* Payment Method Details Form */}
        <div className="payment-details">
          {paymentMethod === 'creditCard' && (
            <div className="card-details">
              <h4>Enter Credit Card Details</h4>
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                maxLength="16"
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                maxLength="5"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                maxLength="3"
              />
            </div>
          )}

          {paymentMethod === 'debitCard' && (
            <div className="card-details">
              <h4>Enter Debit Card Details</h4>
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                maxLength="16"
              />
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                maxLength="5"
              />
              <input
                type="text"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                maxLength="3"
              />
            </div>
          )}

          {paymentMethod === 'upi' && (
            <div className="upi-details">
              <h4>Enter UPI ID</h4>
              <input
                type="text"
                placeholder="Enter UPI ID (e.g., yourname@upi)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === 'netBanking' && (
            <div className="netbanking-details">
              <h4>Select Bank</h4>
              <select value={bank} onChange={(e) => setBank(e.target.value)}>
                <option value="">--Select Bank--</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
              </select>
            </div>
          )}
        </div>

        <button className="pay-now-btn" onClick={handlePayment}>
          Pay ₹{totalCost} Now
        </button>
      </div>
    </div>
  );
}
