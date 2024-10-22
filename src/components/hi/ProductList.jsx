import React from 'react'
import './ProductList.css'

const ProductList = ({ cartItems, setCartItems }) => {
  const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
  ];

  const handleAddToCart = (product) => {
      const existingItem = cartItems.find(item => item.id === product.id);
      if (existingItem) {
          setCartItems(cartItems.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
      } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
  };

// function ProductList() {
  return (
    <>
    
    <div className='prod'>
            
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
    
  )
}

export default ProductList
