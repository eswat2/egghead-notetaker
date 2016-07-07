import React from 'react';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h3>User Profile</h3>
        {this.props.bios.avatar_url && <li className="list-group-item"> <img src={this.props.bios.avatar_url} className="img-rounded img-responsive"/></li>}
        {this.props.bios.name && <li className="list-group-item">Name: {this.props.bios.name}</li>}
        {this.props.bios.login && <li className="list-group-item">Username: {this.props.bios.login}</li>}
        {this.props.bios.email && <li className="list-group-item">Email: {this.props.bios.email}</li>}
        {this.props.bios.location && <li className="list-group-item">Location: {this.props.bios.location}</li>}
        {this.props.bios.company && <li className="list-group-item">Company: {this.props.bios.company}</li>}
        {this.props.bios.followers && <li className="list-group-item">Followers: {this.props.bios.followers}</li>}
        {this.props.bios.following && <li className="list-group-item">Following: {this.props.bios.following}</li>}
        {this.props.bios.public_repos && <li className="list-group-item">Public Repos: {this.props.bios.public_repos}</li>}
        {this.props.bios.blog && <li className="list-group-item">Blog: <a href={this.props.bios.blog}> {this.props.bios.blog}</a></li>}
      </div>
    )
  }
}

UserProfile.propTypes = {
 username: React.PropTypes.string.isRequired,
 bios: React.PropTypes.object.isRequired
};

export default UserProfile;
