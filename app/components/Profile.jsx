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

    this.notes = list;
    this.bios = { name: 'Richard Hess' };
    this.repos = [ 1,2,3,4,5 ];
  }

  componentDidMount() {
    // hooks to bind go here
    console.log('-- componentDidMount:  Profile')
  }

  componentWillUnmount() {
    // hooks to unbind go here
  }

  render() {
    return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile username={this.props.params.username} bios={this.bios} />
      </div>
      <div className="col-md-4">
        <Repos username={this.props.params.username} repos={this.repos} />
      </div>
      <div className="col-md-4">
        <Notes username={this.props.params.username} notes={this.notes} />
      </div>
    </div>
    );
  }
}

export default Profile;
