import React from 'react';
import FormProvider from '../../../../../Contexts/FormContext/FormContext';


function Form(props) {
    const { value, handleValueChange } = props;
    return (
        <FormProvider>
            <form className="signIn-form">
                <div className="field-root">
                    <label className="field-label">Email address</label>
                    <span className="fieldIcons-root">
                        <span className="fieldIcons-input">
                            <input autoComplete="email" className="textInput-input field-input" id="9ff2a742-d26d-4aaf-a144-d5aefb668481" name="email" value={value} onChange={handleValueChange} />
                        </span>
                        <span className="fieldIcons-before" />
                        <span className="fieldIcons-after" />
                    </span>
                    <p className="message-root" />
                </div>
                <div className="password-root">
                    <label className="field-label">Password</label>
                    <span className="fieldIcons-root" style={{ iconsbefore: 0, iconsafter: 1 }}>
                        <span className="fieldIcons-input">
                            <input type="password" autoComplete="current-password" className="textInput-input field-input" id="2287ddc2-483f-4f77-91be-9dafa577e80c" name="password" value={value} onChange={handleValueChange} />
                        </span>
                        <span className="fieldIcons-before" />
                        <span className="fieldIcons-after">
                            <button className="password-passwordButton button-root clickable-root" type="button">
                                <span className="button-content">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                        <line x1={1} y1={1} x2={23} y2={23} />
                                    </svg>
                                </span>
                            </button>
                        </span>
                    </span>
                    <p className="message-root" />
                </div>

                <div className="signIn-forgotPasswordButtonContainer">
                    <button className="signIn-forgotPasswordButton linkButton-root clickable-root" type="button">
                        <span className="button-content">Forgot Password?</span>
                    </button>
                </div>

                <div className="signIn-buttonsContainer">
                    <button className="button-root_highPriority button-root clickable-root" type="submit">
                        <span className="button-content">Sign In</span>
                    </button>
                    <button className="button-root_normalPriority button-root clickable-root" type="button">
                        <span className="button-content">Create an Account</span>
                    </button>
                </div>
            </form>
        </FormProvider>
    );
}

export default Form;