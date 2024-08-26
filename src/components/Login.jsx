import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (email === 'test@example.com' && password === 'password') {
      console.log('Login successful');
      // Redirect to dashboard
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow rounded">
        <h2 className="text-lg font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-sm">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-3 py-2" required />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="bg-gradient-to-r from-[#134e5e] to-[#71b280] text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
