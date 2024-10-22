import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './App.css';



import CartPage from './components/hi/CartPage';
import Collections from './components/Collections';
import BestSeller from './components/BestSeller';
import Pages from './components/Pages';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Loader from './components/Loader';
import NavigationBar from './components/Navbar';
import TopNavbar from './components/TopNavbar';


import { AuthProvider } from './components/hi/AuthContext';
import ProfilePage from './components/hi/ProfilePage';
import Footer from './components/Footer';
import Electronics from './components/hi/Electronics';
import Home from './components/hi/Home';
import HomesAndGardens from './components/hi/HomesAndGardens';
import ProductList from './components/hi/ProductList';


function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating loading for 2 seconds
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    
    <Router>
      <AuthProvider>
      <TopNavbar cartItems={cartItems} />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} handleAddToCart={handleAddToCart} />} />
        <Route path="/Collections" element={<Collections />} />
        <Route path="/BestSeller" element={<BestSeller />} />
        <Route path="/Pages" element={<Pages />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/HomesAndGardens" element={<HomesAndGardens />} />
        <Route path="/electronics/*" element={<Electronics />} />
        <Route path="/products" element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/profile" element={<ProfilePage cartItems={cartItems} setCartItems={setCartItems} />} />
       <Route path="/Footer" element= {<Footer/>}/>
      </Routes>
      </AuthProvider>
    </Router>

    
   
  );
}

export default App;
