import React from 'react';

class UserProfile extends React.Component {
  render() {
    console.log(`-- UserProfile:  ${this.props.bios}`)
    return (
      <div>
        <p>USER PROFILE</p>
        <p>Username: {this.props.username}</p>
        <p>Bio: {this.props.bios.name}</p>
      </div>
    )
  }
}

UserProfile.propTypes = {
 username: React.PropTypes.string.isRequired,
 bios: React.PropTypes.object.isRequired
};

export default UserProfile;
