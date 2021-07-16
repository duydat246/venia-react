import React, { useEffect, useRef, useState } from 'react';
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

    // const [isComponentVisible, setIsComponentVisible] = useState(
    //     initialIsVisible
    // );

    // useEffect(() => {
    //     document.addEventListener("click", handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener("click", handleClickOutside, true);
    //     };
    // });

    // const ref = useRef(null)

    // const handleClickOutside = event => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //         setIsComponentVisible(false);
    //     }
    // };

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