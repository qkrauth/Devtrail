import React from "react";
import Intro from "../components/Intro";
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <div className="homescreen-container">
            <div className="home-section-1">
                <Intro />
                <div className="pics-container">
                <img className="img1" src="https://www.jcpenneyoptical.com/wp-content/uploads/2018/04/ANA_AN176-O-90-52-18-135_profil_F1_M8_XL.png" alt="" />
                <img className="img2" src="https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/keyboards/km5221w-wth/km5221w-ckb-06-wh.psd?     fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=713&qlt=100,1&resMode=sharp2&size=713,402&chrss=full" alt="" />
                </div>
            </div>
            <div className="home-section-2" id="home-section-2">
                <div className="section-2-left">
                    <h1>A Word from our Founder</h1>
                    <img src="https://cdn4.iconfinder.com/data/icons/cute-minimal-geometric-cartoon-avatars/100/d-512.png" alt="Founder" className="founder-img" />
                        <p>Hi, my name is Quinten and I am a current Master's student trying to make my way into big tech. My journey, like many of yours, has not been linear. I went from a business student to an attempted self-taught engineer to a bootcamp grad and finally grad student. With an abundance of information on the web about how to get your career started in tech, allow DevTrail to help narrow your view. My goal is to share my experiences and resources with you all so you dont make the same mistakes I made.</p>
                        <p>
                            Contact me <a href="https://www.linkedin.com/in/quintenkrauth/" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'blue' }}>HERE</a>
                        </p>
                </div>
                <div className="section-2-right">
                    <div className="welcome">
                        <h1>Welcome to DevTrail</h1>
                        <img src="https://www.iconpacks.net/icons/1/free-engineer-icon-281-thumb.png" alt="" />
                        <p>At DevTrail, we provide a comprehensive platform to support your tech career journey. Our AI chatbot is available to assist with your queries and guide you through our diverse range of resources, services, and products. Whether you're looking to enhance your skills or find valuable tools, we're here to help you succeed in this ever evolving tech industry.</p>
                        <img src="https://i.pinimg.com/originals/bb/33/d2/bb33d202ff2a99c99aa40484474ae51a.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="home-section-3">
                <div className="section-3-left">
                    <div className="benefits">
                        <h1>Member Benefits</h1>
                        <img src="https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_male_profile_smiley_happy_people_icon_181658.png" alt="" />
                        <p>
                            <img src="https://static.vecteezy.com/system/resources/previews/011/911/711/non_2x/check-mark-button-free-png.png" alt="" />
                            Full access to all features of the DevTrail app
                        </p>
                        <p>
                            <img src="https://static.vecteezy.com/system/resources/previews/011/911/711/non_2x/check-mark-button-free-png.png" alt="" />
                            Interact with our DevTrail AI chatbot
                        </p>
                        <p>
                            <img src="https://static.vecteezy.com/system/resources/previews/011/911/711/non_2x/check-mark-button-free-png.png" alt="" />
                            Purchase services from our industry professionals
                        </p>
                        <p>
                            <img src="https://static.vecteezy.com/system/resources/previews/011/911/711/non_2x/check-mark-button-free-png.png" alt="" />
                            View our products (coming soon)
                        </p>
                        <p>
                            <img src="https://static.vecteezy.com/system/resources/previews/011/911/711/non_2x/check-mark-button-free-png.png" alt="" />
                            Engage in the community forum? (Accepting feedback)
                        </p>
                    </div>
                </div>
                <div className="section-3-right">
                    <h1>Support us</h1>
                    <p>DevTrail greatly appreciates all donations</p>
                    <a href="https://buymeacoffee.com/devtrail" target="_blank" rel="noopener noreferrer">
                        <button className="donate-button">Donate</button>
                    </a>
                    <p className="powered-by">powered by BuyMeACoffee</p>
                    <img src="https://static.vecteezy.com/system/resources/previews/010/056/310/original/coffee-icon-sign-symbol-design-free-png.png" alt="Coffee cup" className="coffee-cup" />
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
