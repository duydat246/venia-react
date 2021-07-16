import React from 'react';
import Form from './Form';
import FormattedMessage from './FormattedMessage';
import './SignIn.scss';

function SignIn(props) {
    const { open } = props;
    return (
        <aside className={open ? "accountMenu-root_open accountMenu-root" : "accountMenu-root"} >
            <div className={open ? "accountMenu-contents_open accountMenu-contents" : "accountMenu-contents"}>
                <div className="signIn-root">
                    <FormattedMessage />
                    <Form />
                </div>
            </div>
        </aside>
    );
}

export default SignIn;