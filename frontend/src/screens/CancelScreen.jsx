import React from "react";

const CancelScreen = () => {

    const cancelContainer = {
        height: '75vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8d7da',
        textAlign: 'center'
    };

    return (
        <div style={cancelContainer}>
            <h1>Order Cancelled</h1>
            <p>Return to Home page</p>
        </div>
    );
};

export default CancelScreen;
