import React from 'react';
import logo from '../../../assets/VeniaLogo.svg';
import './Logo.scss';

function Logo(props) {
    return (
        <a href="/" className="header-logoContainer">
            <div className="image-root image-container" >
                <img src={logo} alt="VeniaLogo" className="header-logo image-loaded" height={18} width={102} />
            </div>
        </a>
    );
}

export default Logo;