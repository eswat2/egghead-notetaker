import React from 'react';

class SearchGithub extends React.Component {
  constructor(props, context) {
    super(props);
    this.input = null;

    console.log(context);

    this.getRef = (ref) => this._getRef(ref);
    this.handleSubmit = () => this._handleSubmit();
  }

  _getRef(ref) {
    this.input = ref;
  }

  _handleSubmit() {
    var user = this.input.value;
    this.input.value = '';
    this.context.router.push(`/profile/${user}`);
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={this.getRef} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">
              Search Github
            </button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SearchGithub;
