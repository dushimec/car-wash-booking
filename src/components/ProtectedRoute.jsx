// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAdmin, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (isAdmin === false && window.location.pathname === '/admin-dashboard') {
    return <Navigate to="/user-dashboard" />;
  }
  if (isAdmin === true && window.location.pathname === '/user-dashboard') {
    return <Navigate to="/admin-dashboard" />;
  }
  return element;
};

export default ProtectedRoute;
