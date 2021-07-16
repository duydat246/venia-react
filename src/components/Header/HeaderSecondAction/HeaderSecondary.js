import React from 'react';
import AccountTrigger from './AccountTrigger/AccountTrigger';
import CartTrigger from './CartTrigger/CartTrigger';
import './HeaderSecondary.scss';
import Search from './Search/Search';

function HeaderSecondary(props) {
    return (
        <div className="header-secondaryActions">
            <Search />
            <AccountTrigger />
            <CartTrigger />
        </div>
    );
}

export default HeaderSecondary;