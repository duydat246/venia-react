import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { HeaderContext } from '../../../Contexts/HeaderContext/HeaderContext';

function SubMenu(props) {
    const { subItems } = useContext(HeaderContext);
    return (
        <div className='subMenu-subMenu-57Hb'>
            {subItems.map(subItem => (
                <div className='subMenu-subMenuItems-1Gl' style={{ minWidth: '473px' }} key={subItem.id}>
                    <div className='subMenuColumn-subMenuColumn-2MP'>
                        <a className='subMenuColumn-link-3_5' href='#'>
                            <h3 className='subMenuColumn-heading-3zf'>{subItem.name}</h3>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SubMenu;