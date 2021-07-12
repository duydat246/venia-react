import React from 'react';
import PropTypes from 'prop-types';
import SimpleImage from './SimpleImage';

PlaceholderImage.propTypes = {

};

function PlaceholderImage(props) {
    return (
        <div className="image-container">
            <SimpleImage className="image-placeholder_layoutOnly-Zsn image-placeholder-2AG" />
        </div>
    );
}

export default PlaceholderImage;