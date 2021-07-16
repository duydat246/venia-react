import React from 'react';
import SubMenu from './SubMenu';

function MegaMenuItem(props) {
    const { name, children } = props;
    return (
        <div className="megaMenuItem-megaMenuItem">
            <a className='megaMenuItem-megaMenuLink' href='#'>{name}</a>
            <SubMenu children={children} />
        </div>
    )
}

export default MegaMenuItem