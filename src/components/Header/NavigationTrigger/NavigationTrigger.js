import React from 'react';
import './NavigationTrigger.scss';

function NavigationTrigger(props) {
    return (
        <div className="header-primaryActions">
            <button className="navTrigger-root clickable-root">
                <span className="icon-root">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-icon-3jC"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </span>
            </button>
        </div>
    );
}

export default NavigationTrigger;