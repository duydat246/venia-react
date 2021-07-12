import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Header.scss';
import Logo from './Logo/Logo';
import MegaMenu from './Nav/MegaMenu';
Header.propTypes = {

};

function Header(props) {
    return (
        <div className="header-switcher">
            <Router>
                <div>
                    <Route path="/" component={Logo} />
                    <Route component={MegaMenu} />
                </div>
            </Router>
        </div>
    );
}

export default Header;