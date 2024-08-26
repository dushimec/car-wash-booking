import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    if (password === confirmPassword) {
      console.log('Registration successful');
      // Redirect to login
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="p-6 bg-white shadow rounded">
        <h2 className="text-lg font-bold mb-6">Register</h2>
        <div className="mb-4">
          <label className="block text-sm">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
