import React from 'react';
import './CurrencySwitcher.scss';

function CurrencySwitcher(props) {
    return (
        <div className='currencySwitcher-root'>
            <button className='currencySwitcher-trigger' aria-label='USD'>
                <span>
                    <span className='currencySwitcher-symbol'>$</span>
                    USD
                </span>
            </button>
        </div>
    );
}

export default CurrencySwitcher;