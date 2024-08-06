import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ShoppingCartPage.css'; // Include styles, ensure it exists and is properly styled

const ShoppingCartPage = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, totalCost } = useContext(CartContext);

  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} style={{ width: '100px', height: '100px' }} /> {/* Ensure thumbnail URL is from cart context */}
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p>Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>Total Cost: ${totalCost()}</p>
        <button className="continue-shopping-button">Continue Shopping</button>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
