import React, {useState} from 'react';
import './navbar.css';
import { MdShoppingCart } from 'react-icons/md';

const Navbar = () => {

    const [isHumburger, setIsHumburger] = useState(false)
    const visibleHumburger = () => {
        setIsHumburger(!isHumburger)
    }

    return (
        <nav className="navbar">
            <ul className={isHumburger ? "nav-menu active" : "nav-menu"}>

                <li className="nav-item">
                    <a href="#" className="nav-link"><MdShoppingCart/></a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Pages</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Feature</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Extensions</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Tutorials</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Contact us</a>
                </li>
            </ul>

            <div onClick={visibleHumburger} className={isHumburger ? "hamburger active" : "hamburger"}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;