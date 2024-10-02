import React, { useContext, useEffect ,useState} from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';
import ProfilePictureUpload from './ProfilePictureUpload';

const ProfilePage = ({ cartItems, setCartItems }) => {
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return null; // or a loading spinner
  }




  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Load existing image if available
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      setUploadedImage(savedImage);
    }
  }, []);

  useEffect(() => {
    if (uploadedImage) {
      localStorage.setItem('uploadedImage', uploadedImage);
    }
  }, [uploadedImage]);


  
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
    <div id='profcss'>
      <h1>Profile Page</h1>
      <h2>Welcome, {user.fullName}</h2>
      <p> {user.email}</p>
      {user.profilePicture && < img src={user.profilePicture} id='imgupload' alt="Profile" style={{ width: '100px', height: '100px' }} />}
      <ProfilePictureUpload />
      <h3>Your Orders</h3>
      {cartItems.length === 0 ? (
        <p>You have not ordered any items yet.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img  id='IMGCART'    src={item.image1} alt={item.name} style={{ width: '15VW', height: '15VH', marginRight: '10px' , gap:'20REM' }} />
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
      <button onClick={signOut}>Log Out</button>
    </div>
  );
};

export default ProfilePage;
