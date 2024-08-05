import React from "react";

const ConfirmScreen = () => {

    const confirmContainer = {
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d4edda',
        textAlign: 'center'
    };

    return (
        <div style={confirmContainer}>
            <h1>Success!</h1>
            <p>DevTrail thanks you for your purchase</p>
            <p>Return to Home page</p>
        </div>
    );
};

export default ConfirmScreen;
