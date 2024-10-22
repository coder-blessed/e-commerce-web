import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    profilePicture: ''
  });
  const navigate = useNavigate();

  const signIn = (userData) => {
    // Simulate a login request
    setUser(userData);
    navigate('/profile');
  };

  const register = (userData) => {
    // Simulate a registration request
    setUser(userData);
    navigate('/profile');
  };

  const signOut = () => {
    setUser(null);
    navigate('/');
  };

  const updateUser = (updatedUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUserData }));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, register, signOut,updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
