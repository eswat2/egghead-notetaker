import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import helpers from '../utils/helpers.jsx';

import db from '../utils/firebase.jsx';
import reactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';

class Profile extends React.Component {

  constructor() {
    super();

    this.state = {
      notes: [],
      bios: {},
      repos: []
    };

    this.handleAddNote = (newNote) => this._handleAddNote(newNote);
    this.init = (username) => this._init(username);
  }

  componentDidMount() {
    // hooks to bind go here
    console.log('-- componentDidMount:  Profile');
    this.init(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    console.log('-- nextProps:')
    console.log(nextProps);

    this.unbind('notes');
    this.init(nextProps.params.username);
  }

  _init(username) {
    let userRef = db.notesRef.child(username);
    this.bindAsArray(userRef, 'notes');

    helpers.getGithubInfo(username)
      .then((data) => {
        console.log('-- response');
        console.log(data);
        console.log(this);
        this.setState({
          bios: data.bios,
          repos: data.repos
        })
      });
  }

  componentWillUnmount() {
    // hooks to unbind go here
    this.unbind('notes');
  }

  _handleAddNote(newNote) {
    // update firebase with the new notes
    // let list = [ ...this.state.notes, { value:newNote } ];
    // this.setState({notes:list});
    let userRef = db.notesRef.child(this.props.params.username);
    userRef.push(newNote);
  }

  render() {
    return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile username={this.props.params.username} bios={this.state.bios} />
      </div>
      <div className="col-md-4">
        <Repos username={this.props.params.username} repos={this.state.repos} />
      </div>
      <div className="col-md-4">
        <Notes
          username={this.props.params.username}
          notes={this.state.notes}
          addNote={this.handleAddNote}
          />
      </div>
    </div>
    );
  }
}

reactMixin(Profile.prototype, ReactFireMixin);

export default Profile;
