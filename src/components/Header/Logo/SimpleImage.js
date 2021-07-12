import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../assets/VeniaLogo.svg';

SimpleImage.propTypes = {

};

function SimpleImage(props) {
    return (
        <img src={logo} alt="VeniaLogo" className="header-logo image-loaded" height={18} width={102} />
    );
}

export default SimpleImage;