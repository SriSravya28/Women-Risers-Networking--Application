// src/components/AuthWrapper.js
import { Navigate, Outlet } from 'react-router-dom';

const AuthWrapper = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthWrapper; 