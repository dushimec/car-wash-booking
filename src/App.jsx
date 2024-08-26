import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ContactUs from './components/ContactUs';

function App() {
  const isAuthenticated = true; 
  const isAdmin = false;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Hero /><Services /><BookingForm /></div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={
          <ProtectedRoute element={<UserDashboard />} isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
        } />
        <Route path="/admin-dashboard" element={
          <ProtectedRoute element={<AdminDashboard />} isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
