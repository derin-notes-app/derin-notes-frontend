import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notes from '../components/notes/Note';
import { connect } from 'react-redux';
import { NoteForm } from '../components/forms/NoteForm';
import { fetchNote, createNote } from '../actions/noteAction';
import { getNotesList } from '../selectors/noteSelector';

class NotesContainer extends Component { 
  static propTypes = { 
    notes: PropTypes.array,
    fetch: PropTypes.func,
    createNote: PropTypes.func
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { notes, createNote } = this.props;
    return (
    <>
      <NoteForm createNote={createNote} />
      <Notes notes={notes} />
    </>
    );
  }
}

const mapStateToProps = state => ({
  notes: getNotesList(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchNote());
  },
  createNote(note) {
    dispatch(createNote(note));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesContainer);
