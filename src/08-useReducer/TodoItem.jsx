import PropTypes from 'prop-types';

export const TodoItem = ({ desc }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{ desc }</span>
            <button className="btn btn-danger">Borrar</button>
        </li>
    )
}

TodoItem.propTypes = {
    desc: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
    desc: 'Unknown description'
};