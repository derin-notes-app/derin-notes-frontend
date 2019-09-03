import { getNotes, postNote } from '../services/notesApi';

export const FETCH_NOTES = 'FETCH_NOTES';
export const fetchNotes = () => ({
  type: FETCH_NOTES,
  payload: getNotes()
});

export const CREATE_NOTE = 'CREATE_NOTE';
export const createNote = note => {
  return { type: CREATE_NOTE, payload: postNote(note) };
};
