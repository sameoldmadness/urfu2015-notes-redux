import React, { PropTypes } from 'react';

const noteStyle = {
    fontSize: 26
};

const Note = ({ onClick, name }) => (
    <li style={noteStyle}>
        <a href="#" onClick={onClick}>{name}</a>
    </li>
);

Note.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

export default Note;
