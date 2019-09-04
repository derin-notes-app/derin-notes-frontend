import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

export default function Notes({ notes, removeNote }) {
  const notesArray = notes.map((note, i) => {
    return <Note key={i} removeNote={removeNote} note={note} />;
  });

  return (
    <ul>
      {notesArray}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
  removeNote: PropTypes.func.isRequired
};

