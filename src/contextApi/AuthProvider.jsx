import React, { createContext, useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => {
    // Your login logic here, set authenticated to true upon successful login
    setAuthenticated(true);
    navigate('/');
   
    
   
  };

  const logout = () => {
    // Your logout logic here, set authenticated to false upon logout
    setAuthenticated(false);
    localStorage.removeItem('token');
    navigate('/login');
    

    // You can handle redirection after logout in your components or routing setup
  };

  return (
    <AuthContext.Provider value={{ authenticated,login,logout}}>
      {children}
    </AuthContext.Provider>
  );
};
