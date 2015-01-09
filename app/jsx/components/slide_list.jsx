import React from 'react';
import Slide from './slide.jsx';

export default React.createClass({displayName: 'SlideList',
  render() {
    var commentNodes = this.props.data.map(function(panelItem) {
      return (
        <Slide foo={panelItem.foo}>
          {panelItem.bar}
        </Slide>
      );
    });

    return (
      <ul className="slideList">
        {commentNodes}
      </ul>
    );
  }
});