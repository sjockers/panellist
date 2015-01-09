import React from 'react';

export default React.createClass({displayName: 'Slide',
  render() {
    return (
      <div className="slide">
        <h2>
          {this.props.foo}
        </h2>
        {this.props.children}
      </div>
    );
  }
});