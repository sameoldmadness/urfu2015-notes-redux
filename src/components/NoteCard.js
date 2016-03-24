import React, { PropTypes } from 'react';

const noteStyle = {
    marginTop: 30
};

const nameStyle = {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: 700,
    textTransform: 'capitalize'
};

const textStyle = {
    marginBottom: 20,
    fontSize: 17
};

const NoteCard = ({ note, onBackClick }) => {
    if (!note) {
      return <div></div>;
    }

    return (
      <div style={noteStyle} className="note">
          <a onClick={onBackClick} href="#">← К списку заметок</a>
          <div style={nameStyle} className="note__name">{note.name}</div>
          <div style={textStyle} className="note__text">{note.text}</div>
      </div>
    );
};

NoteCard.propTypes = {
    note: PropTypes.shape({
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }),
    onBackClick: PropTypes.func.isRequired
};

export default NoteCard;
