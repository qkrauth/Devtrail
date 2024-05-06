import React from "react";
import Intro from "../components/Intro";

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
        </div>
    );
};

export default HomeScreen;
