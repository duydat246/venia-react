import React, { useContext } from 'react';
import { GlobalContext } from '../../../../../Contexts/GlobalContext/GlobalContext';
import Form from './Form';
import './SignIn.scss';


function SignIn() {
    const { open } = useContext(GlobalContext);

    return (
        <aside className={open ? "accountMenu-root_open accountMenu-root" : "accountMenu-root"}>
            <div className={open ? "accountMenu-contents_open accountMenu-contents" : "accountMenu-contents"}>
                <div className="signIn-root">
                    <Form />
                </div>
            </div>
        </aside>
    );
}

export default SignIn;