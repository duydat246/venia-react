import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
export const HeaderContext = createContext();

const navItems = [
    {
        id: uuid(),
        name: "Bottoms",
        position: 2,
        isActive: false,
        children: [
            {
                id: uuid(),
                name: "Pants & Shorts",
                position: 1,
                isActive: false
            },
            {
                id: uuid(),
                name: "Skirts",
                position: 2,
                isActive: false
            },
        ]
    },
    {
        id: uuid(),
        name: "Tops",
        position: 3,
        isActive: false,
        children: [
            {
                id: uuid(),
                name: "Blouses & Shirts",
                position: 1,
                isActive: false
            },
            {
                id: uuid(),
                name: "Sweaters",
                position: 2,
                isActive: false
            },
        ]
    },
    {
        id: uuid(),
        name: "Dresses",
        position: 3,
        isActive: false,
    },
    {
        id: uuid(),
        name: "Accessories",
        position: 4,
        isActive: false,
        children: [
            {
                id: uuid(),
                name: "Belts",
                position: 1,
                isActive: false
            },
            {
                id: uuid(),
                name: "Jewelry",
                position: 2,
                isActive: false
            },
            {
                id: uuid(),
                name: "Scarves ",
                position: 3,
                isActive: false
            },
        ]
    },
    {
        id: uuid(),
        name: "Shop The Look",
        position: 5,
        isActive: false,
        children: [
            {
                id: uuid(),
                name: "Minimalist Sensibility",
                position: 1,
                isActive: false
            },
            {
                id: uuid(),
                name: "Outside The Lines",
                position: 2,
                isActive: false
            },
            {
                id: uuid(),
                name: "Carefree Days",
                position: 3,
                isActive: false
            },

            {
                id: uuid(),
                name: "Perfectly Beachy",
                position: 4,
                isActive: false
            },

            {
                id: uuid(),
                name: "Retire your LBD",
                position: 5,
                isActive: false
            },

            {
                id: uuid(),
                name: "Timeless Sophistication",
                position: 6,
                isActive: false
            },
        ]
    },
]

const subMenuItem = [

    {
        id: uuid(),
        name: "Pants & Shorts",
        position: 1,
        isActive: false
    },
    {
        id: uuid(),
        name: "Skirts",
        position: 2,
        isActive: false
    }
    ,
    {
        id: uuid(),
        name: "Blouses & Shirts",
        position: 1,
        isActive: false
    },
    {
        id: uuid(),
        name: "Sweaters",
        position: 2,
        isActive: false
    },
    {
        id: uuid(),
        name: "Belts",
        position: 1,
        isActive: false
    },
    {
        id: uuid(),
        name: "Jewelry",
        position: 2,
        isActive: false
    },
    {
        id: uuid(),
        name: "Scarves ",
        position: 3,
        isActive: false
    },
    {
        id: uuid(),
        name: "Minimalist Sensibility",
        position: 1,
        isActive: false
    },
    {
        id: uuid(),
        name: "Outside The Lines",
        position: 2,
        isActive: false
    },
    {
        id: uuid(),
        name: "Carefree Days",
        position: 3,
        isActive: false
    },

    {
        id: uuid(),
        name: "Perfectly Beachy",
        position: 4,
        isActive: false
    },

    {
        id: uuid(),
        name: "Retire your LBD",
        position: 5,
        isActive: false
    },

    {
        id: uuid(),
        name: "Timeless Sophistication",
        position: 6,
        isActive: false
    }

]


function HeaderProvider(props) {
    const [navs, setNavs] = useState(navItems);
    const [subItems, setSubItems] = useState(subMenuItem)
    return (
        <HeaderContext.Provider value={{ navs, subItems }} >
            {props.children}
        </HeaderContext.Provider>
    );
}

export default HeaderProvider;