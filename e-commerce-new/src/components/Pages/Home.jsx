import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from './Sidebar';
// import Footer from '../Footer'; 
import './Home.css';
import slide1 from '../assets/yami-mbappe.webp';
import slide2 from '../assets/AdobeStock111.jpeg';
import slide3 from '../assets/AdobeStock222.jpeg';
import img1 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop1.png';
import img2 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop2.png';
import img3 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop3.png';
import img4 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop4.png';
import img5 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop5.png';
import img6 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop6.png';
import logo1 from '../assets/buy-one-get-one.png';
import logo2 from '../assets/discount.png';
import logo3 from '../assets/flash-sale.png';
import logo4 from '../assets/free-delivery.png';
import logo5 from '../assets/gift-shop.png';
import logo6 from '../assets/new-collection.png';
import logo7 from '../assets/partnership.png';
import logo8 from '../assets/shoes111.png';
import logo9 from '../assets/traade-int.png';



import caro1 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-banner17.png';
import log1 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand37.png';
import caro2 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand3.png';
import caro3 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand2.png';
import caro4 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand7.png';
import caro5 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand9.png';
import caro6 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand11.png';
import caro7 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand4.png';
import caro9 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand8.png';
import caro8 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand6.png';
import caro10 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand10.png';
import caro11 from '../assets/YAM - React NextJS E-commerce Template_files/YMShop-home1-brand12.png';


import Electronics from './Electronics';
import HomesAndGardens from './HomesAndGardens'

import ClothingAndShoes from './ClothingAndShoes'
import KitchenUtensils from './KitchenUtensils'
import Furniture from './Furniture'
import LaptopsAndMacBooks from './LaptopAndMacBooks';
import Footer from '../Footer';




const products = [
    { id: 1, name: 'Product 1', price: 10.0, image1: img1, image2: img2 },
    { id: 2, name: 'Product 2', price: 15.0, image1: img3, image2: img4 },
    { id: 3, name: 'Product 3', price: 15.0, image1: img3, image2: img4 },
    { id: 4, name: 'Product 4', price: 15.0, image1: img3, image2: img4 },
    { id: 5, name: 'Product 5', price: 15.0, image1: img3, image2: img4 },
    

    // Add more products as needed
];


const moreProducts = [
    { id: 6, name: 'Product 6', price: 10.0, image1: img1, image2: img2 },
    { id: 7, name: 'Product 8', price: 15.0, image1: img3, image2: img4 },
    { id: 8, name: 'Product 3', price: 15.0, image1: img3, image2: img4 },
    { id: 9, name: 'Product 4', price: 15.0, image1: img3, image2: img4 },
    { id: 10, name: 'Product 5', price: 15.0, image1: img3, image2: img4 },
    
    { id: 11, name: 'Product 6', price: 10.0, image1: img1, image2: img2 },
    { id: 12, name: 'Product 8', price: 15.0, image1: img3, image2: img4 },
    { id: 13, name: 'Product 3', price: 15.0, image1: img3, image2: img4 },
    { id: 14, name: 'Product 4', price: 15.0, image1: img3, image2: img4 },
    { id: 15, name: 'Product 5', price: 15.0, image1: img3, image2: img4 },
    
    { id: 16, name: 'Product 6', price: 10.0, image1: img1, image2: img2 },
    { id: 17, name: 'Product 8', price: 15.0, image1: img3, image2: img4 },
    { id: 18, name: 'Product 3', price: 15.0, image1: img3, image2: img4 },
    { id: 19, name: 'Product 4', price: 15.0, image1: img3, image2: img4 },
    { id: 20, name: 'Product 5', price: 15.0, image1: img3, image2: img4 },
    

    // Add more products as needed
];




const Home = ({ cartItems, handleAddToCart }) => {
    const [index, setIndex] = useState(0);
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentPosition, setCurrentPosition] = useState(0);
    const navigate = useNavigate();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const handleImageClick = () => {
        navigate('/BestSeller');
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const AddToCart = (product) => {
        const updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex(item => item.id === product.id);

        if (itemIndex > -1) {
            updatedCartItems[itemIndex].quantity += 1;
        } else {
            updatedCartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        handleAddToCart(updatedCartItems);
    };



    const logos = [caro1, log1, caro2, caro3, caro4, caro5, caro6, caro7,caro8, caro9, caro10, caro11];

    const handleMoveLeft = () => {
        setCurrentPosition(prevPosition => (prevPosition > 0 ? prevPosition - 1 : logos.length - 1));
    };

    const handleMoveRight = () => {
        setCurrentPosition(prevPosition => (prevPosition < logos.length - 1 ? prevPosition + 1 : 0));
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleMoveRight();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, []);





    return (
        <>
            <div className="d-flex">
                <Sidebar />
                <div className="content-container">
                    <div className="carousel-container">
                        <Carousel activeIndex={index} onSelect={handleSelect} className='carousel'>
                            <Carousel.Item>
                                <img src={slide1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide2} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={slide3} alt="Third slide" />
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="vertimages">
                        <img src={img5} alt="" onClick={handleImageClick} />
                        <img src={img6} alt="" onClick={handleImageClick} />
                    </div>

                    <div className="lineimages">
                        <img src={img1} alt="" onClick={handleImageClick} />
                        <img src={img2} alt="" onClick={handleImageClick} />
                        <img src={img3} alt="" onClick={handleImageClick} />
                        <img src={img4} alt="" onClick={handleImageClick} />
                    </div>

                    <div className="logo-carousel-container">
                        <div className="logo-carousel">
                            <img src={logo1} alt="Logo 1" onClick={handleImageClick}/>
                            <img src={logo2} alt="Logo 2" onClick={handleImageClick}/>
                            <img src={logo3} alt="Logo 3" onClick={handleImageClick}/>
                            <img src={logo4} alt="Logo 4" onClick={handleImageClick}/>
                            <img src={logo5} alt="Logo 5" onClick={handleImageClick}/>
                            <img src={logo6} alt="Logo 6" onClick={handleImageClick} />
                            <img src={logo7} alt="Logo 7"onClick={handleImageClick} />
                            <img src={logo8} alt="Logo 8" onClick={handleImageClick}/>
                            <img src={logo9} alt="Logo 9" onClick={handleImageClick}/>
                        </div>
                    </div>

                    <div className="product-container">
                        <div className="time-zone" >
                            <p>{currentTime.toLocaleTimeString() }</p>
                        </div>
                        <div className="product-list">
                            {products.map(product => (
                                <div key={product.id} className="product-item">
                                    <img
                                        src={product.image1}
                                        alt={product.name}
                                        onMouseEnter={(e) => e.currentTarget.src = product.image2}
                                        onMouseLeave={(e) => e.currentTarget.src = product.image1}
                                        
                                    />
                                  
                                   
                                    <h3>{product.name}</h3>
                                    <p>${product.price}</p>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={cartItems.some(item => item.id === product.id) ? 'added-to-cart' : ''}
                                    >
                                        {cartItems.some(item => item.id === product.id) ? 'Successfully Added' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="caro-container">
                        <button onClick={handleMoveLeft} className="caro-button left">←</button>
                        <div className="caro-grid" style={{ transform: `translateX(-${currentPosition * 100}%)` }}>
                            {logos.map((logo, index) => (
                                <div key={index} className="caro-item">
                                    <img src={logo} alt={`Logo ${index + 1}`} onClick={handleImageClick}/>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleMoveRight} className="caro-button right">→</button>
                    </div>


                    

                    <div className="additional-product-container">
                        <div className="product-list">
                            {moreProducts.map(product => (
                                <div key={product.id} className="product-item">
                                    <img
                                        src={product.image1}
                                        alt={product.name}
                                        onMouseEnter={(e) => e.currentTarget.src = product.image2}
                                        onMouseLeave={(e) => e.currentTarget.src = product.image1}
                                    />
                                    <h3>{product.name}</h3>
                                    <p>${product.price}</p>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className={cartItems.some(item => item.id === product.id) ? 'added-to-cart' : ''}
                                    >
                                        {cartItems.some(item => item.id === product.id) ? 'Successfully Added' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>





             





                   

                    <div className="page-content">
                        <Routes>
                            <Route path="/electronics/*" element={<Electronics />} />
                            <Route path="/homes-and-gardens/*" element={<HomesAndGardens />} />
                            <Route path="/laptops-and-macbooks/*" element={<LaptopsAndMacBooks />} />
                            <Route path="/clothing-and-shoes/*" element={<ClothingAndShoes />} />
                            <Route path="/kitchen-utensils/*" element={<KitchenUtensils />} />
                            <Route path="/furniture/*" element={<Furniture />} />
                        </Routes>
                    </div>
                </div>
            </div>



            <Footer/>
        </>
    );
};

export default Home;
