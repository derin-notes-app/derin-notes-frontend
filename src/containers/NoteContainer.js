import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from '../components/notes/Notes';
import { connect } from 'react-redux';
import { NoteForm } from '../components/forms/NoteForm';
import { fetchNotes, createNote, deleteNote } from '../actions/noteAction';
import { getNotesList } from '../selectors/noteSelector';

class NotesContainer extends Component { 
  static propTypes = { 
    notes: PropTypes.array,
    fetch: PropTypes.func,
    createNote: PropTypes.func,
    removeNote: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, createNote, removeNote } = this.props;
    return (
    <>
      <NoteForm createNote={createNote} />
      <Notes notes={notes} removeNote={removeNote} />
    </>
    );
  }
}

const mapStateToProps = state => ({
  notes: getNotesList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNotes());
  },
  createNote(note) {
    dispatch(createNote(note));
  },
  removeNote(id) {
    dispatch(deleteNote(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesContainer);
