import React from 'react';
import PropTypes from 'prop-types';

NavigationTrigger.propTypes = {

};

function NavigationTrigger(props) {
    return (
        <div className="navigation-trigger">
            <button className="navTrigger-root">
                <span className="icon-root">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-icon-3jC"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </span>
            </button>
        </div>
    );
}

export default NavigationTrigger;