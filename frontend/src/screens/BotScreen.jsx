import React from "react";
import Chatbot from "../components/Chatbot";

const BotScreen = () => {
    return (
        <div className="botscreen-container">
            <h3>Say hello to DevTrail's Virtual Assistant!</h3>
            <Chatbot />
        </div>
    );
};

export default BotScreen;