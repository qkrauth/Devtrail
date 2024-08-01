import React from "react";
import './ServiceScreen.css';

const ServiceScreen = () => {
    return (
        <div className="service-container">
            <div className="service-intro">
                <h2>Services</h2>
                <div className="passage">
                    <p>At DevTrail, we offer top notch services that cater needs of our clients. Our team of industry professionals brings a wealth of experience and expertise to the table, ensuring that you receive the highest quality solutions tailored to your specific requirements. We believe in building long term partnerships with our clients, providing continuous support and innovation to help you stay ahead. Discover how DevTrail can help you soar to new heights with our comprehensive services.</p>
                </div>
            </div>
            <div className="service">
                <div className="service-info">
                    <h3>Quinten K.</h3>
                    <p>Software Engineer Intern</p>
                </div>
                <div className="service-buttons">
                    <div className="service-button">
                        <p>Resume Review</p>
                        <button>$4.99</button>
                    </div>
                    <div className="service-button">
                        <p>Career Consulting</p>
                        <button>$4.99</button>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="service-info">
                    <h3>Sreekar A.</h3>
                    <p>Business Analyst</p>
                </div>
                <div className="service-buttons">
                    <div className="service-button">
                        <p>Resume Review</p>
                        <button>$4.99</button>
                    </div>
                    <div className="service-button">
                        <p>Career Consulting</p>
                        <button>$4.99</button>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="service-info">
                    <h3>Dylan B.</h3>
                    <p>Angular Developer</p>
                </div>
                <div className="service-buttons">
                    <div className="service-button">
                        <p>Resume Review</p>
                        <button>$4.99</button>
                    </div>
                    <div className="service-button">
                        <p>Career Consulting</p>
                        <button>$4.99</button>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="service-info">
                    <h3>Justin R.</h3>
                    <p>Cloud Product Manager</p>
                </div>
                <div className="service-buttons">
                    <div className="service-button">
                        <p>Resume Review</p>
                        <button>$4.99</button>
                    </div>
                    <div className="service-button">
                        <p>Career Consulting</p>
                        <button>$4.99</button>
                    </div>
                </div>
            </div>
            <div className="service" style={{ paddingBottom: '50px' }}>
                <div className="service-info">
                    <h3>Eric K.</h3>
                    <p>Tech Sales</p>
                </div>
                <div className="service-buttons">
                    <div className="service-button">
                        <p>Resume Review</p>
                        <button>$4.99</button>
                    </div>
                    <div className="service-button">
                        <p>Career Consulting</p>
                        <button>$4.99</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceScreen;
