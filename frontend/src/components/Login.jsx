import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useUser } from "../UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/login`, formData, {
        withCredentials: true
      });
      if (response?.data) {
        setUser(response.data); // Update user state using context
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data?.message)
      console.error(error);
    }
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
