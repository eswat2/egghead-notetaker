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

export default Repos;
