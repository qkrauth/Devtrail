import React from "react";
import Chatbot from "../components/Chatbot";

const BotScreen = () => {
    return (
        <div className="botscreen-container">
            <p>Say hello to our *DevTrail ChatBot!*</p>
            <Chatbot />
        </div>
    );
};

export default BotScreen;