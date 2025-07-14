// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending login request with:", { email, password }); // Debug payload
  
      const response = await fetch('https://apiailsbacked-eqc6f6dwgehhgtgh.centralindia-01.azurewebsites.net/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Response received:", data); // Debug response
  
      if (response.ok && data.token && data.adminId) {  // Ensure both token and adminId are in the response
        setMessage('Login successful!');
        // Store both token and adminId in localStorage
        localStorage.setItem('token', data.token);  
        localStorage.setItem('adminId', data.adminId);  // Save adminId to localStorage
        navigate('/dashboard');  // Navigate to /manage-profile on successful login
      } else {
        const errorMessage = data.error || 'Unknown error occurred';
        setMessage('Login failed: ' + errorMessage);  // Show failure message
      }
    } catch (error) {
      console.error("Fetch error:", error); // Debug network error
      setMessage('An error occurred: ' + error.message);
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Panel</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>}
      </form>
      <div className="background">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
    </div>
  );
}

export default Login;
