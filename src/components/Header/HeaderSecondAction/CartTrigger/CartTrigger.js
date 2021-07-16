import React, { useState } from 'react';
import FormattedMessage from './FormattedMessage';
import Icon from './Icon';
import './CartTrigger.scss';

function CartTrigger(props) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <>
            <div className={open ? "cartTrigger-triggerContainer_open cartTrigger-triggerContainer" : "cartTrigger-triggerContainer"} onClick={() => toggle()}>
                <button aria-label="Toggle mini cart. You have 0 items in your cart." className="cartTrigger-trigger clickable-root">
                    <Icon />
                </button>
            </div>
            <button aria-label="Toggle mini cart. You have 0 items in your cart." className="cartTrigger-link cartTrigger-trigger clickable-root">
                <Icon />
            </button>
            <FormattedMessage open={open} />
        </>
    );
}

export default CartTrigger;