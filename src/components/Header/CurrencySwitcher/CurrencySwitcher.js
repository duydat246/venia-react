import React from 'react';
import PropTypes from 'prop-types';

CurrencySwitcher.propTypes = {

};

function CurrencySwitcher(props) {
    return (
        <div className='currencySwitcher-root-3kr'>
            <button className='currencySwitcher-trigger-3l' aria-label='USD'>
                <span>
                    <span className='currencySwitcher-symbol-s3l'>$</span>
                    "USD"
                </span>
            </button>
        </div>
    );
}

export default CurrencySwitcher;