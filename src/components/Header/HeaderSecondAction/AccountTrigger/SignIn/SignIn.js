import React from 'react';
import Form from './Form';
import FormattedMessage from './FormattedMessage';
import './SignIn.scss';

function SignIn(props) {
    return (
        <aside className="accountMenu-root_open accountMenu-root" >
            <div className="accountMenu-contents_open accountMenu-contents">
                <div className="signIn-root">
                    <FormattedMessage />
                    <Form />
                </div>
            </div>
        </aside>
    );
}

export default SignIn;