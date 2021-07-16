import React from 'react';
import PropTypes from 'prop-types';

FormattedMessage.propTypes = {

};

function FormattedMessage(props) {
    const { open } = props;
    return (
        <aside className={open ? "miniCart-root_open miniCart-root" : "miniCart-root"}>
            <div className={open ? "miniCart-contents_open miniCart-contents" : "miniCart-contents"}>
                <div className="miniCart-emptyCart">
                    <div className="miniCart-emptyMessage">There are no items in your cart.</div>
                </div>
            </div>
        </aside>
    );
}

export default FormattedMessage;