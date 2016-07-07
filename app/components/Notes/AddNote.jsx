import React from 'react';

class AddNote extends React.Component {
  constructor() {
    super();
    this.input = null;
  }

  setRef(ref) {
    this.input = ref;
  }

  handleSubmit() {
    let newNote = this.input.value;
    this.input.value = '';
    this.props.addNote(newNote);
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder=""
          ref={this.setRef.bind(this)}
          />
        <span className="input-group-btn">
          <button
            className="btn btn-default"
            type="button"
            onClick={this.handleSubmit.bind(this)}
            >
            Submit
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
 username: React.PropTypes.string.isRequired,
 addNote: React.PropTypes.func.isRequired
};

export default AddNote;
