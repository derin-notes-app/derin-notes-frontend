import { getNotes, postNote, removeNote } from '../services/notesApi';

export const FETCH_NOTES = 'FETCH_NOTES';
export const fetchNotes = () => ({
  type: FETCH_NOTES,
  payload: getNotes()
});

export const CREATE_NOTE = 'CREATE_NOTE';
export const createNote = note => {
  return { type: CREATE_NOTE, payload: postNote(note) };
};

export const DELETE_NOTE = 'DELETE_NOTE';
export const deleteNote = note => {
  return { type: DELETE_NOTE, payload: removeNote(note) };
};
