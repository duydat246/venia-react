import React from 'react';
import './HeaderSW.scss';

function HeaderSwitchers(props) {
    return (
        <div className='header-switchersContainer-5ez'>
            <div className='header-switchers-lz0'>
                <div className="storeSwitcher-root-32o">
                    <button className='storeSwitchers-trigger-3uk' aria-label='Default Store View'>Main Website Store - Default Store View</button>
                </div>
                <div className='currencySwitcher-root-3kr'>
                    <button className='currencySwitcher-trigger-3l' aria-label='USD'>
                        <span>
                            <span className='currencySwitcher-symbol-s3l'>$</span>
                            "USD"
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderSwitchers;