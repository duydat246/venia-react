import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CurrencySwitcher from './CurrencySwitcher/CurrencySwitcher';
import './Header.scss';
import HeaderSecondary from './HeaderSecondAction/HeaderSecondary';
import Logo from './Logo/Logo';
import MegaMenu from './Nav/MegaMenu';
import NavigationTrigger from './NavigationTrigger/NavigationTrigger';
import StoreSwitcher from './StoreSwitcher/StoreSwitcher';
Header.propTypes = {

};

function Header() {
    return (
        <div>
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
        </div>
    );
}

export default Header;