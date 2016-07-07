import React from 'react';

class Repos extends React.Component {
  render() {
    return (
      <div>
        <p>REPOSSS</p>
        <p>{this.props.repos}</p>
      </div>
    )
  }
}

Repos.propTypes = {
 username: React.PropTypes.string.isRequired,
 repos: React.PropTypes.array.isRequired
};

export default Repos;
