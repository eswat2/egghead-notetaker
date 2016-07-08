import React from 'react';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';
import getGithubInfo from '../utils/helpers.jsx';

import Rebase from 're-base';

const base = Rebase.createClass('https://egghead-note-taker.firebaseio.com');

class Profile extends React.Component {

  constructor(props) {
    super(props);

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

    // this.unbind('notes');
    base.removeBinding(this.ref);
    this.init(nextProps.params.username);
  }

  _init(username) {
    this.ref = base.bindToState(`notes/${username}`, {
      context: this,
      asArray: true,
      state: 'notes'
    })

    getGithubInfo(username)
      .then((data) => {
        console.log('-- response');
        console.log(data);
        this.setState({
          bios: data.bios,
          repos: data.repos
        })
      });
  }

  componentWillUnmount() {
    // hooks to unbind go here
    base.removeBinding(this.ref);
  }

  _handleAddNote(newNote) {
    // update firebase with the new notes
    base.post(`notes/${this.props.params.username}`, {
      data: [ ...this.state.notes, newNote ]
    });
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

export default Profile;
