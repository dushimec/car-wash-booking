// src/components/AdminDashboard.jsx
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-2">All Bookings</h2>
        <p className="text-sm">Here you can view and manage all bookings.</p>
        {/* Booking management table or list can be added here */}
      </div>
      <div className="bg-white p-4 shadow rounded mt-6">
        <h2 className="text-lg font-semibold mb-2">Manage Services</h2>
        <p className="text-sm">Add, update, or remove services.</p>
        {/* Service management form or table can be added here */}
      </div>
      <div className="bg-white p-4 shadow rounded mt-6">
        <h2 className="text-lg font-semibold mb-2">User Accounts</h2>
        <p className="text-sm">View and manage user accounts.</p>
        {/* User management table or list can be added here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
