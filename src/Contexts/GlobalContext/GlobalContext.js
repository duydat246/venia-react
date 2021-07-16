
import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

function GlobalProvider(props) {
    const [open, setOpen] = useState(false);

    const handleSignInClick = () => {
        setOpen(!open);
    }

    return (
        <GlobalContext.Provider value={{ open, handleSignInClick: handleSignInClick }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;