import React, { useState } from 'react';
import AccountChip from './AccountChip/AcountChip';
import SignIn from './SignIn/SignIn';
function AccountTrigger(initialIsVisible) {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    const [value, setValue] = useState('');
    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    return (
        <>
            <div id="accountTrigger-root" className={open ? "accountTrigger-root_open accountTrigger-root" : "accountTrigger-root"} onClick={() => toggle()}>
                <AccountChip />
            </div>
            <SignIn open={open} value={value} handleValueChange={handleValueChange} />
        </>
    );
}

export default AccountTrigger;