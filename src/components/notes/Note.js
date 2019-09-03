import React from 'react';
import PropTypes from 'prop-types';

export default function Note({ note }) {
  return (
    <li>
      <p>{note._id}</p>
      <p>{note.title}</p>
      <p>{note.body}</p>
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
}; 
