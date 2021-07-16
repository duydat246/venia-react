import React from 'react';
import '../AccountTrigger.scss';



function AccountChip(props) {

    return (
        // <div className="accountTrigger-root_open accountTrigger-root" >
        <button aria-label="Toggle My Account Menu" className="accountTrigger-trigger clickable-root">
            <span className="accountChip-root">
                <span className="icon-root">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon-icon-3jC">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                    </svg>
                </span>
                <span>Sign In</span>
            </span>
        </button>
        // </div>
    );
}

export default AccountChip;