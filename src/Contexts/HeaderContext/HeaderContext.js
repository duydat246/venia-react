import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
export const HeaderContext = createContext();

export const navItems = [
    {
        id: uuid(),
        name: "Bottoms",
        position: 2,
        isActive: false,
        children: ["Pants & Shorts", "Skirts"]
    },
    {
        id: uuid(),
        name: "Tops",
        position: 3,
        isActive: false,
        children: ["Blouses & Shirts", "Sweaters"]
    },
    {
        id: uuid(),
        name: "Dresses",
        position: 3,
        isActive: false,
        children: [""]
    },
    {
        id: uuid(),
        name: "Accessories",
        position: 4,
        isActive: false,
        children: ["Belts", "Jewelry", "Scarves "]
    },
    {
        id: uuid(),
        name: "Shop The Look",
        position: 5,
        isActive: false,
        children: [
            "Minimalist Sensibility",
            "Outside The Lines",
            "Carefree Days",
            "Perfectly Beachy",
            "Retire your LBD",
            "Timeless Sophistication"
        ]
    }
];

function HeaderProvider(props) {
    const [navs, setNavs] = useState(navItems);
    const children = navs.children;

    return (
        <HeaderContext.Provider value={{ navs, children }} >
            {props.children}
        </HeaderContext.Provider>
    );
}

export default HeaderProvider;