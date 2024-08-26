// src/components/UserDashboard.jsx
import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-2">My Bookings</h2>
        <p className="text-sm">Here you can view your booking history.</p>
        {/* Booking history table or list can be added here */}
      </div>
      <div className="bg-white p-4 shadow rounded mt-6">
        <h2 className="text-lg font-semibold mb-2">Update Profile</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <label className="block text-sm">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white px-4 py-2 rounded">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default UserDashboard;
