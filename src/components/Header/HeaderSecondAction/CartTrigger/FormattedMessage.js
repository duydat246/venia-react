import React from 'react';
import PropTypes from 'prop-types';

FormattedMessage.propTypes = {

};

function FormattedMessage(props) {
    return (
        <aside className="miniCart-root_open miniCart-root">
            <div className="miniCart-contents_open miniCart-contents">
                <div className="miniCart-emptyCart">
                    <div className="miniCart-emptyMessage">There are no items in your cart.</div>
                </div>
            </div>
        </aside>
    );
}

export default FormattedMessage;