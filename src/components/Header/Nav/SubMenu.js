import React from 'react';

function SubMenu(props) {
    const { children } = props;
    return (
        <div className="subMenu-subMenu">
            <div
                className="subMenu-subMenuItems"
                style={{ minWidth: "473px" }}
            >
                {children.map((chil) =>
                (

                    <div className="subMenuColumn-subMenuColumn" key={chil}>
                        <a className='subMenuColumn-link' href="#">
                            <h3 className='subMenuColumn-heading'>{chil}</h3>
                        </a>
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default SubMenu;