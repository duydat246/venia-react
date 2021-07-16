import React, { createContext } from 'react';

export const FormContext = createContext();

function FormProvider(props) {
    return (
        <FormContext.Provider value={{}}>
            {props.children}
        </FormContext.Provider>
    );
}

export default FormProvider;