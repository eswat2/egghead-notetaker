import React from 'react';

class Repos extends React.Component {
  render() {
    console.log(`-- Repos:  ${this.props.repos}`);
    return (
      <div>
        <p>REPOSSS</p>
      </div>
    )
  }
}

Repos.propTypes = {
 username: React.PropTypes.string.isRequired,
 repos: React.PropTypes.array.isRequired
};

export default Repos;
