import React from "react";
import './Intro.css';

const Intro = () => {
    return (
        <div className="intro-container">
            <h1>DevTrail</h1>
            <h2>Jump Start Your New -<span> Tech Career!</span></h2>
            <div className="intro-para">
                <h6>Welcome to DevTrail, where we believe every journey into tech is a unique adventure waiting to unfold. At DevTrail,
                we're more than a startup – we're your compass, guiding you through the trails of technology, transforming dreams into thriving careers.
                <span> Your new career adventure begins here at DevTrail</span> – Trailblazing Your Tech Future!</h6>
            </div>
            <button className="intro-button">Learn More</button>
        </div>
    );
};

export default Intro;
