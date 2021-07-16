import React, { useContext } from 'react';
import { HeaderContext } from '../../../Contexts/HeaderContext/HeaderContext';
import './MegaMenu.scss';
import MegaMenuItem from './MegaMenuItem';

function MegaMenu(props) {
    const { navs } = useContext(HeaderContext)
    return (
        <nav className="megaMenu-megaMenu">
            {navs.map((nav) => (
                <MegaMenuItem key={nav.id} name={nav.name} children={nav.children} />
            ))}
            {/* <SubMenu /> */}
        </nav>
    );
}

export default MegaMenu;