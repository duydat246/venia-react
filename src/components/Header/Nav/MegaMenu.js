import React, { useContext } from 'react';
import { HeaderContext } from '../../../Contexts/HeaderContext/HeaderContext';
import SubMenu from './SubMenu';

function MegaMenu(props) {
    const { navs } = useContext(HeaderContext)
    return (
        <nav className='megaMenu-megaMenu-2Kz' role='navigation'>
            {navs.map(item => (
                <div className='megaMenuItem-megaMenuItem-34K' key={item.id}>
                    <a className='megaMenuItem-megaMenuLink-32Kb' href='#'>{item.name}</a>
                    <SubMenu />
                </div>
            ))}
        </nav>
    );
}

export default MegaMenu;