import React, { PropTypes } from 'react';
import Note from './Note';

const NoteList = ({ notes, onNoteClick, noteIsSelected }) => {
  if (noteIsSelected) {
      return <div></div>;
  }

  return (
      <ul>
          {notes.map((note, index) =>
              <Note
                key={index}
                {...note}
                onClick={() => onNoteClick(index)}
              />
          )}
      </ul>
  );
};

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onNoteClick: PropTypes.func.isRequired,
    noteIsSelected: PropTypes.bool.isRequired
};

export default NoteList;
