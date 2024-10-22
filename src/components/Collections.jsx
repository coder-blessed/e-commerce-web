
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
 import img1 from '../components/assets/YAM - React NextJS E-commerce Template_files/Product1-2(1).jpg';
import img2 from '../components/assets/YAM - React NextJS E-commerce Template_files/Product10-1.jpg';
import img3 from '../components/assets/YAM - React NextJS E-commerce Template_files/Product13-1.jpg';
import img4 from '../components/assets/YAM - React NextJS E-commerce Template_files/Product14-1.jpg';
import img5 from '../components/assets/YAM - React NextJS E-commerce Template_files/Product15-1.jpg';
import img6 from '../components/assets/YAM - React NextJS E-commerce Template_files/Product12-1.jpg';
import './Collections.css'; // Make sure to create this CSS file for styling


const colProducts = [
  { id: 1, name: 'Product 1', price: 10.0, image: img1, description: 'Short description for Product 1' },
  { id: 2, name: 'Product 2', price: 15.0, image: img2, description: 'Short description for Product 2' },
  { id: 3, name: 'Product 3', price: 20.0, image: img3, description: 'Short description for Product 3' },
  { id: 4, name: 'Product 4', price: 25.0, image: img4, description: 'Short description for Product 4' },
  { id: 5, name: 'Product 5', price: 30.0, image: img5, description: 'Short description for Product 5' },
  { id: 6, name: 'Product 6', price: 35.0, image: img6, description: 'Short description for Product 6' },
];


const Collections = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (image) => {
    setZoomedImage(image);
  };

return (
    <>
     <div>
        <h1>Collections</h1>
        <p>get the latest collections.</p>
      </div>

      <div className="collections-grid">
        {colProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              onClick={() => handleImageClick(product.image)}
            />

            <div className="product-info">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <Link to="/BestSeller">See More</Link>
            </div>
          </div>


        ))}
      </div>
      {zoomedImage && (
        <div className="zoomed-image-modal" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    
    </>
 
);
};

export default Collections;
