import React, { useState } from 'react';
import AccountChip from './AccountChip/AcountChip';
import SignIn from './SignIn/SignIn';
function AccountTrigger(props) {

    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
        <>
            <div className="accountTrigger-root_open accountTrigger-root" onClick={() => toggle()}>
                <AccountChip />
            </div>
            {open ? <SignIn /> : null}
        </>
    );
}

export default AccountTrigger;