import View from 'ampersand-view';
import Panel from './panel.js';

const Slide = View.extend({
  template: '<div>SLIDE<ul></ul></div>',
  
  render(opts) {
    this.renderWithTemplate(this);
    this.renderCollection(this.model.panels, (options) => {
      return new Panel(options);
    }, this.el.querySelector('ul'), opts);
    return this;
  }
});

export default Slide;