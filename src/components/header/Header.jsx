import React from 'react';
import './header.css';
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-content">
                    <img src="../img/revo_logo.svg" alt="revo_logo" />
                        <h1> YOUR <span>PERSONALIZED</span> COFFEE</h1>
                </div>
                <div className="header-img">
                    <img src="../img/main-photo.jpg" alt="header-photo" />
                </div>

                <Navbar />

            </div>
        </header>
    );
};

export default Header;