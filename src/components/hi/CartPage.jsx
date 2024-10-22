import React from 'react';
import './CartPage.css'

const CartPage = ({ cartItems, setCartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };


  const handleDecreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);

    setCartItems(updatedCartItems);
  };


  const handleIncreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image1} alt={item.name} style={{ width: '50VW', height: '50VH', marginRight: '10px' , gap:'20REM' ,padding:'3REM' }} />
              <div style={{ flex: 1 }}>
                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
              </div>
              <button onClick={() => handleDecreaseQuantity(item.id)} id='but'> REDUCE</button>
              <button onClick={() => handleIncreaseQuantity(item.id)} id='but'>INCREASE</button>
              <button onClick={() => handleRemoveItem(item.id)} id='but'>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;

