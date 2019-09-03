import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

export default function Notes({ notes }) {
  const notesArray = notes.map((note, i) => {
    return <Note key={i} note={note} />;
  });

  return (
    <ul>
      {notesArray}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
};

