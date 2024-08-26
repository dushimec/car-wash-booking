import React, { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({ date: '', time: '', location: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    if (!form.date) validationErrors.date = 'Date is required';
    if (!form.time) validationErrors.time = 'Time is required';
    if (!form.location) validationErrors.location = 'Location is required';

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted:', form);
    }
  };

  return (
    <form id='booking' onSubmit={handleSubmit} className="p-6 bg-[#d4f0da] shadow rounded h-screen">
      <div className="mb-4 mt-56">
        <label className="block text-sm">Date</label>
        <input type="date" name="date" onChange={handleChange} className="w-full border rounded px-3 py-2" />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm">Time</label>
        <input type="time" name="time" onChange={handleChange} className="w-full border rounded px-3 py-2" />
        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm">Location</label>
        <input type="text" name="location" onChange={handleChange} className="w-full border rounded px-3 py-2" />
        {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
      </div>
      <button type="submit" className="bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white px-4 py-2 rounded">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
