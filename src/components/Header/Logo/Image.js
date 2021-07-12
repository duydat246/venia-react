import React from 'react';
// import PlaceholderImage from './PlaceholderImage';
import SimpleImage from './SimpleImage';

Image.propTypes = {

};

function Image(props) {
    return (
        <div className='header-logo'>
            {/* <PlaceholderImage /> */}
            <SimpleImage />
        </div>
    );
}

export default Image;