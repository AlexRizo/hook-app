import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({quote, author}) => {
    return (
        <blockquote className="blockquote text-end">
            <p>{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
        </blockquote>
    );
};

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

Quote.defaultProps = {
    quote: 'Unknown quote',
    author: 'Unknown author'
};