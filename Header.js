import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="AU-header">
            {/*//TO-DO:бургер меню*/}
            <Link className="AU-link-left" to="/home">Home</Link>
            <Link className="AU-link-left" to="/aboutus">About Us</Link>
            <Link className="AU-link-left" to="/gallery">Gallery</Link>
            <Link className="AU-link-right" to="/applicationmac">Application</Link>
            <Link className="AU-link-right" to="/onlineterm">Online terminals</Link>
            <Link className="AU-link-right" to="/vacancies">Vacancies</Link>


        </header>
    );
};

export default Header;