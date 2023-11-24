import React from 'react';
import PropTypes from 'prop-types';

export const ErrorQuote = ({ error }) => {
    return (
        <div className="alert alert-danger text-center">
            Error: { error }
        </div>
    );
};

ErrorQuote.propTypes = {
    error: PropTypes.string.isRequired
};

ErrorQuote.defaultProps = {
    error: 'Unknown error'
};