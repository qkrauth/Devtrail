import React from "react";
import './Footer.css';
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="main-foot">
                <p>Thank you for visiting our site!</p>
                <div className="footer-icons">
                    <FaDiscord style={{ color: 'slateblue' }} />
                    <FaFacebook style={{ color: 'royalblue' }} />
                    <FaInstagram style={{ color: 'hotpink' }} />
                    <FaTiktok style={{ color: 'white' }} />
                    <FaTwitter style={{ color: 'deepskyblue' }} />
                    <FaYoutube style={{ color: 'darkred' }} />
                </div>
                <p>DevTrail Guidance 2023. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
