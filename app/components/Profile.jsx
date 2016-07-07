import React from 'react';
import Router from 'react-router';
import Repos from './Github/Repos.jsx';
import UserProfile from './Github/UserProfile.jsx';
import Notes from './Notes/Notes.jsx';

class Profile extends React.Component {

  constructor() {
    super();

    let list = [];
    list.push({value:'awesome'});
    list.push({value:'foobar'});
    list.push({value:'another'});
    list.push({value:'ratrod'});

    const notes = list;
    const bios = { name: 'Richard Hess' };
    const repos = [ 1,2,3,4,5 ];

    this.state = {
      notes: notes,
      bios: bios,
      repos: repos
    };
  }

  componentDidMount() {
    // hooks to bind go here
    console.log('-- componentDidMount:  Profile')
  }

  componentWillUnmount() {
    // hooks to unbind go here
  }

  handleAddNote(newNote) {
    // update firebase with the new notes
    let list = [ ...this.state.notes, { value:newNote } ];
    this.setState({notes:list});
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
          addNote={this.handleAddNote.bind(this)}
          />
      </div>
    </div>
    );
  }
}

export default Profile;
