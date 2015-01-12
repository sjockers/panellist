import View from 'ampersand-view';

const Panel = View.extend({
  template: function (context) {
    return [
      '<li class="slide" style="background:' + context.model.background + '">',
      '  <span >PANEL</span>',
      '</li>'
    ].join('\n');
  }
});

export default Panel;