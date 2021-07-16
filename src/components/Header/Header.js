import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CurrencySwitcher from './CurrencySwitcher/CurrencySwitcher';
import './Header.scss';
import AccountTrigger from './HeaderSecondAction/AccountTrigger/AccountTrigger';
import CartTrigger from './HeaderSecondAction/CartTrigger/CartTrigger';
import HeaderSecondary from './HeaderSecondAction/HeaderSecondary';
import Search from './HeaderSecondAction/Search/Search';
import Logo from './Logo/Logo';
import MegaMenu from './Nav/MegaMenu';
import NavigationTrigger from './NavigationTrigger/NavigationTrigger';
import StoreSwitcher from './StoreSwitcher/StoreSwitcher';
Header.propTypes = {

};

function Header(props) {
    return (
        <>
            <div className="header-switcherContainer">
                <div className="header-switchers">
                    <StoreSwitcher />
                    <CurrencySwitcher />
                </div>
            </div>
            <header className="header-root">
                <Router>
                    <div className="header-toolbar">
                        <NavigationTrigger />
                        <Route path="/" component={Logo} />
                        <MegaMenu />
                        <HeaderSecondary />
                    </div>
                </Router>
            </header>
        </>
    );
}

export default Header;