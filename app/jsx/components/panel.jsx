const React = require('react');

export default React.createClass({displayName: 'Panel',
  render() {
    return (
      React.createElement('div', {className: 'panel'},
        'Hello, world! I am a Panel. I am a Panel.'
      )
    );
  }
});