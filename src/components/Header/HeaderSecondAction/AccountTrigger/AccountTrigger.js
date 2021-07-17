import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../../Contexts/GlobalContext/GlobalContext';
import AccountChip from './AccountChip/AcountChip';
import SignIn from './SignIn/SignIn';
function AccountTrigger() {

    const { open, handleSignInClick } = useContext(GlobalContext)

    const [value, setValue] = useState('');
    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    return (
        <>
            <div id="accountTrigger-root" className={open ? "accountTrigger-root_open accountTrigger-root" : "accountTrigger-root"} onClick={() => handleSignInClick()}>
                <AccountChip />
            </div>
            <SignIn open={open} value={value} handleValueChange={handleValueChange} />
        </>
    );
}

export default AccountTrigger;