import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
  
    if (!email) {
      console.log("Enter a valid email");
      return;
    }
    if (!password) {
      console.log("Enter a valid password");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      console.log(response.data); // Handle login success here (e.g., redirect user)
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        // Request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened while setting up the request
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">Login to BabyCare</h2>

        <form className="space-y-6" onSubmit={handleForm}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
