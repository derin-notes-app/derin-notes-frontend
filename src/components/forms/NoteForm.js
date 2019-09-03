import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class NoteForm extends Component {
  static propTypes = {
    createNote: PropTypes.func.isRequired
  };

  state = {
    _id: '',
    title: '',
    body: ''
  };

  handlechange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createNote(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input title="title" placeholder="Title" required onChange={this.handleChange}></input>
        <input body="body" placeholder="Body" required onChange={this.handleChange}></input>
      </form>
    );
  }
}

