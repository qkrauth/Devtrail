import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const Register = () => {

    // State to manage form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Function to handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/register`, formData, {
                withCredentials: true
            });
            toast.success(response.data?.message);
        } catch (error) {
            if(error.response.data?.message){
                toast.error(error.response.data?.message)
            }
            console.error(error);
        }
    };


    return (
        <div className="auth-form">
            <h2>Register</h2>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
