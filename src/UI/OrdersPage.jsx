import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrdersPage.css';
import Customernavbar from './Customernavbar';

export default function OrdersPage() {
  const location = useLocation();
  const { orderStatus, paymentStatus, orderId, totalCost, cartItems } = location.state;

  // Define the stages for order lifecycle
  const orderStages = [
    { stage: 'Order Placed', description: 'Your order has been successfully placed.', isCompleted: orderStatus === 'orderPlaced' },
    { stage: 'Shipped', description: 'Your order has been shipped and is on its way.', isCompleted: orderStatus === 'shipped' },
    { stage: 'Out for Delivery', description: 'Your order is out for delivery and will reach you soon.', isCompleted: orderStatus === 'outForDelivery' },
    { stage: 'Delivered', description: 'Your order has been delivered successfully.', isCompleted: orderStatus === 'delivered' },
  ];

  return (
    <div>
        <Customernavbar/>
    <div className="orders-page-container">
      <h2>My Orders</h2>
      <p className="payment-status">
        Your order has been {paymentStatus === 'successful' ? 'successfully' : 'unsuccessfully'} placed and paid for.
      </p>

      <div className="order-summary">
        <h4>Order Details</h4>
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Total Cost:</strong> ₹{totalCost}</p>

        <div className="product-list">
          {cartItems.map((item) => (
            <div key={item.id} className="product-summary-card">
              <img src={item.imageUrl} alt={item.name} className="product-image" />
              <div className="product-details">
                <h4>{item.name}</h4>
                <p className="product-price">₹{item.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-roadmap">
        <h4>Order Status</h4>
        <div className="order-stages">
          {orderStages.map((stage, index) => (
            <div key={index} className={`order-stage ${stage.isCompleted ? 'completed' : ''}`}>
              <div className="stage-circle"></div>
              <div className="stage-content">
                <h5>{stage.stage}</h5>
                <p>{stage.description}</p>
              </div>
              {index < orderStages.length - 1 && <div className="line-connector"></div>}
            </div>
          ))}
        </div>
      </div>

      <button className="back-button" onClick={() => window.location.href = '/customerhome'}>Back to Home</button>
    </div>
    </div>
  );
}
