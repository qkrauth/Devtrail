import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import './AuthScreen.css';

const AuthScreen = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering((prevState) => !prevState);
    };

    return (
        <div className="auth-container">
            <h2>Account</h2>
            {isRegistering ? (
                <Register />
            ) : (
                <Login />
            )}
            <p>
                {isRegistering
                    ? "Already have an account? "
                    : "Need to register? "}
                <button onClick={toggleForm}>
                    {isRegistering ? "Login here" : "Register here"}
                </button>
            </p>
        </div>
    );
};

export default AuthScreen;
