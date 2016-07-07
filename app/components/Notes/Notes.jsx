import React from 'react';
import NotesList from './NotesList.jsx';

class Notes extends React.Component {
  render() {
    console.log(`-- Notes:  ${this.props.notes}`)
    return (
      <div>
        <h3>Notes for {this.props.username} </h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
}

export default Notes;
