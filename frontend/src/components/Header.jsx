import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useUser } from "../UserContext";

const Header = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_KEY}/auth/profile`, {
          withCredentials: true
        });
        if (response.data?.email) {
          setUser(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getProfileData();
  }, [setUser]); // if setUser is meant to remain constant, remove it from the dependency array on this line

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_KEY}/auth/logout`, {}, {
        withCredentials: true
      });
      if (response.status === 200) {
        setUser(null); // Clear user state using context
        toast.success(response.data.message);

      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="header">
      <Link to="/">
        <p>Logo</p>
      </Link>
      <div className="nav-bar">
        <p>ChatBot</p>
        <p>Resources</p>
        <p>Services</p>
        <p>Products</p>
        {user ?
          <button className='logout-button' onClick={handleLogout}>Logout</button>
          :
          <Link to="/auth">
            <p>Account</p>
          </Link>
        }
      </div>
    </div>
  );
};

export default Header;
